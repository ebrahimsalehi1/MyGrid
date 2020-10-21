const fs = require('fs');

const names = ['ali reza','ahmad','karim','zahra','fati','hedye','sirvan','ebrahim']

const sex = ['male','female']

const max = 25000;
let obj;
let res = '[';

for(var i=1;i<max;i++){
    obj = {
        id: i,
        name: names[Math.floor(Math.random()*10 % names.length)],
        surname: names[Math.floor(Math.random()*10 % names.length)]+'ie',
        sex: sex[Math.floor(Math.random()*10 % sex.length)],
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

