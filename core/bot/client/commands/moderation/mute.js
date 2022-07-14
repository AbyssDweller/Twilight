
        

const discord = require("discord.js");
const ms = require('ms');

/**
 * @description FUNCTION_DESCRIPTION.
 * @param {discord.Client} client - The client.
 * @param {discord.Message} message - The message.
 * @param {Array} args - The arguments.
 */
function run(client, message, args) {
    const target = message.mentions.users.first();
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
            console.log(mainRole)
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {

                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send('Please mention a valid user!');
        }
    };


module.exports = {
    config: {
        name: "MUTE",
        usage: "mute <member> <time>",
        description: "Mutes a member in the server",
        alias: [],
        permission: ["MANAGE_MESSAGES"],
        help: true,
        available: true,
        log: true
    },
    run
};