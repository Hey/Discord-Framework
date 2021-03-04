
const { MessageEmbed } = require('discord.js');

/**
 * This handles errors and returns a beatiful embed
 * which notifies the user that their command failed.
 * 
 * @params {Object} error
 */
async function Handle (error, msg) {
  
  // Creates embed
  const embed = new MessageEmbed()
    .setColor('#FF0000')
    .setTitle('Error')
    .setDescription(error.message);

  // Sends embed
  msg.channel.send(embed);
  
};

/**
 * Async handler, this will catch any errors
 * and forward them to our error handler.
 * 
 * @param {Object} commandFile - Command file
 * @param {Object} client - Discord bot client 
 * @param {Object} msg - Message object
 * @param {array} args - Split on space message content 
 */
module.exports.asyncHandler = (commandFile, client, msg, args) => {
  Promise
    .resolve(commandFile.run(client, msg, args))
    .catch(error => Handle(error, msg))
}