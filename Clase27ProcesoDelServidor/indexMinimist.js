import minimist from "minimist";

const {
    MODE,
    PORT,
    DEBUG,
    _
}= minimist(process.argv.slice(2),{alias:{m:"MODE",p:"PORT",d:"DEBUG"},default:{m:'prod',p:0,d:false}})

const config = {
    mode : MODE,
    port : PORT,
    debug : DEBUG,
    others : _
}

export default config;