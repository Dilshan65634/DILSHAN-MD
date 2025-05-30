const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ZUgzFaZD#uJa01Fm-xcAGc_gaHb8KWeXuoquEq_Qv0xxkXY1XW24",
MONGODB: process.env.MONGODB || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority",
};
