const {
  File
} = require('megajs');
const fs = require('fs');
const {
  igdl
} = require('ruhend-scraper');
const googleTTS = require("google-tts-api");
const axios = require('axios');
const config = require('../config');
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
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
const path = require('path');
const {
  tmpdir
} = require('os');
const fetch = require('node-fetch');
const Crypto = require("crypto");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
async function videoToWebp(_0x23e04a) {
  const _0x15f51d = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".webp");
  const _0x5b60fa = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".mp4");
  fs.writeFileSync(_0x5b60fa, _0x23e04a);
  await new Promise((_0x3f4a33, _0x3b4747) => {
    ffmpeg(_0x5b60fa).on("error", _0x3b4747).on("end", () => _0x3f4a33(true)).addOutputOptions(["-vcodec", 'libwebp', "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse", "-loop", '0', "-ss", "00:00:00", '-t', "00:00:05", "-preset", "default", '-an', "-vsync", '0']).toFormat("webp").save(_0x15f51d);
  });
  const _0x5c7f73 = fs.readFileSync(_0x15f51d);
  fs.unlinkSync(_0x15f51d);
  fs.unlinkSync(_0x5b60fa);
  return _0x5c7f73;
}
function toAudio(_0x2c4ad0, _0x2e0d21) {
  return ffmpeg(_0x2c4ad0, ["-vn", "-ac", '2', "-b:a", "128k", '-ar', "44100", '-f', "mp3"], _0x2e0d21, 'mp3');
}
function toPTT(_0x5b9b03, _0x2d5e94) {
  return ffmpeg(_0x5b9b03, ["-vn", '-c:a', "libopus", "-b:a", "128k", "-vbr", 'on', "-compression_level", '10'], _0x2d5e94, "opus");
}
function toVideo(_0x13fa54, _0x451069) {
  return ffmpeg(_0x13fa54, ["-c:v", "libx264", "-c:a", "aac", "-ab", "128k", '-ar', "44100", "-crf", '32', "-preset", "slow"], _0x451069, "mp4");
}
cmd({
  'pattern': 'logo1',
  'desc': "image.",
  'react': '🌌',
  'category': 'logo',
  'use': '.logo1',
  'filename': __filename
}, async (_0x1b4c18, _0x379ce7, _0xc78826, {
  from: _0x42abc8,
  mnu: _0x17d95e,
  quoted: _0x2ed773,
  body: _0x21c230,
  isCmd: _0x3282d5,
  command: _0x365bf9,
  args: _0x488c91,
  q: _0x1dafba,
  isGroup: _0x1a9926,
  sender: _0xcba357,
  senderNumber: _0x563a8f,
  botNumber2: _0x3911fc,
  botNumber: _0x2ef506,
  pushname: _0x1b8fd7,
  isMe: _0x477118,
  isOwner: _0x184f05,
  groupMetadata: _0x1b888f,
  groupName: _0x2c7ef9,
  participants: _0x2c2be0,
  groupAdmins: _0x3feaf8,
  isBotAdmins: _0x10b119,
  isAdmins: _0xc08cb8,
  reply: _0x304ac3
}) => {
  try {
    if (!_0x1dafba) {
      return _0x304ac3("Please Provide A Name");
    }
    await _0x1b4c18.sendMessage(_0x42abc8, {
      'image': {
        'url': "https://dummyimage.com/600x400/&text=" + _0x1dafba
      },
      'caption': config.FOOTER
    }, {
      'quoted': _0x379ce7
    });
  } catch (_0x55d5ae) {
    console.log(_0x55d5ae);
    _0x304ac3('' + _0x55d5ae);
  }
});
cmd({
  'pattern': "logo2",
  'desc': 'image.',
  'react': '🌌',
  'category': "logo",
  'use': ".logo2",
  'filename': __filename
}, async (_0x24e80b, _0xd291d9, _0x5b18cc, {
  from: _0x58d766,
  mnu: _0x3d3ffc,
  quoted: _0x408850,
  body: _0x50113f,
  isCmd: _0x300b4e,
  command: _0x34ffb4,
  args: _0x297211,
  q: _0xbb84d4,
  isGroup: _0x34366f,
  sender: _0x36f5c,
  senderNumber: _0x25a73c,
  botNumber2: _0xdebc79,
  botNumber: _0x1394ec,
  pushname: _0x54f3b3,
  isMe: _0x3b1587,
  isOwner: _0x1692c6,
  groupMetadata: _0x5a3631,
  groupName: _0x4cd53b,
  participants: _0x58bc35,
  groupAdmins: _0x221c44,
  isBotAdmins: _0x123c29,
  isAdmins: _0x145582,
  reply: _0x44c49f
}) => {
  try {
    if (!_0xbb84d4) {
      return _0x44c49f("Please Provide A Name");
    }
    await _0x24e80b.sendMessage(_0x58d766, {
      'image': {
        'url': "https://www.flamingtext.com/net-fu/proxy_form.cgi?&script=fluffy-logo&text=" + _0xbb84d4
      },
      'caption': config.FOOTER
    }, {
      'quoted': _0xd291d9
    });
  } catch (_0x9aebb2) {
    console.log(_0x9aebb2);
    _0x44c49f('' + _0x9aebb2);
  }
});
cmd({
  'pattern': 'weather',
  'desc': "🌤 Get weather information for a location",
  'react': '🌤',
  'use': ".weather colombo",
  'category': "other",
  'filename': __filename
}, async (_0x469962, _0x5626e0, _0x436229, {
  from: _0x162256,
  q: _0x4240b8,
  reply: _0x38e82a
}) => {
  try {
    if (!_0x4240b8) {
      return _0x38e82a("❗ Please provide a city name. Usage: .weather [city name]");
    }
    const _0x242304 = "http://api.openweathermap.org/data/2.5/weather?q=" + _0x4240b8 + '&appid=' + "2d61a72574c11c4f36173b627f8cb177" + "&units=metric";
    const _0x5155f9 = await axios.get(_0x242304);
    const _0x12f37e = _0x5155f9.data;
    const _0x5ac8d7 = config.FOOTER;
    const _0x5eb0be = "\n🌍 *Weather Information for " + _0x12f37e.name + ", " + _0x12f37e.sys.country + "* 🌍\n\n🌡️ *Temperature*: " + _0x12f37e.main.temp + "°C\n🌡️ *Feels Like*: " + _0x12f37e.main.feels_like + "°C\n🌡️ *Min Temp*: " + _0x12f37e.main.temp_min + "°C\n🌡️ *Max Temp*: " + _0x12f37e.main.temp_max + "°C\n💧 *Humidity*: " + _0x12f37e.main.humidity + "%\n☁️ *Weather*: " + _0x12f37e.weather[0x0].main + "\n🌫️ *Description*: " + _0x12f37e.weather[0x0].description + "\n💨 *Wind Speed*: " + _0x12f37e.wind.speed + " m/s\n🔽 *Pressure*: " + _0x12f37e.main.pressure + " hPa\n\n" + _0x5ac8d7 + "\n";
    return _0x38e82a(_0x5eb0be);
  } catch (_0x4f33f3) {
    console.log(_0x4f33f3);
    if (_0x4f33f3.response && _0x4f33f3.response.status === 0x194) {
      return _0x38e82a("🚫 ¢ιту ησт ƒσυη∂. ρℓєαѕє ¢нє¢к тнє ѕρєℓℓιηg αη∂ тяу αgαιη.");
    }
    return _0x38e82a("⚠️ αη єяяσя σ¢¢υяяє∂ ωнιℓє тяαηѕℓαтιηg тнє тєχт. ρℓєαѕє тяу αgαιη ℓαтєя.");
  }
});
cmd({
  'pattern': "ttp",
  'react': '✨',
  'alias': ["texttos"],
  'desc': "Text to convert sticker",
  'category': "convert",
  'use': ".ttp HI",
  'filename': __filename
}, async (_0x1f3a4c, _0x3fbf92, _0x5806fb, {
  from: _0x3f3987,
  l: _0xb69a55,
  quoted: _0x67cb5d,
  body: _0x1bb245,
  isCmd: _0x5dbc4b,
  command: _0xe9da57,
  args: _0x25be23,
  q: _0x51f0fe,
  isGroup: _0x5564f7,
  sender: _0x3a9b66,
  senderNumber: _0x412e46,
  botNumber2: _0x377f1c,
  botNumber: _0x4ba537,
  pushname: _0x42faa4,
  isMe: _0x4f11d6,
  isOwner: _0x40913a,
  groupMetadata: _0x1a8d05,
  groupName: _0x5e38bf,
  participants: _0x2e777b,
  groupAdmins: _0x402139,
  isBotAdmins: _0x1608a1,
  isAdmins: _0x128e6e,
  reply: _0x962d8e
}) => {
  try {
    let _0x5dd839 = await getBuffer("https://ruloaooa-swgen.hf.space/brat?text=" + _0x51f0fe);
    await _0x1f3a4c.sendMessage(_0x3f3987, {
      'sticker': _0x5dd839
    }, {
      'quoted': _0x3fbf92
    });
  } catch (_0x4a6198) {
    console.log(_0x4a6198);
  }
});
var imgmsg = '';
if (config.LANG === 'SI') {
  imgmsg = "*ඡායාරූපයකට mention දෙන්න!*";
} else {
  imgmsg = "*Reply to a photo !*";
}
var descg = '';
if (config.LANG === 'SI') {
  descg = "එය ඔබගේ mention දුන් ඡායාරූපය ස්ටිකර් බවට පරිවර්තනය කරයි.";
} else {
  descg = "It converts your replied photo to sticker.";
}
cmd({
  'pattern': "sticker",
  'react': '🔮',
  'alias': ['s', 'stic'],
  'desc': "Convert to sticker",
  'category': "convert",
  'use': ".sticker <Reply to image>",
  'filename': __filename
}, async (_0x2db6f5, _0x31ae5a, _0x433a77, {
  from: _0x34a689,
  l: _0x218a83,
  quoted: _0x32f816,
  body: _0x4a04a1,
  isCmd: _0x3ebd24,
  command: _0xf33c76,
  args: _0x1f0a8b,
  q: _0x48b6ce,
  isGroup: _0x52ca23,
  sender: _0x1340d3,
  senderNumber: _0x5c1ad1,
  botNumber2: _0x55905b,
  botNumber: _0x2b2664,
  pushname: _0x10f1c3,
  isMe: _0x2bc3cc,
  isOwner: _0x33e971,
  groupMetadata: _0x37f10d,
  groupName: _0xe5f253,
  participants: _0x157037,
  groupAdmins: _0xd06d13,
  isBotAdmins: _0x5169d6,
  isAdmins: _0x246fb7,
  reply: _0x55719d
}) => {
  try {
    const _0x52a913 = _0x433a77.quoted ? _0x433a77.quoted.type === "viewOnceMessage" : false;
    const _0x3fe1fb = _0x433a77.quoted ? _0x433a77.quoted.type === 'imageMessage' || (_0x52a913 ? _0x433a77.quoted.msg.type === "imageMessage" : false) : false;
    const _0x3cb328 = _0x433a77.quoted ? _0x433a77.quoted.type === "stickerMessage" : false;
    if (_0x433a77.type === "imageMessage" || _0x3fe1fb) {
      var _0x4c54b = getRandom('');
      if (_0x3fe1fb) {
        await _0x433a77.quoted.download(_0x4c54b);
      } else {
        await _0x433a77.download(_0x4c54b);
      }
      let _0x5512a7 = new Sticker(_0x4c54b + ".jpg", {
        'pack': _0x10f1c3,
        'author': '',
        'type': _0x48b6ce.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
        'categories': ['🤩', '🎉'],
        'id': "12345",
        'quality': 0x4b,
        'background': "transparent"
      });
      const _0x4b28a1 = await _0x5512a7.toBuffer();
      return _0x2db6f5.sendMessage(_0x34a689, {
        'sticker': _0x4b28a1
      }, {
        'quoted': _0x31ae5a
      });
    } else {
      if (_0x3cb328) {
        var _0x464a6c = getRandom('');
        await _0x433a77.quoted.download(_0x464a6c);
        let _0x476a6f = new Sticker(_0x464a6c + '.webp', {
          'pack': _0x10f1c3,
          'author': '',
          'type': _0x48b6ce.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
          'categories': ['🤩', '🎉'],
          'id': "12345",
          'quality': 0x4b,
          'background': 'transparent'
        });
        const _0xfd3933 = await _0x476a6f.toBuffer();
        return _0x2db6f5.sendMessage(_0x34a689, {
          'sticker': _0xfd3933
        }, {
          'quoted': _0x31ae5a
        });
      } else {
        return await _0x55719d(imgmsg);
      }
    }
  } catch (_0x453bcc) {
    _0x55719d("*Error !!*");
    _0x218a83(_0x453bcc);
  }
});
async function videoToWebp(_0xa4376) {
  const _0x508c37 = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".webp");
  const _0x4d3f35 = path.join(tmpdir(), Crypto.randomBytes(0x6).readUIntLE(0x0, 0x6).toString(0x24) + ".mp4");
  fs.writeFileSync(_0x4d3f35, _0xa4376);
  await new Promise((_0x5df6e6, _0x3b8f50) => {
    ffmpeg(_0x4d3f35).on("error", _0x3b8f50).on("end", () => _0x5df6e6(true)).addOutputOptions(["-vcodec", "libwebp", '-vf', "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse", '-loop', '0', "-ss", '00:00:00', '-t', "00:00:05", "-preset", 'default', "-an", "-vsync", '0']).toFormat('webp').save(_0x508c37);
  });
  const _0x3193cc = fs.readFileSync(_0x508c37);
  fs.unlinkSync(_0x508c37);
  fs.unlinkSync(_0x4d3f35);
  return _0x3193cc;
}
var imgmsg = "*Please give me a text !*";
var descg = "it converts a text to gif sticker.";
cmd({
  'pattern': "attp",
  'react': '✨',
  'alias': ['texttogif'],
  'desc': "Text to convert sticker",
  'category': "convert",
  'use': ".attp HI",
  'filename': __filename
}, async (_0x47fda2, _0x920f8c, _0x50a2ed, {
  from: _0x477af3,
  l: _0x3e3b18,
  quoted: _0x22e7c6,
  body: _0x53d739,
  isCmd: _0x5abd78,
  command: _0x586dfe,
  args: _0x4c08d4,
  q: _0x131146,
  isGroup: _0x11c53a,
  sender: _0x5b852e,
  senderNumber: _0x4b456d,
  botNumber2: _0x5dbe74,
  botNumber: _0x4f57a3,
  pushname: _0x2aa733,
  isMe: _0x113b85,
  isOwner: _0x24fcb8,
  groupMetadata: _0x364f36,
  groupName: _0x8f3a88,
  participants: _0x6b4750,
  groupAdmins: _0x4fc4d4,
  isBotAdmins: _0x1e26eb,
  isAdmins: _0x471d88,
  reply: _0x568127
}) => {
  try {
    if (!_0x131146) {
      return await _0x568127(imgmsg);
    }
    let _0xd50c27 = await getBuffer("https://api-fix.onrender.com/api/maker/attp?text=" + _0x131146);
    await _0x47fda2.sendMessage(_0x477af3, {
      'sticker': await videoToWebp(_0xd50c27)
    }, {
      'quoted': _0x920f8c
    });
  } catch (_0x185bcb) {
    console.log(_0x185bcb);
  }
});
cmd({
  'pattern': "fancy",
  'react': '🪄',
  'category': "convert",
  'desc': "fancy",
  'filename': __filename
}, async (_0x530458, _0x7f43a6, _0x3ed39f, {
  from: _0xba1cf2,
  q: _0x3d99ac,
  prefix: _0x505100,
  isMe: _0x256161,
  reply: _0x1537a7
}) => {
  try {
    if (!_0x3d99ac) {
      return await _0x1537a7("*please give me text !..*");
    }
    let _0x1b418b = await fetchJson("https://www.dark-yasiya-api.site/other/font?text=" + _0x3d99ac);
    if (_0x1b418b.length < 0x1) {
      return await _0x530458.sendMessage(_0xba1cf2, {
        'text': "erro !"
      }, {
        'quoted': _0x3ed39f
      });
    }
    var _0x3d1897 = [];
    _0x1b418b.result.map(_0x2d1779 => {
      _0x3d1897.push({
        'buttonId': _0x505100 + ("fandl " + _0x2d1779.result),
        'buttonText': {
          'displayText': '' + _0x2d1779.result
        },
        'type': 0x1
      });
    });
    const _0x5e3b0f = {
      'image': {
        'url': config.LOGO
      },
      'caption': "*🧧DARK SHUTER FANCY TEXT 🧧*",
      'footer': config.FOOTER,
      'buttons': _0x3d1897,
      'headerType': 0x4
    };
    return await _0x530458.buttonMessage(_0xba1cf2, _0x5e3b0f, _0x3ed39f);
  } catch (_0x4ef43e) {
    console.log(_0x4ef43e);
    await _0x530458.sendMessage(_0xba1cf2, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x3ed39f
    });
  }
});
cmd({
  'pattern': "fandl",
  'react': '🪄',
  'desc': "fancy",
  'filename': __filename
}, async (_0x24d8f9, _0x13f6e, _0x77d751, {
  from: _0x13e386,
  q: _0x378d85,
  prefix: _0x762c66,
  isMe: _0x962b6b,
  reply: _0x27848b
}) => {
  try {
    if (!_0x378d85) {
      return await _0x27848b("*please give me text !..*");
    }
    await _0x27848b(_0x378d85);
  } catch (_0xeb190c) {
    console.log(_0xeb190c);
    await _0x24d8f9.sendMessage(_0x13e386, {
      'text': "🚩 *Error !!*"
    }, {
      'quoted': _0x77d751
    });
  }
});
cmd({
  'pattern': 'ai',
  'desc': "AI chat.",
  'use': ".ai < Hi >",
  'react': '👾',
  'category': "convert",
  'filename': __filename
}, async (_0x2cdfa5, _0x20dd53, _0x504ee7, {
  from: _0x54cc5f,
  args: _0x59ffc5,
  reply: _0x1ebb8d,
  q: _0xe4cabb
}) => {
  try {
    let _0xe533c6 = await fetchJson("https://www.dark-yasiya-api.site/ai/gemini?q=" + _0xe4cabb);
    return _0x1ebb8d("*👾 DARK SHUTER GPT SERVER 👾*\n\n " + _0xe533c6.result);
  } catch (_0x32272f) {
    console.log(_0x32272f);
    _0x1ebb8d('' + _0x32272f);
  }
});
cmd({
  'pattern': "tempmail",
  'desc': "Generate a temporary email address.",
  'use': ".tempmail",
  'category': "convert",
  'react': '✉️',
  'filename': __filename
}, async (_0x34a6bc, _0x3fc5d9, _0x4a988e, {
  from: _0x3b5a0f,
  quoted: _0x448fec,
  isCmd: _0x5fb88c,
  command: _0x59962d,
  isGroup: _0x5dc6dc,
  sender: _0x2dfb14,
  senderNumber: _0x42ca9a,
  reply: _0x56d575
}) => {
  try {
    const _0x521c35 = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1");
    const _0x47a37b = _0x521c35.data;
    if (!_0x47a37b || _0x47a37b.length === 0x0) {
      return _0x56d575("Error: Unable to generate a temporary email. Please try again later.");
    }
    const _0x49b85e = _0x47a37b[0x0];
    await _0x34a6bc.sendMessage(_0x3b5a0f, {
      'text': "✉️ *Temporary Email Generated*\n\n📧 Email: " + _0x49b85e,
      'footer': "test"
    }, {
      'quoted': _0x3fc5d9
    });
  } catch (_0x39db87) {
    console.error(_0x39db87);
    _0x56d575("Error: " + _0x39db87.message);
  }
});
cmd({
  'pattern': "npm",
  'desc': "Search for a package on npm.",
  'react': '📦',
  'use': ".npm < name >",
  'category': "convert",
  'filename': __filename
}, async (_0x4db23e, _0x392fee, _0x249a22, {
  from: _0x46d0de,
  args: _0x27fc95,
  reply: _0x2a223a
}) => {
  if (!_0x27fc95.length) {
    return _0x2a223a("Please provide the name of the npm package you want to search for. Example: !npm express");
  }
  const _0x312942 = _0x27fc95.join(" ");
  const _0x475c9d = "https://registry.npmjs.org/" + encodeURIComponent(_0x312942);
  try {
    let _0xa476f0 = await fetch(_0x475c9d);
    if (!_0xa476f0.ok) {
      throw new Error("Package not found or an error occurred.");
    }
    let _0x1d0256 = await _0xa476f0.json();
    const _0x2cc6e2 = _0x1d0256['dist-tags'].latest;
    const _0x3565c7 = _0x1d0256.description || "No description available.";
    const _0x12dc53 = "https://www.npmjs.com/package/" + _0x312942;
    const _0x166a06 = _0x1d0256.license || "Unknown";
    const _0x5daed7 = _0x1d0256.repository ? _0x1d0256.repository.url || "Not available" : "Not available";
    let _0x2d4d5e = "\n*ＮＰＭ ＳＥＡＲＣＨ ツ*\n\n\n*🔰Npm package :* " + _0x312942 + "\n\n*📄Description :* " + _0x3565c7 + "\n\n*⏸️ Last version :* " + _0x2cc6e2 + "\n\n*🪪 License :* " + _0x166a06 + "\n\n*🪩Repostory :* " + _0x5daed7 + "\n\n*🔗Npm url :* " + _0x12dc53 + "\n\n";
    await _0x4db23e.sendMessage(_0x46d0de, {
      'text': _0x2d4d5e
    }, {
      'quoted': _0x392fee
    });
  } catch (_0x480817) {
    console.error(_0x480817);
    _0x2a223a("An error occurred: " + _0x480817.message);
  }
});
cmd({
  'pattern': 'trt',
  'desc': "Translate text between languages",
  'react': '🌐',
  'use': ".trt < si hi >",
  'category': "convert",
  'filename': __filename
}, async (_0x8d6dfa, _0x21f7da, _0x1baccd, {
  from: _0x1ce3cd,
  q: _0x2d6527,
  reply: _0x299bb0
}) => {
  try {
    const _0x4a6996 = _0x2d6527.split(" ");
    if (_0x4a6996.length < 0x2) {
      return _0x299bb0("❗ Please provide a language code and text. Usage: .translate [language code] [text]");
    }
    const _0x2c7462 = _0x4a6996[0x0];
    const _0x17332f = _0x4a6996.slice(0x1).join(" ");
    const _0x116e16 = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(_0x17332f) + "&langpair=en|" + _0x2c7462;
    const _0xab6493 = await axios.get(_0x116e16);
    const _0x32474f = _0xab6493.data.responseData.translatedText;
    const _0x2c4f0d = "\n🌍 *Translation* 🌍\n\n🔤 *Original*: " + _0x17332f + "\n🔠 *Translated*: " + _0x32474f + "\n🌐 *Language*: " + _0x2c7462.toUpperCase() + "\n\n";
    return _0x299bb0(_0x2c4f0d);
  } catch (_0x36faa7) {
    console.log(_0x36faa7);
    return _0x299bb0("⚠️ αη єяяσя σ¢¢υяяє∂ ωнιℓє тяαηѕℓαтιηg тнє тєχт. ρℓєαѕє тяу αgαιη ℓαтєя.");
  }
});
cmd({
  'pattern': "readmore",
  'desc': "Readmore message",
  'category': "convert",
  'use': ".readmore < text >",
  'react': '📝',
  'filename': __filename
}, async (_0x1f5183, _0x4b3863, _0x2956ac, {
  from: _0x3e3070,
  quoted: _0x4fa616,
  body: _0x54c499,
  isCmd: _0x54c33b,
  command: _0x3d70b3,
  args: _0x39f752,
  q: _0x138c7d,
  isGroup: _0x1ba268,
  sender: _0x465fe5
}) => {
  try {
    let _0x2343cc = _0x138c7d ? _0x138c7d : "No text provided";
    let _0x2b5107 = '​'.repeat(0xfa0);
    let _0x6883 = '' + _0x2b5107 + _0x2343cc;
    await _0x1f5183.sendMessage(_0x3e3070, {
      'text': _0x6883
    }, {
      'quoted': _0x4b3863
    });
    await _0x1f5183.sendMessage(_0x3e3070, {
      'react': {
        'text': '',
        'key': _0x4b3863.key
      }
    });
  } catch (_0x48845b) {
    console.log(_0x48845b);
    reply("Error: " + _0x48845b.message);
  }
});
cmd({
  'pattern': 'obfus',
  'desc': "Encript codes",
  'category': "convert",
  'use': ".obfus < code >",
  'react': '📝',
  'filename': __filename
}, async (_0x582c67, _0x4de538, _0x5238f4, {
  from: _0x286c2d,
  quoted: _0x3ebd83,
  body: _0x9850bc,
  isCmd: _0x52123b,
  command: _0x5b3ee4,
  args: _0xed83c5,
  q: _0x188521,
  isGroup: _0x58c85d,
  sender: _0x4b8e21,
  senderNumber: _0x5439b6,
  botNumber2: _0x3f34a5,
  botNumber: _0x133d0f,
  pushname: _0xeb6343,
  isMe: _0x4c551b,
  isOwner: _0x5f1f08,
  groupMetadata: _0x490063,
  groupName: _0x109536,
  participants: _0xcf2a20,
  groupAdmins: _0x44d84e,
  isBotAdmins: _0x30703c,
  isAdmins: _0x1c51b0,
  reply: _0x1e227b
}) => {
  try {
    _0x1e227b("data.obfuscator.code");
  } catch (_0x4bb8e3) {
    console.log(_0x4bb8e3);
    _0x1e227b('' + _0x4bb8e3);
  }
});
cmd({
  'pattern': "mfire",
  'alias': ['mf', "mediafire"],
  'react': '🔥',
  'desc': "Mediafire download",
  'category': 'download',
  'use': ".mfire < mediafire url >",
  'filename': __filename
}, async (_0x172337, _0x40e7c3, _0x5c84b5, {
  from: _0x2d28ec,
  quoted: _0x5ad199,
  reply: _0x2378cd,
  q: _0x490e08
}) => {
  try {
    if (!_0x490e08) {
      return await _0x2378cd("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖬𝖾𝖽𝗂𝖺𝖿𝗂𝗋𝖾 𝖴𝗋𝗅");
    }
    let _0x21710a = await fetchJson("https://www.dark-yasiya-api.site/download/mfire?url=" + _0x490e08);
    await _0x172337.sendMessage(_0x2d28ec, {
      'document': {
        'url': _0x21710a.result.dl_link
      },
      'mimetype': _0x21710a.result.fileType,
      'fileName': _0x21710a.result.fileName,
      'caption': _0x21710a.result.fileName
    }, {
      'quoted': _0x40e7c3
    });
  } catch (_0x36f0ec) {
    console.log(_0x36f0ec);
    _0x2378cd('' + _0x36f0ec);
  }
});
cmd({
  'pattern': "mega",
  'react': '🍟',
  'alias': ["megadl", "meganz"],
  'desc': "Mega.nz fils download",
  'category': "download",
  'use': ".mega url",
  'filename': __filename
}, async (_0x581f10, _0xaf632e, _0x3fa5b6, {
  from: _0x40fdf1,
  q: _0x51dd2b,
  reply: _0x287c17
}) => {
  if (!_0x51dd2b) {
    return await _0x287c17("*Please provide a mega.nz URL!*");
  }
  try {
    const _0xae381a = File.fromURL(_0x51dd2b);
    await _0xae381a.loadAttributes();
    const _0x1be4bd = await _0xae381a.downloadBuffer();
    if (/mp4/.test(_0xae381a.name)) {
      await _0x581f10.sendMessage(_0x40fdf1, {
        'document': _0x1be4bd,
        'mimetype': "video/mp4",
        'filename': '' + _0xae381a.name
      }, {
        'quoted': _0xaf632e
      });
    } else {
      if (/pdf/.test(_0xae381a.name)) {
        await _0x581f10.sendMessage(_0x40fdf1, {
          'document': _0x1be4bd,
          'mimetype': 'application/pdf',
          'filename': '' + _0xae381a.name
        }, {
          'quoted': _0xaf632e
        });
      } else {
        if (/zip/.test(_0xae381a.name)) {
          await _0x581f10.sendMessage(_0x40fdf1, {
            'document': _0x1be4bd,
            'mimetype': "application/zip",
            'filename': '' + _0xae381a.name
          }, {
            'quoted': _0xaf632e
          });
        } else {
          if (/rar/.test(_0xae381a.name)) {
            await _0x581f10.sendMessage(_0x40fdf1, {
              'document': _0x1be4bd,
              'mimetype': "application/x-rar-compressed",
              'filename': '' + _0xae381a.name
            }, {
              'quoted': _0xaf632e
            });
          } else {
            if (/7z/.test(_0xae381a.name)) {
              await _0x581f10.sendMessage(_0x40fdf1, {
                'document': _0x1be4bd,
                'mimetype': "application/x-7z-compressed",
                'filename': '' + _0xae381a.name
              }, {
                'quoted': _0xaf632e
              });
            } else {
              if (/jpg|jpeg/.test(_0xae381a.name)) {
                await _0x581f10.sendMessage(_0x40fdf1, {
                  'document': _0x1be4bd,
                  'mimetype': "image/jpeg",
                  'filename': '' + _0xae381a.name
                }, {
                  'quoted': _0xaf632e
                });
              } else if (/png/.test(_0xae381a.name)) {
                await _0x581f10.sendMessage(_0x40fdf1, {
                  'document': _0x1be4bd,
                  'mimetype': 'image/png',
                  'filename': '' + _0xae381a.name
                }, {
                  'quoted': _0xaf632e
                });
              } else {
                await _0x581f10.sendMessage(_0x40fdf1, {
                  'document': _0x1be4bd,
                  'mimetype': "application/octet-stream",
                  'filename': '' + _0xae381a.name
                }, {
                  'quoted': _0xaf632e
                });
              }
            }
          }
        }
      }
    }
    await _0x581f10.sendMessage(_0x40fdf1, {
      'react': {
        'text': '✅',
        'key': _0xaf632e.key
      }
    });
  } catch (_0x2c9bc6) {
    console.log(_0x2c9bc6);
    _0x287c17('' + _0x2c9bc6);
  }
});
cmd({
  'pattern': "hirunews",
  'alias': ["hiru", "news1"],
  'react': '⭐',
  'desc': "Hiru news",
  'category': "convert",
  'use': ".hirunews",
  'filename': __filename
}, async (_0x48a472, _0x189c1d, _0x21776e, {
  from: _0x3f9a5e,
  quoted: _0x54a894
}) => {
  try {
    const _0x581561 = await fetchJson("https://www.dark-yasiya-api.site/news/hiru");
    const _0x256a4b = "\n           ⭐ *DARK SHUTER HIRU NEWS* ⭐\n\n       \n• *Title* - " + _0x581561.result.title + "\n\n• *News* - " + _0x581561.result.desc + "\n\n• *Link* - " + _0x581561.result.url + "\n";
    await _0x48a472.sendMessage(_0x3f9a5e, {
      'image': {
        'url': _0x581561.result.image
      },
      'caption': _0x256a4b
    }, {
      'quoted': _0x189c1d
    });
  } catch (_0x50424b) {
    console.log(_0x50424b);
    reply(_0x50424b);
  }
});
cmd({
  'pattern': "download",
  'react': '🍟',
  'alias': ['dn'],
  'desc': "Movie download",
  'category': "extra",
  'use': ".download < Direct Link >",
  'dontAddCommandList': false,
  'filename': __filename
}, async (_0x474c09, _0x344920, _0x366d77, {
  from: _0x42df9c,
  q: _0xd80fc2,
  sender: _0x221171,
  reply: _0x56be7a
}) => {
  try {
    if (!_0xd80fc2) {
      return _0x56be7a("❗ කරුණාකර download link එකක් ලබා දෙන්න.");
    }
    const _0x13260c = _0xd80fc2.trim();
    const _0x5ea784 = /^(https?:\/\/[^\s]+)/;
    if (!_0x5ea784.test(_0x13260c)) {
      return _0x56be7a("❗ දීලා තියෙන URL එක වැරදි. කරුණාකර link එක හොඳින් බලන්න.");
    }
    await _0x474c09.sendMessage(_0x42df9c, {
      'react': {
        'text': '⬇️',
        'key': _0x344920.key
      }
    });
    await _0x474c09.sendMessage(_0x42df9c, {
      'document': {
        'url': _0x13260c
      },
      'caption': "\n\n> *TEST*",
      'mimetype': "video/mp4",
      'fileName': 'test.mp4'
    });
    await _0x474c09.sendMessage(_0x42df9c, {
      'react': {
        'text': '✅',
        'key': _0x344920.key
      }
    });
  } catch (_0x3dce79) {
    _0x56be7a("❗ Error: " + _0x3dce79.message);
  }
});
cmd({
  'pattern': "sirasanews",
  'alias': ['sirasa', 'news2'],
  'react': '🔺',
  'desc': "Sirasa news",
  'category': "convert",
  'use': ".sirasa",
  'filename': __filename
}, async (_0x41583d, _0xa50e87, _0x122b4d, {
  from: _0x2f8f37,
  quoted: _0x5ef974
}) => {
  try {
    const _0x48b7de = await fetchJson("https://www.dark-yasiya-api.site/news/sirasa");
    const _0x2abfd0 = "\n           🔺 *DARK SHUTER SIRASA NEWS* 🔺\n\n       \n• *Title* - " + _0x48b7de.result.title + "\n\n• *News* - " + _0x48b7de.result.desc + "\n\n• *Link* - " + _0x48b7de.result.url + "\n";
    await _0x41583d.sendMessage(_0x2f8f37, {
      'image': {
        'url': _0x48b7de.result.image
      },
      'caption': _0x2abfd0
    }, {
      'quoted': _0xa50e87
    });
  } catch (_0x5d2352) {
    console.log(_0x5d2352);
    reply(_0x5d2352);
  }
});
cmd({
  'pattern': 'derananews',
  'alias': ["derana", "news3"],
  'react': '📑',
  'desc': "Derana news",
  'category': "convert",
  'use': ".derana",
  'filename': __filename
}, async (_0x1035f7, _0xf77b06, _0x1c32f4, {
  from: _0x5e6c90,
  quoted: _0x14009f
}) => {
  try {
    const _0x4686a1 = await fetchJson("https://www.dark-yasiya-api.site/news/derana");
    const _0x3c3ae7 = "\n           📑 *DARK SHUTER DERANA NEWS* 📑\n\n       \n• *Title* - " + _0x4686a1.result.title + "\n\n• *News* - " + _0x4686a1.result.desc + "\n\n• *Date* - " + _0x4686a1.result.date + "\n\n• *Link* - " + _0x4686a1.result.url + "\n";
    await _0x1035f7.sendMessage(_0x5e6c90, {
      'image': {
        'url': _0x4686a1.result.image
      },
      'caption': _0x3c3ae7
    }, {
      'quoted': _0xf77b06
    });
  } catch (_0x2a1eb0) {
    console.log(_0x2a1eb0);
    reply(_0x2a1eb0);
  }
});
cmd({
  'pattern': 'lankadeepanews',
  'alias': ["lankadeepa", "news4"],
  'react': '🕵️‍♂️',
  'desc': "Lankadeepa news",
  'category': "convert",
  'use': ".lankadeepanews",
  'filename': __filename
}, async (_0x15bcd9, _0x3ef25a, _0x2c8647, {
  from: _0x17fa19,
  quoted: _0x335c49,
  reply: _0x2940c4
}) => {
  try {
    const _0x5314f0 = await fetchJson("https://www.dark-yasiya-api.site/news/lankadeepa");
    const _0x1e7563 = "\n           🕵️‍♂️ *DARK SHUTER LANKADEEPA NEWS* 🕵️‍♂️\n\n       \n• *Title* - " + _0x5314f0.result.title + "\n\n• *News* - " + _0x5314f0.result.desc + "\n\n• *Date* - " + _0x5314f0.result.date + "\n\n• *Link* - " + _0x5314f0.result.url + "\n";
    await _0x15bcd9.sendMessage(_0x17fa19, {
      'image': {
        'url': _0x5314f0.result.image
      },
      'caption': _0x1e7563
    }, {
      'quoted': _0x3ef25a
    });
  } catch (_0x27c326) {
    console.log(_0x27c326);
    _0x2940c4(_0x27c326);
  }
});
cmd({
  'pattern': 'bbcnews',
  'alias': ["bbc", "news5"],
  'react': '⛩',
  'desc': "Bbc news",
  'category': "convert",
  'use': ".bbcnews",
  'filename': __filename
}, async (_0x236474, _0x3d25fd, _0x222bff, {
  from: _0x3fc7d2,
  quoted: _0x440a1e,
  reply: _0x3265da
}) => {
  try {
    const _0x74cee8 = await fetchJson("https://www.dark-yasiya-api.site/news/bbc");
    const _0x1167a2 = "\n           ⛩ *DARK SHUTER BBC NEWS* ⛩\n\n       \n• *Title* - " + _0x74cee8.result.title + "\n\n• *News* - " + _0x74cee8.result.desc + "\n\n• *Link* - " + _0x74cee8.result.url + " \n";
    await _0x236474.sendMessage(_0x3fc7d2, {
      'image': {
        'url': _0x74cee8.result.image
      },
      'caption': _0x1167a2
    }, {
      'quoted': _0x3d25fd
    });
  } catch (_0x5c1522) {
    console.log(_0x5c1522);
    _0x3265da(_0x5c1522);
  }
});
cmd({
  'pattern': "tts",
  'react': '❄️',
  'desc': "text to speech.",
  'category': "convert",
  'filename': __filename,
  'use': ".tts <Im Asitha>"
}, async (_0x52de41, _0x58efa7, _0x29cd7c, {
  from: _0x1705a8,
  quoted: _0x36f238,
  body: _0x48cd9a,
  isCmd: _0xeb3ae5,
  command: _0x48deac,
  args: _0x458c5c,
  q: _0x368822,
  i: _0x2fe517,
  isGroup: _0x683b5b,
  sender: _0x3ac495,
  senderNumber: _0x5cb3f5,
  botNumber2: _0x4509a3,
  botNumber: _0x30ccd5,
  pushname: _0x4573a3,
  isMe: _0x47ecfa,
  isOwner: _0xdadbd3,
  groupMetadata: _0x485ed9,
  groupName: _0x596628,
  participants: _0x48bd19,
  groupAdmins: _0x499053,
  isBotAdmins: _0x3e9681,
  isAdmins: _0x4b344c,
  reply: _0x31c31a
}) => {
  try {
    if (!_0x368822) {
      return _0x29cd7c.reply("Please give me Sentence to change into audio.");
    }
    const _0x7ccc49 = googleTTS.getAudioUrl(_0x368822, {
      'lang': 'en',
      'slow': false,
      'host': "https://translate.google.com"
    });
    return _0x52de41.sendMessage(_0x29cd7c.chat, {
      'audio': {
        'url': _0x7ccc49
      },
      'mimetype': "audio/mpeg",
      'fileName': "ttsCitelVoid.m4a"
    }, {
      'quoted': _0x58efa7
    });
  } catch (_0x2eec15) {
    _0x31c31a("*Error !!*");
    _0x31c31a(_0x2eec15);
  }
});
async function GDriveDl(_0x596ca9) {
  let _0x40863e;
  let _0x27c62d = {
    'error': true
  };
  if (!(_0x596ca9 && _0x596ca9.match(/drive\.google/i))) {
    return _0x27c62d;
  }
  const _0x26aa47 = sizeFormatter({
    'std': 'JEDEC',
    'decimalPlaces': 0x2,
    'keepTrailingZeroes': false,
    'render': (_0x2289d3, _0x39abfa) => _0x2289d3 + " " + _0x39abfa + 'B'
  });
  try {
    _0x40863e = (_0x596ca9.match(/\/?id=(.+)/i) || _0x596ca9.match(/\/d\/(.*?)\//))[0x1];
    if (!_0x40863e) {
      throw "ID Not Found";
    }
    _0x27c62d = await fetch("https://drive.google.com/uc?id=" + _0x40863e + "&authuser=0&export=download", {
      'method': 'post',
      'headers': {
        'accept-encoding': "gzip, deflate, br",
        'content-length': 0x0,
        'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8",
        'origin': "https://drive.google.com",
        'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
        'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
        'x-drive-first-party': "DriveWebUi",
        'x-json-requested': "true"
      }
    });
    let {
      fileName: _0x1e8f8a,
      sizeBytes: _0xbd3b8b,
      downloadUrl: _0x2f2608
    } = JSON.parse((await _0x27c62d.text()).slice(0x4));
    if (!_0x2f2608) {
      throw "Link Download Limit!";
    }
    let _0x38e2aa = await fetch(_0x2f2608);
    if (_0x38e2aa.status !== 0xc8) {
      return _0x38e2aa.statusText;
    }
    return {
      'downloadUrl': _0x2f2608,
      'fileName': _0x1e8f8a,
      'fileSize': _0x26aa47(_0xbd3b8b),
      'mimetype': _0x38e2aa.headers.get("content-type")
    };
  } catch (_0x32bb36) {
    console.log(_0x32bb36);
    return _0x27c62d;
  }
}
cmd({
  'pattern': "gdrive",
  'alias': ["googledrive'"],
  'react': '📑',
  'desc': "Download googledrive files.",
  'category': 'download',
  'use': ".gdrive <googledrive link>",
  'filename': __filename
}, async (_0x36d0cc, _0x35ed7c, _0x2e7964, {
  from: _0x11935e,
  l: _0x4ae31d,
  quoted: _0x3bdcf7,
  body: _0x1ffc36,
  isCmd: _0x2804a0,
  command: _0x328c41,
  args: _0x45fb35,
  q: _0x1a0460,
  isGroup: _0x1093dc,
  sender: _0x4f9b30,
  senderNumber: _0x11ce39,
  botNumber2: _0x1a6f20,
  botNumber: _0x521f0b,
  pushname: _0x11e9f1,
  isMe: _0x2f03aa,
  isOwner: _0x56b6ba,
  groupMetadata: _0x4ac590,
  groupName: _0x41715f,
  participants: _0x34de9e,
  groupAdmins: _0x1409f7,
  isBotAdmins: _0x57a3ff,
  isAdmins: _0x11fa88,
  reply: _0x1a139b
}) => {
  try {
    if (!_0x1a0460) {
      return await _0x1a139b("*Please give me googledrive url !!*");
    }
    let _0x213f3b = await GDriveDl(_0x1a0460);
    let _0x22a750 = "*[ Downloading file ]*\n\n";
    _0x22a750 += "*Name :* " + _0x213f3b.fileName + "\n";
    _0x22a750 += "*Size :* " + _0x213f3b.fileSize + "\n";
    _0x22a750 += "*Type :* " + _0x213f3b.downloadUrl;
    await _0x1a139b(_0x22a750);
    const _0x243839 = {
      'document': _0x213f3b.downloadUrl,
      'caption': "\n     \n   *ＤＡＲＫ ＳＨＵＴＥＲ ＭＤ Ｖ2*",
      'mimetype': "video/mp4",
      'fileName': "🎬DARK SHUTER🎬.mp4"
    };
    await _0x36d0cc.sendMessage(_0x11935e, _0x243839);
  } catch (_0x3afc9c) {
    console.error("Error fetching or sending", _0x3afc9c);
    await _0x36d0cc.sendMessage(_0x11935e, "*Error fetching or sending *", {
      'quoted': _0x35ed7c
    });
  }
});
cmd({
  'pattern': 'ig',
  'desc': "To get the instragram.",
  'react': '📑',
  'use': ".ig < Link >",
  'category': "download",
  'filename': __filename
}, async (_0x5cc9f4, _0xb9a285, _0x15c67b, {
  from: _0xa8c6bb,
  quoted: _0x52494b,
  body: _0x4df28f,
  isCmd: _0x27d7db,
  command: _0x2e1e17,
  args: _0x2fe39d,
  q: _0x2c396b,
  isGroup: _0x57e29f,
  sender: _0x57f8f7,
  senderNumber: _0x102110,
  botNumber2: _0x54e068,
  botNumber: _0x14825e,
  pushname: _0x529b22,
  isMe: _0x3720ee,
  isOwner: _0x1ea6ed,
  groupMetadata: _0x575c7f,
  groupName: _0xff0b7c,
  participants: _0x371f85,
  groupAdmins: _0x546863,
  isBotAdmins: _0x5b7fb7,
  isAdmins: _0x2727e9,
  reply: _0xceedfd
}) => {
  try {
    if (!_0x2c396b) {
      return _0x15c67b.reply("Please Give Me a vaild Link...");
    }
    _0x15c67b.react('⬇️');
    let _0x262c41 = await igdl(_0x2c396b);
    let _0x3a84da = await _0x262c41.data;
    for (let _0x271607 = 0x0; _0x271607 < 0x14; _0x271607++) {
      let _0x1d4f56 = _0x3a84da[_0x271607];
      let _0x1b2ffe = _0x1d4f56.url;
      _0x15c67b.react('⬆️');
      await _0x5cc9f4.sendMessage(_0xa8c6bb, {
        'video': {
          'url': _0x1b2ffe
        },
        'mimetype': 'video/mp4',
        'caption': config.FOOTER
      }, {
        'quoted': _0xb9a285
      });
      _0x15c67b.react('✅');
    }
  } catch (_0x1184af) {
    console.log(_0x1184af);
  }
});
cmd({
  'pattern': "animegirl",
  'desc': "Fetch a random anime girl image.",
  'category': "convert",
  'react': '👧',
  'use': ".animegirl < Name >",
  'filename': __filename
}, async (_0x2cd3f8, _0x286faf, _0x545865, {
  from: _0x5232a7,
  quoted: _0x3f950c,
  body: _0x4d215a,
  isCmd: _0x5150ce,
  command: _0x3e1a0f,
  args: _0xa68dfe,
  q: _0xa875d,
  isGroup: _0xf9d095,
  sender: _0x1319e1,
  senderNumber: _0x379590,
  botNumber2: _0x23a3a3,
  botNumber: _0x5282f7,
  pushname: _0x580d3c,
  isMe: _0x186a3f,
  isOwner: _0x42a296,
  groupMetadata: _0x4416ad,
  groupName: _0x28f55d,
  participants: _0x8df65e,
  groupAdmins: _0x46f597,
  isBotAdmins: _0x4a898f,
  isAdmins: _0x514f45,
  reply: _0x5bcb2d
}) => {
  try {
    const _0x5180d9 = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0x4e85a6 = _0x5180d9.data;
    await _0x2cd3f8.sendMessage(_0x5232a7, {
      'image': {
        'url': _0x4e85a6.url
      },
      'caption': "👧 *Random Anime Girl Image* 👧"
    }, {
      'quoted': _0x286faf
    });
  } catch (_0x459665) {
    console.log(_0x459665);
    _0x5bcb2d("Error fetching anime girl image: " + _0x459665.message);
  }
});
cmd({
  'pattern': "upmv",
  'react': '✔️',
  'alias': ["upmvk"],
  'desc': "Movie Searcher",
  'category': "movie",
  'use': ".downjid < Jid > & < Name >",
  'dontAddCommandList': false,
  'filename': __filename
}, async (_0x194d6c, _0x1da2d1, _0x443fde, {
  from: _0x1b02ff,
  l: _0x2ba2a2,
  quoted: _0x1f76ae,
  body: _0x40d207,
  isCmd: _0x4276ac,
  command: _0xae1ba8,
  mentionByTag: _0x409105,
  db_pool: _0x15c892,
  args: _0xd1e7bb,
  q: _0xdc18f6,
  isGroup: _0x23755c,
  sender: _0x3249c5,
  senderNumber: _0x215f7b,
  botNumber2: _0x594285,
  botNumber: _0x4bdba8,
  pushname: _0x4d05b5,
  isMe: _0x31b4c9,
  isOwner: _0x2919b8,
  groupMetadata: _0x4709b6,
  groupName: _0x4c41ea,
  participants: _0x21403e,
  groupAdmins: _0x3f0162,
  isBotAdmins: _0x450f50,
  isCreator: _0xbe3a61,
  isDev: _0xb2838d,
  isAdmins: _0x32e4c,
  reply: _0x5e3757
}) => {
  try {
    if (!_0x443fde.quoted) {
      return _0x5e3757("*ℹ Please mention a Derect Link*");
    }
    if (!_0xdc18f6) {
      return;
    }
    const _0x2424b2 = _0xdc18f6.split(" & ")[0x0];
    const _0x43f4d7 = _0xdc18f6.split(" & ")[0x1];
    await _0x194d6c.sendMessage(_0x2424b2, {
      'document': {
        'url': _0x443fde.quoted.msg
      },
      'caption': "\n" + _0x43f4d7 + "\n\n *ＤＡＲＫ ＳＨＵＴＥＲ ＭＤ Ｖ2* ",
      'mimetype': 'video/mp4',
      'fileName': _0x43f4d7 + ".mp4"
    });
  } catch (_0x2f4d1c) {
    _0x5e3757("❗ Error" + _0x2f4d1c);
    _0x2ba2a2(_0x2f4d1c);
  }
});
cmd({
  'pattern': "gitclone",
  'alias': ["gitdl"],
  'react': '💫',
  'desc': "Download git repos",
  'category': "download",
  'use': ".gitclone <repo link>",
  'filename': __filename
}, async (_0x979784, _0x4aaa5d, _0x10ca5b, {
  from: _0xee4f65,
  l: _0x13fee7,
  quoted: _0x3bd75c,
  body: _0x1ecedc,
  isCmd: _0x12c36b,
  command: _0x5ac995,
  args: _0x23fc6f,
  q: _0x4d3aea,
  isGroup: _0xd3e8fc,
  sender: _0x5eb3b8,
  senderNumber: _0x1598db,
  botNumber2: _0x25c8c2,
  botNumber: _0x275d26,
  pushname: _0x452119,
  isMe: _0x5e566e,
  isOwner: _0x5124b1,
  groupMetadata: _0x5d4dfb,
  groupName: _0x1a16f2,
  participants: _0x3331db,
  groupAdmins: _0x450658,
  isBotAdmins: _0x1c26ad,
  isAdmins: _0x1ae504,
  reply: _0xad71b5
}) => {
  try {
    if (!_0x4d3aea) {
      return await _0xad71b5("🚩*Please Give Me GitHub Repo URL!*");
    }
    let _0x5d5d3f = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
    if (!_0x5d5d3f.test(_0x4d3aea)) {
      return _0xad71b5("🚩*Please Give Me Valid GitHub Repo Link!*");
    }
    let [, _0x14caef, _0x74ba3a] = _0x4d3aea.match(_0x5d5d3f) || [];
    _0x74ba3a = _0x74ba3a.replace(/.git$/, '');
    let _0x426a58 = 'https://api.github.com/repos/' + _0x14caef + '/' + _0x74ba3a + "/zipball";
    let _0x1a32cf = (await fetch(_0x426a58, {
      'method': "HEAD"
    })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[0x1];
    let _0xc8d2a8 = config.FOOTER;
    await _0x979784.sendMessage(_0xee4f65, {
      'document': {
        'url': _0x426a58
      },
      'mimetype': 'application/zip',
      'fileName': _0x1a32cf,
      'caption': _0xc8d2a8
    }, {
      'quoted': _0x4aaa5d
    });
  } catch (_0x55fc6e) {
    _0xad71b5("🚩 *I Can't Find This Repo!*");
    console.log(_0x55fc6e);
  }
});
cmd({
  'pattern': "toptt",
  'react': '🔊',
  'alias': ["toaudio", 'tomp3'],
  'desc': "convert to audio",
  'category': "convert",
  'use': ".toptt <Reply to video>",
  'filename': __filename
}, async (_0x5a834a, _0x5533e2, _0x2118c4, {
  from: _0x2b9334,
  l: _0x335c12,
  quoted: _0x1ddaf8,
  body: _0x5f239e,
  isCmd: _0x5d7152,
  command: _0x3d1fed,
  args: _0x1e7d8c,
  q: _0x11c2c3,
  isGroup: _0x4a6db3,
  sender: _0x20e19e,
  senderNumber: _0x3bc616,
  botNumber2: _0x5625ae,
  botNumber: _0x533f5f,
  pushname: _0x1d5d20,
  isMe: _0x24d8e6,
  isOwner: _0x5a51f3,
  groupMetadata: _0x4596d1,
  groupName: _0x32ea3b,
  participants: _0x144ed8,
  groupAdmins: _0x2cd25d,
  isBotAdmins: _0x18f6b2,
  isAdmins: _0x223aa9,
  reply: _0x4e0157
}) => {
  try {
    let _0x36edc2 = _0x2118c4.quoted ? _0x2118c4.quoted.type === "videoMessage" : _0x2118c4 ? _0x2118c4.type === "videoMessage" : false;
    if (!_0x36edc2) {
      return await _0x4e0157();
    }
    let _0x171be8 = _0x2118c4.quoted ? await _0x2118c4.quoted.download() : await _0x2118c4.download();
    let _0x4ed41a = await ffmpeg(_0x171be8, ["-vn", '-c:a', "libopus", "-b:a", "128k", "-vbr", 'on', "-compression_level", '10'], "mp4", "opus");
    let _0x3959ae = await _0x5a834a.sendMessage(_0x2118c4.chat, {
      'audio': _0x4ed41a.options,
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0x2118c4
    });
    await _0x5a834a.sendMessage(_0x2b9334, {
      'react': {
        'text': '🎼',
        'key': _0x3959ae.key
      }
    });
  } catch (_0x3c7126) {
    _0x4e0157("*Error !!*");
    _0x335c12(_0x3c7126);
  }
});
