const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917389637366";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_42_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMixcbiAgICAgICAgODEsXG4gICAgICAgIDc2LFxuICAgICAgICAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDUzLFxuICAgICAgICA2MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDU4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMixcbiAgICAgICAgMjA1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDQyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM0LFxuICAgICAgICA5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MSxcbiAgICAgICAgODEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTczLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5OSxcbiAgICAgICAgOTksXG4gICAgICAgIDgyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMixcbiAgICAgICAgMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODUsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg3LFxuICAgICAgICAzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTczLFxuICAgICAgICAyNDQsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDc2LFxuICAgICAgICA3NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY1LFxuICAgICAgICA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDUzLFxuICAgICAgICA5NixcbiAgICAgICAgNzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIldEUCs4Z2xONkM4MXdFUU1pNlFSYkZ2N1BYcHpCUW45RTVVdXRVSENBMkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3Mzg5NjM3MzY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzRTExRjVCMTU4QzU4MkU0Qzc5ODI1Q0VCQ0EwRDhDRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzEwMzAxNzNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTczODk2MzczNjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjUzRkQyREFBMTM5MURBNkYwQUM4M0RGRTIyRjhBQTZBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTAzMDE3M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBSXJ3VVM5eVFmYUhhZTFESTREUEJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjJlYTVmODUzLWUxODItNGZiYS1iNzgyLTQyMGEzZjU0OTg0NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjUsXG4gICAgICAyMjQsXG4gICAgICAyOSxcbiAgICAgIDExLFxuICAgICAgMCxcbiAgICAgIDE4MSxcbiAgICAgIDI1MCxcbiAgICAgIDMsXG4gICAgICAyNDMsXG4gICAgICAxMDYsXG4gICAgICA5NyxcbiAgICAgIDU5LFxuICAgICAgMjU0LFxuICAgICAgMTIsXG4gICAgICAxNTEsXG4gICAgICAxNTQsXG4gICAgICAxMTksXG4gICAgICA4OSxcbiAgICAgIDE4OSxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MyxcbiAgICAgIDQwLFxuICAgICAgMjUxLFxuICAgICAgMTU2LFxuICAgICAgMTk0LFxuICAgICAgMjM3LFxuICAgICAgODUsXG4gICAgICA3NCxcbiAgICAgIDc5LFxuICAgICAgMzIsXG4gICAgICA2MCxcbiAgICAgIDI2LFxuICAgICAgMTk4LFxuICAgICAgMzgsXG4gICAgICAxODQsXG4gICAgICAyMTIsXG4gICAgICA3MSxcbiAgICAgIDE5MyxcbiAgICAgIDk5LFxuICAgICAgMTYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZWTjZERDdCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTczODk2MzczNjY6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0Mjc5MDcwOTYyODk1NDoxNkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJNUi1TSFVCSEFNXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUG5jNmRrR0VKZlp0YmtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2ZzFJVmFuYWl3VGxKd1I5ZDVYR3lsclpMZDlnTjlkTHdPSVdFcytIUEFFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIncvTStoSVhPdytKSVlXUlFsTEZNRGVlSm11WktSbjhtOThYeFIyUGpJUm9YRysxRlJZcG8xc001Qmx5SFFPYnhwYy80R3d4VnRwa3F4Y1BPcUhzekFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZRSk0zeFhIRXBmakVobVVyK3pnVUtwSnhaemh0NlMxY2hOYVljV2lIZ3FvcngxUW5pb2JMUmgxNDNIdGt0MDVRYzJ6ek5Od3U5WFdLR1BjV1pIbkNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzM4OTYzNzM2NjoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTAzMDE3MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9CL1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0IvLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
