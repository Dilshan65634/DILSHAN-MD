const config = require("../config");
const {
  cmd,
  commands
} = require('../command');
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require('../lib/functions');
const apkdl = require("../lib/apkdl");
var N_FOUND = '';
if (config.LANG === 'SI') {
  N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*";
} else {
  N_FOUND = "*I couldn't find anything :(*";
}
var urlneed = '';
if (config.LANG === 'SI') {
  urlneed = "එය playstore වෙතින් apps බාගත කරයි.";
} else {
  urlneed = "It downloads apps from playstore.";
}
var imgmsg = '';
if (config.LANG === 'SI') {
  imgmsg = "```කරුණාකර වචන කිහිපයක් ලියන්න!```";
} else {
  imgmsg = "```Please write a few words!```";
}
cmd({
  'pattern': "apk",
  'react': "🗃️",
  'alias': ["findapk", "playstore"],
  'desc': urlneed,
  'category': "download",
  'use': ".apk whatsapp",
  'filename': __filename
}, async (_0x41f3ce, _0x45d596, _0x446576, {
  from: _0x3fe536,
  prefix: _0x1504f5,
  l: _0x5ed5c4,
  quoted: _0x4450be,
  body: _0x129e6b,
  isCmd: _0x564f40,
  command: _0x438358,
  args: _0x4f7409,
  q: _0x3d3d7e,
  isGroup: _0x4cb718,
  sender: _0x496b72,
  senderNumber: _0x16e4d1,
  botNumber2: _0x3849ec,
  botNumber: _0x4260cf,
  pushname: _0x5ba0e2,
  isMe: _0x31ec14,
  isOwner: _0x343949,
  groupMetadata: _0x3260b1,
  groupName: _0x1cb3df,
  participants: _0x2e68b1,
  groupAdmins: _0x2e63e5,
  isBotAdmins: _0x56b4f8,
  isAdmins: _0x63a771,
  reply: _0x379a8b
}) => {
  try {
    if (!_0x3d3d7e) {
      return await _0x41f3ce.sendMessage(_0x3fe536, {
        'text': imgmsg
      }, {
        'quoted': _0x45d596
      });
    }
    const _0x2b9c00 = await apkdl.search(_0x3d3d7e);
    if (_0x2b9c00.length < 0x1) {
      return await _0x41f3ce.sendMessage(_0x3fe536, {
        'text': N_FOUND
      }, {
        'quoted': _0x45d596
      });
    }
    var _0x5e653e = [];
    var _0x5e653e = [];
    _0x2b9c00.map(_0x54834f => {
      _0x5e653e.push({
        'buttonId': _0x1504f5 + "dapk " + _0x54834f.id,
        'buttonText': {
          'displayText': '' + _0x54834f.name
        },
        'type': 0x1
      });
    });
    const _0xf3fe57 = {
      'image': {
        'url': config.LOGO
      },
      'caption': "*🗃️ DARK SHUTER APK DOWNLODER 🗃️*",
      'footer': config.FOOTER,
      'buttons': _0x5e653e,
      'headerType': 0x4
    };
    return await _0x41f3ce.buttonMessage(_0x3fe536, _0xf3fe57, _0x45d596);
  } catch (_0x5a58e7) {
    _0x379a8b("*ERROR !!*");
    _0x5ed5c4(_0x5a58e7);
  }
});
cmd({
  'pattern': "dapk",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3d209c, _0x1c7010, _0x4c28dd, {
  from: _0x2dd089,
  l: _0x16b55b,
  quoted: _0x45c89e,
  body: _0x168526,
  isCmd: _0x39b97d,
  command: _0x4555f1,
  args: _0x57709f,
  q: _0x4cfc77,
  isGroup: _0x504663,
  sender: _0x2934ff,
  senderNumber: _0x3770d7,
  botNumber2: _0x4abeea,
  botNumber: _0xb3191b,
  pushname: _0x1e7530,
  isMe: _0x1b3003,
  isOwner: _0x1cc7bf,
  groupMetadata: _0x2ecd14,
  groupName: _0x5e820b,
  participants: _0x22a669,
  groupAdmins: _0xc6de79,
  isBotAdmins: _0x328ffe,
  isAdmins: _0x154f36,
  reply: _0x24d177
}) => {
  try {
    await _0x3d209c.sendMessage(_0x2dd089, {
      'react': {
        'text': '📥',
        'key': _0x1c7010.key
      }
    });
    if (!_0x4cfc77) {
      return await _0x3d209c.sendMessage(_0x2dd089, {
        'text': "*Need apk link...*"
      }, {
        'quoted': _0x1c7010
      });
    }
    const _0x32e39c = await apkdl.download(_0x4cfc77);
    let _0x5bd1e9 = "*📚 Name :* " + _0x32e39c.name + "\n*📦 Developer :* " + _0x32e39c["package"] + "\n*⬆️ Last update :* " + _0x32e39c.lastup + "\n*📥 Size :* " + _0x32e39c.size;
    await _0x3d209c.sendMessage(_0x2dd089, {
      'image': {
        'url': _0x32e39c.icon
      },
      'caption': _0x5bd1e9
    }, {
      'quoted': _0x1c7010
    });
    await _0x3d209c.sendMessage(_0x2dd089, {
      'react': {
        'text': '✔',
        'key': _0x1c7010.key
      }
    });
  } catch (_0x125033) {
    _0x24d177("*ERROR !!*");
    _0x16b55b(_0x125033);
  }
});
