const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '263712196152'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'talkdrove@gmail.com'
global.github = 'https://github.com/HyHamza/BYTE-MD-LITE'
global.location = 'Earth'
global.gurl = 'https://instagram.com/talkdrove' // add your username
global.sudo = process.env.SUDO || "923072380380"
global.devs = '923072380380';
global.website = 'HyHamza.vercel.app' //wa.me/+92000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/BYTE-MD-LITE.jpeg'
module.exports = {
  sessionName: process.env.SESSION_ID || "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0tQa3VUQlk3dU5rb25WTkdubWVoeUhGeEVnYlRpU05TbkU2SUtYKzRtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmFtNUZ1TTlYeUdWTUFtcGt5d21IK1plN3Jwc25LdElMZTBzNXdxYldRcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXS0ZRVmdqQmJzY29rOFdXMEs5aStOMWtQcUJwVUVaUS9DYThjUUNWbjJBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMZDBTQ0c5WlplTTRDc1J2US91YkVxZ3JKOXpNdXRYY09WMHRCaVUvdlVvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFJSzBBMVlXckJQU0d5ci9SUDR0NWIzRTRGc00xSUFZRFN1ZUt0Q1JzbG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik8ybjl0Q3pEbVhQTHNDeEFFMHQ5WWhrcmdmSi9MOVppRkJuRFpVcmRTU0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY04xUHJvMzVSSFp2bU4rWTJBQXdmOXdZV2pERCtESUFqMk9TSDJSRkNtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnJnOW5seDZrL3NqWCtud0xyY0RmanJuTkNHRldZdTJoL1NOSVRqd0Uzcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJaak5jd2tMdS9CL0Zxby9NZU5Zck9jUkZqYUNMTjU4N09tdWNSNFdYMUpRRmlkd2tscVkzRkFTbnhQemFUZzNWWE54dWptbk9FMURtdTJzalpqcmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MSwiYWR2U2VjcmV0S2V5IjoiQlI0am16c1h1WXplbExnbmY3VlRaVjdva2ZhVUVONXVZaWdUUVB3Y040ST0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiT2pocTVHNVRSTUtqUXZmd1NqYS1pdyIsInBob25lSWQiOiJjZjQyZjNlYi05ZTUyLTRlYTctYTdkNS02ZWVkNGEwYjdiZDMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHlhcldQdnIwYmlVeGU2SGNDU3lGY3Q5elB3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhNbXplZGwzbzFlWnFLcnFJdHdMNnp1RHBxVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJUVkU3N0RKWCIsIm1lIjp7ImlkIjoiMjYzNzEyMTk2MTUyOjU2QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNUHArUEFDRUpQc3ByUUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1SEhTdzJtcE1WY1NXNE5NTlMzZCtxY3VZd3l2NG1FcWpzRklYYTZCU3o0PSIsImFjY291bnRTaWduYXR1cmUiOiJrZjhwMGc2WXF2eHY0WWRrNUJlTzBSZE5EZXluejd0WFhYWFdEZFl0OGFWemxUOHJSSmlhSFJTMkEvaksrUVlPWlZGZmNSWXROUEdhNEljL1FEalhBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZTJGWmRhSzFUMVJGcFhrR2piWjdmU0FkbUVpajNPeEJlbmxGVXhPQVZ5dmVrMjJsa0xXTTdINXFwSnNpV3dsaUswRFhUV2JCY0FZODM4QUhneEJVaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTIxOTYxNTI6NTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYmh4MHNOcHFURlhFbHVEVERVdDNmcW5MbU1NcitKaEtvN0JTRjJ1Z1VzKyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDMwMTA3OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNOGMifQ==",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'BYTE-MD',
  packname:  process.env.PACK_NAME || 'POWERED BY TALKDROVE',
  
  botname:   process.env.BOT_NAME === undefined ? "BYTE-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Arthur' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'love' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '263' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ',' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'all' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*POWERED BY TALKDROVE* ",   
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? '0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'BYTE-MD-LITE',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
