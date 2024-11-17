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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_30_11_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDU1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDcxLFxuICAgICAgICAyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU5LFxuICAgICAgICA2OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDc1LFxuICAgICAgICA5MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NixcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA5MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDQzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MixcbiAgICAgICAgNzgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDMwLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NixcbiAgICAgICAgMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDk2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MCxcbiAgICAgICAgODUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDczLFxuICAgICAgICAwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIyLFxuICAgICAgICA2NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDcyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMyxcbiAgICAgICAgODMsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRMVIyWEpUWkFpNlpxbk5kbFdvaC8wM3JYVk5WTThSM3pDcy9CS2p4bVFvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzk3NDA0MTM5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREZGMEI4NUIxNkUzRDBGN0Q3MDA4MzhFRDIyNkY5NzVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNzc4MjM1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogdHJ1ZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQUVXUjUweUtTYTIwZlV0eUVjSU9FZ1wiLFxuICBcInBob25lSWRcIjogXCJjZjY4OTliOC0xZmJmLTQ1NWItODdlMS1hY2NkNTM2ODEwODZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDMsXG4gICAgICAxMzYsXG4gICAgICA5MyxcbiAgICAgIDE1NixcbiAgICAgIDksXG4gICAgICAyNDcsXG4gICAgICAxOTUsXG4gICAgICAyMjksXG4gICAgICAyMTIsXG4gICAgICAxODYsXG4gICAgICA2MyxcbiAgICAgIDIyOCxcbiAgICAgIDU3LFxuICAgICAgODcsXG4gICAgICAxNjUsXG4gICAgICAxNDYsXG4gICAgICAxMzIsXG4gICAgICA5MixcbiAgICAgIDI5LFxuICAgICAgMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODMsXG4gICAgICAxODUsXG4gICAgICA5MixcbiAgICAgIDMyLFxuICAgICAgMjM0LFxuICAgICAgODYsXG4gICAgICAxMDEsXG4gICAgICAxNjgsXG4gICAgICAyMzUsXG4gICAgICAxMTcsXG4gICAgICAyMzQsXG4gICAgICA3MSxcbiAgICAgIDQyLFxuICAgICAgMTY1LFxuICAgICAgNzQsXG4gICAgICA5NixcbiAgICAgIDM5LFxuICAgICAgMjMwLFxuICAgICAgMTE3LFxuICAgICAgMTAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpaRUhCWEVSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc5NzQwNDEzOTA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcInNpenJhXCIsXG4gICAgXCJsaWRcIjogXCIyNDA3MzM1MDQxNDMzODk6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMZjlsdjRHRUxHdDQ3a0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRJR284Wkc0K1puZjI2ZFNyMCthbVBaVXhNTzBybHZNV1YzbVB0Z254RUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWGpaSkgzaEJOOU9yUGtHK2xHQyttNFdzc01HSUxpWHB2YmVkMmNndWMwdkZzVVU3azUyRTkxelM0V3JjTSs2SktGRkhwU0Vhb29LK3NuVFBpem80RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT3pBdmx3V2JjNWtHMDlNa3MwSVlSMDRjN2JqbUtRSnNneWxkTUYwU3pEN2cveTQ5Ty9mWmNRMGZLbFVFOVhSUXNRUDBjY3Z1a05EYzJvZzIwc0dQamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3OTc0MDQxMzkwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE3NzgyMzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJZE9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlkTy5qc29uIjogIntcImtleURhdGFcIjpcIlhIMm1CS25HdzJRKytqSm0rMEFaYXBSRm9GVmhUM25jSzhRNTBuRWFmKzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg3NTIzMDM5MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxNzc4MTYwODIzXCJ9Igp9"  // PUT your SESSION_ID 


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
