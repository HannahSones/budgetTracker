# budgetTracker
A Budget Tracker application to allow for offline access and functionality.

## Table of contents
* [About](#about-the-project)
  * [Built using](#built-using)
* [Functionality](#functionality)
* [Installation](#installation)
* [Link to Application](#link-to-application)
* [Further Development](#further-development)
* [License](#license)

----------

## About the project
The Budget Tracker app allows users to add expenses and deposits to their budget with or without an internet connection using PWA functionality with a manifest and service worker file. When entering transactions offline, these will populate the total when the application is brought back online.


### Built using
* Node.js
* Express
* MongoDB
* Mongoose
* PWA

----------

## Functionality  
* A user can enter the name of the transaction such as bills, rent, night out, wages etc. as well as the amount and the select whether they are adding funds or subtracting them from the total amount.
* When online, the application will add or subtract the value from the total and depict this change on the graph.
* If the application is offline, the service worker will catch the error and store the request. Once the application comes back online, it will update with the request made.

-------------

## Installation
1. Clone the code from the GitHub repo
2. Open project directory, then npm install to install all required dependencies (express, Mongoose etc.)
3. Add your database name to a .env file to connect to using MongoDB
4. Enter $ node server to run the application

-------------
## Link to Application
[Live application deployed on Heroku](https://thawing-reaches-04479.herokuapp.com/)

-------------
## Further development
* I'd like to add a delete transaction button for improved functionality, so that a user can remove an entry if they have added it incorrectly.
* I'd like to update the CSS to improve the user interface of the app, making it more polished and user friendly.

------------
## License

Licensed under the [MIT License](https://choosealicense.com/licenses/mit/). A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.   
![MIT license](https://img.shields.io/badge/license-MIT-brightgreen)

-------------

Hannah Sones © 2020. All rights reserved.
