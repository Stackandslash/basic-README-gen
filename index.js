const axios = require("axios");
const inquirer = require("inquirer");

const questions = [
    {
        name: "GitHubName",
        message: "Enter your GitHub Username"
    }
];

function writeToFile(fileName, data) {
}

function init() {
    questionAsk();
}

init();

function questionAsk(){
    for (let i = 0; i < questions.length; i++) {
        inquirer.prompt(questions[i]);
    }

}