let handler = async (m, { command, text }) => m.reply(`
*╔═══*🌐 *6 VS 6* *EXTERNO* 🌐
*╟❧*  *HiGHER ANGELS*
*╟*
*╟❧*  ⏰  *1:45 PM*  🇲🇽
*╟❧*  ⏰  *2:45 PM*  🇪🇨
*╟* 
*╟❧*  *COMPETITIVO*
*╟*
*╟❧* *USO DE DISCORD OBLIGATORIO*
*╟*
*╚══* *ESCUADRA* 
*╟❧*✨
*╟❧*✨
*╟❧*✨
*╟❧*✨
*╟❧*✨
*╟❧*✨
*╚══* *SUPLENTES*
*╟❧*🤗
*╟❧*🤗
*╚══* *DONADOR DE SALA*
*╟❧*🙄
*╚═*🙄
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['vs <texto>?']
handler.tags = ['kerang']
handler.command = /^vs6.c.2$/i
handler.admin = true
export default handler
