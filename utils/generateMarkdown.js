// Creates a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  const licenseOptions = ['Apache', 'GNU', 'MIT'];
  const licenseBadges = [
    '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]',
    '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
    '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  ];

  // If there is no license, it will return an empty string
  for (let i = 0; i < licenseOptions.length, i++) {
    if (license === licenseOptions[i]) {
      return licenseBadges[i];
    } else {
      return '';
    }
  }

}

// A function that returns the license link
function renderLicenseLink(license) {
  const renderLicenseOptions = ['Apache', 'GNU', 'MIT'];
  const renderLicenseLinks = [
    '(https://opensource.org/licenses/Apache-2.0)',
    '(https://www.gnu.org/licenses/gpl-3.0)',
    '(https://opensource.org/licenses/MIT)'
  ];
  // If there is no license, it will return an empty string
  for (let i = 0; i < renderLicenseOptions.length; i++) {
    if (license === renderLicenseOptions[i]) {
      return renderLicenseLinks[i];
    } else {
      return '';
    }
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}

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
    ${data.licensing}
`;
}

module.exports = generateMarkdown;
