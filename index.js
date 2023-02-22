// Declare node modules
const inquirer = require('inquirer');
const fs = require('fs')
const util = require('util');
const {generateMarkdown} = require('./utils/generateMarkdown');

const fileName1 = 'samples/README.md';

const writeFileAsync = util.promisify(fs.writeFile)

// List all the questions for the user
const showUserPrompts = () => {
    inquirer.prompt([
        {
            name: "Title",
            message: "Please enter the title of your project.",
            type:"input",
        },{
            name: "Description",
            message: "Provide a brief description of the project.",
            type:"input",
            
        },{
            name: "Installation",
            message: "Provide installation instructions on how the application can be installed",
            type:"input",
            
        },{
            name: "Usage",
            message: "Provide details on how to use the applicaiton.",
            type:"input",
        },{
            name: "Contributing",
            message: "Provide instructions for people to contribute to the project.",
            type:"input",
        },{
            name: "Tests",
            message: "Provide instructions for testing the application",
            type:"input",
        },{
          message: "Select the license for this project from the below list",
          name: "License",
          choices: [
              "Apache 2.0 License [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", 
              "BSD 3-Clause License [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)", 
              "GNU GPL v3 [![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", 
              "The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
              "Mozilla Public License 2.0 [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)" , 
              "None"],
          type:"list",     
      },{
            name: "GithubId",
            message: "Please enter your github username.",
            type:"input",
        },
        {
            name: 'Email',
            message: 'Please enter your Email address.',
            type:"input",
        }
    ]).then(responses => {
        writeToFile(responses)
        console.log('Successfully generated to README.md in the samples directory')
    }).catch((err) => console.error(err));

};

const writeToFile = responses => {
    writeFileAsync(fileName1, generateMarkdown(responses))
}

// Prompt questions to user
showUserPrompts();


