const { RockPaperScissors } = require('discord-gamecord');
const Discord = require("discord.js")
const render = require('../Comandos 4/canvasDraft.js')


function Result(interactions, users, client) {

            const Game = new RockPaperScissors({
                message: interactions,
                isSlashGame: true,
                opponent: users,
                embed: {
                    title: 'Pedra Papel Tesoura (Draft Roll)',
                    color: '#5865F2',
                    description: 'Escolha um dos Botões.'
                },
                buttons: {
                    rock: 'Pedra',
                    paper: 'Papel',
                    scissors: 'Tesoura'
                },
                emojis: {
                    rock: '🌑',
                    paper: '📰',
                    scissors: '✂️'
                },
                timeoutTime: 60000,
                buttonStyle: 'PRIMARY',
                pickMessage: 'Escolheu o {emoji}.',
                winMessage: '**{player}** escolhe a posição no Draft! Parabéns!',
                tieMessage: 'O jogo empatou! Ninguém ganhou o Roll!',
                timeoutMessage: 'O jogo ficou inacabado! Ninguém ganhou o Roll!',
                playerOnlyMessage: 'Somente {player} e o {oponente} podem usar esses botões.'
            });

            Game.startGame();
            Game.on('gameOver', result => {
                //console.log(result);  // =>  { result... }
//render.canvasRender(interactions, client)
            });
        }
    module.exports = {Result}

