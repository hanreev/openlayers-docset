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
  git clone https://github.com/openlayers/openlayers.git
  ```
  > ***Note:***  
  > Instead of cloning whole repository, you may download the desired release from [OpenLayers release page](https://github.com/openlayers/openlayers/releases) and extract it into `openlayers` folder
- Install dependencies
  ```bash
  # Using NPM
  npm i

  # Using Yarn
  yarn
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

Check out Openlayers 5 [TypeScript Declaration repository](https://github.com/hanreev/types-ol)



## License

Copyright &copy; 2019 [Rifa'i M. Hanif](https://github.com/hanreev)  
Licensed under MIT License
