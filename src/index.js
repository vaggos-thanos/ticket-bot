require('dotenv').config();
const { Client, Intents, Collection } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const { db, GuildConfig } = require('./database/index');
const colors = require('ansi-colors');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ] });

(async () => {
  client.commands = new Map();
  client.events = new Map();

  await db.authenticate().then(async () =>{ 
    await GuildConfig.init(db);
    await GuildConfig.sync();
    await console.log(`\n\n${colors.bold.green('Database has successfully logged in!')}`)
  }).catch(async (err) =>{
    console.log(err)
  });
  
  const guildConfigs = await GuildConfig.findAll();
  const configs = new Collection()
  guildConfigs.forEach((config) =>{
    configs.set(config.guildId, config)
  });

  client.configs = configs;

  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(process.env.token);
})();

