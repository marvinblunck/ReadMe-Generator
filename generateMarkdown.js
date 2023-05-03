// TODO: Create a function that returns a license badge based on which license is passed in

const { describe } = require("node:test");

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
## Description
${data.describe}
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
## Email
${data.Email}
`;
}

module.exports = generateMarkdown;
