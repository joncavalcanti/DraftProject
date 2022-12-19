const Discord = require("discord.js")
const { AttachmentBuilder } = require('discord.js');

module.exports = {
    name: "pick", // Coloque o nome do seu comando
    description: "picke um personagem",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async(client, interaction, args) => {
      
        
        const char = [
            "Albedo",
            "Aloy",
            "Amber",
            "Ayaka",
            "Ayato",
            "Barbara",
            "Beidou",
            "Bennett",
            "Candace",
            "Childe",
            "Chongyun",
            "Collei",
            "Cyno",
            "Diluc",
            "Diona",
            "Dori",
            "Eula",
            "Fischl",
            "Ganyu",
            "Gorou",
            "Heizou",
            "Hutao",
            "Itto",
            "Jean",
            "Kaeya",
            "Kazuha",
            "Keqing",
            "Klee",
            "Kokomi",
            "Kuki",
            "Layla",
            "Lisa",
            "Mona",
            "Nahida",
            "Nilou",
            "Ningguang",
            "Noelle",
            "Qiqi",
            "Raiden",
            "Razor",
            "Rosaria",
            "Sarah",
            "Sayu",
            "Shenhe",
            "Sucrose",
            "Tartaglia",
            "Thoma",
            "Tighnari",
            "Traveller Female",
            "Traveller Male",
            "Venti",
            "Xiangling",
            "Xiao",
            "Xico",
            "Xingqiu",
            "Xinqgiu",
            "Xinyan",
            "Yae",
            "Yanfei",
            "Yelan",
            "Yomiya",
            "Yujin",
            "Zhongli",
            "Yoi",
            "Yoimiya"
    
        ];
        if(interaction.args != null) 
        args = args.toString(); 
        interaction.args = args.toLowerCase();

        const capitalized =
        interaction.args.charAt(0).toUpperCase()
        + interaction.args.slice(1)
  


        if(char.includes(capitalized)){
        const file = new AttachmentBuilder(`../Draft Bot/character_icon/${interaction.args}.png`);
        
        const exampleEmbed = {
	    title: `Pick do ${interaction.user} foi : "${capitalized}"`,
	    image: {
		url: `attachment://${interaction.args}.png`,
	    },
        };

        let embed = new Discord.EmbedBuilder()
        .setColor("Random")
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({dynamic: true}) })
        .setThumbnail(interaction.user.avatarURL())
        .setDescription(`Olá ${interaction.user}, Você pickou ${interaction.args} \`carregando...\`.`)

    
        interaction.reply({ embeds: [embed] }).then(() => {
            setTimeout( () => {
                interaction.editReply({  embeds: [exampleEmbed], files: [file]  })
            }, 2000)
        })
    }
    }
}