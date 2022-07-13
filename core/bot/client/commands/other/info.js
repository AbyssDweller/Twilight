
/**
 * @description FUNCTION_DESCRIPTION.
 * @param {discord.Client} client - The client.
 * @param {discord.Message} message - The message.
 * @param {Array} args - The arguments.
 */

 const secrets = JSON.parse(require("fs").readFileSync("./.secrets.json"));

 function run(client, message, args) {
    message.reply(`The bot's github is https://github.com/${secrets.repository}`);
};

module.exports = {
    config: {
        name: "info",
        usage: "--info",
        description: "Sends some of the bot's information",
        alias: [],
        permission: ["SEND_MESSAGES"],
        help: true,
        available: true,
        log: true
    },
    run
};