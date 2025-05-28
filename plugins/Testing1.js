cmd({
  pattern: "dsong",
  alias: ["ytdldl", "songdl"],
  react: "🎵",
  desc: "Download Youtube song",
  category: "main",
  use: '.song < Yt url or Name >',
  filename: __filename
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => {
  try {
    if (!q) return await reply("Enter Song name");

    const yt = await ytsearch(q);
    if (yt.results.length < 1) return reply("No found!");

    let yts = yt.results[0];
    let apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(yts.url)}`;

    let response = await fetch(apiUrl);
    let data = await response.json();

    if (data.status !== 200 || !data.success || !data.result.download_url) {
      return reply("Sever Busy");
    }

    // ▶️ ගීතයේ විස්තර පෙන්වන්න
    let ytmsg = `╭━━━〔 *𝐃𝐈𝐋𝐒𝐇𝐀𝐍-𝐌𝐃* 〕━━━┈⊷
┇๏ Title -  ${yts.title}
┇๏ Duration - ${yts.timestamp}
┇๏ Views -  ${yts.views}
┇๏ Author -  ${yts.author.name}
┇๏ Link -  ${yts.url}
╰────────────────┈⊷

> 1 - 🎧 Audio (MP3)
> 2 - 📄 Audio as Document`;

    // උඩ message එක පෙන්නන කොටස
    await conn.sendMessage(from, { image: { url: data.result.thumbnail || '' }, caption: ytmsg }, { quoted: mek });

    // 1,2 user ගෙන් ඉල්ලන ටික
    conn.waitForReply(mek.sender, from, async (userReply) => {
      const selection = userReply.body.trim();

      if (selection === '1') {
        // 1 => Audio File (MP3)
        await conn.sendMessage(from, {
          audio: { url: data.result.download_url },
          mimetype: "audio/mpeg"
        }, { quoted: mek });
      } else if (selection === '2') {
        // 2 => Document File (MP3)
        await conn.sendMessage(from, {
          document: { url: data.result.download_url },
          mimetype: "audio/mpeg",
          fileName: `${yts.title}.mp3`,
          caption: `🎵 *${yts.title}*`
        }, { quoted: mek });
      } else {
        await reply("error");
      }
    });

  } catch (e) {
    console.log(e);
    reply("error");
  }
});
