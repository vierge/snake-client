const { connect } = require('./client');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => {
    handleUserInput(data);
  });
  return stdin;
}

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
}

console.log('connecting....');
connect('172.46.2.204');
setupInput();
