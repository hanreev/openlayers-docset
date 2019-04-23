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
