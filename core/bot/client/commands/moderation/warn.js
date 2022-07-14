
const discord = require("discord.js");

/**
 * @description FUNCTION_DESCRIPTION.
 * @param {discord.Client} client - The client.
 * @param {discord.Message} message - The message.
 * @param {Array} args - The arguments.
 */
function run(client, message, args) {
    message.reply("This command is not yet available!");
};

module.exports = {
    config: {
        name: "Warn",
        usage: "warn <member> <reason>",
        description: "Warns a member in the server",
        alias: [],
        permission: ["KICK_MEMBERS"],
        help: true,
        available: true,
        log: true
    },
    run
};