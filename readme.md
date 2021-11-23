# Imperial InterviewTest v1.0.0


## Synopsis

This is a standard College page which displays a growing list of podcasts which can be filtered and sorted.

Podcast cards display key relavant information such as thumbsnail, title, overview, date, duration and/or speakers. 

### Focus

* The page should be as easy to use as possible
* The page should have correct and consistent branding
* The page should be as fast as possible in both load time and normal usage

## Structure

.
+-- .eslintrc.json - linting rules for JavaScript
+-- css
|   +-- screen.css - main compiled CSS for application
+-- Gruntfile.js - task-runner configuration for compilation
+-- img - public images for page
+-- index.html - main HTML page
+-- InterviewTest.sublime-project - Sublime project file
+-- js
|   +-- lib
|   |   +-- vendor - vendor code used in application
|   +-- src
|   |   +-- script.js - JavaScript module for application
|   +-- script.js - main compiled JavaScript for application
+-- package.json - npm package identification
+-- readme.md - this file
+-- resources
|   +-- Guidelines - College house-style and logo usage guidelines
|   +-- Images - Some College stock images which can be used
+-- sass-lint.yml - linting rules for SCSS
+-- scss
|   +-- Includes - global includes for SCSS
|   +-- Partials - elements or other specific SCSS styles
|   +-- screen.scss - main styles for screens

## Requirements

### Linting

This is provided by [ESLint](http://eslint.org/) and [Sass-lint](https://www.npmjs.com/package/sass-lint). Standard College development rules are set.

### Task running

This is provided by [Grunt](https://gruntjs.com/).

#### Compile

    grunt

#### Compile when files are changed

    grunt watch

### Package management

Development package management is provided by [npm](https://www.npmjs.com/). Compiled vendor code management is provided by [bower](https://bower.io/).

## Questions

Lea Yurkovetskaya - l.yurkovetskaya@imperial.ac.uk


"# iCollege" 
