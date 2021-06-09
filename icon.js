var fs = require('fs')
    , gm = require('gm').subClass({ imageMagick: true });


// export path, make sure it exists
const EXPORT_PATH = "export/";

// Add your words here to display in the icon
const WORDS = [
    "HAIL"
];

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

const ASSETS_FOLDER = "assets";
const FONT = "Okuda.otf";

const WIDTH = 257;
const HEIGHT = WIDTH;

for(var x = 0 ;x < WORDS.length;x++) {
   var _word    =  WORDS[x];
   const _number = Math.floor((Math.random() * 8999) + 1000);
   console.log(`Generating: ${_number} - ${_word}`);
   var i;
   for (i = 0; i < COLORS.length; i++) {
       gm(WIDTH, HEIGHT, COLORS[i])
       .font(`${ASSETS_FOLDER}${FONT}`,85)
       .gravity("East")
       .drawText(21,-2,_word.toUpperCase())
       .font(`${ASSETS_FOLDER}${FONT}`,55)
       .gravity("East")
       .drawText(44,87,_number)
       .stroke("#000000")
       .strokeWidth(7)
       .drawLine(0,172,WIDTH,172)
           .write(`${EXPORT_PATH}${_word.toLowerCase()}_${i+1}.png`, function (err) {
               if (err) {
                   console.log(err);
               }
           });
   } 
   
   
}

