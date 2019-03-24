const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

var prefix = ("$")
      
      
bot.on('ready',function() {
bot.user.setActivity(`Prefix: $ | ${bot.users.size} users | ${bot.guilds.size} serveurs |`, { type: `STREAMING`, url: 'https://www.twitch.tv/ewenasse'})
    console.log("Connecter");
})
      
bot.on('message', message => {      
let messageevent = message.content.split(" ");
let event = messageevent[0];
let eventargs = messageevent.slice(1); 
    
  if (event === prefix + "event") {
    var reponse = ["Event sur **Master of the grid**: \n http://masterofthegrid.sparklinlabs.com/play/twitch/ewenasse","Event **Minecraft** \n __Serveur:__ Multi0Game.aternos.me \n __Version:__ 1.8","**Event Roblox**"]
    var resultat = Math.floor((Math.random() * reponse.length));
    if(!message.member.hasPermission("MANAGE_ROLES")) 
    return message.channel.send("**:x:Vous n'avez pas la permissin de faire ceci.**"); 
    const eembed =new RichEmbed()
    .addField(":tada: **__Event__**",reponse[resultat])
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    message.channel.send(eembed)
    console.log(`Commade event effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`) 
  }
      
    let messageaevent = message.content.split(" ");
    let aevent = messageaevent[0];
    let aeventargs = messageaevent.slice(1);  
      
     if (aevent === prefix + "autreevent") {
     let aeventr = aeventargs.join(" ").slice(0);
      if(!aeventr)
       return message.channel.send("**Vous devez écrire l'envent a créé**")
    if(!message.member.hasPermission("MANAGE_ROLES")) 
    return message.channel.send("**:x:Vous n'avez pas la permissin de faire ceci.**"); 
    const aeembed =new RichEmbed()
    .addField("**:tada: __Event__**",`${aeventr}`)
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    message.channel.send(aeembed)
    console.log(`Commade aevent effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
     }
   
 if (message.content === prefix + "ping") {
    const pembed = new RichEmbed()
                .setTitle(`:ping_pong: Pong: ${bot.ping} ms`)
                .setColor(Math.floor(Math.random() * 16777214) + 1)
                .setTimestamp()
     message.channel.send(pembed);
     console.log(`Commade ping effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)  
    }     
      
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
      
       if (message.content === prefix + "infobot") {
    const hembed =new RichEmbed()
    .setTitle("**:regional_indicator_i: INFO**")
    .addField("Développer par:","loris83756#6865")
    .addField("Hébergeur:","Heroku")
    .addField("MultiGame event#2430 est une filial de la Beeing Corporation.","**.....................................................................**")
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    message.channel.send(hembed)
    console.log(`Commade help effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`) 
  }   
 
      
  var messageuser = message.content.split(" ");
  var infouser = messageuser[0];
  var userargs = messageuser.slice(1); 
    
   if (infouser === prefix + "infouser") {
     var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(userargs[0]));
    if (!user) 
    return message.channel.send("**:information_source: Vous devez mentionné un utilisateur.**"); 
        const iuembed = new RichEmbed()
        .setTitle(`**__:information_source: Info User__**`) 
        .addField(`**: Rejoin le:**`, message.member.joinedAt)
        .addField("** Roles que tu posséde sur ce serveur:**",message.member.roles.map(roles =>`${roles.name}`).join(', '))
        .setColor((Math.floor(Math.random() * 16777214) + 1))
        .setThumbnail(message.mentions.users.first().avatarURL)
        .setTimestamp()

        message.channel.send(iuembed);
        console.log(`Commade info user effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
    } 
      
});
bot.login(process.env.TOKEN);
