const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')
cmd({
    pattern: "bind",
    alias: ["lakicsdsdsddddddddd6"], 
    react: "📑",
    desc: "ai chat.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://dark-shan-yt.koyeb.app/ai/gemini?q=${q}`)
return reply(`${data.data}

> ㋛︎ ᴘᴏᴡᴇʀᴅ ʙʏ  ᴍʀ  ᴰᴵᴸˢᴴᴬᴺ ᴹᴰ`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//===============================
