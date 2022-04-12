// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

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


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license, title, link) => {
  return new Promise((resolve, reject) => {
    if (!license || !link) {
     resolve("");
    }
    resolve(`
    ## License 📃

    **${title}** is distrubted under the *[${license}](${link})*.
    `
    )} 
  )    
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = async questionsData => {
  const {github, email, license, ...readme} = questionsData;
  let licenseBadge;
  let licenseLink;
  await Promise.all([renderLicenseBadge(license),renderLicenseLink(license)]).then(licenseData => {
    licenseBadge = licenseData[0];
    licenseLink = licenseData[1];
  });
  let licenseSection = await renderLicenseSection(license,readme.projectTitle,licenseLink);
  console.log(`
  github: ${github}
  email: ${email}
  licenseBadge: ${licenseBadge}
  licenseLink: ${licenseLink}
  licenseSection---------------
  ${licenseSection}
  `);

}

module.exports = generateMarkdown;



