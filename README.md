[![GitHub release](https://img.shields.io/github/v/release/AbyssDweller/disaccord.svg)](https://GitHub.com/AbyssDweller/disaccord/releases/)
[![Open in Visual Studio Code](https://img.shields.io/badge/visualstudiocode-badge-blue.svg?logo=visual-studio-code)](https://open.vscode.dev/AbyssDweller/disaccord)

# Disaccord
## Getting started
#### Rename `/.secrets-example.json` to `/.secrets.json`. Fill in this information in the `/.secrets.json` file. (most information is required to run the bot)
```json
{
    "token": "TOKEN",
    "clientSecret": "CLIENT_SECRET",
    "intents": ["INTENT"],
    "port": 3000,
    "redeploy": true,
    "prefix": "",
    "developer": ["DEVELOPER_ID"],
    "supportServer":"SUPPORT_SERVER_ID",
    "statusInterval": 350000,
    "description": "",
    "repository": "USER_NAME/REPOSITORY_NAME",
    "version": "3.1.0"
}
```
* **`token`**: *`String`* The bots login *token* (Generated from the discord [developer portal](https://discord.com/developers/applications)).
* **`clientSecret`**: *`String`* The bots *client secret* (Generated from the discord [developer portal](https://discord.com/developers/applications)).
* **`intents`**: *`Array`* The bots *intent*s.
* **`port`**: *`Integer`* The *port* number your bots app will listen at (defaults `80`, `443`).
* **`reDeploy`**: *`Boolean`* Weather or not to reregister the slash commands.
* **`prefix`**: *`String`* The *prefix* used to execute commands.
* **`developer`**: *`Array`* The *developers* of the bot.
* **`supportServer`**: *`String`* The *ID* of the support server.
* **`statusInterval`**: *`Number`* The *interval* to cycle to the next value in the *status* array.
* **`description`**: *`String`* The *description* of the bot.
* **`repository`**: *`String`* The [GitHub](https://github.com) *repository* of the bot.
* **`version`**: *`String`* The version of your bot.
## Requirements
* [Node.js](https://nodejs.org/en/) `^16.15.1`

___
### Template by [aroary](https://github.com/aroary) Maintained By [AbyssDweller](https://github.com/AbyssDweller)

#### If you are [aroary](https://github.com/aroary) and you want me to take this down just tell me.

###### MIT License | Copyright Ⓒ 2022 aroary
___
## Other documentation pages
* [disaccord](https://github.com/AbyssDweller/disaccord#readme)
* [initiation](https://github.com/AbyssDweller/disaccord/blob/master/core/initiation/README.md)
* [events](https://github.com/AbyssDweller/disaccord/blob/master/core/bot/server/events/README.md)
* [triggers](https://github.com/AbyssDweller/disaccord/blob/master/core/bot/client/triggers/README.md)
* [slashCommands](https://github.com/AbyssDweller/disaccord/blob/master/core/bot/client/slashCommands#readme)
* [selectMenus](https://github.com/AbyssDweller/disaccord/blob/master/core/bot/client/selectMenus/README.md)
* [commands](https://github.com/AbyssDweller/disaccord/blob/master/core/bot/client/commands/README.md)
* [buttons](https://github.com/AbyssDweller/disaccord/blob/master/core/bot/client/buttons#readme)
###### [back to top](#disaccord)
