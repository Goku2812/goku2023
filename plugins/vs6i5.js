let handler = async (m, { command, text }) => m.reply(`
*╔═══*💥 *6 VS 6* *EXTERNO*💥
*╟❧*  *HiGHER ANGELS*
*╟*
*╟❧*  ⏰  *4:45 PM*  🇲🇽
*╟❧*  ⏰  *5:45 PM*  🇪🇨
*╟* 
*╟❧*  *INFINITO*
*╟*
*╟❧* *USO DE DISCORD OBLIGATORIO*
*╟*
*╚══* *ESCUADRA* 
*╟❧*🐯
*╟❧*🐯
*╟❧*🐯
*╟❧*🐯
*╟❧*🐯
*╟❧*🐯
*╚══* *SUPLENTES*
*╟❧*😹
*╟❧*😹
*╚══* *DONADOR DE SALA*
*╟❧*😌
*╚═*😌
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['vs <texto>?']
handler.tags = ['kerang']
handler.command = /^vs6.i.5$/i
handler.admin = true
export default handler
