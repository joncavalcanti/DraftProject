const discord = require('discord.js')
const Canvas = require('canvas');

function canvasRender(interaction, client){

    var foto = "https://media.discordapp.net/attachments/1049489187226800188/1050579716236656701/image.png?width=1007&height=538";

    var canvas = Canvas.createCanvas(1024, 500);
    ctx = canvas.getContext("2d");
    ctx.FillStyle = "#00001";

    Canvas.loadImage(foto).then(async (i) =>{

        ctx.drawImage(i, 0, 0, 1024, 500);
        ctx.beginPath();
        ctx.stroke();
        ctx.fill();

        ctx.textAlign = "center";

        ctx.fillText(`${interaction.user}`, 480, 437);
        ctx.beginPath();
        ctx.arc(521, 200, 119, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

      
       // let msg = new discord.AttachmentBuilder(canvas.create.toBuffer(), `${interaction.user}.png`)

        //const file = new discord.AttachmentBuilder(`../Draft Bot/character_icon/Albedo.png`);
        
      

        //const file = new discord.AttachmentBuilder(`../Draft Bot/character_icon/${interaction.args}.png`);

       
            
        const channel = client.channels.cache.get();

        channel.send({files: [Canvas]});
       // console.log("oi")

       //const channel = client.channels.cache.find(channel => channel.name === channelName)
       // channel.send(msg)

        //interaction.editReply({  content: `${interaction.user}`, files: [msg]  })


    })

}

module.exports = {canvasRender}
