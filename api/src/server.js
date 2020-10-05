import app from './app';
import "@babel/polyfill"
import LameListCron from './cron/lamelist';
import GmailCron from './cron/gmail';

async function main(){
    await app.listen(process.env.PORT || 9977);
    
    console.log("server run on 9978");
    LameListCron.start();
    GmailCron.start();
}
main();