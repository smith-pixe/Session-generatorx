const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: TAIRA_TECH,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function TAIRA_TECH_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let TAIRA_TECH_SESSION= TAIRA_TECH({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!TAIRA_TECH_SESSION.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await TAIRA_TECH_SESSION.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            TAIRA_TECH_SESSION.ev.on('creds.update', saveCreds)
            TAIRA_TECH_SESSION.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
             //  let session = await TAIRA_TECH_SESSION.sendMessage(TAIRA_TECH_SESSION.user.id, { text: 'MAKINO-MD-V2;;;' + b64data });
               let session = await TAIRA_TECH_SESSION.sendMessage(TAIRA_TECH_SESSION.user.id, { text: data });

                 let messg = `
    *_Pair Successful🥵._*
put the above ID in the sessID variable when deploying .
Use this Session ID for all bots by Tᴀɪʀᴀ Mᴀᴋɪɴᴏ.
╔═════◇
║       『••• Tᴀɪʀᴀ TECH•••』
║ *Channel:* _https://whatsapp.com/channel/0029Vag5l2ALSmbi14YryJ2r_
║ *Main GC:* _https://chat.whatsapp.com/EKdfDFDoi5C3ck88OmbJyk_
║ *Github:* _https://github.com/anonphoenix007_
║ *Owner:* _https://t.me/Tha_Healer_
║ *Note :*_Do not provide your SESSION_ID to_
║ _anyone otherwise that can access your WA messages_
║ _*Follow Me and Star my repo for more 🫡.*_
╚════════════════════════╝`
 await TAIRA_TECH_SESSION.sendMessage(TAIRA_TECH_SESSION.user.id,{text:messg },{quoted:session})
 

        await delay(100);
        await TAIRA_TECH_SESSION.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    TAIRA_TECH_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await TAIRA_TECH_CODE()
});
module.exports = router
