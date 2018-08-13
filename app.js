const path = require('path');
const fs = require('fs');
const iconv = require('iconv-lite');

const str = '安保处';

console.log(iconv.encode(str, 'gbk'));


// fs.writeFile(path.resolve(__dirname, './aa.txt'), iconv.decode(str), function(err) {
//   console.log(err);
// });