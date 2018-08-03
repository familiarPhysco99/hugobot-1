const Discord = require ('discord.js');
const bot = new Discord.Client();
const prefix = "!"

// HugoBot Official Embeds
bot.on("message", (message) => {
    var embed = new Discord.RichEmbed()
        .setTitle("Information")
        .setDescription("Information for HugoBot, the bot, and the HugoBot Community!")
        .setColor("GREEN")
        .addField("HugoBot", "Welcome to the server! HugoBot Official is, obvious in itself, the official place for information and help with HugoBot. The bot is currently still in a development mode as of now. HugoBot is a multi-purpose bot on b1.0, set to be publicly available in summer of 2018, or possibly sometime past that. Current expectations are for summer, but things could go very well, or very bad depending on what happens. I hope you enjoy your stay, and you will be notified up updates, new commands, and the official release date. If you would like to help out, or be involved with HugoBot, or have any skills that could assist in it's development, please contact Familiar#9394. Any assisstance is appreciated, and the HugoBot community is always open and growing.", "true")
        .setImage("https://cdn.discordapp.com/avatars/446452284428386314/69b7d196bed3e372c74f3f46a16d136a.png?size=128")

        if (message.content == "!hbi" && message.author.id == "265938184276410378") message.channel.send(embed)

      var embed = new Discord.RichEmbed()
          .setTitle("Information")
          .setDescription("Invites, links, and more for HugoBot.")
          .setColor("GREEN")
          .addField("Support Discord Guild", "[Permanent Discord Invite](https://discord.gg/9wAXCnT)", "false")
          .addField("Support The Dev!", "[Support The Dev By Joining This Server!](https://discord.gg/tRsMKxz)", "false")
          .addField("Invite the Bot!", "Click [here](https://discordapp.com/oauth2/authorize?client_id=446452284428386314&permissions=8&scope=bot) to invite the bot!", "false")
          .addField("Other", "I also do custom embeds for people such as this one. If you would like one, please join the support server and contact me.", "false")
          .setImage("https://cdn.discordapp.com/avatars/446452284428386314/69b7d196bed3e372c74f3f46a16d136a.png?size=128")

          if (message.content == "!hbl" && message.author.id == "265938184276410378") message.channel.send(embed)

        var embed = new Discord.RichEmbed()
            .setTitle("__**RULES:**__")
            .setDescription("These are the rules you are expected to follow in HugoBot Official.")
            .setColor("GOLD")
            .addField("Main Rules", "• No spamming or flooding the chat with messages. DO NOT TYPE IN CALL CAPS. \n • No text walls or large paragraphs of text. \n • No bashing or heated arguments to other people in the chat. \n • No adult , explicit, or controversial messages. \n • No racist or degrading content (racial terms are not allowed). \n • No excessively cursing. \n • No advertising other sites/discord servers. (Permission must be requested from staff). \n • No referall links. \n • No begging or repeatedly asking for help in the chat, please keep questions in the #support channel. \n • No offensive names. \n • Do not use the @everyone / @here ping without permission. \n • Do not perform or promote the intentional use of glitches, hacks, bugs, and other exploits that will cause an incident within the community and other players. \n • Do not argue with staff. Their decisions are final. \n • No staff, admin, or other ranks will be given randomly. \n • Do not join the server and promote yourself. Instant ban.", "true")
            .addField("Music Rules", "• No voice chat surfing or switching channels repeatedly. \n • No annoying, loud, or high pitched noises. \n • You will be removed if sound quality is poor to other members.", "true")
            .addField("Bot Rules", "• Do not spam commands. \n • Do not use the bot to play ear rape/loud music. \n • Do not use macros, hacks, etc. with the bot.")
            .addField("CopyRight", "• Do not break copyright. \n HugoBot Official copyrights all rules and text in HugoBot Official.", "true")
            .setFooter("If you do not, you will be punished with one of the following Warn/Mute/Kick/Ban. | All rules are made and copyighted by HelldogGaming.", "https://cdn.discordapp.com/avatars/249617262078722048/b07d064118ac76531fa281d329a7991a.png?size=128")
            .setImage("https://cdn.discordapp.com/avatars/446452284428386314/69b7d196bed3e372c74f3f46a16d136a.png?size=128")

            if (message.content == "!hbore" && message.author.id == "265938184276410378") message.channel.send(embed)

              var embed = new Discord.RichEmbed()
                  .setTitle("__**RULES:**__")
                  .setDescription("These are the rules you are expected to follow in Gamer Gods.")
                  .setColor("GOLD")
                  .addField("Main Rules", "• No spamming or flooding the chat with messages. DO NOT TYPE IN CALL CAPS. \n • No text walls or large paragraphs of text. \n • No bashing or heated arguments to other people in the chat. \n • No adult , explicit, or controversial messages. \n • No racist or degrading content (racial terms are not allowed). \n • No excessively cursing. \n • No advertising other sites/discord servers. (Permission must be requested from staff). \n • No referall links. \n • No begging or repeatedly asking for help in the chat, please keep questions in the #support channel. \n • No offensive names. \n • Do not use the @everyone / @here ping without permission. \n • Do not perform or promote the intentional use of glitches, hacks, bugs, and other exploits that will cause an incident within the community and other players. \n • Do not argue with staff. Their decisions are final. \n • No staff, admin, or other ranks will be given randomly. \n • Do not join the server and promote yourself. Instant ban.", "true")
                  .addField("Music Rules", "• No voice chat surfing or switching channels repeatedly. \n • No annoying, loud, or high pitched noises. \n • You will be removed if sound quality is poor to other members.", "true")
                  .addField("Bot Rules", "• Do not spam commands. \n • Do not use the bot to play ear rape/loud music. \n • Do not use macros, hacks, etc. with the bot.")
                  .setFooter("If you do not, you will be punished with one of the following Warn/Mute/Kick/Ban. | All rules are made and copyighted by HelldogGaming.", "https://cdn.discordapp.com/avatars/249617262078722048/b07d064118ac76531fa281d329a7991a.png?size=128")
                  .setImage("https://cdn.discordapp.com/avatars/343643530280828931/c52736edd1f2a93e5646e2b0f246bda0.png?size=128")

                  if (message.content == "!gdr" && message.author.id == "265938184276410378") message.channel.send(embed)

              var embed = new Discord.RichEmbed()
                    .addField("I can only dream of being a human!", "Oh, I just wish I was a human!")
                    .setColor("DARK_GREEN")
                    .setImage("https://cdn.discordapp.com/attachments/346126443765563396/448291189578268672/virtual-half-robot-face-mask.jpg")

                    if (message.content == "!human" && message.guild.id == "346126443765563392") message.channel.send(embed)

              var embed = new Discord.RichEmbed()
                    .addField("Crizza, The Assistant!", "My New Companian Crizza Bot Is Here To Fix Settings With Me")
                    .setColor("PURPLE")
                    .setImage("https://cdn.discordapp.com/attachments/346126443765563396/448291189578268672/virtual-half-robot-face-mask.jpg")

                    if (message.content == "!crizza" && message.guild.id == "346126443765563392") message.channel.send(embed)

                    /// ANYTHING SPOTIFY ///
                      var embed = new Discord.RichEmbed()
                        .setTitle("This is our Official Server Playlist.")
                        .setDescription("Song's will be added every two days. We have #votes and #servers-playlist-song-reqs. You request a song in there and vote on it in the vote channel.")
                        .addField("Link", "Click [here](https://open.spotify.com/user/_javinnnn/playlist/4tceYo1Dgfm4VgMgEVi2zH?si=AyLnHFwzTXO1NGLAmELDgw) for the link.", "false")
                        .addField("__**IF you follow the playlist you get the @Playlist Follower ⌀ rank, free color, and role, cool right?!**__", "yeh that's kewl", "false")
                        .setImage("https://cdn.discordapp.com/icons/448329640688353280/115587c46bdaad8ffb1280a84816f83a.webp")

                        if (message.content == "!assp" && message.author.id == "265938184276410378") message.channel.send(embed)


                      var embed = new Discord.RichEmbed()
                        .setTitle("__**Rules**__")
                        .setDescription("Rules are simple, make sure to follow them soy ou don't get punished.")
                        .addField("1: Spamming", "Spamming is posting the same mssage over and over, our spam limit is four lines which means if it bypasses the four lines staff will take action by punishing whoever did it.", "false")
                        .addField("2: Flooding", "Flood is typing messages that reach over 6 lines and above, we'd like to make the chat clean so please refrain from flooding.", "false")
                        .addField("3: DDoS/DoX Threats", "DDoS/Dox threats aren't allowed within this discord, if we catch anyone threatening any type of that, he/she will be banned instantly.", "false")
                        .addField("4: Excessive Behaviour", "Using innapropriate behaviour in an excessive way, such as NSFW Behaviour, Excessive Swearing towards someone, will lead to a punishment.", "false")
                        .addField("5: Advertising", "Advertisements are allowed in a specific channel, known #media, and refrain from posting discord invite links, we do not like to see that.", "false")
                        .addField("6: Racism", "Refrain from being racist towards someone about anything, we're a spotify community.", "false")
                        .setImage("https://cdn.discordapp.com/icons/448329640688353280/115587c46bdaad8ffb1280a84816f83a.webp")

                        if (message.content == "!asrules" && message.author.id == "265938184276410378") message.channel.send(embed)

                    ///// TESTING/EMBEDS /////

                        var embed = new Discord.RichEmbed()
                            .setTitle("This is a test embed.")
                            .setColor("RANDOM")
                            .addField("Testing", "Familiar#9394 has forced a test command in this server!")
                            .setAuthor("HugoBot Official", "https://cdn.discordapp.com/avatars/446452284428386314/69b7d196bed3e372c74f3f46a16d136a.png?size=128")

                            if (message.content == "!test" && message.author.id == "265938184276410378") message.channel.send(embed)

                        var embed = new Discord.RichEmbed()
                            .addField("Embed Colors", "Aqua, Green, Blue, Purple, Gold, Orange, Red, Grey, Darker Grey, Navy, Dark Aqua, Dark Green, Dark Blue, Dark Purple, Dark Gold, Dark Orange, Dark Red, Dark Grey, Dark Navy, Random, Default")
                            .setColor("RANDOM")

                            if (message.content == "!embeds" && message.author.id == "265938184276410378") message.channel.send(embed)

   // Nozo_gaming Ultra servers
      var embed = new Discord.RichEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("Nozo_gaming Ultra Server's Rules")
            .setDescription("Thanks for joining! Make sure to read these rules carefully. If you break a rule, you will get warning 1. After warning 2, you will be muted for 30 min and warning 3 (muted for 1 hr). If you have more than 3 warnings in the last 45 min, it will result in you getting kicked from the server.")
            .addField("General Server Rules", "  - 1. Only mention moderators for support. \n - 2. Do not tag @everyone/@here mentioning without permission. \n - 3. Do not spam mentioning any roles or members. \n - 4. No spamming, sexully explicit, NSFW, pornographic content or swearing in any way. \n - 5. No sexist, racism, hate speech, offensive language/cursing in any language. \n - 6. Try to not to use FULL CAP in a single sentence. \n - 7. Do not advertise in anyway. \n - 8. No inappropriate or blank nicknames, usernames, avatars.", "false")
            .addField("Voice Chat Rules", "  - 1.  No annoying, loud or high pitch noises or music \n - 2. Push to talk only. \n - 3. No swearing, spamming or talking about inappropriate topic.", "false")
            .addField("CopyRight", "These rules are written by @╰☆╮𝙉𝙤𝙯𝙤_𝙂𝙖𝙢𝙞𝙣𝙜╰☆╮#8672. Please do NOT copy these rules. I spent 30 min on writing them.", "false")
            .addField("Extra Rules", "Ads are only allowed in #advertising. Do not spam ads, any channels other than that or else you will be banned. YouTubers have permission to post links in #youtube-videos. \n \n \n [Here](https://www.noswearing.com/dictionary) are the list of swearing word that the staff will use to judge if you are swearing. \n \n ```= Be respectful to GBTQ =``` \n \n You *can* swear in #spams.", "false")
            .setImage("https://cdn.discordapp.com/icons/425924224268369920/1314bf34eee7fda15f5546f424711f9d.webp")

            if (message.content == "!ngr" && message.author.id == "265938184276410378") message.channel.send(embed)
            if (message.content == "!ngr" && message.author.id == "389082922717675523") message.channel.send(embed)

            if (message.author.id !== '265938184276410378') return;
            const args = message.content.slice('!').trim().split(/ +/g);
            if (message.content.startsWith('!invite')) {
              var name = args.slice(1).join(' ')
              var g = bot.guilds.find('name', name)
              bot.guilds.get(g.id).channels.filter(c => c.type === 'text').first().createInvite().then(i => message.author.send(i.url))
}

              if (message.content.startsWith('!refreshlist')) {
                console.log(bot.guilds.map(g => g.name).join(', '))
                message.react('👍')
}

              if (message.author.id !== '265938184276410378') return;
              if (message.content.startsWith("!id")) {
                var name = args.slice(1).join(' ')
                var g = bot.guilds.find('name', name)
                message.author.send(g.id)
}
              if (message.author.id !== '265938184276410378') return;
              if (message.content.startsWith('!leave')) {

                async function leave(guildid) {
                  guildid = args[1]
                  var embed = new Discord.RichEmbed()
                  .setTitle('Leaving ' + bot.guilds.get(guildid).name)
                  .setDescription('HugoBot has been forced to leave by an external user not in this guild! If you wish to invite it back, you may, just please talk to Familiar#9394.')
                  .setColor("BLUE")
                  .setTimestamp()
                  .setThumbnail(bot.user.avatarURL)
                  await bot.guilds.get(guildid).channels.filter(c => c.type === 'text').first().send(embed)
                  await bot.guilds.get(guildid).leave()
}

leave()
}

  var embed = new Discord.RichEmbed()
       .setTitle("World Union RP Rules")
       .setDescription("Note: The mod team will always have a final say in things that do not appear on the rules, yet can possibly seem as a violtion to them.")
       .setColor("RANDOM")
       .setThumbnail("https://cdn.discordapp.com/icons/453963014912081941/ac4bf5d2ba7306cb944a2bdab71d6fd4.webp")
       .setFooter("Thanks for staying!", "https://cdn.discordapp.com/icons/453963014912081941/ac4bf5d2ba7306cb944a2bdab71d6fd4.webp")
       .addField("MAKING YOUR RACE", "The following rules are for when you make your race, they must include the following: \n 1. Race Name \n 2. Strengths and Weaknesses \n 3. Biome Preference \n 4. Lore (this will be made in a google doc and submitted in #lore-approval. Race information must also be on this doc) \n 5. Your race can not be from another dimension. \n 6. If overpowered, I will ask you to change it. \n 7. Have a picture of your race included in the google document.", "false")
       .addField("BASIC SERVER RULES", "1. Do not be rude to anyone. \n 2. Disrespecting the Moderation Team is not allowed. \n 3. Making any racist jokes will result in an immediate mute and ban at mod teams own discression. \n 3. Keep OOC and off-topic in the chats made for them, do not OOC or off-topic in ic happenings. \n 4. Do not ping a member of the mod team if it is about doing a roll or map claims, you will be ignored. \n 6. Keep swearing to a minimum. \n 7. We all have problems in real life, but please do not tell us them in OOC or off-topic, try to kep it personal as best as you can. \n 8. Feel free to ask anyone for help if you need it, we are a friendly community after all.", "false")
       .addField("ROLEPLAY RULES", "1. Yes this is Sci-Fi, but keep it as realistic as possible. \n 2. No planet destroying weapons are allowed. \n 3. Weapons like nuclear bombs are not allowed. \n 4. Rolls in weapons-and-research, economics, and space-exploration-and-research are every hour. No more, no less. \n 5. No one word responses. \n 6. You are not allowed to roll until a member of the moderation team confirms your lore and adds you to the map. This will be announced in the announcements channel. \n 7. Space to ground weapons will be heavily nerfed as to make wars more indepth and not a one hit kill. \n 8. WHile this is Sci-Fi, no indestructible weapons, armour, and races. \n 9. Roll bonuses will always stop at 3, if you happen to get one.", "false")

       if (message.content == "!wur" && message.author.id == "329972732638789642") message.channel.send(embed)
       if (message.content == "!wur" && message.author.id == "265938184276410378") message.channel.send(embed)

  var embed = new Discord.RichEmbed()
    .setDescription("In the far future, the galaxy and almost all habitable planets within it where destroyed. Only one system, called “Haven” remains. Surrounding the bright blue star is one last planet that can hold life, with ecological environments so diverse, to marvel at just one is a mistake. \n \n Races from all across the galaxy now slowly make there way to Haven to settle on the last bastion of life. But what caused such galactic destruction? What will become of this new last world? Will the races on it be able to co-exist with each other, or will war ravage the planet and destroy it utterly.")

    if (message.content == "!wcl" && message.author.id == "265938184276410378") message.channel.send(embed)
});

// Bot Join Log
bot.on('guildCreate', guild => {

    console.log(bot.guilds.get(guild.id).channels.first())

    bot.guilds.get("446741775093334016").channels.first().createInvite().then(invite => {

    const embed = new Discord.RichEmbed()
    .setAuthor(`${guild.name} - ${guild.members.size} Members`, guild.iconURL)
    .setThumbnail(guild.iconURL)
    .setTitle("Bot Joined")
    .addField("Guild ID", guild.id)
    .addField("Invite", invite.url)
    .addField("Owner", bot.users.get(guild.ownerID).tag)
    .setFooter(bot.user.username, bot.user.avatarURL)
    .setTimestamp()
    .setColor(0x800000)

    bot.channels.find("name", "join-server-logs").send(embed);
})
})

// Bot Status
bot.on('ready', () => {
    bot.user.setActivity(bot.guilds.size + " servers, and " + bot.users.size + " users!", {type: 'WATCHING'});
})

// Bot Ready Message
bot.on("ready", () => {
    console.log("HugoBot is ready!");
})

// Bot Login
bot.login('NDQ2NDUyMjg0NDI4Mzg2MzE0.Dd5Qpg.eGHxkHjANym071pn9Kg1nMJ54zk')
