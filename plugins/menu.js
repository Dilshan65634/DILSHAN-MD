cmd({
  pattern: "menu",
  desc: "Show interactive menu system",
  category: "menu",
  react: "📁",
  filename: __filename,
}, async (m, conn) => {
  const menuText = `
┏━━━━━━━━━━━━━━┓
┃   *DILSHAN MD MENU*  
┗━━━━━━━━━━━━━━┛

1┃• AI  
2┃• ANIME  
3┃• REACTION  
4┃• CONVERT  
5┃• FUN  
6┃• DOWNLOAD  
7┃• LIST  
8┃• MAIN MENU  
9┃• GROUP MENU  
10┃• ALL MENU  
11┃• OWNER MENU  
12┃• OTHER MENU

Powered by: *DILSHAN MD*
  `;
  await m.sendMessage(m.jid, { text: menuText }, { quoted: m });
});
await _0x1f175b.sendMessage(_0x98cd0, {
  image: {
    url: config.MENU_IMAGE_URL || 'https://i.ibb.co/Kx3sxSfr/dinus.jpg'
  },
  caption: _0x3a9262,
  buttons: [
    {
      buttonId: `.menu`,
      buttonText: { displayText: '🔗 Visit Website' },
      type: 1
    }
  ],
  footer: 'DILSHAN MD BOT'
}, { quoted: _0x482d64 });
