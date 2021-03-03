/**
 * This will be called whenever the discord bot loaded
 * 
 * @param {Object} client The Discord client
 */
module.exports = (client) => {
    console.log(`Authenticated as: ${client.user.username}#${client.user.discriminator}`);
};
