const discord = require("discord.js");

/**
 * @description FUNCTION_DESCRIPTION.
 * @param {discord.Client} client - The client.
 * @param {discord.Message} message - The message.
 * @param {Array} args - The arguments.
 */
function run(client, message, args) {
    const ws = client.ws.ping;
    const time = message.createdTimestamp - new Date();
    const ping = new discord.MessageEmbed().setDescription(`*api **\`${time}\`***\n*ws  **\`${ws}\`***`);
    message.reply({ embeds: [ping], ephemeral: true });   
};

module.exports = {
    config: {
        name: "Ping",
        usage: "--ping",
        description: "Sends the ping of the bot",
        alias: [],
        permission: ["SEND_MESSAGES"],
        help: true,
        available: true,
        log: true
    },
    run
};