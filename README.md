## Installation and execution 

### Using Node
I recommend the installation of node 14.19.1. After node is installed, run the following commands:

* npm i
* npm run cypress:all

## Decisions Taken

### Using Cypress

There was not a really big choice for this point, it was either between Selenium or Cypress. 
Since I had this opportunity to improve my skillset in Cypress I decided to go with it.

### Using Typescript

The reason why I used Typescript is due to the fact I am very used to working with it. 
I could've gone with Javascript as well but I prefer Typescript over Javascript since besides being more readable and maintainable I can also strongly type everything. 

### Using Page Object Pattern

This common design pattern is widely used in a standardized way. 
I have decided to use it here since it provides the following positive points:
* Ease of code maintenance
* Code Reusability across tests
* Enhanced script readability and reliability
* Decouples the test code and page-specific code, such as locators and interactions

### Using Constants File

A constants file is a practical way of storing and managing constant values that are used in your application. 
Centralizing these values in a single location, allows you to easily maintain and update them, leading to cleaner, simpler and more maintainable code. 