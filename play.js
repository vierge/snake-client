const net = require('net');

const connect = function(ip) {
  const conn = net.createConnection({
    host: ip,
    port: 50541
  });
  conn.setEncoding('utf8');
  conn.on('data', (incData) => {
    console.log(incData);
  })

  return conn;
}

console.log('connecting....');
connect('172.46.2.204');