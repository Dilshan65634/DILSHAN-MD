const {
  cmd,
  commands
} = require("../command");
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
const axios = require("axios");
const FormData = require("form-data");
const fs = require('fs');
async function fetchAuthToken() {
  try {
    const _0x353477 = await axios.get("https://imgbb.com/");
    const _0x43cfa7 = _0x353477.data;
    const _0xb26a41 = _0x43cfa7.match(/PF\.obj\.config\.auth_token="([a-f0-9]{40})"/);
    if (_0xb26a41 && _0xb26a41[0x1]) {
      return _0xb26a41[0x1];
    }
    throw new Error("Auth token not found");
  } catch (_0x5ec846) {
    console.error("Error fetching auth token:", _0x5ec846.message);
    throw _0x5ec846;
  }
}
async function uploadFile(_0x3c20c3) {
  try {
    const _0x2b9391 = fs.statSync(_0x3c20c3);
    if (_0x2b9391.size > 33554432) {
      return {
        'error': "File size exceeds 32MB limit"
      };
    }
    const _0x56889c = await fetchAuthToken();
    const _0x5b9f41 = new FormData();
    _0x5b9f41.append('source', fs.createReadStream(_0x3c20c3));
    _0x5b9f41.append("type", 'file');
    _0x5b9f41.append("action", "upload");
    _0x5b9f41.append("timestamp", Date.now());
    _0x5b9f41.append("auth_token", _0x56889c);
    const _0x463546 = await axios.post("https://imgbb.com/json", _0x5b9f41, {
      'headers': {
        ..._0x5b9f41.getHeaders()
      }
    });
    return _0x463546.data ? _0x463546.data : {
      'error': "Upload failed, no response data"
    };
  } catch (_0x319fac) {
    console.error("Error uploading file:", _0x319fac.message);
    return {
      'error': _0x319fac.message
    };
  }
}
cmd({
  'pattern': 'img2url',
  'react': '🔗',
  'alias': ['tourl', "imgurl", "telegraph", 'imgtourl'],
  'desc': "It convert given image to url.",
  'category': "other",
  'use': ".img2url <reply image>",
  'filename': __filename
}, async (_0x5b7ab9, _0xeb088c, _0x590d37, {
  from: _0x438286,
  l: _0x2bbfd3,
  prefix: _0x49cef1,
  quoted: _0x13c665,
  body: _0x4bf974,
  isCmd: _0x329a49,
  command: _0x113b81,
  args: _0x2197a2,
  q: _0x28ae89,
  isGroup: _0x43ccf0,
  sender: _0x215370,
  senderNumber: _0xfeb8e9,
  botNumber2: _0x5957dd,
  botNumber: _0x234178,
  pushname: _0x514868,
  isMe: _0x14b1cb,
  isOwner: _0x1ca4c5,
  groupMetadata: _0x5a64f7,
  groupName: _0x3eeb80,
  participants: _0x285a6c,
  groupAdmins: _0x55cd8c,
  isBotAdmins: _0xec8c1a,
  isAdmins: _0x40720e,
  reply: _0x1bc261
}) => {
  try {
    const _0x40bc0f = _0x590d37.quoted ? _0x590d37.quoted.type === "viewOnceMessage" : false;
    const _0x2a45aa = _0x590d37.quoted ? _0x590d37.quoted.type === "imageMessage" || (_0x40bc0f ? _0x590d37.quoted.msg.type === 'imageMessage' : false) : false;
    if (_0x590d37.type === 'imageMessage' || _0x2a45aa) {
      const _0x92b365 = require("file-type");
      var _0x445e25 = getRandom('');
      let _0x50e3f0 = _0x2a45aa ? await _0x590d37.quoted.download(_0x445e25) : await _0x590d37.download(_0x445e25);
      let _0x54649d = await _0x92b365.fromBuffer(_0x50e3f0);
      await fs.promises.writeFile('./tmp/' + _0x445e25 + '.' + _0x54649d.ext, _0x50e3f0);
      const _0x43392b = await uploadFile("./tmp/" + _0x445e25 + '.' + _0x54649d.ext);
      return await _0x1bc261(_0x43392b.image.url);
    } else {
      return _0x1bc261("please mention photo");
    }
  } catch (_0x53a45a) {
    await _0x5b7ab9.sendMessage(_0x438286, {
      'react': {
        'text': '❌',
        'key': _0xeb088c.key
      }
    });
    console.log(_0x53a45a);
    _0x1bc261(_0x53a45a);
  }
});
