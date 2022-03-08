const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('create-ticket', 'ticket', []);
  }

  async run(client, message, args) {
    
    
  }
}