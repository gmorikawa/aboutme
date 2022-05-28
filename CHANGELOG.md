# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.0.4] - 2022-05-27
### Changed
- __model/user.js__ using database.js functions;
### Added
- connection to mongodb service;
- __service/database.js__ for handling connection to mongodb;
- insert, read and delete operations on User's collection;

## [0.0.4] - 2022-05-27d
### Added
- serving static files through _public_ folder;

## [0.0.4] - 2022-05-25
### Changed
- changed _nickname_ to _username_;
- filter for locate user by username inside __model/user.js__
### Added
- login page;
- page navigation between home page to login, home page to register, and login to profile;
- basic authentication (bad authentication);
- password field for user model;

## [0.0.3] - 2022-05-24
### Changed
- functions __query__ and __save__ in model;
### Added
- not found page;
- profile page;

## [0.0.2] - 2022-05-23
### Changed
- get endpoints return mock user data;
### Added
- model __user.js__;
- __ejs__ support;
- partial ejs pages __head__ and __foot__;
- home page view;

## [0.0.1] - 2022-05-20
### Added
- __body-parser__ npm package;
- __ejs__ npm package;
- __express__ npm package;
- __mongodb__ npm package;
- __nodemon__ npm dev package;
- route files __profile.js__ and __user.js__;