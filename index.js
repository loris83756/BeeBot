const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

var prefix = ("-")

let messageevent = message.content.split(" ");
let event = messageevent[0];
let eventargs = messageevent.slice(1); 
    
  if (event === prefix + "miroir") {
    var reponse = ["**Event 1 test**","**Event 2 test**","**Event 3 test**","**Event 4 test**"]
    var resultat = Math.floor((Math.random() * reponse.length));
    const eembed =new RichEmbed()
    .setTitle("**__Event__**")
    .addField("Réponse:",reponse[resultat])
    .setColor(0xffa500)
    message.channel.send(eembed)
    console.log(`Commade event effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`) 
  }


bot.login(process.env.TOKEN);
