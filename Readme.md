# Team Roster Generator CLI APP
CLI Application that allows user input of employees to create a webpage with a team roster

# ![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)

## Youtube Tutorial Video Link
[![Watch the video](https://raw.githubusercontent.com/vanessabau/team-builder/master/Screen%20Shot%202020-06-12%20at%203.38.14%20PM.png)](https://youtu.be/bwXCENm1E8g)


## Table of Contents

1. [Overview/Process](###Overview/Process)
2. [Installation](###Installation)
3. [Useage](###Useage)
4. [Licensing](###Licensing)
5. [Contributors](###Contributors)
6. [Tests](###Testing)
7. [Questions](###Questions)

## Content

### Overview/Process
This application combines steps of receiving user data and dynamically generating html pages from the user data. The project included existing tests and html templates. First, I created JavaScript to pass the existing tests in the form of constructor functions. Next, I created an interactive series of questions using the inquirer module. I created independent functions for various steps of the program for clarity and called the functions in my inquirer statements. Finally I made a few alterations to the given html templates and html generator file to improve the format of the dynamically generated elements. 

### Installation
To use, run 'npm install' in the command line to install dependencies.

## Useage
Run 'node app' in the CLI and follow the prompts to enter in data for the Manager, Engineers, and Interns, there is an option to select when all team members have been added.

### Licensing
None

### Contributors
Ivan Popov (my tutor), TA's Justin Singh, and Zac Warner, and Bootcamp Instructor Marcelo Gachet helped trouble shoot, most notably with a few flexbox and formatting details.

### Testing
This app has built in testing found in the 'test' folder and was created with TDD. All tests pass. 

### Questions
There are intricacies of dynamically generated html especially in regards to formatting, that were challenging and make me have further questions about how to better manipulate elements when generating them dynamically. 