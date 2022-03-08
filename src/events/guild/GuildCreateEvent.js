const {GuildConfig} = require('../../database/index');
const { MessageEmbed } = require('discord.js')
const BaseEvent = require('../../utils/structures/BaseEvent');
module.exports = class GuildCreateEvent extends BaseEvent {
  constructor() {
    super('guildCreate');
  }
  
  async run(client, guild) {

    const config = client.configs.get(message.guildId);
    if (!config) {
      const newconfig = await GuildConfig.create({
        guildId: guild.id,
        guild_name: guild.name,
        prefix: '?',
      });

      client.configs.set(guild.id, newconfig);
      return;
    }
    
  }
}