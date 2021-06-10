const { exit } = require('process');
var fs = require('fs')
    , gm = require('gm').subClass({ imageMagick: true });


const HEADER = `
  ____________________________________________________             ____
 /   ________________________________________________| REPLICATOR |____)
|   |
|___|
`;
console.log(HEADER);

const BACKSLASH = '\\';
const FOOTER = `
|___|
|   |___________________________________________________________   ____
 ${BACKSLASH}______________________________________________________________| |____)
`;


// export path, make sure it exists
const EXPORT_PATH = "export/";

// Add your words here to display in the icon
const WORDS = [
    "HAIL"
];
if(WORDS.length === 0) { console.log("|   | Enable to comply: no words parameters given!"); }

// Add your colors, which will be used as backgroundcolors
const COLORS = [
    "#46AAB3",
    "#EFB543",
    "#F08F2F",
    "#90BFBD",
    "#2B698F",
    "#0C3752",
    "#97CDF9"
];
if(COLORS.length === 0) { console.log("|   | Enable to comply: no colors parameters given!"); }

const ASSETS_FOLDER = "assets/";
const FONT = "Okuda.otf";

const WIDTH = 257;
const HEIGHT = WIDTH;

WORDS.forEach(_word => {
    const _number = Math.floor((Math.random() * 8999) + 1000);
    console.log(`|   | Generating: ${_number} - ${_word}`);
    let colorIndex  = 0;
    COLORS.forEach(color => {
        gm(WIDTH, HEIGHT, color)
        .font(`${ASSETS_FOLDER}${FONT}`,85)
        .gravity("East")
        .drawText(21,-2,_word.toUpperCase())
        .font(`${ASSETS_FOLDER}${FONT}`,55)
        .gravity("East")
        .drawText(44,87,_number)
        .stroke("#000000")
        .strokeWidth(7)
        .drawLine(0,172,WIDTH,172)
            .write(`${EXPORT_PATH}${_word.toLowerCase()}_${colorIndex+1}.png`, function (err) {
                if (err) {
                    console.log(err);
                }
            });
        colorIndex++;
    });
});

console.log(FOOTER);