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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "917974041390";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "916260273863";




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
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_49_12_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjExLFxuICAgICAgICA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDkwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDkwLFxuICAgICAgICA5NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICA0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3LFxuICAgICAgICAyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMyxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDgxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDY5LFxuICAgICAgICA5NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPTEpDZXkxUHdkemdjZFgrcUl5ZFk1cUpWSmhudjdPc1FQRU54R1ZNeTZFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIbFZVQ0FLdVJtdXloUWVzcHF2ZHNRXCIsXG4gIFwicGhvbmVJZFwiOiBcImRjYzQ2MGFkLTVmYTEtNGM4NS1hMmVlLTIwNGJlYzE2ZDFmYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDIsXG4gICAgICA0LFxuICAgICAgMjAxLFxuICAgICAgMTU4LFxuICAgICAgMTE1LFxuICAgICAgMTM5LFxuICAgICAgMzQsXG4gICAgICA4OCxcbiAgICAgIDk2LFxuICAgICAgMTMyLFxuICAgICAgMzcsXG4gICAgICA2MyxcbiAgICAgIDEzNSxcbiAgICAgIDk1LFxuICAgICAgMjE4LFxuICAgICAgMTE5LFxuICAgICAgMTQ0LFxuICAgICAgMzksXG4gICAgICAzMyxcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgNTQsXG4gICAgICAxMDMsXG4gICAgICAxNTQsXG4gICAgICAyNDMsXG4gICAgICAzMCxcbiAgICAgIDcsXG4gICAgICAxMTIsXG4gICAgICA1MyxcbiAgICAgIDE0OCxcbiAgICAgIDExMCxcbiAgICAgIDY4LFxuICAgICAgMjE5LFxuICAgICAgMTk2LFxuICAgICAgMTcsXG4gICAgICAxNDcsXG4gICAgICAyMTksXG4gICAgICA0NSxcbiAgICAgIDE3OSxcbiAgICAgIDIwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzTjI0WEtMNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE2MjYwMjczODYzOjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTcqAIFPKnOG0nMqZypzhtIDhtI0gS+G0nOG0jeG0gMqAXCIsXG4gICAgXCJsaWRcIjogXCI2Mjg2MTMyNTkxNDM0MTo1MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNL1l4ZjRIRUxmZnNyb0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFYYzJyYlhjUEN4aXpWb3NGTUtud3pvVlp4emZjTnNuREllV1pMeWhYQTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTUxSc3RuTmZ1VDRKNmNhYVFpeXlRMUdkdzRLMU9yM2NzUXFuTy8xTzZwYkU5RlJrUzFuVUpqZFJtbWhzcTdDTG5WYXpyY2drdFprdENRUVVTcnJhQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUFFCQVVBOE8wSVN0bVdJOTRmTU1oNUdKUm1GMmg3VFpnZlNhR0RvRUFBakd3alhWWG1LMHRLaHVwRFNoaWdrU0NtQVJuVHVJOU51UlVENHEvY2dsQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE2MjYwMjczODYzOjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzMDc4OTcyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR2dRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHZ1EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpWXk1ckxDcHEzYnQ2dDZ2VXR4ZWpLT3IxN096ZGFZbm5Hc2VqL2Q1TG13PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxNDQ0MzExODMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjk3MjQ5ODMyMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "By_Your_Love" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "SHUBHAM💗",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
