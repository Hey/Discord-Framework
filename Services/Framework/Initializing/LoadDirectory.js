/**
 * This will find an load all JS files in a specified
 * directory. This also reads subdirectories.
 * 
 * @param {string} dir - The folder to search
 * @returns {Object} Files
 */
module.exports = function (dir) {

    // Import packages & modules
    const { readdirSync, statSync } = require('file-system');
    const { Initializing } = require('@framework');

    // Will be pushed in later on, global variable
    let results = [];

    // Loops over every file in the directory
    const list = readdirSync(dir);
    list.forEach((file) => {

        // Get information about file
        const theFile = `${dir}/${file}`;
        const stat = statSync(theFile);

        if (stat && stat.isDirectory()) results = results.concat(Initializing.LoadDirectory(theFile));
        else if (theFile.endsWith('.js')) results.push(theFile);

    });

    // Sends back the data
    return results;

};
