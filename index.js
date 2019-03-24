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
      
});
bot.login(process.env.TOKEN);
