const renderLicenseBadge = license => {
  return new Promise((resolve, reject) => {
  if (!license) {
    resolve("");
    return;
  }
  switch (license) {
    case "MIT":
      resolve("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)");
      break;
    case "APACHE":
      resolve("[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");
      break;
    case "BSD 2-Clause":
      resolve("[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)");
      break;
    case "BSD 3-Clause":
      resolve("[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)");
      break;
    case "GPL":
      resolve("[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)");
      break;
    case "LGPL":
      resolve("[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)");
      break;
    case "Mozilla":
      resolve("[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)https://opensource.org/licenses/MPL-2.0");
      break;
    default:
      console.log("you've chosen an unsupported license or haven't chosen a license at all.  No license-badge added");
      resolve("");
      break;
  }
})
}

const renderLicenseLink = license => {
  return new Promise((resolve, reject) => {
  if (!license) {
    resolve("");
    return;
  }
  switch (license) {
    case "MIT":
      resolve("https://opensource.org/licenses/MIT"); 
      break;
    case "APACHE":
      resolve("https://opensource.org/licenses/Apache-2.0");
      break;
    case "BSD 2-Clause":
      resolve("https://opensource.org/licenses/BSD-2-Clause");
      break;
    case "BSD 3-Clause":
      resolve("https://opensource.org/licenses/BSD-3-Clause");
      break;
    case "GPL":
      resolve("https://opensource.org/licenses/gpl-license");
      break;
    case "LGPL":
      resolve("https://opensource.org/licenses/lgpl-license");
      break;
    case "Mozilla":
      resolve("https://opensource.org/licenses/MPL-2.0");
      break;
    default:
      console.log("you've chosen an unsupported license or haven't chosen a license at all.  No license-badge added");
      resolve("");
      break;
  }
})
}


// Creates the license section
const renderLicenseSection = (license, title, link) => {
  return new Promise((resolve, reject) => {
    if (!license || !link) {
     resolve("");
    }
    resolve(`
  ## License 

  **${title}** is distrubted under the [${license}](${link}) License
    `
    )} 
  )    
}

// generatesMarkdown for the README
const generateMarkdown = async questionsData => {
  const {github, email, license, ...readme} = questionsData;
  let licenseBadge;
  let licenseLink;
  await Promise.all([renderLicenseBadge(license),renderLicenseLink(license)]).then(licenseData => {
    licenseBadge = licenseData[0];
    licenseLink = licenseData[1];
  });
  let licenseSection = await renderLicenseSection(license,readme.projectTitle,licenseLink);
  
  return `
  # ${readme.projectTitle}

  ## Description
  ${readme.description}

  ${readme.confirmTableOfContents ? `
  ## Table of Contents
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contributing](#contributing)
   * [Tests](#tests)
   * [Questions](#questions)` : ""}

  ${readme.installation ? `
  ## Installation 
     Follow these instructions to install the necessary dependences:
     ${readme.installation}` : ""}

  ${readme.usage ? `
  ## Usage 
     Follow these instructions to use the application properly:
     ${readme.usage}` : ""} 
  
  ${licenseSection}

  ${readme.contributing ? `
  ## Contributing
     Contributors: ${readme.contributing}` : ""}

  ${readme.tests ? `
  ## Tests 
     Include these tools to properly run tests within the application:
     ${readme.tests}` : ""}
  
  ${readme.confirmQuestions ? `
  ## Questions
     Have questions about the repo/application? Contact me:
     Name: ${github}
     Email: ${email}` : ""}
  `;
}

module.exports = generateMarkdown;



