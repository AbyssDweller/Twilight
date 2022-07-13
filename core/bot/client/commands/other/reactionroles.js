const discord = require("discord.js");

/**
 * @description FUNCTION_DESCRIPTION.
 * @param {discord.Client} client - The client.
 * @param {discord.Message} message - The message.
 * @param {Array} args - The arguments.
 */
function run(client, message, args) {
    message.guild.roles.create({
        name: 'Example Role',
        color: '#000000',
        reason: 'we needed a role for an example',
        permissions: 'ADMINISTRATOR',
      })
      
};

module.exports = {
    config: {
        name: "rolesetup",
        usage: "rolesetup",
        description: "creates a role with admin",
        alias: [],
        permission: ["ADMINISTRATOR"],
        help: false,
        available: false,
        log: true
    },
    run
};