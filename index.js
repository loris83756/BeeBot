const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

var prefix = ("*")
      
      
bot.on('ready',function() {
bot.user.setActivity(`|Status: Maintenance| Fin de maintenance prevu le 30 mars`, { type: `STREAMING`, url: 'https://www.twitch.tv/loris83756'})
    console.log("Connecter");
})

bot.on('message', message => { 
if (message.content === prefix + "help") {
    const hembed =new RichEmbed()
    .setTitle("**:tools:BEEING EST EN MAINTENANCE, FIN DE MAINTENANCE PREVU LE 30 MARS**")
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    message.channel.send(hembed)
    console.log(`Commade help effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`) 
} 
      
      let messagedes = message.content.split(" ");  
      let des = messagedes[0]; 
      let desargs = messagedes.slice(1); 
      let channel = message.guild.channels.find(`name`,'d-e-stest')

if (des === prefix) { 
      if(!channel) 
            return message.send("Je ne trouve pas le channel d--s.") 
      if (!desargs) 
            return message.send("Vous devez écrire un message a envoyé") 
      let desmessage = desargs.join(" ").slice(0)
const desembed = new RichEmbed() 
.addField(`:bee: Utilisateur: **${message.author.username}**`, desmessage) 
.setThumbnail(message.author.avatarURL) 
.setColor(0xffa500) 
.setTimestamp() 
.setFooter(`Envoyé de: ${message.guild.name}`, `${message.guild.iconURL}`) 
const ldesembed = new RichEmbed()
.addField(`:crown: Owner: **${message.author.username}**`, desmessage) 
.setThumbnail(message.author.avatarURL) 
.setColor(0xff0000) 
.setTimestamp() 
.setFooter(`Envoyé de: ${message.guild.name}`, `${message.guild.iconURL}`) 
let iddesl = message.author.id === '295211285405237248';{ 
      if(!iddesl) 
            return bot.channels.findAll(`name`,'d-e-stest') .map(channel => channel.send(desembed)) 
      console.log(`Commade D.E.S effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
}
bot.channels.findAll(`name`,'d-e-stest') .map(channel => channel.send(ldesembed))
console.log(`Commade D.E.S effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
}
      
});
bot.login(process.env.TOKEN);
