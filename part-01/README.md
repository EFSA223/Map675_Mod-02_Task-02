# Geoprocessing with Node

## Setting up workspace
1. Initialize new Git repository on personal GitHub account WITH README, add .gitignore and chose "Node", clone down to local machine.

_e.sambo@KADICT004 MINGW64 /c/NewMapPlus/Map675/Map675_Mod-02_Task-02/(master)_

2. Install or check that tools are already install: Node, npm, live-server, mapshaper ect.

>$ node -v
v12.13.0

>$ npm -v
6.12.0

>$ mapshaper -v
0.4.140

3. Using Mapshaper and ogr to get information about the data and convert if needed to Json format.

>$ mapshaper neighbourhoods.json -info

```[info]
=========================
Layer 1 *
-------------------------
Name:     neighbourhoods
Type:     polygon
Records:  22
Bounds:   4.754837,52.278174,5.079162,52.430679
CRS:      +proj=longlat +datum=WGS84

Attribute data
---------------------+----------------
 Field               | First value
---------------------+----------------
 neighbourh_id       | 1
 neighbourhood       | 'Bijlmer-Oost'
 neighbourhood_group | null
---------------------+----------------
```
>$ ogrinfo neighbourhoods.json neighbourhoods -so

```
INFO: Open of `neighbourhoods.json'
      using driver `GeoJSON' successful.
Layer name: neighbourhoods
Geometry: Multi Polygon
Feature Count: 22
Extent: (4.754837, 52.278174) - (5.079162, 52.430679)
Layer SRS WKT:
GEOGCS["WGS 84",
    DATUM["WGS_1984",
        SPHEROID["WGS 84",6378137,298.257223563,
            AUTHORITY["EPSG","7030"]],
        AUTHORITY["EPSG","6326"]],
    PRIMEM["Greenwich",0,
        AUTHORITY["EPSG","8901"]],
    UNIT["degree",0.0174532925199433,
        AUTHORITY["EPSG","9122"]],
    AUTHORITY["EPSG","4326"]]
neighbourhood: String (0.0)
neighbourhood_group: String (0.0)
neighbourh_id: Integer (0.0)
```
>$ mapshaper listings.csv -info

```
[info]
=========================
Layer 1 *
-------------------------
Name:     listings
Type:     tabular data
Records:  19,213

Attribute data
--------------------------------+------------------------------------------------
 Field                          | First value
--------------------------------+------------------------------------------------
 availability_365               | '141'
 calculated_host_listings_count | '1'
 host_id                        | '5183517'
 host_name                      | 'Simonehenken'
 id                             | '954633'
 last_review                    | '2019-09-08'
 latitude                       | '52.32115'
 longitude                      | '4.95553'
 minimum_nights                 | '3'
 name                           | 'Private studio 25m2 for two near A'dam Arena'
 neighbourh_id                  | '1'
 neighbourhood                  | 'Bijlmer-Centrum'
 neighbourhood_group            | ''
 number_of_reviews              | '83'
 price                          | '79'
 reviews_per_month              | '1.27'
 room_type                      | 'Private room'
--------------------------------+------------------------------------------------
```
Incase we have to convert shp file to json, we can use mapshaper command line or GUi for this.

> $ mapshaper datafile.shp -filter-fields FIELD1, FIELD2, FIELD3 -simplify dp 15% -o precision=.0001 format=geojson ..data/datafile.json.

4. Initialize npm project

>$ npm init --yes

```
{
  "name": "part-01",
  "version": "1.0.0",
  "description": "1. Initialize new Git repository on personal GitHub account WITH README, add .gitignore and chose \"Node\", clone down to local machine.",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
Is this OK? (yes) yes
```
>copy dependencies in package.json.

```
"dependencies": {
  "chalk": "^2.4.2",
  "csv-parse": "^4.6.5",
  "csv2geojson": "^5.1.1",
  "mapshaper": "^0.4.140"
}
```
>$ npm install

```
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN part-01@1.0.0 No repository field.

added 69 packages from 112 contributors and audited 101 packages in 5.69s
found 0 vulnerabilities
```
>$ git status

```
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md
        modified:   package.json

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        package-lock.json
```
>git add .
>$ git status

```
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   .gitignore
        modified:   README.md
        new file:   package-lock.json
        modified:   package.json
```
>$ git commit -m "Add gitignore and install npm environment"

```
[master 400ba93] Add gitignore and install npm environment
 4 files changed, 532 insertions(+), 5 deletions(-)
 create mode 100644 part-01/.gitignore
 create mode 100644 part-01/package-lock.json
```
>$ git status

```
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```
>$ git push

```
Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 8 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (7/7), 6.73 KiB | 3.37 MiB/s, done.
Total 7 (delta 3), reused 0 (delta 0)
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To https://github.com/EFSA223/Map675_Mod-02_Task-02.git
   036b351..400ba93  master -> master
```
>$ git status

```
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
```
5. Reading, parsing, and writing JSON system files with Node

>$ mkdir scripts<br>
$ cd scripts/<br>
$ ls -l<br>
$ touch fs-async.js<br>
$ node fs-async.js<br>

```
data loaded!
object extracted:  {
  Vivid: {
    '2': [ '#E58606', '#5D69B1', '#A5AA99' ],
    '3': [ '#E58606', '#5D69B1', '#52BCA3', '#A5AA99' ],
    '4': [ '#E58606', '#5D69B1', '#52BCA3', '#99C945', '#A5AA99' ],
    '5': [
      '#E58606',
      '#5D69B1',
      '#52BCA3',
      '#99C945',
      '#CC61B0',
      '#A5AA99'
    ],
    :
    :
```

6. Reading and writing JSON files using fs.readFile
7. Parsing and processing CSV data in Node with "csv2geojson"

```
e.sambo@KADICT004 MINGW64 /c/NewMapPlus/Map675/Map675_Mod-02_Task-02/part-01/scripts (master)
```

>$ touch csv2geojson.js  "write script!"<br>
>$ node csv2geojson.js

```{
  type: 'FeatureCollection',
  features: [
    { type: 'Feature', properties: [Object], geometry: [Object] },
    { type: 'Feature', properties: [Object], geometry: [Object] },
    { type: 'Feature', properties: [Object], geometry: [Object] },
    { type: 'Feature', properties: [Object], geometry: [Object] },
    { type: 'Feature', properties: [Object], geometry: [Object] },
    { type: 'Feature', properties: [Object], geometry: [Object] },
    { type: 'Feature', properties: [Object], geometry: [Object] },
    { type: 'Feature', properties: [Object], geometry: [Object] },
    { type: 'Feature', properties: [Object], geometry: [Object] },
    { type: 'Feature', properties: [Object], geometry: [Object] },
    :
    :
    { type: 'Feature', properties: [Object], geometry: [Object] },
    ... 20105 more items
]
}
done writing file
```
>Test and validity the geojson file, is to upload it to http://geojson.io/.

![A CSV file converted to GeoJSON, displayed in geojson.io](images/csv2geojson.jpg)

8. Modifying script to remove unwanted Fields.

>$ touch csv2geojson-filtered.js  "write script!"<br>
>$ node csv2geojson-filtered.js

9. binding CSV data to GeoJSON with Node.

>$ touch bind-data.js  "write script!"<br>
>$ node bind-data.js

File all done. Great success!

10. Add and commit and push all changes to remote repository
