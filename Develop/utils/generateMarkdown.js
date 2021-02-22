// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   const link = 'https://opensource.org/licenses/'+ ${license};
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # **${answers.title}**

  ${answers.badge}

  ## Description

  ${answers.description}

  ## Table of contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Test](#Test)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub) 

  ## Installation
   ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Licence
  This project is licensed under the ${answers.licence} 
  
  ## Contributing
  ${answers.contributing}


  ## GitHub
  http://github.com/${answers.username}
  - [GitHub Profile](http://github.com/${answers.username})

  
  ## Reach Me 
  ${answers.email}
`;
}

module.exports = generateMarkdown;
