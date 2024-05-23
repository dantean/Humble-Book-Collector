const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express'); // Ensure this is correctly imported

const resolvers = {
  Query: {
    getSingleUser: async (parent, args, context) => {
      if (context.user) {
        const foundUser = await User.findOne({
          $or: [{ _id: context.user._id }, { username: context.user.username }],
        });

        if (!foundUser) {
          throw new AuthenticationError('User not found');
        }

        return foundUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });

      if (!user) {
        throw new AuthenticationError('Error creating user');
      }

      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
      }

      const token = signToken(user);
      return { token, user };
    },

    saveBook: async (parent, { bookId, authors, title, image, link }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: { bookId, authors, title, image, link } } },
          { new: true, runValidators: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    deleteBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
