const fs = require("fs")
const chalk = require("chalk")

//Others
global.owner = ['6283811034750']
global.nomerowner = "18312576749"
global.ownername = "Fardev78"
global.namebot = "ANA~BOT"
global.sessionName = "session"
global.log0 = fs.readFileSync("./media/image/thumb.jpg")
global.qris = fs.readFileSync("./media/image/qris.jpg")
global.fonts = "© ANA~BOT"

//Exif
global.packname = "Created by"
global.author = "Ana kawai"

//Message
global.mess = {
success: '*Success!*',
admin: '*Fitur Khusus Admin Group!*',
botAdmin: '*Bot Harus Menjadi Admin Terlebih Dahulu!*',
owner: '*Fitur Khusus owner ana bot*',
group: '*Fitur Digunakan Hanya Untuk Group!*',
private: '*Fitur Digunakan Hanya Untuk Private Chat!*',
bot: '*Fitur Khusus Pengguna Nomor Bot*',
wait: '⏳ *_Wait ana bot is processing..._*',
ban: '*Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner*'
}

//Pengguna
global.rkyt = []

//Limit
global.limitawal = {
premium: "Infinity",
free: 20
}

//Pembatas
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
