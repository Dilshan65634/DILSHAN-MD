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
    const _0x3a9262 = "╭━━━〔 *" + config.BOT_NAME + "* 〕━━━┈⊷\n┃🦋╭──────────────\n┃❄️│ 👤 𝕆𝕨𝕟𝕖𝕣̾ : *" + config.OWNER_NAME + "*\n┃❄️│ 🗽 𝔹𝕒𝕚𝕝𝕖𝕪𝕤 : *Multi Device*\n┃❄️│ ❄️ 𝕋𝕪𝕡𝕖 : *NodeJs*\n┃❄️│ 🏩 ℙ𝕝𝕒𝕥𝕗𝕠𝕣𝕞 : *Panel*\n┃❄️│ 🤔 𝕄𝕠𝕕𝕖 : *[" + config.MODE + "]*\n┃❄️│ ✅ ℙ𝕣𝕖𝕗𝕚𝕩 : *[" + config.PREFIX + "]*\n┃❄️│ ❤️‍🔥 𝕍𝕖𝕣𝕤𝕚𝕠𝕟 : *4.0.0 Antiban*\n┃❄️╰──────────────\n╰━━━━━━━━━━━━━━━┈⊷\n╭━━〔 *⏩MENU LIST⏮️* 〕━━┈⊷\n┃⏩╭─────────────·๏\n┃☢️│1️⃣  📥 *Download Menu*\n┃☢️│2️⃣  👥 *Group Menu*\n┃☢️│3️⃣  😄 *Fun Menu*\n┃☢️│4️⃣  👑 *Owner Menu*\n┃☢️│5️⃣  🤖 *AI Menu*\n┃☢️│6️⃣  🎎 *Anime Menu*\n┃☢️│7️⃣  🔄 *Convert Menu*\n┃☢️│8️⃣  📌 *Other Menu*\n┃☢️│9️⃣  💞 *Reactions Menu*\n┃☢️│🔟  🏠 *Main Menu*\n┃⏮️╰───────────┈⊷\n╰──────────────┈⊷\n> " + config.DESCRIPTION;
    const _0x18e40d = {
      'mentionedJid': [_0x5253a9.sender],
      'forwardingScore': 0x3e7,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': {
        'newsletterJid': "",
        'newsletterName': config.OWNER_NAME,
        'serverMessageId': 0x8f
      }
    };
    const _0x579a22 = async () => {
      try {
        return await _0x1f175b.sendMessage(_0x98cd0, {
          'image': {
            'url': config.MENU_IMAGE_URL || ''
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
            'url': ""
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
        'content': "╭━━━〔 *Download Menu* 〕━━━┈⊷\n┃☢️╭──────────────\n┃🚀│ 🌐 *Social Media*\n┃🚀│ • facebook [url]\n┃🚀│ • mediafire [url]\n┃🚀│ • tiktok [url]\n┃🚀│ • twitter [url]\n┃🚀│ • Insta [url]\n┃🚀│ • apk [app]\n┃🚀│ • img [query]\n┃🚀│ • tt2 [url]\n┃🚀│ • pins [url]\n┃🚀│ • apk2 [app]\n┃🚀│ • fb2 [url]\n┃🚀│ • pinterest [url]\n┃🚀│ • porn\n┃🚀│ • xvideos\n┃🚀│ ⏮️🎵 *Music/Video⏩\n┃🚀│ • spotify [query]\n┃🚀│ • play [song]\n┃🚀│ • play2-10 [song]\n┃🚀│ • audio [url]\n┃🚀│ • video [url]\n┃🚀│ • video2-10 [url]\n┃🚀│ • ytmp3 [url]\n┃🚀│ • ytmp4 [url]\n┃🚀│ • plyy [name]\n┃🚀│ • darama [name]\n┃☢️╰──────────────\n╰━━━━━━━━━━━━━━━┈⊷\n> " + config.DESCRIPTION,
        'image': true
      },
      '2': {
        'title': "👥 * * 👥",
        'content': "╭━━━〔 *Group Menu* 〕━━━┈⊷\n┃★╭──────────────\n┃★│ 🛠️ *Management*\n┃★│ • grouplink\n┃★│ • kickall\n┃★│ • kickall2\n┃★│ • kickall3\n┃★│ • add @user\n┃★│ • remove @user\n┃★│ • kick @user\n┃★╰──────────────\n┃★╭──────────────\n┃★│ ⚡ *Admin Tools*\n┃★│ • promote @user\n┃★│ • demote @user\n┃★│ • dismiss \n┃★│ • revoke\n┃★│ • mute [time]\n┃★│ • unmute\n┃★│ • lockgc\n┃★│ • unlockgc\n┃★╰──────────────\n┃★╭──────────────\n┃★│ 🏷️ *Tagging*\n┃★│ • tag @user\n┃★│ • hidetag [msg]\n┃★│ • tagall\n┃★│ • tagadmins\n┃★│ • invite\n┃★╰──────────────\n╰━━━━━━━━━━━━━━━┈⊷\n> " + config.DESCRIPTION,
        'image': true
      },
      '3': {
        'title': "😄 *Fun Menu* 😄",
        'content': "╭━━━〔 *Fun Menu* 〕━━━┈⊷\n┃★╭──────────────\n┃★│ 🎭 *Interactive*\n┃★│ • shapar\n┃★│ • rate @user\n┃★│ • insult @user\n┃★│ • hack @user\n┃★│ • ship @user1 @user2\n┃★│ • character\n┃★│ • pickup\n┃★│ • joke\n┃★╰──────────────\n┃★╭──────────────\n┃★│ 😂 *Reactions*\n┃★│ • hrt\n┃★│ • hpy\n┃★│ • syd\n┃★│ • anger\n┃★│ • shy\n┃★│ • kiss\n┃★│ • mon\n┃★│ • cunfuzed\n┃★╰──────────────\n╰━━━━━━━━━━━━━━━┈⊷\n> " + config.DESCRIPTION,
        'image': true
      },
      '4': {
        'title': "👑 *Owner Menu* 👑",
        'content': "╭━━━〔 *Owner Menu* 〕━━━┈⊷\n┃★╭──────────────\n┃★│ ⚠️ *Restricted*\n┃★│ • block @user\n┃★│ • unblock @user\n┃★│ • fullpp [img]\n┃★│ • setpp [img]\n┃★│ • restart\n┃★│ • shutdown\n┃★│ • updatecmd\n┃★╰───────────���──\n┃★╭──────────────\n┃★│ ℹ️ *Info Tools*\n┃★│ • gjid\n┃★│ • jid @user\n┃★│ • adultmenu \n┃★│ • mpesamenu\n┃★╰──────────────\n╰━━━━━━━━━━━━━━━┈⊷\n> " + config.DESCRIPTION,
        'image': true
      },
      '5': {
        'title': "🤖 *AI Menu* 🤖",
        'content': "╭━━━〔 *AI Menu* 〕━━━┈⊷\n┃★╭──────────────\n┃★│ 💬 *Chat AI*\n┃★│ • ai [query]\n┃★│ • gpt3 [query]\n┃★│ • gpt2 [query]\n┃★│ • gptmini [query]\n┃★│ • gpt [query]\n┃★│ • meta [query]\n┃★╰──────────────\n┃★╭──────────────\n┃★│ 🖼️ *Image AI*\n┃★│ • imagine [text]\n┃★│ • imagine2 [text]\n┃★╰──────────────\n┃★╭──────────────\n┃★│ 🔍 *Specialized*\n┃★│ • blackbox [query]\n┃★│ • luma [query]\n┃★│ • dj [query]\n┃★│ • khan [query]\n┃★╰──────────────\n╰━━━━━━━━━━━━━━━┈⊷\n> " + config.DESCRIPTION,
        'image': true
      },
      '6': {
        'title': "🎎 *Anime Menu* 🎎",
        'content': "╭━━━〔 *Anime Menu* 〕━━━┈⊷\n┃★╭──────────────\n┃★│ 🖼️ *Images*\n┃★│ • fack\n┃★│ • dog\n┃★│ • awoo\n┃★│ • garl\n┃★│ • waifu\n┃★│ • neko\n┃★│ • megnumin\n┃★│ • maid\n┃★│ • loli\n┃★╰──────────────\n┃★╭──────────────\n┃★│ 🎭 *Characters*\n┃★│ • animegirl\n┃★│ • animegirl1-5\n┃★│ • anime1-5\n┃★│ • foxgirl\n┃★│ • naruto\n┃★╰──────────────\n╰━━━━━━━━━━━━━━━┈⊷\n> " + config.DESCRIPTION,
        'image': true
      },
      '7': {
        'title': "🔄 *Convert Menu* 🔄",
        'content': "╭━━━〔 *Convert Menu* 〕━━━┈⊷\n┃★╭──────────────\n┃★│ 🖼️ *Media*\n┃★│ • sticker [img]\n┃★│ • sticker2 [img]\n┃★│ • emojimix 😎+😂\n┃★│ • take [name,text]\n┃★│ • tomp3 [video]\n┃★╰──────────────\n┃★╭──────────────\n┃★│ 📝 *Text*\n┃★│ • fancy [text]\n┃★│ • tts [text]\n┃★│ • trt [text]\n┃★│ • base64 [text]\n┃★│ • unbase64 [text]\n┃★╰──────────────\n╰━━━━━━━━━━━━━━━┈⊷\n> " + config.DESCRIPTION,
        'image': true
      },
      '8': {
        'title': "📌 *Other Menu* 📌",
        'content': "╭━━━〔 *Other Menu* 〕━━━┈⊷\n┃★╭──────────────\n┃★│ 🕒 *Utilities*\n┃★│ • timenow\n┃★│ • date\n┃★│ • count [num]\n┃★│ • calculate [expr]\n┃★│ • adultmenu\n┃★╰──────────────\n┃★╭──────────────\n┃★│ 🎲 *Random*\n┃★│ • flip\n┃★│ • coinflip\n┃★│ • rcolor\n┃★│ • roll\n┃★│ • fact\n┃★╰──────────────\n┃★╭──────────────\n┃★│ 🔍 *Search*\n┃★│ • define [word]\n┃★│ • news [query]\n┃★│ • movie [name]\n┃★│ • weather [loc]\n┃★╰──────────────\n╰━━━━━━━━━━━━━━━┈⊷\n> " + config.DESCRIPTION,
        'image': true
      },
      '9': {
        'title': "💞 *Reactions Menu* 💞",
        'content': "╭━━━〔 *Reactions Menu* 〕━━━┈⊷\n┃★╭──────────────\n┃★│ ❤️ *Affection*\n┃★│ • cuddle @user\n┃★│ • hug @user\n┃★│ • kiss @user\n┃★│ • lick @user\n┃★│ • pat @user\n┃★╰──────────────\n┃★╭──────────────\n┃★│ 😂 *Funny*\n┃★│ • bully @user\n┃★│ • bonk @user\n┃★│ • yeet @user\n┃★│ • slap @user\n┃★│ • kill @user\n┃★╰──────────────\n┃★╭──────────────\n┃★│ 😊 *Expressions*\n┃★│ • blush @user\n┃★│ • smile @user\n┃★│ • happy @user\n┃★│ • wink @user\n┃★│ • poke @user\n┃★╰──────────────\n╰━━━━━━━━━━━━━━━┈⊷\n> " + config.DESCRIPTION,
        'image': true
      },
      '10': {
        'title': "🏠 *Main Menu* 🏠",
        'content': "╭━━━〔 *Main Menu* 〕━━━┈⊷\n┃☢️╭──────────────\n┃☢️│ ℹ️ *Bot Info*\n┃☢️│ • ping\n┃☢️│ • live\n┃☢️│ • alive\n┃☢️│ • runtime\n┃☢️│ • uptime\n┃☢️│ • repo\n┃☢️│ • owner\n┃☢️╰──────────────\n┃☢️╭──────────────\n┃☢️│ 🛠️ *Controls*\n┃☢️│ • mpesamenu\n┃☢️│ • adultmenu\n┃☢️│ • restart\n│☢️│  • menu\n┃☢️╰──────────────\n╰━━━━━━━━━━━━━━━┈⊷\n> " + config.DESCRIPTION,
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
                    'url': config.MENU_IMAGE_URL || ""
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
