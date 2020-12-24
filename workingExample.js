const { config } = require('dotenv');
config({ path: __dirname+"/.env" });

const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '.';


let emojiOptions = [
    '<:Large_Red_Square:EmojiID>',
    '<:Large_blue_Square:EmojiID>',
    '<:Large_Green_Square:EmojiID>',
    '<:Large_Purple_Square:EmojiID>'
]
function confirm(commandName, duration,ifPass = () => {console.log('passed')},ifFail = () => {console.log('failed')}) {

    let confirmEmoji = emojiOptions[Math.floor(Math.random() * emojiOptions.length)];

    channel.send(`Are You Sure you want to ${commandName}?\n If so press on the ${confirmEmoji} emoji in __**${duration}**__ seconds`)

        .then(message => {

            for (const option of emojiOptions) { message.react(option); }

            const filter = (reaction, user) => reaction.emoji.id === confirmEmoji && user.id === 'userID';

            const collector = message.createReactionCollector(filter, { time: duration * 1000 });

            collector.on('collect', collect => {  /*[SOME CODE HERE. THIS FUNCTIONALITY HERE IS OPTIONAL]*/ });

            collector.on('end', collected => {

                if (collected.size > 0) {

                    /*[CODE TO RUN WHEN THEY PASS]*/
                    ifPass();

                } else if (collected.size === 0) {

                    /*[CODE TO RUN IF THEY FAIL]*/
                    ifFail();

                }
            })
        })
}

client.on('ready', () => console.log('ready'));

// Commands with user input (a.k.a. "arguments")
// https://discordjs.guide/creating-your-bot/commands-with-user-input.html


client.on('message', message => {
const { content, author } = message;
if(author.bot)return;
const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();


if(content.startsWith(prefix))return;
if(command === "daily"){
confirm('Daily',15,
() => {

/* this is where you want to put the code for when they pass*/

message.channel.send('Passed');

}, () => {

/* this is where you want to put the code for when they fail*/

message.channel.send('Failed');

});
}


})



client.login(process.env.TOKEN);