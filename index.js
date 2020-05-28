const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
let email = "";
let imageURL = ""
const questions = [
    {
        name: "githubname",
        message: "Enter your GitHub Username"
    },
    {
        name: "title",
        message: "Enter the title of your project"
    },
    {
        name: "description",
        message: "Enter a basic description of your project"
    },
    {
        name: "install",
        message: "Enter instructions to install your project"
    },
    {
        name: "usage",
        message: "Enter instructions to use your project"
    },
    {
        name: "license",
        message: "Enter licensing information for your project"
    },
    {
        name: "contributing",
        message: "Enter contribution credits for your project"
    },
    {
        name: "tests",
        message: "Enter tests for your project"
    },
];

//You call questionAsk
function init() {
    questionAsk();
}

init();

//The function which writes out the README.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        
        if (err) {
            return console.log(err);
        }
        console.log("Wow! It's Made!");
      });
}

//The function to get the API info from GitHub.
function getGithubInfo(username){
    let queryURL = `https://api.github.com/users/${username}?per_page=100`
    axios.get(queryURL).then(function(response) {
        email = response.email //This will be null for me.
        imageURL = response.avatar_url
      });
}

//The main function, which prompts questions and sets up the README text.
function questionAsk(){
    inquirer.prompt(questions).then((answers) => {
        const {githubname, title, description, install, usage, license, contributing, tests} = answers;
        getGithubInfo(githubname);
        let markdown = `
# ${title}
        
## Description
${description}
        
## Table of Contents
### Installation
### Usage
### License
### Contributing
### Tests
### Questions
        
## Installation
${install}
        
## Usage
${usage}
        
## License
${license}
        
## Contributing
${contributing}
        
## Tests
${tests}
        
### Questions
        
![Avatar Image](${imageURL})
${email}
![Badge?](./badgecap.PNG)
        `;
        writeToFile("./assets/README.md", markdown);
    });
}