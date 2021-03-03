/**
 * 
 * @param {Object} client The Discord client
 */
module.exports = (client) => {
    console.log(`Authenticated as: ${client.user.username}#${client.user.discriminator}`);
};
