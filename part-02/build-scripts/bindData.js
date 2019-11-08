const fs = require('fs');
const csvParse = require('csv-parse');
const chalk = require('chalk');
const mapshaper = require('mapshaper');

function processBindFiles() {

  fs.readFile(__dirname + "/../project-files/neighbourhoods.json", 'utf8', (err, geojson) => {

    if (err) throw err;

    const commands = '-filter-fields neighbourhood,neighbourh_id -simplify dp 15% -o precision=.0001 format=geojson';

    mapshaper.applyCommands(commands, geojson, (err, data) => {

      if (err) throw err;

      const geojson = JSON.parse(data);

      fs.readFile(__dirname + "/../project-files/listings.csv", "utf8", (err, csvString) => {

        if (err) throw err;

        csvParse(csvString, {
          columns: true
        }, (err, csv) => {

          const outGeoJSON = bindData(geojson, csv);

          fs.writeFile(__dirname + '/../data/neighbourhoods-counts.json', JSON.stringify(outGeoJSON), 'utf8', function (err) {

            if (err) throw err;

            console.log(chalk.green('neighbourhoods-counts.json written'));
          })
        });
      });
    });
  });
}

function bindData(geojson, csv) {
  geojson.features.forEach(function (feature) {
    //console.log(feature.neighbourh_id);
    let count = 0;
    csv.forEach((row) => {
      if (feature.properties.neighbourh_id.toString() === row.neighbourh_id) {
        count++
      //console.log(count);
      }
    });
    feature.properties.count = count;
  });
  return geojson;

}

exports.processBindFiles = processBindFiles;
exports.bindData = bindData;
