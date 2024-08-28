// Usage: node mineflayer_forge.js
// Change values of host, port, username, sl_pwd before using. Tested with 1.19.2 Minecraft offline server with Simple Login mod.

const mineflayer = require('mineflayer')
const ForgeModSupport = require('../../src/client/forgeModSupport')
const simplelogin = require('./simplelogin')

const host = "server's IP"
const port = "server's port"
const username = "bot's username"

const bot = mineflayer.createBot({
  version: '1.19.2',
  host,
  port,
  username
})

const forgeModSupport = new ForgeModSupport(bot, {
  installedMods: [
    { id: 'mcp', version: '9.18' },
    { id: 'FML', version: '8.0.99.99' },
    { id: 'Forge', version: '11.15.0.1715' },
    { id: 'IronChest', version: '6.0.121.768' }
  ]
})

// leave options empty for guessing, otherwise specify the mods. Don't forget to write your Simple Login password (any password, if you connect for the first time)
const options = {
  forgeMods: undefined,
  channels: undefined,
  sl_pwd: 'Simple Login password for your bot'
}

// add handler
simplelogin(bot._client, options)

console.info('Started mineflayer')
// set up logging
bot.on('connect', function () {
  console.info('connected')
})

bot.on('spawn', function () {
  console.info('I spawned')
})
