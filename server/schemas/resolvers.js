const { User, Thought } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
        getSingleUser: async ( parent, args, context) => {
        const foundUser = await User.findOne({
          $or: [{ _id: context.user._id}, { username: context.user.username }],
        });
    
        if (!foundUser) {
          throw AuthenticationError
        }
    
      return foundUser;
      },
      // add the saveBook and deleteBook mutations here later
  },

  Mutation: {

    async createUser( parent, {username, email, password}, context) {
      const user = await User.create({ username, email, password });
  
      if (!user) {
        throw AuthenticationError
      }
      const token = signToken(user);
      return { token, user };
    },


    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    // implement saveBook and deleteBook mutation
  },
  };

module.exports = resolvers;
