const path=require('path');
console.log(path.sep);
const filepath = path.join('/content/','subfolder','test.txt');
console.log(filepath)

const base = path.basename(filepath)
console.log(base);
const directories=path.dirname(filepath)
console.log(directories)

const absolute = path.resolve(__dirname,'/content/','subfolder','test.txt');
//console.log(absolute)