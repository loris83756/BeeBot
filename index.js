const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")


bot.on("guildMemberAdd" , member => {
    member.guild.channels.find("name","nouveau-départ").send('Bienvenue {member}')
})

bot.on('ready',function() {
    bot.user.setGame("Commande: *help");
    console.log ("Connectedç");
});


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("**Liste des commandes**: \n ```*informations: (nouveau)``` Donne des informations sur le bot. \n \n ```*ban: (bientôt disponible)``` Permet de banir des personnes \n \n ```*kick: (bientôt disponible)``` Permet d´expulser des personnes \n \n ```*mute: (bientôt disponible)``` Permet de mute des personnes ")
    }
    
    if (message.content === prefix + "informations"){
        message.channel.sendMessage("_Je suis développer par loris83756#3705 et je suis hébergé chez Heroku._" )
        console.log("Commande effectué");
    }
    
    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }
});
bot.login(process.env.TOKEN);
