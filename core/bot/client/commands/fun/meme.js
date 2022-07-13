const discord = require("discord.js");
const secrets = JSON.parse(require("fs").readFileSync("./.secrets.json"));
const Discord = require("discord.js");
/**
 * @description FUNCTION_DESCRIPTION.
 * @param {discord.Client} client - The client.
 * @param {discord.Message} message - The message.
 * @param {Array} args - The arguments.
 */
function run(client, message) {
	if (message.channel.nsfw) {
		getMeme(client, message, true);
	} else {
		getMeme(client, message);
	};
}


function getMeme(client, message, nsfw = false) {
	const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));;
let url = 'http://meme-api.herokuapp.com/gimme';
let settings = { method: 'get' };

fetch(url, settings)
	.then(res => res.json())
	.then(json => {
		if (!nsfw && json.nsfw) {
			setTimeout(() => {
				getMeme();
			}, 1000);
		} else {
			const meme = new Discord.MessageEmbed()
				.setDescription(json.title)
				.setImage(json.url)
				.setFooter(json.subreddit, "https://cdn.discordapp.com/attachments/766316423306805269/855169541805441024/emoticon-xxl.png")
				.setTimestamp();
				message.channel.send({embeds: [meme]})
		};
	})
	.catch(() => {
		message.channel.send("There was a problem getting your meme, try again later.")
		client.log.error("Error getting meme from 'http://meme-api.herokuapp.com/gimme'.");
	});
};


module.exports = {
    config: {
        name: "MEME",
        usage: "meme",
        description: "sends a meme",
        alias: [],
        permission: ["SEND_MESSAGES"],
        help: true,
        available: true,
        log: true
    },
    run
};