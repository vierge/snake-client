let connection;

const setupInput = function(conn) {
  connection = conn;
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
  if (key === 'w') {
    setInterval(() => {
      connection.write('Move: up');
    }, 100);
  } else if (key === 'a') {
    setInterval(() => {
      connection.write('Move: left');
    }, 100);
  } else if (key === 's') {
    setInterval(() => {
      connection.write('Move: down');
    }, 100);
  } else if (key === 'd') {
    setInterval(() => {
      connection.write('Move: right');
    }, 100);
  }
};

module.exports = { setupInput };