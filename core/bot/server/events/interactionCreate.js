/**
 * @file Handle incoming interactions.
 * @author aroary
 * @license MIT
 * @copyright Ⓒ 2022 aroary
 */

const discord = require("discord.js");
const Entry = require("../../../utilities/logger");

/**
 * @description DESCRIPTION
 * @param {discord.Client} client - The client
 * @param {discord.Interaction} interaction - The interaction.
 */
function run(client, interaction) {
    // Handle slash commands.
    if (interaction.isCommand()) {
        const command = client.slashCommands.get(interaction.commandName);
        if (command) {
            command.run(client, interaction);
            if (command.configuration.log) new Entry("slash", interaction.commandName).setColor("purple").log();
        };
    };

    // Handle buttons
    if (interaction.isButton()) {
        const button = client.buttons.get(interaction.customId);
        if (button) {
            button.run(client, interaction);
            if(button.configuration.log) new Entry("button", interaction.customId).setColor("purple").log();
        };
    };

    // Handle select menus
    if (interaction.isSelectMenu()) {
        const menu = client.menus.get(interaction.customId);
        if (menu) {
            menu.run(client, interaction);
            if(menu.configuration.log) new Entry("menu", interaction.customId).setColor("purple").log();
        };
    };

    // Handle message components.
    if (interaction.isMessageComponent()) {
        // new Entry("component", interaction.commandName).setColor("purple").log();
    };
};

module.exports = { name: "interactionCreate", run };