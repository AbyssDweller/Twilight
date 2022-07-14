


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
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply("You don't have permission to use this command!");
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply("I don't have permission to ban people :( ");
    if (message.member.id === member.id) return message.reply("You can't ban yourself...");

    let reason = args.slice(1).join(" ") || "No reason"

    member.ban({ reason:reason })
    message.reply(`You just banned ${member} for "${reason}" `)

};

module.exports = {
    config: {
        name: "BAN",
        usage: "ban <member>",
        description: "Bans a member from the server",
        alias: [],
        permission: ["BAN_MEMBERS"],
        help: true,
        available: true,
        log: true
    },
    run
};
