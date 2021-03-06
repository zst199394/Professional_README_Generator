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
 ${answers.licence} 
  
  ## Contributing
  [![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/Naereen/)
  [![ForTheBadge uses-js](http://ForTheBadge.com/images/badges/uses-js.svg)](http://ForTheBadge.com)  
     ${answers.contributing}


  ## GitHub
  My Github Username : ${answers.username}
  - [GitHub Profile](http://github.com/${answers.username})

  
  ## Reach Me 
  My email : ${answers.email}
  - [Email address](${answers.email})
`;
}

module.exports = generateMarkdown;
