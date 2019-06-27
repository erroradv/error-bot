// Packages Needed
const Discord = require('discord.js');
const client = new Discord.Client();
let tokenfile = require('./token.json');
const superagent = require('superagent');

// Variables
const prefix = '!';
const ownerID = '387180631383343104';
const active = new Map();

const serverStats = {
  guildID: '500224890033537024',
  totalUsersID: '503230014834212891',
  memberCountID: '503230056554823684',
  botCountID: '503230079351128064',
};

global.servers = {};

 client.on('message' ,(message) => {
   var bm = message.content;
   var prefix = '++';

   if (bm == 're')
   { message.reply('salut!'); }
   if (bm == 'ce faci')
   { message.reply('bine tu ?'); }  
   

 })

  client.on('message' ,(message) => {
  let embed = new Discord.RichEmbed()
  var sender = message.author;
  var msg = message.content.toUpperCase();

  if(msg === prefix + 'HELP' || msg === prefix + 'COMMANDS') {
  message.author.send(' ```\nMomentan bot-ul este in lucru, Multumim ca ai ales Bot-ul Nostru !\nCommands:\navatar - Your avatar or user mentioned avatar\ninfobot - Bot Details\npoll - Create a poll\nkick - Kick an user\nsay - say anything with the bot\nserverinfo - Server Info\nuserinfo - Member details\nmeme - simple, meme    \n\n     \nImportant details:\n1.For acces commands : ban, kick ,say,clear create roles Administrator!\n2. for problems contact Error#5836   \n\n \nInvite Link : https://discordapp.com/api/oauth2/authorize?client_id=583015975335493634&permissions=2146958839&scope=bot  \n\n\n \n Bot is created by Error. ``` ')  
  
   }

 })


// Listener Events
client.on('message', message => {

  // Variables
  let args = message.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();

  // Return Statements
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  // Comand Handler
  try {
    //delete require.cache[require.resolve(`./commands/${cmd}.js`)];  

    //Options
    let ops = {
        ownerID: ownerID,
        active: active
    } // Acu, 'ops' mereu trece de c

    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, message, args, ops);

  } catch (e) {
    console.log(e.stack)
  }

});

client.on('ready', () => console.log ('Launched'));


// Login to discord
client.login(tokenfile.TOKEN);

client.on('ready', () => {
  //client.user.setGame('!help\nWank')

  let statuses = [
      //`${client.guilds.size}!`,
      '!help',
      'on Discord.js',
      `over ${client.users.size} users !`
    ]
    
    setInterval(function() {
       let status = statuses[Math.floor(Math.random() * statuses.length)];
       client.user.setActivity(status, {type: "PLAYING"});

    }, 3000)     
})

