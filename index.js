// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// needs license API and badge API
const inquirer = require("inquirer");
const fs = require("fs");

const generateREADME = ({project, description, installation, usage, license, contributions, tests, github, email}) => {
return `# ${project}
![License](https://img.shields.io/badge/License-${license}-blue)

## Description
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Contact](#contact)

## Installation
${installation}

## Usage
${usage}

## License
Refer to license in repo or as below:

${license} License

Copyright (c) 2022 ${github}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributions
${contributions}

## Tests
${tests}

## Contact
If you have any additional questions, feel free to reach out via one of the ways below:
- GitHub: [github.com/${github}](github.com/${github})
- Email: ${email}`
};

inquirer.prompt([
    {
        type: "input",
        message: "What is the name of this project?",
        name: "project"
    }, 
    {
        type: "input",
        message: "Please write a brief description of the project.",
        name: "description"
    },
    {
        type: "input",
        message: "Describe the installation process, if any.",
        name: "installation"
    },
    {
        type: "input",
        message: "Give a description on how to use this project.",
        name: "usage"
    },
    {
        type: "list",
        message: "Please select a license to apply.",
        name: "license",
        choices: [
            "Apache 2.0",
            "GNU General Public License v3.0",
            "MIT",
            "GPLv2",
            "Other"
        ]
    },
    {
        type: "input",
        message: "Please list any external sources that need to be credited.",
        name: "contributions"
    },
    {
        type: "input",
        message: "Any tests to elaborate on?",
        name: "tests"
    },
    {
        type: "input",
        message: "Please enter your github username.",
        name: "github"
    },
    {
        type: "input",
        message: "Please enter your email.",
        name: "email"
    },
])
.then((response) => {
    const readmePageContent = generateREADME(response);
    fs.writeFile('README.md', readmePageContent, (err) => 
    err ? console.log(error): console.log('Success!'));
})
