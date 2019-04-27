OpenLayers Docset
=================

[OpenLayers](https://openlayers.org/) docset generator.



## Usage

- Clone this repository
  ```bash
  git clone https://github.com/hanreev/openlayers-docset.git

  # then change directory to this project
  cd openlayers-docset
  ```
- Clone [openlayers repository](https://github.com/openlayers/openlayers)
  ```bash
  git submodule update --init
  ```
  > ***Note:***  
  > Instead of cloning whole repository, you may download the desired release from [OpenLayers release page](https://github.com/openlayers/openlayers/releases) and extract it into `openlayers` folder
- Install dependencies
  ```bash
  # Using NPM
  npm i

  # Using Yarn
  yarn install
  ```
- Generate docset
  ```bash
  # Using NPM
  npm run build

  # Using Yarn
  yarn build
  ```
- Archive docset
  ```bash
  tar --exclude='.DS_Store' -cvzf OpenLayers.tgz OpenLayers.docset
  ```



## TypeScript declaration

I have included TypeScript declaration for `v5.3.2` in `typings` directory that includes all documented API and protected class members and methods.

### Requirements

These [DefinitelyTyped](http://definitelytyped.org/) modules are required to use provided TypeScript declaration, install them using `npm` or `yarn`
- `@types/arcgis-rest-api`
- `@types/geojson`
- `@types/topojson-specification`

```bash
# NPM
npm i -D @types/arcgis-rest-api @types/geojson @types/topojson-specification

#Yarn
yarn add -D @types/arcgis-rest-api @types/geojson @types/topojson-specification
```



If you need another version, just follow the above steps then run

```bash
# NPM
npm run build-format-dts

# Yarn
yarn build-format-dts
```


> ***Note:***  
> Some declaration was patched manually. If you found any errors please [create a new issue](https://github.com/hanreev/openlayers-docset/issues).



## License

Copyright &copy; 2019 [Rifa'i M. Hanif](https://github.com/hanreev)  
Licensed under MIT License
