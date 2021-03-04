module.exports.config = {
    name: 'help',
    aliases: ['commands', 'cmd', 'cmds', 'command'],
    description: 'Shows how to use a command and how to use the bot.',
};

module.exports.run = (client, msg) => {

    // Import packages
    const { MessageEmbed } = require('discord.js');

    // Build the help command embed
    const embed = new MessageEmbed()
        .setTitle('🙋‍♀️ Help')
        .setColor(0x00AE86)
        .addField('🎱 8ball', `${process.env.PREFIX}8ball/ask to ask the bot a question.`)
        .addField('👛 Coinflip', `${process.env.PREFIX}flip/coinflip to flip a coin, either heads or tails.`)
        .addField('🏓 Ping', `${process.env.PREFIX}ping shows the latency of the bot.`);

    msg.channel.send(embed);
};
