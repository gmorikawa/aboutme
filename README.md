# aboutme

## Overview
_aboutme_ is a micro landing page creator focused on personal profiles. Users can give personal information like contact info, social media and/or a small self description. It can be thought as a virtual "personal" business card.
This project was thought to emulate the basic functions of [linktree](https://linktr.ee/), which is also a service of micro landing page.
Also, it is just a mock project for my personal portifolio. So you can clone it and use it as you like. Contact me if you have any issues or questions about it.

## Description
A _user_ can create an account providing a valid email address and a unique username. Also a password need to be created in order to authenticate the user in the system. Only logged users can edit it's own information.
Once the account is created the following data can be inserted into the system:

- name, that will be shown on profile page (optional, if not informed username will be shown instead);
- username, that will be used as login information and for other people access the public profile page of that user;
- email, necessary to verify account and recover password in case user forgot the password;
- passsword, to login;
- bio: a optional field, self short biography with a limited number of characters (limit yet not defined);
- profile picture: a photo to be shown in profile;
- sections: this will be a list of information that the user can add in the page connecting to other webpages, social media, email, etc; for each one of these a new section will be created.

In his own page the user can edit each one of these information. The username and email can be edited as well as long as no other user share the same information.
The personal profile will be visible to anyone accessing the /username endpoint at the website, but only the logged and owner user will be able to edit the displayed information.
If the user decides to end his account, all the information will be deleted from database.

Then, a _user_ will be able to perform the following actions:

- Create an account providing email, username and password;
- Login in the system;
- Upload a profile picture;
- Add name, biography;
- Edit all the information about the user;
- Add, modify or delete all the sections;
- Delete the profile;

Someone who is not a _user_ is considered a _guest_. A guest can only see profiles, but are unable to edit any information.

### Site navigation
```
Home Page
|-- Register new user
|-- Login
|   |-- Settings
|   |-- Edit Information
|-- User profile
|   |-- Unknown profile
|-- 404 error page
```

## Technologies
* [expressjs](https://expressjs.com/): backend;
* [ejs](https://ejs.co/): template rendering;
* [mongodb](https://www.mongodb.com/): database;

### Development dependencies
* [nodemon](https://nodemon.io/): web server that restarts automatically when any project file is changed;

## Issues
I had an problem while trying to run mongodb service on linux.
The service could not be started. The reason was that some configuration files that are used by mongodb hadn't the right permissions.
As a result, mongodb couldn't access the configuration files leading to a failure in starting the service.
https://askubuntu.com/questions/823288/mongodb-loads-but-breaks-returning-status-14
https://hevodata.com/blog/install-mongodb-on-ubuntu/

mongo -u admin -p admin --authenticationDatabase admin
