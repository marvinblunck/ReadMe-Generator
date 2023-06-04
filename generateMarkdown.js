// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
## Description
${data.describe}
## Table of Contents
1. [Install](#install)
2. [Usage](#usage)
3. [Contribution](#contribution)
4. [Test Instructions](#testInstructions)
5. [GitHub Username](#gitHubUsername)
6. [Email](#email)
7. [License](#license)
## install
${data.install}
## usage
${data.usage}
## contribution
${data.contribution}
## testInstructions
${data.testInstructions}
## gitHubUsername
${data.gitHubUsername}
## email
${data.Email}
## license
${data.license}
`;
}

module.exports = generateMarkdown;
