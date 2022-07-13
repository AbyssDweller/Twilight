const discord = require("discord.js");

/**
 * @description FUNCTION_DESCRIPTION.
 * @param {discord.Client} client - The client.
 * @param {discord.Message} message - The message.
 * @param {Array} args - The arguments.
 */
function run(client, message, args) {
    
    const embed = new discord.MessageEmbed()
    .setTitle("Credits")
    .setColor(`#ff6d91`)
    .setDescription("shows credits")
    .addFields(
    {name:"Abyss#7777",value:"Creator"},
  )
    .setTimestamp();
    message.channel.send({ embeds: [embed] 
    })
    
};

module.exports = {
    config: {
        name: "credits",
        usage: "credits",
        description: "shows credits",
        alias: [],
        permission: ["SEND_MESSAGES"],
        help: false,
        available: true,
        log: true
    },
    run
};