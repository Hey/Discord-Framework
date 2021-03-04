/**
 * Messages get sent here and it will check
 * if it's a command and assign it to the
 * right command controller. This also
 * validates certain stuff such as author.
 * 
 * @param {Object} client - Discord client user
 * @param {string} msg    - The message received
*/
module.exports = (client, msg) => {

    const { CommandError } = require('@framework');
    
    // Deny usage in dm's and don't allow other bots to use commands
    if (msg.author.bot || msg.channel.type === 'dm') return;

    // Simplify regular used data in variables
    const command = msg.content.split(' ')[0];
    const args = msg.content.split(' ').slice(1);

    // Deny usage if the command doesn't start with our prefix
    if (!msg.content.startsWith(process.env.PREFIX)) return;

    const normalCommands = client.commands.get(command.slice(process.env.PREFIX.length));
    const aliases = client.commands.get(client.aliases.get(command.slice(process.env.PREFIX.length)));
    const commandFile = normalCommands || aliases;

    if (commandFile) CommandError.asyncHandler(commandFile, client, msg, args);

};
