
import { ForgeModSupport } from 'node-minecraft-protocol-forge';

export function initBot(username) {
    let bot = createBot({
        username: username,
        host: settings.host,
        port: settings.port,
        auth: settings.auth,
        version: false, // Enable autoVersion
    });

    // Add Forge mod support
    const forgeModSupport = new ForgeModSupport(bot._client, {
        installedMods: [
            { id: 'mcp', version: '9.18' },
            { id: 'FML', version: '8.0.99.99' },
            { id: 'Forge', version: '11.15.0.1715' },
            { id: 'IronChest', version: '6.0.121.768' }
        ],
        modFolder: 'path/to/mods',
        modpackUrl: 'https://www.curseforge.com/minecraft/modpacks/your-modpack'
    });

    autoVersionForge(bot._client); // Use bot._client instead of client
    forgeHandshake(bot._client); // Add forge handshake

    // Rest of the initBot function
}
async function handleModIdData(data) {
    debug('Received ModIdData from server:');
    debug(data);

    // Check the server's mod requirements and download missing mods
    await forgeModSupport.checkServerModRequirements();
}