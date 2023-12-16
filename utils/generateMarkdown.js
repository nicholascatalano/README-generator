// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  };
  if (license !== "No License") {
    return badge[license];
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache 2.0":
      return "https://www.apache.org/licenses/LICENSE-2.0";
    case "GNU GPLv3":
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    case "ISC":
      return "https://opensource.org/licenses/ISC";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `## ${renderLicenseBadge}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Image](#image)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Credits](#credits)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  Link to live website if applicable: ${data.urlLink}

  ## Usage
  ${data.usage}

  ${renderLicenseSection}

  ## Image
  ${data.image}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, please contact me using the following:
  - Github: ${data.username}
  - Email: ${data.email}

  ## Credits
  ${data.credits}
  `;
}

module.exports = generateMarkdown;
