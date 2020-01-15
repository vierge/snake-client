const net = require('net');

const connect = function(ip) {
  const conn = net.createConnection({
    host: ip,
    port: 50541
  });
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('connection 2 snek established!');
    conn.write('Name: MRG');
    
    setInterval(() => {
      conn.write('Move: up');
    }, 100);

  });
  conn.setEncoding('utf8');

  conn.on('data', (incData) => {
    console.log(incData);
  });


  return conn;
}

module.exports = { connect };