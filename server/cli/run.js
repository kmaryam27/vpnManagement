const { spawn } = require('child_process');
const ls = spawn('./openvpn-install.sh');
// const ls = spawn('pwd');

ls.stdout.on('data', data => {
  console.log('data is', data.toString());
  let split = data.toString().split(' ');
  switch (split[0]) {
    case 'Welcome':
      ls.stdin.write('1 \n');
    case 'Tell':
      ls.stdin.write('Ricky \n');
    case 'Do':
      ls.stdin.write('1 \n');
  }
});

module.exports = ls;
