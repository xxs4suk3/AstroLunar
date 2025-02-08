const canvacord = require("canvacord");
const { MessageAttachment } = require("discord.js");

module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

  let level = client.db.get(`level_${user.id}`) || 0;
  let exp = client.db.get(`xp_${user.id}`) || 0;
  let neededXP = Math.floor(Math.pow(level / 0.1, 2));

  let every = client.db.all().filter(i => i.ID.startsWith("xp_")).sort((a, b) => b.data - a.data);
  let rank = every.map(x => x.ID).indexOf(`xp_${user.id}`) + 1;

  // v4 rank card
  //   let img = await canvacord.rank({
  //     username: user.username,
  //     discrim: user.discriminator,
  //     currentXP: exp.toString(),
  //     neededXP: neededXP.toString(),
  //     rank: rank.toString(),
  //     level: level.toString(),
  //     avatarURL: user.displayAvatarURL({ format: "png" }),
  //     background: "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&w=1000&q=80"
  //   });
  const card = new canvacord.Rank()
    .setUsername(user.username)
    .setDiscriminator(user.discriminator)
    .setRank(rank)
    .setLevel(level)
    .setCurrentXP(exp)
    .setRequiredXP(neededXP)
    .setBackground("IMAGE", "https://media.discordapp.net/attachments/969901169847722002/1183842262824783882/SPOILER_purple-aesthetic-rain.gif?ex=65f88c06&is=65e61706&hm=5eedea5d35837ea01763d8ab43e541ba9c009e018eb73d786592ae390c754071&=")
    .setAvatar(user.displayAvatarURL({ format: "png", size: 1024 }));

  const img = await card.build();

  return message.channel.send({files: [new MessageAttachment(img, "rank.png")]}).then(msg => setTimeout(() => {
          msg.delete()
          message.delete()
        }, client.config.message_remove_time*1000));
};