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
    {name:"Significant#1713",value:"Creator"},
    {name:"aroary#1848",value:"Taught me some code, and helped me code the bot, and fix errors. Also made the template used by this bot"}
  )
    .setFooter(client.secrets.namewithversion)
    .setTimestamp();
    message.channel.send({ embeds: [embed] })

};

module.exports = {
    config: {
        name: "credits",
        usage: "credits",
        description: "shows credits",
        alias: [],
        permission: ["SEND_MESSAGES"],
        help: true,
        available: true,
        log: true
    },
    run
};