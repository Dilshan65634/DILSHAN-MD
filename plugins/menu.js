const config = require("../config");
const {
  cmd,
  commands
} = require("../command");
cmd({
  'pattern': "menu",
  'desc': "Show interactive menu system",
  'category': 'menu',
  'react': '🚀',
  'filename': __filename
}, async (_0x1f175b, _0x482d64, _0x5253a9, {
  from: _0x98cd0,
  reply: _0x4cf25d
}) => {
  try {
    const _0x3a9262 = `╭━━━〔 *𝐃𝐈𝐋𝐒𝐇𝐀𝐍_𝐌𝐃* 〕━━━┈⊷
    ┃○╭──────────────
    ┃○│ 👤 𝕆𝕨𝕟𝕖𝕣̾ : *ᴅɪʟꜱʜᴀɴ ᴀꜱʜɪɴꜱᴀ*
    ┃○│ 🗽 𝔹𝕒𝕚𝕝𝕖𝕪𝕤 : *ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ*
    ┃○│ ❄️ 𝕋𝕪𝕡𝕖 : *ɴᴏᴅᴇ.ᴊꜱ*
    ┃○│ 🏩 ℙ𝕝𝕒𝕥𝕗𝕠𝕣𝕞 : *ʀᴇᴘʟɪᴛ*
    ┃○│ 🤔 𝕄𝕠𝕕𝕖 : *ᴘᴜʙʟɪᴄ*
    ┃○│ ✅ ℙ𝕣𝕖𝕗𝕚𝕩 : *[.]*
    ┃○│ ▣ 𝕍𝕖𝕣𝕤𝕚𝕠𝕟 : *2.0.0 ʙᴇᴛᴀ*
    ┃○╰──────────────
    ╰━━━━━━━━━━━━━━━┈⊷
    ╭━━〔│▂ *MENU LIST* ▂│〕━━┈⊷
    ┃⏩╭─────────────·๏
    ┃☢️│1️⃣  📥 *Download Menu*
    ┃☢️│2️⃣  👥 *Group Menu*
    ┃☢️│3️⃣  😄 *Fun Menu*
    ┃☢️│4️⃣  👑 *Owner Menu*
    ┃☢️│5️⃣  🤖 *AI Menu*
    ┃☢️│6️⃣  🎎 *Anime Menu*
    ┃☢️│7️⃣  🔄 *Convert Menu*
    ┃☢️│8️⃣  📌 *Other Menu*
    ┃☢️│9️⃣  💞 *Reactions Menu*
    ┃☢️│🔟  🏠 *Main Menu*
    ┃⏮️╰───────────┈⊷
    ╰──────────────┈⊷\
    >  ©🄿🄾🅆🄴🅁🄳 🅱🆈  😈 𝐃𝐈𝐋𝐒𝐇𝐀𝐍 𝐌𝐃`;
    const _0x18e40d = {
      'mentionedJid': [_0x5253a9.sender],
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': {
        'newsletterJid': "120363399450741861@newsletter",
        'newsletterName':"𝐃𝐈𝐋𝐒𝐇𝐀𝐍_𝐌𝐃",
        'serverMessageId': 0x8f
      }
    };
    const _0x579a22 = async () => {
      try {
        return await _0x1f175b.sendMessage(_0x98cd0, {
          'image': {
            'url':"https://files.catbox.moe/zqu8s7.jpg"
          },
          'caption': _0x3a9262,
          'contextInfo': _0x18e40d
        }, {
          'quoted': _0x482d64
        });
      } catch (_0xda0c92) {
        console.log("Image send failed, falling back to text");
        return await _0x1f175b.sendMessage(_0x98cd0, {
          'text': _0x3a9262,
          'contextInfo': _0x18e40d
        }, {
          'quoted': _0x482d64
        });
      }
    };
    const _0x5080a8 = async () => {
      try {
        await new Promise(_0x3a860f => setTimeout(_0x3a860f, 0x3e8));
        await _0x1f175b.sendMessage(_0x98cd0, {
          'audio': {
            'url': "https://files.catbox.moe/g50hun.m4a"
          },
          'mimetype': "audio/mp4",
          'ptt': true
        }, {
          'quoted': _0x482d64
        });
      } catch (_0x5d14db) {
        console.log("Audio send failed, continuing without it");
      }
    };
    let _0x45ec7b;
    try {
      _0x45ec7b = await Promise.race([_0x579a22(), new Promise((_0x3c57de, _0x49525b) => setTimeout(() => _0x49525b(new Error("Image send timeout")), 0x2710))]);
      await Promise.race([_0x5080a8(), new Promise((_0x425d84, _0x698f24) => setTimeout(() => _0x698f24(new Error("Audio send timeout")), 0x1f40))]);
    } catch (_0x23d134) {
      console.log("Menu send error:", _0x23d134);
      if (!_0x45ec7b) {
        _0x45ec7b = await _0x1f175b.sendMessage(_0x98cd0, {
          'text': _0x3a9262,
          'contextInfo': _0x18e40d
        }, {
          'quoted': _0x482d64
        });
      }
    }
    const _0x184367 = _0x45ec7b.key.id;
    const _0x70be46 = {
      '1': {
        'title': "📥 *Download Menu* 📥",
        'content': `╭━━━〔 *Download Menu* 〕━━━┈⊷
        ┃☢️╭──────────────
        ┃🚀│ 🌐 *Social Media*
        ┃🚀│ • facebook [url]
        ┃🚀│ • mediafire [url]
        ┃🚀│ • tiktok [url]
        ┃🚀│ • twitter [url]
        ┃🚀│ • Insta [url]
        ┃🚀│ • apk [app]
        ┃🚀│ • img [query]
        ┃🚀│ • tt2 [url]
        ┃🚀│ • pins [url]
        ┃🚀│ • apk2 [app]
        ┃🚀│ • fb2 [url]
        ┃🚀│ • pinterest [url]
        ┃🚀│ • porn
        ┃🚀│ • xvideos
        ┃🚀│ ⏮️🎵 *Music/Video⏩
        ┃🚀│ • spotify [query]
        ┃🚀│ • play [song]
        ┃🚀│ • play2-10 [song]\n
        ┃🚀│ • audio [url]
        ┃🚀│ • video [url]
        ┃🚀│ • video2-10 [url]
        ┃🚀│ • ytmp3 [url]
        ┃🚀│ • ytmp4 [url]
        ┃🚀│ • plyy [name]
        ┃🚀│ • darama [name]
        ┃☢️╰────────────
        ╰━━━━━━━━━━━━━━━┈⊷
        >🄿🄾🅆🄴🅁🄳 🅱🆈  😈 𝐃𝐈𝐋𝐒𝐇𝐀𝐍 𝐌𝐃  `,
        'image': true
      },
      '2': {
        'title': "👥 * * 👥",
        'content': `╭━━━〔 *Group Menu* 〕━━━┈⊷
        ┃★╭──────────────
        ┃★│ 🛠️ *Management*
        ┃★│ • grouplink
        ┃★│ • kickall\n┃★│ • kickall2
        ┃★│ • kickall3\n┃★│ • add @user
        ┃★│ • remove @user\n┃★│ • kick @user
        ┃★╰──────────────
        ┃★╭──────────────
        ┃★│ ⚡ *Admin Tools*
        ┃★│ • promote @user
        ┃★│ • demote @user
        ┃★│ • dismiss 
        ┃★│ • revoke
        ┃★│ • mute [time]
        ┃★│ • unmute
        ┃★│ • lockgc
        ┃★│ • unlockgc
        ┃★╰──────────────
        ┃★╭──────────────
        ┃★│ 🏷️ *Tagging*
        ┃★│ • tag @user
        ┃★│ • hidetag [msg]
        ┃★│ • tagall
        ┃★│ • tagadmins
        ┃★│ • invite
        ┃★╰──────────────
        ╰━━━━━━━━━━━━━━━┈⊷
        >`,
        'image': true
      },
      '3': {
        'title': "😄 *Fun Menu* 😄",
        'content': `╭━━━〔 *Fun Menu* 〕━━━┈⊷
        ┃★╭──────────────
        ┃★│ 🎭 *Interactive*
        ┃★│ • shapar
        ┃★│ • rate @user
        ┃★│ • insult @user
        ┃★│ • hack @user
        ┃★│ • ship @user1 @user2
        ┃★│ • character
        ┃★│ • pickup
        ┃★│ • joke
        ┃★╰──────────────
        ┃★╭──────────────
        ┃★│ 😂 *Reactions*
        ┃★│ • hrt
        ┃★│ • hpy
        ┃★│ • syd
        ┃★│ • anger
        ┃★│ • shy
        ┃★│ • kiss
        ┃★│ • mon
        ┃★│ • cunfuzed
        ┃★╰──────────────
        ╰━━━━━━━━━━━━━━━┈⊷
        > `,
        'image': true
      },
      '4': {
        'title': "👑 *Owner Menu* 👑",
        'content': `╭━━━〔 *Owner Menu* 〕━━━┈⊷
        ┃★╭──────────────
        ┃★│ ⚠️ *Restricted*
        ┃★│ • block @user
        ┃★│ • unblock @user
        ┃★│ • fullpp [img]
        ┃★│ • setpp [img]
        ┃★│ • restart
        ┃★│ • shutdown
        ┃★│ • updatecmd
        ┃★╰───────────���──
        ┃★╭──────────────
        ┃★│ ℹ️ *Info Tools*
        ┃★│ • gjid
        ┃★│ • jid @user
        ┃★│ • adultmenu 
        ┃★│ • mpesamenu
        ┃★╰──────────────
        ╰━━━━━━━━━━━━━━━┈⊷
         `,
        'image': true
      },
      '5': {
        'title': "🤖 *AI Menu* 🤖",
        'content': `╭━━━〔 *AI Menu* 〕━━━┈⊷
        ┃★╭──────────────
        ┃★│ 💬 *Chat AI*
        ┃★│ • ai [query]
        ┃★│ • gpt3 [query]
        ┃★│ • gpt2 [query]
        ┃★│ • gptmini [query]
        ┃★│ • gpt [query]
        ┃★│ • meta [query]\
        ┃★╰──────────────
        ┃★╭──────────────
        ┃★│ 🖼️ *Image AI*
        ┃★│ • imagine [text]
        ┃★│ • imagine2 [text]
        ┃★╰──────────────
        ┃★╭──────────────
        ┃★│ 🔍 *Specialized*
        ┃★│ • blackbox [query]
        ┃★│ • luma [query]
        ┃★│ • dj [query]
        ┃★│ • khan [query]
        ┃★╰──────────────
        ╰━━━━━━━━━━━━━━━┈⊷
         `,
        'image': true
      },
      '6': {
        'title': "🎎 *Anime Menu* 🎎",
        'content': `╭━━━〔 *Anime Menu* 〕━━━┈⊷
        ┃★╭──────────────
        ┃★│ 🖼️ *Images*
        ┃★│ • fack
        ┃★│ • dog
        ┃★│ • awoo
        ┃★│ • garl
        ┃★│ • waifu
        ┃★│ • neko
        ┃★│ • megnumin
        ┃★│ • maid
        ┃★│ • loli
        ┃★╰──────────────
        ┃★╭──────────────
        ┃★│ 🎭 *Characters*
        ┃★│ • animegirl
        ┃★│ • animegirl1-5
        ┃★│ • anime1-5
        ┃★│ • foxgirl
        ┃★│ • naruto
        ┃★╰──────────────
        ╰━━━━━━━━━━━━━━━┈⊷
        > `,
        'image': true
      },
      '7': {
        'title': "🔄 *Convert Menu* 🔄",
        'content': `╭━━━〔 *Convert Menu* 〕━━━┈⊷
        ┃★╭──────────────
        ┃★│ 🖼️ *Media*
        ┃★│ • sticker [img]
        ┃★│ • sticker2 [img]
        ┃★│ • emojimix 😎+😂
        ┃★│ • take [name,text]
        ┃★│ • tomp3 [video]
        ┃★╰──────────────
        ┃★╭──────────────
        ┃★│ 📝 *Text*
        ┃★│ • fancy [text]
        ┃★│ • tts [text]
        ┃★│ • trt [text]
        ┃★│ • base64 [text]
        ┃★│ • unbase64 [text]
        ┃★╰──────────────
       ╰━━━━━━━━━━━━━━━┈⊷>
       `,
        'image': true
      },
      '8': {
        'title': "📌 *Other Menu* 📌",
        'content': `╭━━━〔 *Other Menu* 〕━━━┈⊷
        ┃★╭──────────────
        ┃★│ 🕒 *Utilities*
        ┃★│ • timenow
        ┃★│ • date
        ┃★│ • count [num]
        ┃★│ • calculate [expr]
        ┃★│ • adultmenu
        ┃★╰──────────────
        ┃★╭──────────────
        ┃★│ 🎲 *Random*
        ┃★│ • flip
        ┃★│ • coinflip
        ┃★│ • rcolor
        ┃★│ • roll
        ┃★│ • fact
        ┃★╰──────────────
        ┃★╭──────────────
        ┃★│ 🔍 *Search*
        ┃★│ • define [word]
        ┃★│ • news [query]
        ┃★│ • movie [name]
        ┃★│ • weather [loc]
        ┃★╰──────────────
        ╰━━━━━━━━━━━━━━━┈⊷
         `,
        'image': true
      },
      '9': {
        'title': "💞 *Reactions Menu* 💞",
        'content': `╭━━━〔 *Reactions Menu* 〕━━━┈⊷
        ┃★╭──────────────
        ┃★│ ❤️ *Affection*
        ┃★│ • cuddle @user
        ┃★│ • hug @user
        ┃★│ • kiss @user
        ┃★│ • lick @user
        ┃★│ • pat @user
        ┃★╰──────────────
        ┃★╭──────────────
        ┃★│ 😂 *Funny*
        ┃★│ • bully @user
        ┃★│ • bonk @user
        ┃★│ • yeet @user
        ┃★│ • slap @user
        ┃★│ • kill @user
        ┃★╰──────────────
        ┃★╭──────────────
        ┃★│ 😊 *Expressions*
        ┃★│ • blush @user
        ┃★│ • smile @user
        ┃★│ • happy @user
        ┃★│ • wink @user
        ┃★│ • poke @user
        ┃★╰──────────────
        ╰━━━━━━━━━━━━━━━┈⊷  >
         `,
        'image': true
      },
      '10': {
        'title': "🏠 *Main Menu* 🏠",
        'content': `╭━━━〔 *Main Menu* 〕━━━┈⊷
        ┃☢️╭──────────────
        ┃☢️│ ℹ️ *Bot Info*
        ┃☢️│ • ping
        ┃☢️│ • live
        ┃☢️│ • alive
        ┃☢️│ • runtime
        ┃☢️│ • uptime
        ┃☢️│ • repo
        ┃☢️│ • owner
        ┃☢️╰──────────────
        ┃☢️╭──────────────
        ┃☢️│ 🛠️ *Controls*
        ┃☢️│ • mpesamenu
        ┃☢️│ • adultmenu
        ┃☢️│ • restart
        │☢️│  • menu
        ┃☢️╰─────────────
        ╰━━━━━━━━━━━━━━━┈⊷>
        `,
        'image': true
      }
    };
    const _0x529a8e = async _0x4cf589 => {
      try {
        const _0x1a45cf = _0x4cf589.messages[0x0];1198517427
        if (!_0x1a45cf?.['message'] || !_0x1a45cf.key?.["remoteJid"]) {
          return;
        }1198517427
        const _0x16cae9 = _0x1a45cf.message.extendedTextMessage?.["contextInfo"]?.['stanzaId'] === _0x184367;
        if (_0x16cae9) {
          const _0x266910 = _0x1a45cf.message.conversation || _0x1a45cf.message.extendedTextMessage?.["text"];
          const _0x473499 = _0x1a45cf.key.remoteJid;
          if (_0x70be46[_0x266910]) {
            const _0x2ea0c9 = _0x70be46[_0x266910];
            try {
              if (_0x2ea0c9.image) {
                await _0x1f175b.sendMessage(_0x473499, {
                  'image': {
                    'url':"https://files.catbox.moe/zqu8s7.jpg"
                  },
                  'caption': _0x2ea0c9.content,
                  'contextInfo': _0x18e40d
                }, {
                  'quoted': _0x1a45cf
                });
              } else {
                await _0x1f175b.sendMessage(_0x473499, {
                  'text': _0x2ea0c9.content,
                  'contextInfo': _0x18e40d
                }, {
                  'quoted': _0x1a45cf
                });
              }
              await _0x1f175b.sendMessage(_0x473499, {
                'react': {
                  'text': '✅',
                  'key': _0x1a45cf.key
                }
              });
            } catch (_0x283101) {
              console.log("Menu reply error:", _0x283101);
              await _0x1f175b.sendMessage(_0x473499, {
                'text': _0x2ea0c9.content,
                'contextInfo': _0x18e40d
              }, {
                'quoted': _0x1a45cf
              });
            }
          } else {
            await _0x1f175b.sendMessage(_0x473499, {
              'text': "❌ *Invalid Option!* ❌\n\nPlease reply with a number between 1-10 to select a menu.\n\n*Example:* Reply with \"1\" for Download Menu\n\n> " + config.DESCRIPTION,
              'contextInfo': _0x18e40d
            }, {
              'quoted': _0x1a45cf
            });
          }
        }
      } catch (_0x35eeca) {
        console.log("Handler error:", _0x35eeca);
      }
    };
    _0x1f175b.ev.on("messages.upsert", _0x529a8e);
    setTimeout(() => {
      _0x1f175b.ev.off("messages.upsert", _0x529a8e);
    }, 0x493e0);
  } catch (_0xf3fc40) {
    console.error("Menu Error:", _0xf3fc40);
    try {
      await _0x1f175b.sendMessage(_0x98cd0, {
        'text': "❌ Menu system is currently busy. Please try again later.\n\n> " + config.DESCRIPTION
      }, {
        'quoted': _0x482d64
      });
    } catch (_0x5d05fd) {
      console.log("Final error handling failed:", _0x5d05fd);
    }
  }
});
