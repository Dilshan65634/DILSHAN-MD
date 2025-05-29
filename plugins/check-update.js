const axios = require('axios');
const os = require('os');
const fs = require('fs');
const path = require('path');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');

cmd({
  pattern: 'version',
  alias: ["changelog", "cupdate", "checkupdate"],
  react: '🚀',
  desc: "Check bot's version, system stats, and update info.",
  category: 'info',
  filename: __filename
}, async (conn, mek, m, {
  from, sender, pushname, reply
}) => {
  try {
    // Read local version data
    const localVersionPath = path.join(__dirname, '../media/version.json');
    let localVersion = 'Unknown';
    let changelog = 'No changelog available.';
    if (fs.existsSync(localVersionPath)) {
      const localData = JSON.parse(fs.readFileSync(localVersionPath));
      localVersion = localData.version;
      changelog = localData.changelog;
    }

    // Fetch latest version data from GitHub
    const rawVersionUrl = 'https://raw.githubusercontent.com/LAKSIDUOFFICIAL/LAKSIDU-BOT/refs/heads/main/Hshsgsg/CHECHUPDATE.js';
    let latestVersion = 'Unknown';
    let latestChangelog = 'No changelog available.';
    try {
      const { data } = await axios.get(rawVersionUrl);
      latestVersion = data.version;
      latestChangelog = data.changelog;
    } catch (error) {
      console.error('Failed to fetch latest version:', error);
    }

    // Count total plugins
    const pluginPath = path.join(__dirname, '../plugins');
    const pluginCount = fs.readdirSync(pluginPath).filter(file => file.endsWith('.js')).length;

    // Count total registered commands
    const totalCommands = commands.length;

    // System info
    const uptime = runtime(process.uptime());
    const ramUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
    const totalRam = (os.totalmem() / 1024 / 1024).toFixed(2);
    const hostName = os.hostname();
    const lastUpdate = fs.statSync(localVersionPath).mtime.toLocaleString();

    // GitHub stats
    const githubRepo = 'https://github.com/laksidunimsara1/QUEEN-HASHI-MD';

    // Check update status
    let updateMessage = `💛 Your DILSHAN MD bot is up-to-date!`;
    if (localVersion !== latestVersion) {
      updateMessage = `💛 Your Hashi Md bot is outdated!
💛 *Current Version:* ${localVersion}
💛 *Latest Version:* ${latestVersion}

Use *.update* to update.`;
    }

    const statusMessage = `🌟 *ගුඩ් ${new Date().getHours() < 12 ? 'මෝනිම්🥰' : 'නයිට්🎀😘'}, ${pushname}!* ⭕\n\n` +
      `⭕ *Bot Name:* DILSHAN MD\n⭕ *Current Version:* ${localVersion}\n⭕ *Latest Version:* ${latestVersion}\n⭕ *Total Plugins:* ${pluginCount}\n⭕ *Total Commands:* ${totalCommands}\n\n` +
      `⭕ *System Info:*\n⏳ *Uptime:* ${uptime}\n⭕ *RAM Usage:* ${ramUsage}MB / ${totalRam}MB\n⭕ *Host Name:* ${hostName}\n⭕ *Last Update:* ${lastUpdate}\n\n` +
      `⭕ *Changelog:*\n${latestChangelog}\n\n` +
      `⭕ *GitHub Repo:* ${githubRepo}\n⭕ *Owner:* 𝐌𝐑 𝐃𝐈𝐋𝐒𝐇𝐀𝐍💛(https://github.com/laksidunimsara1)\n\n${updateMessage}\n\n💛 *Hey! Don't forget to fork & star the repo!*`;

    // Send the status message with an image
    await conn.sendMessage(from, {
      image: { url: 'https://raw.githubusercontent.com/LAKSIDUOFFICIAL/LAKSIDU-BOT/refs/heads/main/Screenshot_20250208-114759_Photo%20Editor.jpg' },
      caption: statusMessage,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '',
          newsletterName: '𓆩𝐌𝐑 𝐃𝐈𝐋𝐒𝐇𝐀𝐍💛𓆪',
          serverMessageId: 143
        }
      }
    }, { quoted: mek });
  } catch (error) {
    console.error('Error fetching version info:', error);
    reply('❌ An error occurred while checking the bot version.');
  }
});
