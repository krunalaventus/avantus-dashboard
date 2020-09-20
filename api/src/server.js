import app from './app';
import "@babel/polyfill"

async function main(){
    await app.listen(process.env.PORT || 9977);
    console.log("server run on 9977");
}
main();