const BaseEvent = require('../../utils/structures/BaseEvent');
const { GuildConfig } = require('../../database/index')
const { MessageEmbed } = require('discord.js')
module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('messageCreate');
  }
  
  async run(client, message) {
    if (message.author.bot) return;
    const config = await client.configs.get(message.guildId);
  
    if (!config) {
      const guild = message.guild;

      const newconfig = await GuildConfig.create({
        guildId: guild.id,
        guild_name: guild.name,
        prefix: '?',
      });
      
      client.configs.set(guild.id, newconfig);
      message.channel.send('No configuration set.');
      return;
    }
    if (message.content.startsWith(config.prefix)) {
      const [cmdName, ...cmdArgs] = message.content
        .slice(config.prefix.length)
        .trim()
        .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);
      }
    }
  }
}