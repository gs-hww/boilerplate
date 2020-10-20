const shell = require('shelljs');

const message = 'Running the main script.'
shell.exec(`echo ${message}`)

const ARCHIVE_LOCATION = process.env.PATH_TO_ZIP

function getBundleVersion() {
    let bundleVersion;
    if (process.env.CMS) {
        bundleVersion = process.env.CMS 
    } else if (ARCHIVE_LOCATION.split('-')) {
        try {
            bundleVersion = ARCHIVE_LOCATION.split('-')[1].split('.')[0];
          } catch (error) {
          }
        
    }
return bundleVersion
}


const BUNDLE_VERSION = getBundleVersion();

console.log()
console.log('===================================')
console.log(`Bundle version is ${BUNDLE_VERSION}`)
console.log('===================================')


if (BUNDLE_VERSION) {
    console.log()
    console.log()
    console.log('Congrats!')
}