// wdio-runner.js

const { execSync } = require('child_process');
execSync('npm run wdio-instance', { stdio: 'inherit' })
execSync('npm run wdio-instance', { stdio: 'inherit' })
for (let i = 1; i <= 10; i++) {
  console.log(`Running instance ${i}`);
  execSync('npm run wdio-instance', { stdio: 'inherit' });
}

