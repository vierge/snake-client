let connection;
let vector;
let reverse;

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
  const snekBrain = {
    w: ['Move: up', 's'],
    a: ['Move: left', 'd'], 
    s: ['Move: down', 'w'],
    d: ['Move: right', 'a']
  }

  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'p') {
    connection.write('Say: snaaaaaaaaake');
  } else if (key !== reverse) {
    clearInterval(vector);
    vector = setInterval(() => {
      connection.write(snekBrain[key][0]);
      reverse = snekBrain[key][1];
    }, 50);
  }
  
};

module.exports = { setupInput };