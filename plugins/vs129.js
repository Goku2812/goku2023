let handler = async (m, { command, text }) => m.reply(`
*╔═══*✨ *12 VS 12*  *EXTERNO* ✨
*╟❧*  *HiGHER ANGELS*
*╟*
*╟❧* ⏰  *8:45 PM*  🇲🇽
*╟❧* ⏰  *9:45 PM*  🇪🇨
*╟*
*╟❧*  *MAPA ABIERTO*
*╟*
*╟❧* *USO DE DISCORD OBLIGATORIO*
*╟*
*╚══* *ESCUADRA* 
*╟❧*👑
*╟❧*👑
*╟❧*👑
*╟❧*👑
*╔══*  *ESCUADRA*
*╟❧*👑
*╟❧*👑
*╟❧*👑
*╟❧*👑
*╔══* *ESCUADRA*
*╟❧*👑
*╟❧*👑
*╟❧*👑
*╟❧*👑
*╚══* *SUPLENTES*
*╟❧*🤡
*╟❧*🤡
*╚══* *DONADOR DE SALA*
*╟❧*😅
*╚═*😅
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['vs <texto>?']
handler.tags = ['kerang']
handler.command = /^vs12.9$/i
handler.admin = true
export default handler
