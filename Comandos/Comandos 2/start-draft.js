const Discord = require('discord.js')
const Roll = require('../Comandos 3/rolling.js')

//import { Roll } from '/Comandos/Comandos 3/roll.js';

module.exports = {
    name: "play",
    description: "inicie um draft",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "membro",
            description: "Mencione um usuário",
            type: Discord.ApplicationCommandOptionType.User,
            required: true,
        }
    ],
    run: async (client, interaction, args) => {

        let user = interaction.options.getUser("membro")

        var lista1 = [
            'https://media.tenor.com/PwCkM7HLnfMAAAAM/genshin-genshin-impact.gif',
            'https://media.tenor.com/zzeplFeiQY0AAAAM/genshin-genshin-impact.gif',
            'https://media.tenor.com/WW1HjZFka2YAAAAM/lumine-genshin.gif',
            'https://media.tenor.com/_CD5yXgMUDcAAAAM/zhongli-genshin-impact.gif',
            'https://media.tenor.com/alp_RkcoEtQAAAAM/genshin-impact-jean.gif',
            'https://media.tenor.com/IH3AycZ2Z6YAAAAM/baal-raiden-shogun.gif',
            'https://media.tenor.com/EHMtXk7BVqYAAAAM/genshin-impact-genshin.gif',
            'https://media.tenor.com/x6lL5wQEeXIAAAAM/mihoyo-genshin.gif'

            
        ];

        var lista2 = [
            'https://media.tenor.com/6JPFNWoGqKcAAAAM/scaramouche-beat-up-childe-scaramouche.gif',
            'https://media.tenor.com/kXtg2O8ld7QAAAAM/itto-arataki-itto.gif',
            'https://media.tenor.com/XWLnYBUfJ9gAAAAM/sumeru-genshin.gif',
            'https://media.tenor.com/0bbrldDWOLsAAAAM/chongyun-nervous.gif',
            'https://media.tenor.com/QSx47PIsUQ4AAAAM/genshin.gif',
            'https://media.tenor.com/4_MwUWakTSoAAAAM/what-wtf.gif',
            'https://media.tenor.com/stctS_bBI8gAAAAM/mihoyo-genshin.gif',
            'https://media.tenor.com/o5HYS9PpkC4AAAAM/jean-genshin.gif'

        ];

        var random1 = lista1[Math.floor(Math.random() * lista1.length)];
        var random2 = lista2[Math.floor(Math.random() * lista2.length)];

        const embed = new Discord.EmbedBuilder()
            .setDescription(`**${interaction.user} Chamou pro x1 o ${user}.**`)
            .setImage(`${random1}`)
            .setColor("Random")

        const button = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                    .setCustomId('1')
                    .setLabel('Aceitar')
                    .setStyle(Discord.ButtonStyle.Primary)
                    .setDisabled(false)

            )

        const embed1 = new Discord.EmbedBuilder()
            .setDescription(`**${user} Aceitou o PvP do ${interaction.user}.**`)
            .setColor("Random")
            .setImage(`${random2}`)
               

        interaction.reply({ embeds: [embed], components: [button] }).then(() => {
            const filter = i => i.customId === '1' && i.user.id === user.id;
            const collector = interaction.channel.createMessageComponentCollector({ filter, max: 1 });

            collector.on('collect', async i => {
                if (i.customId === '1') {
                    i.reply({ embeds: [embed1] })

                }
            });



            collector.on("end", () => {
                interaction.editReply({
                    components: [
                        new Discord.ActionRowBuilder()
                            .addComponents(
                                new Discord.ButtonBuilder()
                                    .setCustomId('1')
                                    .setLabel('Aceitar')
                                    .setStyle(Discord.ButtonStyle.Primary)
                                    .setDisabled(true)

                            )
                    ]
                })
                Roll.Result(interaction, user,client)
            })
        })
    }
}