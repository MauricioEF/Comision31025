import yargs from "yargs";

const yargInstance = yargs(process.argv.slice(2)).default({
    m:'prod',
    p:0,
    d:false
}).alias({
    m:"MODE",
    p:"PORT",
    d:"DEBUG"
})
const {
    MODE,
    PORT,
    DEBUG,
    _
} = yargInstance.argv;
console.log(args);

const config = {
    mode: MODE,
    port: PORT,
    debug:DEBUG,
    others: _
}