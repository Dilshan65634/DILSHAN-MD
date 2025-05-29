case '.setting': {
  const listMessage = {
    title: '🔧 DILSHAN-MD SETTINGS',
    description: 'ඔබට පහත විකල්පයන්ගෙන් තෝරාගත හැක:',
    buttonText: '🛠️ සැකසුම් බලන්න',
    sections: [
      {
        title: '📍 පද්ධති සැකසුම්',
        rows: [
          { title: '1. ස්වයංක්‍රීය තත්වය දැක්වීම ✅', rowId: '.toggle seen' },
          { title: '2. මකා දැමීම වැලැක්වීම 🚫', rowId: '.toggle antidelete' },
          { title: '3. ස්වයංක්‍රීය තත්ව ප්‍රතිචාර ❤️', rowId: '.toggle statusreact' },
          { title: '4. ස්වයංක්‍රීය ප්‍රතිචාර 🤖', rowId: '.toggle autoreact' },
          { title: '5. ශ්‍රව්‍යය සටහන් කිරීම 🎙️', rowId: '.toggle record' },
          { title: '6. සජීවී/අසජීවී තත්වය 🌐', rowId: '.toggle online' },
          { title: '7. ස්වයංක්‍රීය පිළිතුරු ✉️', rowId: '.toggle autoreply' },
          { title: '8. ස්වයංක්‍රීය පිළිතුරු විලාසිතාව 🎨', rowId: '.toggle replystyle' },
          { title: '9. බොට් නම වෙනස් කිරීම 🏷️', rowId: '.setname' },
          { title: '10. වර්ණ තේමාව සකසන්න 🎨', rowId: '.settheme' }
        ]
      }
    ]
  };
  await sock.sendMessage(m.chat, { listMessage }, { quoted: m });
  break;
}
