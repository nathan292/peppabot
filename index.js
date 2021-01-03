const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', function () {
  console.log("Je suis connecté !")
});

function emoji (id) {
    return client.emojis.get(id).toString();
}

const prefix = "!";

bot.login(process.env.TOKEN);

const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setDescription('Some description here')

bot.on('message', message => {
    if (message.content === prefix + 'maevache') {
      message.channel.send (emoji ("736243827911819276"));
    }
  });

bot.on('message',message => {
  if (message.content === prefix + 'embed') {
    message.channel.send (exampleEmbed)
  }
})
