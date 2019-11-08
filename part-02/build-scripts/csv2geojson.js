const fs = require('fs');
const csv2geojson = require('csv2geojson');
const chalk = require('chalk');

function convertCsv() {

  fs.readFile(__dirname + '/../project-files/listings.csv', 'utf-8', (err, csvString) => {

    if (err) throw err;

    console.log(chalk.green('listings.csv loaded'))
    console.log(chalk.green('parsing csv ...'))

    csv2geojson.csv2geojson(csvString, {
      latfield: 'latitude',
      lonfield: 'longitude',
      delimiter: ','
    }, (err, geojson) => {

      if (err) throw err;

      var outGeoJSON = filterFields(geojson);


      fs.writeFile(__dirname + '/../data/adam_listings.json', JSON.stringify(outGeoJSON), 'utf-8', (err) => {

        if (err) throw err;

        console.log(chalk.green('adam_listings.json written to file'));
      });
    })
  });
}

function filterFields(geojson) {

  var features = geojson.features,
    newFeatures = [];

  features.forEach((feature) => {

    var tempProps = {};

    for (var prop in feature.properties) {
      if (prop === 'id' || prop === 'neighbourh_id' || prop === 'name') {
        tempProps[prop] = feature.properties[prop];
      }
    }

    newFeatures.push({
      "type": feature.type,
      "geometry": feature.geometry,
      "properties": tempProps
    });
  });

  return {
    "type": "FeatureCollection",
    "features": newFeatures
  }
}

exports.convertCsv = convertCsv;
exports.filterFields = filterFields;
