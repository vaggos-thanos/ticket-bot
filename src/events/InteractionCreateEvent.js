// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-interactionCreate
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class InteractionCreateEvent extends BaseEvent {
  constructor() {
    super('interactionCreate');
  }

  async run(client, interaction) {

  }
}
  