const fs = require('fs');

const names = [
    'STAGE','1ST STAGE TRAP 5210150E401',
    '1ST. STAGE SUCTION VALVES E404010550414',
    '1ST.STAGE GAS COOLER E405012120246',
    '1ST.STAGE PISTON ROD E404010551693',
    '1ST.STAGE SEAL GAS PRESSURE SWITCH PSLL1515A 6011760E403',
    '1ST.STAGE TRU BEARING TEMPERATURE TE01.61B 8010120E427',
    '2 * 8 ANALOG INPUT (4-20MA DAI05) 37131-4-0336025  IN PANEL 330-EC01 E408170910204']

const type = ['TEC','PROD','HR','ASSETINLOCATION']

const max = 5000;
let obj;
let res = '[';
let str = "";
for(var i=1;i<max;i++){
    str=names[Math.floor(Math.random()*10 % names.length)];

    obj = {
        id: i,
        description: names[Math.floor(Math.random()*10 % names.length)],
        code:str.substring(str.length-5,str.length),
        type: type[Math.floor(Math.random()*10 % type.length)],
        parentId: i<10 ? null:Math.floor(Math.random()*max)%i,
    }

    res += JSON.stringify(obj)+', \n';
}

res += ']'

fs.writeFile("db.json", res, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");        
}); 

