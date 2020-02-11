const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');

var prefix = ("/")
//BIENVENUE / A QUTTER LE SERVEUR-----------------------------------------------------------------------------------------------
bot.on("guildMemberRemove" , member => {
    member.guild.channels.find("name","👋nouveaux-départs").send(`**${member} a quitté le serveur **`)
})
// AUTO ROLE---------------------------------------------------------------------------------------------------------------------

bot.on(`guildMemberAdd`,member => {
    var role = member.guild.roles.find(`name`, `corona`);
    member.addRole(role)
})
//SET GAME-----------------------------------------------------------------------------------------------------------------------
bot.on('ready',function() {
bot.user.setActivity(`manger des cornichon`, { type: `PLAYING`})
    console.log("Connecter");
});
//HELP---------------------------------------------------------------------------------------------------------------------------
bot.on('message', message => {
if (message.content === prefix + "help") {
    const embed = new RichEmbed()
      .setTitle('**......................................................... \n :cucumber:__Commandes utiles__:cucumber:** \n **........................................................**')
      .addField(`*info-bot`,`:small_orange_diamond:Donne des informations sur le bot.`)
      .addField(`*info-user + [user]`,`:small_orange_diamond:Donne des informations sur l'utilisateur mentioner. `)
      .addField(`*info-serveur`,`:small_orange_diamond:Donne des informations sur le serveur ou est effectué cette commande. `)
      .addField(`*clear + [nombre]`,`:small_orange_diamond:Permet de supprimer le nombre de message indiquer (max 100). `)
      .addField(`*ping`,`:small_orange_diamond:Donne le temps de réaction du bot en ms.`)
      .addField(`**......................................................... \n :hammer:__Commandes modérations__::hammer:**`,` \n **.........................................................** `)
      .addField(`*ban + [utilisateur] + [raison de la sanction]`,`:small_orange_diamond:Permet de bannir des utilisateurs.`)
      .addField(`*kick + [utilisateur] + [raison de la sanction]`,`:small_orange_diamond:Permet d´expulser des utilisateurs.`)
      .addField(`*mute (Bientot disponible)`,`:tools: Permet de rendre muet des utilisateurs.`)
      .addField(`**......................................................... \n :video_game:__Commandes jeu:__:video_game:**`,` \n **.........................................................**`)
      .addField(`*dé`,`:small_orange_diamond:Tire un nombre de 1 a 6.`)
      .addField(`*pile/face`,`:small_orange_diamond:Tire pile ou face.`)
      .addField(`*miroir + [question] (debug en cours)`,`:small_orange_diamond:Répond a la question que vous posez.`)
      .addField(`**......................................................... \n :tv:__Autres fonctionalitées:__:tv:**`,` \n **.........................................................**`)
      .addField(`Bonjour`,`:small_orange_diamond:Dites Bonjour et le Bot vous répondra.`)
      .addField(`Bienvenue/a quitté le serveur`,`:small_orange_diamond: Dès qu une personne rejoindra votre serveur le Bot lui souhaitera la Bienvenue et à son départ le Bot dira @...#0000 a quitté le serveur. \n :exclamation:Attention il faut posséder un salon nouveau-départ pour pouvoir avoir accès à cette fonctionnalité.:exclamation:`)
      .addField(`Auto rôle Membres `,`:small_orange_diamond:Ajoute automatiquement le rôle Membres a tout les nouveaux de votre serveur. \n :exclamation: Attention il faut posséder le rôle Membres.:exclamation:`)
      .setColor(0x008000)
      .setTimestamp()
      .setFooter("Kuhn","https://media-exp1.licdn.com/dms/image/C4D0BAQGn43BBbfTAsQ/company-logo_200_200/0?e=2159024400&v=beta&t=nGsM3rCwox38NfgjaETacRlgAFYsKIiX05AVCWg4jwE")
    message.author.send(embed);
    console.log(`Commade help effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
  }
     
    if (message.content === prefix + "help") {
     const embed = new RichEmbed()
      .setTitle('Les commandes vous ont été envoyés en MP :mailbox_with_mail:')
      .setColor(0x008000)
      .setTimestamp()
      .setFooter("Kuhn","https://media-exp1.licdn.com/dms/image/C4D0BAQGn43BBbfTAsQ/company-logo_200_200/0?e=2159024400&v=beta&t=nGsM3rCwox38NfgjaETacRlgAFYsKIiX05AVCWg4jwE")
     message.channel.send(embed)
    console.log(`Commade help (message MP) effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)   
    }
    //INFO BOT-----------------------------------------------------------------------------------------------------------------------
    if (message.content === prefix + "info-bot") {
  const embed = new RichEmbed()
                .setTitle(':information_source: **Informations:**')
                .addField(`:satellite: Serveurs:`, `${bot.guilds.size}`)
                .addField(`:grinning: Users`, `${bot.users.size}`)
                .addField(`:computer: Developpeur`, `loris83756#6865`)
                .addField(`:pencil: Codage utilisé:`, `Node JS 11.4.2`)
                .addField(`:regional_indicator_h: Hébergeur:`, `Heroku`, true)
                .setFooter("Kuhn","https://media-exp1.licdn.com/dms/image/C4D0BAQGn43BBbfTAsQ/company-logo_200_200/0?e=2159024400&v=beta&t=nGsM3rCwox38NfgjaETacRlgAFYsKIiX05AVCWg4jwE")
                .setColor(0x008000);
            message.channel.send(embed);
         console.log(`Commade info bot effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
    }
//INFO USER---------------------------------------------------------------------------------------------------------------------------
let messageuser = message.content.split(" ");
let infouser = messageuser[0];
let userargs = messageuser.slice(1); 
    
   if (infouser === prefix + "info-user") {
     let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(userargs[0]));
    if (!user) 
    return message.channel.send("**:information_source: Vous devez mentionné un utilisateur.**"); 
        const embed = new RichEmbed()
        .setTitle(`**__:information_source: User info__**`) 
        .addField(" :grinning: Nom:",`${user}`)
        .addField(" :id: ID:",`${user.id}`)
        .addField(":vertical_traffic_light:Statu:",`  ${user.presence.status} `)
        .addField(":video_game: Joue a:",`  ${user.presence.game ? user.presence.game.name : "Rien"}`)
        .setColor(0x008000)
        .setFooter("Kuhn","https://media-exp1.licdn.com/dms/image/C4D0BAQGn43BBbfTAsQ/company-logo_200_200/0?e=2159024400&v=beta&t=nGsM3rCwox38NfgjaETacRlgAFYsKIiX05AVCWg4jwE")
        .setThumbnail(message.mentions.users.first().avatarURL)
        .setTimestamp()
        message.guild.member(user)
        message.channel.send(embed);
        console.log(`Commade info user effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
    }
    //INFO SERVEUR--------------------------------------------------------------------------------------------------------------------
    if (message.content === prefix + "info-serveur") {
    const embed = new RichEmbed()
    .setTitle("**:information_source: Information du Serveur**") 
    .addField(":satellite: Nom du serveur", message.guild.name)
    .addField("**:pencil: Crée le:**", message.guild.createdAt)
    .addField("**:grinning: Membres sur le discord:**", message.guild.memberCount)
    .addField("**:door: Tu as rejoin le:**", message.member.joinedAt)
    .addField("**:bookmark_tabs: Roles que tu posséde sur ce serveur:**",message.member.roles.map(roles =>`${roles.name}`).join(', '))
    .setColor(0x008000)
    .setFooter("Kuhn","https://media-exp1.licdn.com/dms/image/C4D0BAQGn43BBbfTAsQ/company-logo_200_200/0?e=2159024400&v=beta&t=nGsM3rCwox38NfgjaETacRlgAFYsKIiX05AVCWg4jwE")
    .setTimestamp()
message.channel.sendEmbed(embed)
console.log(`Commade info serveur effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
}   
//PING-----------------------------------------------------------------------------------------------------------------------------
  if (message.content === prefix + "ping") {
    const embed = new RichEmbed()
                .setTitle(`:ping_pong: Pong: ${bot.ping} ms`)
                .setColor(0x008000)
                .setFooter("Kuhn","https://media-exp1.licdn.com/dms/image/C4D0BAQGn43BBbfTAsQ/company-logo_200_200/0?e=2159024400&v=beta&t=nGsM3rCwox38NfgjaETacRlgAFYsKIiX05AVCWg4jwE")
                .setTimestamp()
     message.channel.send(embed);
     console.log(`Commade ping effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)  
    }
//BONJOUR----------------------------------------------------------------------------------------------------------------------------    
    if (message.content === "Bonjour"){
        message.reply("Bonjour.");
        console.log(`Commade bonjour effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
    }
 //Dé------------------------------------------------------------------------------------------------------------------------------   
    if (message.content === prefix + "dé") {
    var reponse = [":one:",":two:",":three:",":four:",":five:",":six:"]
    var resultat = Math.floor((Math.random() * reponse.length));
    const embed =new RichEmbed()
    .setTitle('**__:game_die: Dé__**')
    .addField("Tu es tombé sur le :",reponse[resultat])
    .setColor(0x008000)
    message.channel.send(embed)
    console.log(`Commade dé effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)  
}
//PILE/FACE------------------------------------------------------------------------------------------------------------------------  
   if (message.content === prefix + "pile/face") {
    var reponse = [":regional_indicator_f: :regional_indicator_a: :regional_indicator_c: :regional_indicator_e:",":regional_indicator_p: :regional_indicator_i: :regional_indicator_l: :regional_indicator_e: "]
    var resultat = Math.floor((Math.random() * reponse.length));
    const embed =new RichEmbed()
    .setTitle('**__:moneybag: Pile ou Face ??__**')
    .addField("Tu es tombé sur:",reponse[resultat])
    .setThumbnail("https://www.gifimage.net/wp-content/uploads/2018/11/pile-ou-face-gif-1.gif")
    .setColor(0x008000)
    message.channel.send(embed)
    console.log(`Commade pile/face effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)  
} 
//MIROIR---------------------------------------------------------------------------------------------------------------------------    
let messagemiroir = message.content.split(" ");
let miroir = messagemiroir[0];
let miroirargs = messagemiroir.slice(1); 
    
  if (miroir === prefix + "miroir") {
    var reponse = ["**Oui**","**Non**","**Peut-etre**","**Je ne sais pas**"]
    var resultat = Math.floor((Math.random() * reponse.length));
    const embed =new RichEmbed()
    .setTitle("**__:crystal_ball: Miroir Magique__**")
    .addField("Question", `${miroirargs}`)
    .addField("Réponse:",reponse[resultat])
    .setColor(0x008000)
    .setThumbnail("http://ekladata.com/JftiL-mR0hOfxXe8OFrYHdu9vPk.gif")
    message.channel.send(embed)
    console.log(`Commade miroir effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`) 
  }
//BAN----------------------------------------------------------------------------------------------------------------------     
let messageban = message.content.split(" ");
let ban = messageban[0];
let banargs = messageban.slice(1); 
  
if (ban === prefix + "ban") {
    let banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(banargs[0]));
    if (!banUser) 
    return message.channel.send("**:information_source: Vous devez mentionné l'utilisateur a bannir et la raison de la sanction.**");
    let banRaison = banargs.join(" ").slice(20);
    if(!message.member.hasPermission("BAN_MEMBERS")) 
    return message.channel.send("**:x:Vous n'avez pas la permissin de faire ceci.**");
    if(banUser.hasPermission("BAN_MEMBERS")) 
    return message.channel.send("**:information_source: Je ne peut pas bannir cet utilisateur ou vous n'avez pas mit la raison de la sanction**");
    const embed = new RichEmbed()
    .setTitle("**:hammer: Ban effectué avec succé.**")
    .addField(":wave: Utilisateur banni:",`${banUser}`)
    .addField(":cop: Utilisateur banni par:",`${message.author}`)
    .addField(":scroll: Raison de la sanction:",banRaison)
    .addField(":alarm_clock: Sanction effectué le:",message.createdAt)
    .setColor(0x008000)
    .setFooter("Kuhn","https://media-exp1.licdn.com/dms/image/C4D0BAQGn43BBbfTAsQ/company-logo_200_200/0?e=2159024400&v=beta&t=nGsM3rCwox38NfgjaETacRlgAFYsKIiX05AVCWg4jwE")
    message.guild.member(banUser).ban(banRaison);
message.channel.send(embed);
console.log(`Commade ban effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)    
}
 //KICK---------------------------------------------------------------------------------------------------------------------   
let messagekick = message.content.split(" ");
let kick = messagekick[0];
let kickargs = messagekick.slice(1); 
  
if (kick === prefix + "kick") {
    let kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(kickargs[0]));
    if (!kickUser) 
    return message.channel.send("**:information_source: Vous devez mentionné l'utilisateur a expulser et la raison de la sanction.**");
    let kickRaison = kickargs.join(" ").slice(20);
    if(!message.member.hasPermission("KICK_MEMBERS")) 
    return message.channel.send("**:x:Vous n'avez pas la permissin de faire ceci.**");
    if(kickUser.hasPermission("KICK_MEMBERS")) 
    return message.channel.send("**:information_source: Je ne peut pas expulser cet utilisateur ou vous n'avez pas mit la raison de la sanction**");
    const embed = new RichEmbed()
    .setTitle("**:door: Kick effectué avec succé.**")
    .addField(":wave: Utilisateur expulser:",`${kickUser}`)
    .addField(":cop: Utilisateur expulser par:",`${message.author}`)
    .addField(":scroll: Raison de la sanction:",kickRaison)
    .addField(":alarm_clock: Sanction effectué le:",message.createdAt)
    .setColor(0x008000)
    .setFooter("Kuhn","https://media-exp1.licdn.com/dms/image/C4D0BAQGn43BBbfTAsQ/company-logo_200_200/0?e=2159024400&v=beta&t=nGsM3rCwox38NfgjaETacRlgAFYsKIiX05AVCWg4jwE")
    message.guild.member(kickUser).ban(kickRaison);
message.channel.send(embed);
console.log(`Commade kick effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)   
}
    
//CLEAR----------------------------------------------------------------------------------------------------------------------------

   let messageclear = message.content.split(" ");
let clear = messageclear[0];
let clearargs = messageclear.slice(1); 
  
if (clear === prefix + "clear") {
    if (!clearargs[0]) 
return message.channel.send("**:information_source: Vous devez indiquer le nombre de message a supprimer.**");
  if(!message.member.hasPermission("BAN_MEMBERS")) 
    return message.channel.send("**:x:Vous n'avez pas la permissin de faire ceci.**");
     if(isNaN(clearargs[0]))
return message.channel.send("**:information_source: Tu doit indiquer le nombre de message a supprimer**")
message.channel.bulkDelete(clearargs[0]).then(() => {
    message.channel.send(`${clearargs[0]} messages ont était suprimer.`).then(msg => msg.delete(2000));
     console.log(`Commade clear effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
})
} 

//OFF---------------------------------------------------------------------------------------------------------------------------------------
    
    if (message.content === prefix + "off") {
        let id = message.author.id === '295211285405237248';{
        if(!id) 
        return message.channel.send("**:x: Seul loris83756 peut utiliser cette commande.**")
        console.log(`Commade off /!\ effectué par: ${message.author} sur ${message.guild.name} a ${message.createdAt}`)
    }
        
        bot.user.setActivity(`Arrêt en cours ... `, { type: `PLAYING`})
          BOTOOF
}
    
//TOKEN-----------------------------------------------------------------------------------------------------------------------------
}); 
bot.login(process.env.TOKEN);
