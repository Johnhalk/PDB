# Palindrome Database
[Introduction](#introduction) | [Technologies](#technologies) | [Installation](#installation) | [Working Overview](#screenshots) |

## Introduction
This is a web application built in Node and the Express framework.

## User stories:

```
As a user,
I want to be able to enter a valid palindrome (regardless of special characters),
and save it to a database.

As a user,
So I can see my valid palindromes entered,
I want to be able to view valid palindromes.

As a user,
So I can see the most recent palindromes,
I want to be able to see the last 10 palindromes entered in the last 10mins.
```

## Technologies:

This app is built with:
- Node
- Express
- MongoDB for Database
- HTML and CSS for styling.

Test with:

- Mocha
- Chai
- Zombie
- Sinon

## Installation

- clone this repository
- in project root directory run  ```npm install``` in the command line
- start server with ```nodemon``` in the command line
- Open ``` localhost:3000 ``` in the browser to view palindrome database 
- run tests with ```npm test``` in the command line

## Testing
![Imgur](https://imgur.com/esV7IDm.png)

## Screenshots
Has empty palindrome list if no palindromes received within last 10mins
![Imgur](https://imgur.com/owy40BA.png)

Clicking 'Create Palindrome' redirects user to create palindrome page.

![Imgur](https://imgur.com/fJJHuJ1.png)


Typing a valid palindrome allows user to click "Save" button to save to database.

![Imgur](https://imgur.com/UwCdlo5.png)

The newly saved palindrome will persist on the main page for 10mins

![Imgur](https://imgur.com/ZRkYur2.png)


You may store up to 10 valid palindromes on the main page, assuming all created within the last 10mins.

![Imgur](https://imgur.com/IAFbdLG.png)

This is achieved via the palindrome controller list method.  Passing a database query set that restrains time within the last 10mins as well as sending through the last 10 database entries.

![Imgur](https://imgur.com/zwDMmaj.png)

It will not allow non-palindrome words or phrases to be passed through. The save button will not render if not a palindrome.

![Imgur](https://imgur.com/NY1EZIC.png)

This is achieved via the script within the create.ejs view.

![Imgur](https://imgur.com/M4ZnWcm.png)
