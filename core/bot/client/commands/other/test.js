const discord = require("discord.js");

/**
 * @description FUNCTION_DESCRIPTION.
 * @param {discord.Client} client - The client.
 * @param {discord.Message} message - The message.
 * @param {Array} args - The arguments.
 */
function run(client, message, args) {
    return message.channel.send("testing normal messages.");
};

module.exports = {
    config: {
        name: "test",
        usage: "test",
        description: "test command",
        alias: [],
        permission: ["SEND_MESSAGES"],
        help: true,
        available: true,
        log: true
    },
    run
};