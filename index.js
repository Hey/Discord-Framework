// Import packages
const { Client: DiscordClient } = require('discord.js');

// Make module aliases work
require('module-alias/register');

// Import modules
const Framework = require('@framework');

// Allow reading from .env
require('dotenv').config();

// Initialize Discord Client.
const client = new DiscordClient({ disableMentions: 'everyone' });
client.login(process.env.TOKEN);

// Load all commands & events
Framework.Initializing.Commands(client);
Framework.Initializing.Events(client);
