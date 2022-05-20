# aboutme

## Overview
_aboutme_ is a micro landing page creator focused on personal profiles. Users can give personal information like contact info, social media and/or a small self description. It can be thought as a virtual "personal" business card.
This project was thought to emulate the basic functions of [linktree](https://linktr.ee/), which is also a service of micro landing page.
Also, it is just a mock project for my personal portifolio. So you can clone it and use it as you like. Contact me if you have any issues or questions about it.

## Description
In this application the user will register with a valid email, name and password.
When sucessfully registered the user can do the following:

* Upload a profile picture;
* Add information about a social network;
* Add contact information;
* Add a self-description;
* Edit or delete all profile's information.

The personal profile will be visible to anyone accessing the /username endpoint at the website, but only the logged and owner user will be able to edit the displayed information.
Social media, contact and description are sections in the profile. Everytime the user add new information he adds another section to the profile.
If the user decides to end his account, all the information will be deleted from database.

## Technologies
* [expressjs](https://expressjs.com/): backend;
* [ejs](https://ejs.co/): template rendering;
* [mongodb](https://www.mongodb.com/): database;

### Development dependencies
* [nodemon](https://nodemon.io/): web server that restarts automatically when any project file is changed;