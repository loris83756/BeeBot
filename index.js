const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

var prefix = ("*")
      
      
bot.on('ready',function() {
bot.user.setActivity(`Prefix: * |Status: Maintenance|Fin de maintenace 30 mars`, { type: `STREAMING`, url: 'https://www.twitch.tv/loris83756'})
    console.log("Connecter");
})
      
});
bot.login(process.env.TOKEN);
