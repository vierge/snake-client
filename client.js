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

module.exports = { connect };