// Creates a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'Apache') {
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  } else if (license === 'GNU') {
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
  } else if (license === 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else {
    badge = '';
  }
  return badge;
}

// A function that returns the license link
function renderLicenseLink(license) {
  link = '';
  if (license === 'Apache') {
    link = '(https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU') {
    link = '(https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'MIT') {
    link = '(https://opensource.org/licenses/MIT)';
  } else {
    link = ''
  }
  return link;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let renderLicense = '';
    if (license === 'None') {
      renderLicense = '';
    } else {
      renderLicense = `License: ${license}`;
    }
    return renderLicense;
}



// Function to generate markdown for README
function generateMarkdown(data) {
  return `
    # **${data.title}**

    ## Description
    ${data.projectMotivation} 
    ${data.projectWhy}
    ${data.projectWhat}
    
    ## Features
    ${data.features}
    
    ## User Installation
    ${data.installation}
    
    ## User Instructions
    ${data.instructions}
    
    ## Third-party Assets
    ${data.thirdpartyAssets}
    
    ## Links
    * Link to Website: ${data.linkWebsite}
    * Link to GitHub Repository: ${data.linkGithub}
    
    ## Collaborators
    ${data.collaborators}
    
    ## Licensing
    * ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
    * ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
