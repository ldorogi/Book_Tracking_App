# Book Tracking App

Project 7 Front End Nanodegree Udacity

## Table of Contents

* [Project Overview](Project-Overview)
* [App Functionality](App-Functionality)
* [How To Run This App](How-To-Run-This-App)
* [Back End Server](Back-End-Server) 
* [Important Note about the back end server](Important-Note-about-the-back-end-server)


##Project Overview

A book tracking app built with React / Bookshelf app that allows you to select and categorise books you have read, are currently reading, or want to read.

##App Functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.

When a book is on a bookshelf, it should have the same state on both the main application page and the search page.

The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.

We are given a starter template If you choose to start with this template, your job will be to add interactivity to the app by refactoring the static code in this template.

##How To Run This App

Dependencies

npm
* Download or Clone this Repository(https://github.com/ldorogi/Book_Tracking_App.git).
* Run `$ npm install` to install the project dependencies.
* Run the app using `$ npm start`.

App can be seen at: localhost:3000.


##Backend Server

To simplify the development process, we are provided with a backend server to develop against. The provided file BooksAPI.js contains the methods you will need to perform necessary operations on the backend:

* getAll
* update
* search

##Important Note about the back end server

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in SEARCH_TERMS.md. That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


