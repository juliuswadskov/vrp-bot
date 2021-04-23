const Discord   = require('discord.js');
const client    = new Discord.Client();

var vRP = {}

var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "vrpfx"
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

vRP.getUserId = (discord_id, cb) => {
  conn.query("SELECT id FROM vrp_users WHERE discord = '" + discord_id + "'", function(err, res, fields) {
    if (err) throw err;
    cb(res)
  });
}

vRP.hasPermission = (user_id, permission) => {
  
}

!(() => { // Run test to see if it works
  vRP.getUserId("", (user_id) => {
    console.log(user_id)
  });
})();

require('dotenv').config();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  
});

client.login(process.env.TOKEN);