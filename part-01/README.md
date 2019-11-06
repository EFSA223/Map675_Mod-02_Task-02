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
