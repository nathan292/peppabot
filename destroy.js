const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('destroy', function () {
  console.log("Je suis connecté !")
});

bot.login('Nzg1OTAxNjE4NjM3MTc2ODM0.X8-l6w.MIz7cHOou_eIZj_xf2AyRhXjtQQ');