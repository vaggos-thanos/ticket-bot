const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('initialize', 'ticket', []);
  }

  async run(client, message, args) {
    
    
  }
}