const Discord = require('discord.js');
require('dotenv').config()
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  
});

client.login(process.env.token);