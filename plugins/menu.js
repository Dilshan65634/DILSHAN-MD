const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `
> *❒ 👋 ʜᴇʟʟᴏ ${pushname}* \n\n
> *❒* *ʀᴜɴᴛɪᴍᴇ* : *${runtime(process.uptime())}*
> *❒* *ᴍᴏᴅᴇ* : *${config.MODE}*
> *❒* *ᴘʀᴇғɪx* : *${config.PREFIX}*
> *❒* *ʀᴀᴍ ᴜsᴇ* : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(require('os').totalmem / 1024 / 1024)}ᴍʙ*
> *❒* *ᴠɪʀꜱᴏɴ* : *1.0.0*


*❒ 1 • ᴏᴡɴᴇʀ ᴍᴇɴᴜ*
*❒ 2 • ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ*
*❒ 3 • ᴀɪ ᴍᴇɴᴜ*
*❒ 4 • sᴇᴀʀᴄʜ ᴍᴇɴᴜ*
*❒ 5 • ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ*
*❒ 6 • ᴍᴀɪɴ ᴍᴇɴᴜ*
*❒ 7 • ɢʀᴏᴜᴘ ᴍᴇɴᴜ*
*❒ 8 • ᴏᴛʜᴇʀ ᴍᴇɴᴜ*
⁠

⦁ *ʀᴇᴘʟʏ ᴡɪᴛʜ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ sᴇʟᴇᴄᴛ*

> *ᴅɪʟꜱʜᴀɴ ᴍᴅ*`;

        const vv = await conn.sendMessage(from, { image: { url:config.ALIVE_IMG}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`👤 𝙾𝚆𝙽𝙴𝚁  𝙲𝙾𝙼𝙼𝙰𝙽𝙳  𝙻𝙸𝚂𝚃 👤

 ◉ *ᴏᴡɴᴇʀ*
 ◉ *ʀᴇᴘᴏ*
 ◉ *ꜱʏꜱᴛᴇᴍ*
 ◉ *ꜱᴛᴀᴛᴜꜱ*
 ◉ *ʙʟᴏᴄᴋ*
 ◉ *ᴜɴʙʟᴏᴄᴋ*
 ◉ *ᴄʟᴇᴀʀᴄʜᴀᴛs*
 ◉ *sᴇᴛᴘᴘ*
 ◉ *ʙʀᴏᴀᴅᴄᴀsᴛ*
 ◉ *ᴊɪᴅ*
 ◉ *ɢᴊɪᴅ*
 ◉ *ʀᴇꜱᴛᴀʀᴛ*
 ◉ *ᴜᴘᴅᴀᴛᴇ*
 ◉ *ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
 ◉ *sʜᴜᴛᴅᴏᴡɴ*
 ◉ *ᴀʟɪᴠᴇ*
 ◉ *ᴀʙᴏᴜᴛ*
 ◉ *ᴅᴇʟᴇᴛᴇ*

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏᴡɴᴇʀ: 19*

> *ᴅɪʟꜱʜᴀɴ ᴍᴅ*`);
                        break;
                    case '2':               
                        reply(`🔄 𝙲𝙾𝙽𝚅𝙴𝚁𝚃  𝙲𝙾𝙼𝙼𝙰𝙽𝙳  𝙻𝙸𝚂𝚃 🔄
                        
 ◉ *ᴛᴀᴋᴇ* 
 ◉ *ᴜʀʟ* 
 ◉ *sᴛɪᴄᴋᴇʀ*

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴄᴏɴᴠᴇʀᴛ: 03*

> *ᴅɪʟꜱʜᴀɴ ᴍᴅ*`);
                        break;
                    case '3':               
                        reply(`🤖 𝙰𝙸  𝙲𝙾𝙼𝙼𝙰𝙽𝙳  𝙻𝙸𝚂𝚃 🤖

 ◉ *ᴀɪ* 
 ◉ *ᴅᴇᴇᴘꜱᴇᴇᴋ*
 ◉ *ᴏᴘᴇɴᴀɪ*

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴀɪ: 03*

> *ᴅɪʟꜱʜᴀɴ ᴍᴅ*`);
                        break;
                    case '4':               
                        reply(`🔍 𝚂𝙴𝙰𝚁𝙲𝙷  𝙲𝙾𝙼𝙼𝙰𝙽𝙳  𝙻𝙸𝚂𝚃 🔎
                         
 ◉ *ʏᴛꜱ  <ᴛᴇxᴛ>*
 ◉ *ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*
 ◉ *ɪᴍɢ <ᴛᴇxᴛ>*

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ sᴇᴀʀᴄʜ: 03*

> *ᴅɪʟꜱʜᴀɴ ᴍᴅ*`);
                        break;
                    case '5':               
                        reply(`📥 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳  𝙲𝙾𝙼𝙼𝙰𝙽𝙳  𝙻𝙸𝚂𝚃 📥

 ◉ *ᴀᴘᴋ* 
 ◉ *ᴛᴡɪᴛᴛᴇʀ* 
 ◉ *ɢᴏᴏɢʟᴇᴅʀɪᴠᴇ* 
 ◉ *ᴍᴇᴅɪᴀғɪʀᴇ* 
 ◉ *ғᴀᴄᴇʙᴏᴏᴋ*
 ◉ *ɪɴꜱᴛᴀɢʀᴀᴍɢ* 
 ◉ *ᴍᴏᴠɪᴇ*
 ◉ *soɴɢ* 
 ◉ *ᴠɪᴅᴇᴏ*
 ◉ *ᴛɪᴋᴛᴏᴋ*
 ◉ *ɪᴍɢ* 
 ◉ *ᴘʀɪɴᴛᴇʀꜱᴇᴛ*


⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴅᴏᴡɴʟᴏᴀᴅ: 12*

> *ᴅɪʟꜱʜᴀɴ ᴍᴅ*`);
                        break;
                    case '6':               
                        reply(`📜 𝙼𝙰𝙸𝙽  𝙲𝙾𝙼𝙼𝙰𝙽𝙳  𝙻𝙸𝚂𝚃 📜

 ◉ *ᴀʟɪᴠᴇ* 
 ◉ *ᴀʙᴏᴜᴛ* 
 ◉ *ᴍᴇɴᴜ* 
 ◉ *ᴀʟʟᴍᴇɴᴜ*  
 ◉ *ꜱʏꜱᴛᴇᴍ* 
 ◉ *ᴘɪɴɢ* 

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴍᴀɪɴ: 06*

> *ᴅɪʟꜱʜᴀɴ ᴍᴅ*`);
                        break;
                    case '7':               
                        reply(`👥 𝙶𝚁𝙾𝚄𝙿  𝙲𝙾𝙼𝙼𝙰𝙽𝙳  𝙻𝙸𝚂𝚃 👥

◉ *ᴘʀᴏᴍᴏᴛᴇ*
◉ *ᴅᴇᴍᴏᴛᴇ*
◉ *ᴋɪᴄᴋ*
◉ *ᴀᴅᴅ*
◉ *ɢᴇᴛᴘɪᴄ*
◉ *sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
◉ *sᴇᴛɢᴏᴏᴅʙʏᴇ*
◉ *ᴀᴅᴍɪɴs*
◉ *ɢɴᴀᴍᴇ* 
◉ *ᴛᴀɢᴀʟʟ* 
◉ *ᴛᴀɢᴀᴅᴍɪɴ* 
◉ *ᴏᴘᴇɴᴛɪᴍʀ/ᴄʟᴏsᴇᴛɪᴍᴇ*
◉ *ɢɪɴғᴏ*
◉ *ɢʟɪɴᴋ* 
◉ *ɢᴅᴇsᴄ*
◉ *ᴍᴜᴛᴇ*
◉ *ᴜɴᴍᴜᴛᴇ*
◉ *ʟᴏᴄᴋ*
◉ *ᴜɴʟᴏᴄᴋ*
◉ *ᴅᴇʟᴇᴛᴇ*
◉ *ᴋɪᴄᴋᴀʟʟ*

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ɢʀᴏᴜᴘ: 21*

> *ᴅɪʟꜱʜᴀɴ ᴍᴅ*`);
                        break;
                    case '8':               
                        reply(`*🧚‍♂️ 𝙾𝚃𝙷𝙴𝚁  𝙲𝙾𝙼𝙼𝙰𝙽𝙳  𝙻𝙸𝚂𝚃 🧚‍♂️*
                        
◉ *sᴀᴠᴇ*
◉ *ᴘᴀɪʀ <ᴘᴜᴛ ᴜʀ #>*

⭓ *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏᴛʜᴇʀ 02*

> *ᴅɪʟꜱʜᴀɴ ᴍᴅ*`

return await conn.sendMessage(from,{image: {url: "https://i.ibb.co/zgCFFCX/SulaMd.jpg"},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
