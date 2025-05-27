//========= alive command ===========

const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*👋 Hello ${pushname}*

╭───────────━━━┈⊷
┃★╭──────────────
┃★│ 𝑶𝑾𝑵𝑬𝑹 : \`ᴅɪʟꜱʜᴀɴ_ᴀꜱʜɪɴꜱᴀ`\
`𝑩𝑨𝑰𝑳𝑬𝒀𝑺` : \`ᴍᴜʟᴛɪ_ᴅᴇᴠɪᴄᴇ`\
`┃★│𝑻𝒀𝑷𝑬` : \`ɴᴏᴅᴇ.ᴊꜱ`\
┃★│ 𝑷𝑳𝑨𝑻𝑭𝑶𝑹𝑴 : \`ʀᴇᴘʟɪᴛ`\
┃★│ 𝑴𝑶𝑫𝑬 : \`ᴘᴜʙʟɪᴄ`\
┃★│ 𝑷𝑹𝑰𝑭𝑰𝑿 : [.]
┃★│ 𝑽𝑬𝑹𝑺𝑰𝑶𝑵 : 2.0.0`\
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
 
> *©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙸𝙻𝚂𝙷𝙰𝙽-𝙼𝙳
`
return await conn.sendMessage(from,{image: {url: "https://i.ibb.co/zgCFFCX/SulaMd.jpg"},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
