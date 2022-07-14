


const discord = require("discord.js");

/**
 * @description FUNCTION_DESCRIPTION.
 * @param {discord.Client} client - The client.
 * @param {discord.Message} message - The message.
 * @param {Array} args - The arguments.
 */
function run(client, message, args) {
    if (!args[0]) return message.reply("You need to put someone in this command!")
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
    // checks if the bot has the kick permission
     if (!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply("I don't have permission to ban people :( ");
    if (message.member.id === member.id) return message.reply("You can't kick yourself... well you can just leave the server :D");

    let reason = args.slice(1).join(" ") || "No reason"

    member.kick({ reason:reason })
    message.reply(`You just kicked ${member} for "${reason}" `)

};

module.exports = {
    config: {
        name: "KICK",
        usage: "KICK <member> <reason>",
        description: "Kicks a member from the server",
        alias: [],
        permission: ["KICK_MEMBERS"],
        help: true,
        available: true,
        log: true
    },
    run
};
