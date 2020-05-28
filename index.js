const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
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

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {

        if (err) {
          return console.log(err);
        }
        console.log("Wow! It's Made!");
      });
}

function init() {
    questionAsk();
}

init();

function questionAsk(){
    inquirer.prompt(questions).then((answers) => {
        const {githubname, title, description, install, usage, license, contributing, tests} = answers;
        console.log(githubname);
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

* Github Profile Pic
* Github email`;
        writeToFile("./assets/README.md", markdown);
    });
}