const fs = require('fs');

const dataBuffer = fs.readFileSync('data.json');
const data = JSON.parse(dataBuffer.toString());
console.log("Before update: ", data);
data.name= "Kumar Nagaraju";
data.planet="Earth- Asian";
data.age=34;
console.log("After update: ", data);
fs.writeFileSync('data.json', JSON.stringify(data));