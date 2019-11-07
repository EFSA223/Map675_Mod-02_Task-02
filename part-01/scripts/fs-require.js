// Reading JSON data with require()

"use strict"

var colors = require('../project-files/cartocolors.json');

//console.log(colors);
for(var color in colors) {
    console.log(color)
}
