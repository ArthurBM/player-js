const musicsFolder = '../music/';
const fs = require('fs');

let musicNames = [];

// fs.readdir(musicsFolder, (err, files) => {
//     files.forEach(file => {
//         musicNames.push(file);
//     })
// });

fs.readdirSync(musicsFolder).forEach(file => {
    musicNames.push(file);
});

console.log(musicNames);