const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

var prefix = ("*")
      
      
bot.on('ready',function() {
bot.user.setActivity(`Prefix: * |Status: Maintenance|Fin de maintenace 30 mars`, { type: `STREAMING`, url: 'https://www.twitch.tv/loris83756'})
    console.log("Connecter");
})

if (message.content === prefix + "help") {
    const hembed =new RichEmbed()
    .setTitle("** :regional_indicator_h: HELP**")
    .addField("$event","Permet de tirer un event au hasard")
    .addField("$autreevent","Permet de faire une autre event qui n'est pas dans le $autreevent")
    .addField("$ping","Permet de savoir la latence du bot en ms")
    .addField("$infobot","Donne des info sur le bot")
    .addField("$infouser","Donne des information sur l'utilisateur mentionner")
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    message.channel.send(hembed)
    console.log(`Commade help effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`) 
} 
      
);
bot.login(process.env.TOKEN);
