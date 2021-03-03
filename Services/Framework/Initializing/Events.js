/**
 * This will load every event using LoadDirectory.js
 * It'll basically loop over every file in /Events.
 * 
 * And it will make a client.on meaning it's initializing an event.
 * So if someone makes the file /Events/message.js it will initialize 
 * a receiver for the 'message' event.
 * 
 * @param {Object} client The Discord client
 */
module.exports = function (client) {

    // Import modules
    const Framework = require('@framework');

    // Load all our event which will recall itself in the function
    const eventFiles = Framework.Initializing.LoadDirectory(`${__dirname}/../../../Events`);

    // Debugging purposes, possibly
    const eventOrdering = eventFiles
        .map((event) => eevent
            .toString()
            .split('Events/')[1]
            .split('.js')[0])
            .toString()
            .replace(/,/g, ' & ')

    console.log(`Loaded ${eventFiles.length} events (${eventOrdering})`);

    // Loops all of our loaded .js files (event files)
    eventFiles.forEach((file) => {

        // Initialize the event receiver
        const eventName = file.toString().split('Events/')[1].split('.js')[0]
        client.on(eventName, (dataOne, dataTwo) => {
            require(`@events/${eventName}`)(client, dataOne, dataTwo);
        });

    });

};