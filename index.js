const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

var prefix = ("-")

bot.on('message', message => {

      
let messageevent = message.content.split(" ");
let event = messageevent[0];
let eventargs = messageevent.slice(1); 
    
  if (event === prefix + "event") {
    var reponse = ["**Event 1 test**","**Event 2 test**","**Event 3 test**","**Event 4 test**"]
    var resultat = Math.floor((Math.random() * reponse.length));
     let banRaison = eventargs.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_ROLES")) 
    return message.channel.send("**:x:Vous n'avez pas la permissin de faire ceci.**"); 
    const eembed =new RichEmbed()
    .setTitle("**__Event__**")
    .addField("Réponse:",reponse[resultat])
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    message.channel.send(eembed)
    console.log(`Commade event effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`) 
  }
   
let messageaevent = message.content.split(" ");
let aevent = messageaevent[0];
let aeventargs = messageaevent.slice(1); 
    
 if (event === prefix + "autreevent") {     
 let aeventmessage = desargs.join(" ").slice(0);
   const aeembed =new RichEmbed()
    .addField("**Event**",aeventmessage)
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    message.channel.send(aeembed)
    console.log(`Commade aevent effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)      

});
bot.login(process.env.TOKEN);
