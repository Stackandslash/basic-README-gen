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
        message: "Enter the repo name"
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

//You're an init function. You call questionAsk.
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

//The main function, which prompts questions and sets up the README text.
function questionAsk(){

    inquirer.prompt(questions).then((answers) => {
        const {githubname, title, description, install, usage, license, contributing, tests} = answers;
        let queryURL = `https://api.github.com/users/${githubname}?per_page=100`
        axios.get(queryURL).then(function(response){
            let imageURL = response.data.avatar_url;
            let email = response.data.email;

let markdown = `
# ${title}

## Description
${description}

## Table of Contents
#### [Installation](#installation)
#### [Usage](#usage)
#### [License](#license)
#### [Contributing](#contributing)
#### [Tests](#tests)
#### [Questions](#quesitons)

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
#### Email me at ${email}

![Avatar Image](${imageURL})

![GitHub repo size](https://img.shields.io/github/repo-size/${githubname}/${title})
`;
            writeToFile("./assets/README.md", markdown);
        });
    })
    }