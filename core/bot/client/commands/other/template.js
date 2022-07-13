const discord = require("discord.js");

/**
 * @description FUNCTION_DESCRIPTION.
 * @param {discord.Client} client - The client.
 * @param {discord.Message} message - The message.
 * @param {Array} args - The arguments.
 */
function run(client, message, args) {
    return message.channel.send("This bot uses my friends aroary's Disaccord Template https://github.com/aroary/disaccord");
};

module.exports = {
    config: {
        name: "template",
        usage: "template",
        description: "sends a message saying who made the template",
        alias: [],
        permission: ["SEND_MESSAGES"],
        help: true,
        available: true,
        log: true
    },
    run
};