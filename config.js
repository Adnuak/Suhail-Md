const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348163707678";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_16_06_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk5LFxuICAgICAgICA3MixcbiAgICAgICAgMixcbiAgICAgICAgMjQyLFxuICAgICAgICA0NixcbiAgICAgICAgODMsXG4gICAgICAgIDMsXG4gICAgICAgIDExLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1LFxuICAgICAgICA1NCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDksXG4gICAgICAgIDY3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDczLFxuICAgICAgICA1NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MSxcbiAgICAgICAgODUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODQsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDY0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDExMixcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzIsXG4gICAgICAgIDgyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNixcbiAgICAgICAgMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDY1LFxuICAgICAgICA1OCxcbiAgICAgICAgNjksXG4gICAgICAgIDI4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm40SEJqYUkrTm42aWhrYmllbjFmTXVrbzdESXFqaXdUS3dVVkUxcGFnalE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE2MzcwNzY3OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjE5NkREQUM3NDNFNTE1OTIzQTEwOTE0Qzg0MDEyNkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NjE1MDA2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE2MzcwNzY3OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTEzM0RBMTFBOENCNjRGMjU4Q0UyQzAyNzA3MjEwMUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NjE1MDA2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImIyR285UGpYUWFHcWV3ckRmSmUwQWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWMxODAyYWUtYmVlMi00MTNjLTljOGItNTRjZTRiY2EyNTFkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MixcbiAgICAgIDI1MSxcbiAgICAgIDg5LFxuICAgICAgMjMyLFxuICAgICAgNDMsXG4gICAgICAyOCxcbiAgICAgIDE1MSxcbiAgICAgIDkxLFxuICAgICAgOSxcbiAgICAgIDI0NSxcbiAgICAgIDE3NyxcbiAgICAgIDE0NCxcbiAgICAgIDIwMSxcbiAgICAgIDAsXG4gICAgICAzMCxcbiAgICAgIDg1LFxuICAgICAgMTI0LFxuICAgICAgMTE4LFxuICAgICAgNTAsXG4gICAgICAzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTgsXG4gICAgICA1MSxcbiAgICAgIDI0NyxcbiAgICAgIDE2MyxcbiAgICAgIDIyMyxcbiAgICAgIDE4OCxcbiAgICAgIDE3OCxcbiAgICAgIDE3MixcbiAgICAgIDIwMyxcbiAgICAgIDE0MCxcbiAgICAgIDMxLFxuICAgICAgMjAwLFxuICAgICAgMTgwLFxuICAgICAgMTQ3LFxuICAgICAgMTA3LFxuICAgICAgMjE0LFxuICAgICAgMTA0LFxuICAgICAgMTc1LFxuICAgICAgMTk5LFxuICAgICAgMTQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5ZOUwzVFJHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYzNzA3Njc4OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY3Nzc1MDg3MjU1NjM5OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQWRudWFrX0JPVCDwn6SWXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFhUdTk0QkVKanpnck1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHcG05SUIrd0ZUaDJ3TFRKclNURUZYdnZsYzU5MndyR2FyVm82VkxSQVVnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIitsd25ZNy8vSStwMGlBR3hmY0FxT2xsVVFhSVhWTnNKRy9BalU3UlI5S1pQNjhLRXYra0tzdE4zaE5Cdkp0VXFJT0FkWVFVWm44NXVXVjlsSEx1M0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdqaWN2Z2Q1VHZ0cmh0RlcvbmVFWXAzNVArRjNERE4xQ0hFQkQ1UGloc2hlRFFOY3JWM3pWMnI4U09xbDhGRXhMbW96UFNYZFhZa2tjdDV1dTZLVmhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjM3MDc2Nzg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzYxNTAwNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdYaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1hoLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYnh5ZFg3SFYreDZtMXorV09veVpValo4bmxvNXQ1RnBUTlRzRnNydE82ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjY1NDUwNzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzYxNTAwODUwNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
