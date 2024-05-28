# Dantean's Book Fetcher

## What is it?

An interactive web application developed using the MERN stack with the purpose of helping you find books and save them to a collection. Dante was a poet, so it's sort of like Dante's search engine? But not really.

![Example 1](/assets/ss1.png)
![Example 2](/assets/ss2.png)



### Use the application with the live link 

https://book-fetcher.onrender.com

[![Deployed via Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)](https://book-fetcher.onrender.com) ![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)


### To Install Locally

#### ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
- Clone the repo from [Github](http://www.github.com/dantean/book-fetcher)
- Enter `npm install` in the terminal to install all necessary packages
- Enter `npm run develop` in the terminal

## Usage

- Use the navigation links to create/login to an account, or logout if you are already logged in
- Type a book name or keywords into the search bar and press `enter` on your keyboard or press the `Submit Search` button to search for books
- Press the `Save this Book` button on a given book to save it to your profile (must be logged into an account)
- Press `See Your Books` to view a list of all books you've saved
- Press `Delete this book!` on a book you wish to remove from your list
- Pressing `Search For Books` returns you to the search page
-  Smile 😺

## Acceptance Criteria

<div style="overflow-y: scroll; height: 200px; border: 1px solid #ccc; 
padding: 10px;">

- GIVEN a book search engine
- WHEN I load the search engine
- THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button ✅
- WHEN I click on the Search for Books menu option
- THEN I am presented with an input field to search for books and a submit button✅ 
- WHEN I am not logged in and enter a search term in the input field and click the submit button
- THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site ✅ 
- WHEN I click on the Login/Signup menu option
- THEN a modal appears on the screen with a toggle between the option to log in or sign up ✅ 
- WHEN the toggle is set to Signup
- THEN I am presented with three inputs for a username, an email address, and a password, and a signup button ✅ 
- WHEN the toggle is set to Login
- THEN I am presented with two inputs for an email address and a password and login button ✅ 
- WHEN I enter a valid email address and create a password and click on the signup button
- WHEN my user account is created and I am logged in to the site ✅ 
- WHEN I enter my account’s email address and password and click on the login button
- THEN I the modal closes and I am logged in to the site ✅ 
- WHEN I am logged in to the site
- THEN the menu options change to Search for Books, an option to see my saved books, and Logout ✅ 
- WHEN I am logged in and enter a search term in the input field and click the submit button
- THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account ✅ 
- WHEN I click on the Save button on a book
- THEN that book’s information is saved to my account ✅ 
- WHEN I click on the option to see my saved books
- THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account ✅ 
- WHEN I click on the Remove button on a book
- THEN that book is deleted from my saved books list ✅ 
- WHEN I click on the Logout button
- THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  ✅ 
</div>



## About The Creator

My name's Joseph. If I'm not writing code, taking pictures, or fixing computers, then I'm probably practicing Tai Chi ☯️

<a href="http://github.com/dantean">![Code I Write](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
</a> <a href="http://www.dantean.dev">🚧</a>

## Special Thanks 🙏
 
* Instructor Phil loy and tutors Juno Nguyen and Carlin Shaw all helped me tremendously in all stages of this project. I couldn't have done it without any of you! 
* ChatGPT for helping me find syntax errors and typos. The best replacement for Clippy I could ever ask for! 📎📎📎📎

![University of Miami](./assets/umlogo.png) ![edX](https://img.shields.io/badge/edX-%2302262B.svg?style=for-the-badge&logo=edX&logoColor=white)

## Created with

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)

## License

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE) 

<div style="overflow-y: scroll; height: 200px; border: 1px solid #ccc; 
padding: 10px;">
Copyright (c) 2024 Joseph Monticelli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:`

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</div>
