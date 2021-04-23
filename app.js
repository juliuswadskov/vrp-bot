const Discord = require('discord.js');
const Config = require('./Config.json');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  
});

client.login(Config.token);