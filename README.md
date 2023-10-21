# Web-scraper-API
Using this api you can extract any website's data, like image src, title,text,description ,table content etc.

## Description:
- Using this api you can scrap different elements of a website.
- you can also scrap all html of a website.

## Technology used:
- express
- request
- cheerio

## Installation:
- clone this repository in your local directory.
- open terminal in that directory and run command `npm i`. all the depedencies will be downloaded,
- your system should have Postman or Thunderclient for making http post request.

## How to use:
- Open terminal and run command `node index.js`.
- Or `nodemon index.js` ,in the case of nodemon installed.
- Once server is running open postman or thunderclient, and make post request with url `http://localhost:5000/images`
- while making post request in the body give link of website in json format `{"url":"website link"}`

## Routes:
- Use different routes for different types of data.
- images-> for image
- links-> for links
- title-> for title
- description-> for description
- paragraph-> for paragraphs
- keywords-> for keywords

## i have also published web scrapping package on npm you can install it by `npm i web_scrap`.
npm link[https://www.npmjs.com/package/web_scrap].
