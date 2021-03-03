/**
 * This will load every command using LoadDirectory.js
 * And it will set the commands we find in a public Discord collection.
 * This means it'll work in our Message event handler
 * 
 * @param {Object} client The Discord client
 */
module.exports = function (client) {

    // Import packages
    const { Collection: DiscordCollection } = require('discord.js');

    // Import modules
    const Framework = require('@framework');

    // Sets commands & aliases in discord collection
    client.commands = new DiscordCollection();
    client.aliases = new DiscordCollection();

    // Load all our commands which will recall itself in the function
    const commandFiles = Framework.Initializing.LoadDirectory(`${__dirname}/../../../Commands`);

    // Debugging purposes, possibly
    const commandOrdering = commandFiles
        .map((command) => command
            .toString()
            .split('Commands/')[1]
            .split('.js')[0])
            .toString()
            .replace(/,/g, ' & ')
        
    console.log(`Loaded ${commandFiles.length} commands (${commandOrdering})`);

    // Loops all of our loaded .js files (command files)
    commandFiles.forEach((file) => {

        // Grab the command
        const Command = require(file);

        // Saves the command
        client.commands.set(Command.config.name, Command);
        Command.config.aliases.forEach((alias) => client.aliases.set(alias, Command.config.name));

    });

};