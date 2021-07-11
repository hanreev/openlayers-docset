const fs = require('fs-extra');
const path = require('path');
const childProcess = require('child_process');

const BASE_DIR = process.cwd();
const olDir = path.join(BASE_DIR, 'openlayers');
const olBranch = 'v6.5.0';

function execSync(command) {
  childProcess.execSync(command, { stdio: 'inherit' });
}

console.log('# Cleanup');
fs.removeSync(path.join(BASE_DIR, 'OpenLayers.docset'));
fs.removeSync(path.join(BASE_DIR, 'OpenLayers.tgz'));

console.log(`# Checkout openlayers ${olBranch}`);
process.chdir(olDir);
execSync('git checkout -- .');
execSync(`git checkout ${olBranch}`);
process.chdir(BASE_DIR);

console.log('# Building docset');
execSync('yarn build');

if (process.argv.includes('--archive')) {
  console.log('# Creating arvhice');
  execSync('yarn archive');
}
