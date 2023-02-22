/*

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

*/

// function to generate markdown for README
function generateMarkdown(data) {

  let str=  data.License;

 // "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
 // (https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)

//  [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
 // [![License

 // "Apache 2.0 License [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", 

  let strArr= str.split('[!');
 // str1=strArr


  return  `
  ## Title
  ${data.Title}  

  ${'[!' + strArr[1]}
  
  ## Description 
  ${data.Description}
  
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions)
  
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ## License
 
  ${strArr[0]}
  ## Contributing
  ${data.Contributing}
  ## Tests
  ${data.Tests}
  ## Questions  
  If you have queries please contact me using the below details  

  Github: <a href=${'https://github.com/' + data.GithubId}>${data.GithubId}</a> 

  Email: ${'mailto:' + data.Email}
  
`;
}

module.exports = {generateMarkdown};