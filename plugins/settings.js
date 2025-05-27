const { updateEnv, readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');
const EnvVar = require('../lib/mongodbenv');

cmd({
    pattern: "settings",
    alias: ["setting","s"],
    desc: "Check bot online or not.",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isOwner) return;

        const config = await readEnv();

        let work;
        switch (config.MODE) {
            case 'public':
                work = '𝙿𝚄𝙱𝙻𝙸𝙲🌎';
                break;
            case 'private':
                work = '𝙿𝚁𝙸𝚅𝙰𝚃𝙴👤';
                break;
            case 'groups':
                work = '𝙶𝚁𝙾𝚄𝙿 𝙾𝙽𝙻𝚈👥';
                break;
            case 'inbox':
                work = '𝙸𝙽𝙱𝙾𝚇 𝙾𝙽𝙻𝚈🫂';
                break;
            default:
                work = '𝚄𝙽𝙺𝙾𝚆𝙽🛑';
        }

        let autoStatus = config.AUTO_READ_STATUS === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵';
        let autoVoice = config.AUTO_VOICE === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵';
        let autoSticker = config.AUTO_STICKER === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵';
        let autoReply = config.AUTO_REPLY === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵';
        let ownerreact = config.OWNER_REACT === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵';
let autoreact = config.AUTO_REACT === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵';

        const vv = await conn.sendMessage(from, {
            image: { url: 'https://i.ibb.co/zgCFFCX/SulaMd.jpg' },
            caption: `
♻️ *මෙම පනිවිඩය  විනාඩි 5 කින් ස්වයංක්‍රීයව මකා දමයි*🚫
┏━━━━━━━━━━━━━━━━━━┓
┃╭┈────────━━━━───╮
┣┣⃟⚟➺ 𝚆𝙾𝚁𝙺 𝚃𝚈𝙿𝙴 : *${work}*
┣┣⃟⚟➺ 𝙰𝚄𝚃𝙾 𝚂𝙴𝙴𝙽 𝚂𝚃𝙰𝚃𝚄𝚂 : *${autoStatus}*
┗━━━━━━━━━━━━━━━━━━┛

> 🔗𝘾𝙐𝙎𝙏𝙊𝙈𝙄𝙕𝙀  𝙎𝙀𝙏𝙏𝙄𝙉𝙂𝗦🔗⤵️

┏━━━━━━━━━━━━━━━━━━┓
> _𝐁𝐎𝐓 𝐖𝐎𝐑𝐊 𝐓𝐘𝐏𝐄_⤵️
┣┣⃟⚟➺ 🌎 1.1 𝙿𝚄𝙱𝙻𝙸𝙲 𝚆𝙾𝚁𝙺
┣┣⃟⚟➺ 👤 1.2 𝙿𝚁𝙸𝚅𝙰𝚃𝙴 𝚆𝙾𝚁𝙺 
┣┣⃟⚟➺ 👥 1.3 𝙶𝚁𝙾𝚄𝙿 𝙾𝙽𝙻𝚈 𝚆𝙾𝚁𝙺
┣┣⃟⚟➺ 🫂 1.4 𝙸𝙽𝙱𝙾𝚇 𝙾𝙽𝙻𝚈 𝚆𝙾𝚁𝙺

> _𝐀𝐔𝐓𝐎 𝐒𝐄𝐄𝐍 𝐒𝐓𝐀𝐓𝐔𝐒 𝐎𝐍/𝐎𝐅𝐅_⤵️
┣┣⃟⚟➺ ♻️ 2.1 𝙰𝚄𝚃𝙾 𝚁𝙴𝙰𝙳 𝚂𝚃𝙰𝚃𝚄𝚂 𝙾𝙽
┣┣⃟⚟➺ 🚫 2.2 𝙰𝚄𝚃𝙾 𝚁𝙴𝙰𝙳 𝚂𝚃𝙰𝚃𝚄𝚂 𝙾𝙵𝙵
┗━━━━━━━━━━━━━━━━━━┛`
        }, { quoted: mek });

        // Auto-delete the message after 10 seconds
        setTimeout(async () => {
            await conn.sendMessage(from, { delete: vv.key });
        }, 300000); // 10 seconds timeout for deletion

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        reply('.update MODE:public');
                        reply('.restart');
                        break;
                    case '1.2':
                        reply('.update MODE:private');
                        reply('.restart');
                        break;
                    case '1.3':
                        reply('.update MODE:groups');
                        reply('.restart');
                        break;
                    case '1.4':
                        reply('.update MODE:inbox');
                        reply('.restart');
                        break;
                    case '2.1':
                        reply('.update AUTO_READ_STATUS:true');
                         reply('.restart');
                        break;
                    case '2.2':
                        reply('.update AUTO_READ_STATUS:false');
                         reply('.restart');
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }
                // Auto-delete the option selection after 10 seconds
                setTimeout(async () => {
                    await conn.sendMessage(from, { delete: msg.key });
                }, 2000); // 10 seconds timeout for deletion

            }
        });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
