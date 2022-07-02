const fs = require('fs');
try{
    fs.writeFileSync('fyh.txt',new Date().toLocaleString())
}catch(error){
    console.log(error);
}

try{
    let content = fs.readFileSync('fyh.txt','utf8')
    console.log(content);
}catch(error){
    console.log(error);
}