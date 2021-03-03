module.exports.config = {
    name: 'ping',
    aliases: [''],
    description: 'Sends back pong',
};

module.exports.run = async (msg, client) => {

    // Import packages
    const { MessageEmbed } = require('discord.js');

    // Check ping.
    const Message = await msg.channel.send('...');
    const ping = Math.round(Message.createdTimestamp - msg.createdTimestamp);

    // Build embed
    const embedMessage = new MessageEmbed()
        .setColor('#3498DB')
        .setDescription(`:clock1: API Latency is ${ping}ms`);

    // Sends Embed
    Message.edit('', embedMessage).catch(); 

};
