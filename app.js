const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const axios = require("axios");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];


// Write code to use inquirer to gather information about the development team members,
//and to create objects for each team member (using the correct classes as blueprints!)

//Function to add team member
function addTeam() {
    inquirer
    .prompt([
        {
            type: "list",
            name: "nextEmployee",
            message: "Which type of employee would you like to add?",
            choices: ["Engineer", "Intern", "None, all done adding employees"]
        }
    ]).then(function(response){
        if(response.nextEmployee==="Engineer"){
            addEngineer();
        }
        else if(response.nextEmployee==="Intern"){
            addIntern();
        }else{
            console.log("This is your Team: ");
            console.log(team);
            let html = render(team);
            fs.writeFile("teamRoster.html", html, function(err){
                if(err){
                    throw err;
                }else{
                    console.log("Team Roster successfully written");
                }
            })
            
        }
    });    
}

//Function to add Engineer
function addEngineer(){
    inquirer
        .prompt([
            {
                name: "name", 
                message: "Enter Engineer Name: ",
                default: "Pam Beesly"
            },
            {
                name: "id",
                message: "Enter Engineer ID: ",
                default: "2"
            },
            {
                name: "email",
                message: "Enter Engineer email: ",
                default: "pam@dundermifflin.com"
            },
            {
                name: "github",
                message: "Enter Engineer Github: ",
                default: "github/pambeezly"
            },
        ]).then(function(res){
            team.push(new Engineer(res.name, res.id, res.email, res.github));
            console.log(res);
            console.log(team);
            addTeam();
        })
}

//Function to add Intern
function addIntern(){
    inquirer
    .prompt([
        {
            name: "name", 
            message: "Enter Intern Name: ",
            default: "Max Carver"
        },
        {
            name: "id",
            message: "Enter Intern ID: ",
            default: "3"
        },
        {
            name: "email",
            message: "Enter Intern email: ",
            default: "max@dundermifflin.com"
        },
        {
            name: "school",
            message: "Enter Intern School: ",
            default: "CSUS"
        },
    ]).then(function(res){
        team.push(new Intern(res.name, res.id, res.email, res.school));
        console.log(res);
        console.log(team);
        addTeam();
    });
}

//Prompt User to input Team Members
inquirer
    .prompt([
        {
            name: "name", 
            message: "Enter the name of your Team Manager: ",
            default: "Michael Scott"
        },
        {
            name: "id",
            message: "Enter Manager ID: ",
            default: "1"
        },
        {
            name: "email",
            message: "Enter Manager email: ",
            default: "michael@dundermifflan.com"
        },
        {
            name: "officeNumber",
            message: "Enter Manager office number: ",
            default: "1-800-buy-paper"
        }, 

    ]).then(function(res){
        team.push(new Manager(res.name, res.id, res.email, res.officeNumber));
        addTeam();
    });
       
    
    

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
