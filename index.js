const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

var prefix = ("-")


      
      
bot.on('ready',function() {
bot.user.setActivity(`Prefix: -| ${bot.users.size} users | ${bot.guilds.size} serveurs |`, { type: `STREAMING`, url: 'https://www.twitch.tv/loris83756'})
    console.log("Connecter");
})
      
bot.on('message', message => {      
let messageevent = message.content.split(" ");
let event = messageevent[0];
let eventargs = messageevent.slice(1); 
    
  if (event === prefix + "event") {
    var reponse = ["Event sur **Master of the grid**: \n http://masterofthegrid.sparklinlabs.com/play/twitch/ewenasse","Event **Minecraft** \n __Serveur:__ Multi0Game.aternos.me \n __Version:__ 1.8","**Event Roblox**"]
    var resultat = Math.floor((Math.random() * reponse.length));
     let banRaison = eventargs.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_ROLES")) 
    return message.channel.send("**:x:Vous n'avez pas la permissin de faire ceci.**"); 
    const eembed =new RichEmbed()
    .setTitle("**:tada: __Event__**")
    .addField("Réponse:",reponse[resultat])
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    message.channel.send(eembed)
    console.log(`Commade event effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`) 
  }
  
      
 if (event === prefix + "autreevent") {      
let messageaevent = message.content.split(" ");
let aevent = messageaevent[0];
let aeventargs = messageaevent.slice(1); 
if (!aeventargs)
return message.send("**Vous devez écrire une event a créé")        
 let aeventmessage = aeventargs.join(" ").slice(0);
   if(!message.member.hasPermission("MANAGE_ROLES")) 
    return message.channel.send("**:x:Vous n'avez pas la permissin de faire ceci.**");       
    const aeembed =new RichEmbed()
    .addField("**:tada: Event**",aeventmessage)
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    message.channel.send(aeembed)
    console.log(`Commade aevent effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`) 
 }

 if (message.content === prefix + "ping") {
    const pembed = new RichEmbed()
                .setTitle(`:ping_pong: Pong: ${bot.ping} ms`)
                .setColor(Math.floor(Math.random() * 16777214) + 1)
                .setFooter("Beeing","https://cdn.discordapp.com/attachments/511129543768145930/531464974548205568/Beeing.jpg")
                .setTimestamp()
     message.channel.send(pembed);
     console.log(`Commade ping effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)  
    }     
      
});
bot.login(process.env.TOKEN);
