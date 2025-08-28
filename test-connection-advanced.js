const https = require('https');
const tls = require('tls');

const url = 'https://garagejs.com/';
const hostname = 'garagejs.com';
const port = 443;

console.log(`Testing connection to ${url}...`);
console.log(`Hostname: ${hostname}`);
console.log(`Port: ${port}`);

// First, let's try to establish a TLS connection
const socket = tls.connect({
  host: hostname,
  port: port,
  servername: hostname,
  rejectUnauthorized: false,
  timeout: 10000
}, () => {
  console.log('TLS connection established!');
  console.log(`Protocol: ${socket.getProtocol()}`);
  console.log(`Cipher: ${socket.getCipher()}`);
  
  // Now make the HTTP request
  const req = https.request({
    hostname: hostname,
    port: port,
    path: '/',
    method: 'GET',
    headers: {
      'User-Agent': 'Node.js Test Client',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
    },
    timeout: 10000
  }, (res) => {
    console.log(`\nHTTP Response:`);
    console.log(`Status: ${res.statusCode}`);
    console.log(`Headers:`, res.headers);
    
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      console.log(`\nConnection successful!`);
      console.log(`Response length: ${data.length} characters`);
      console.log(`\nFirst 500 characters of response:`);
      console.log(data.substring(0, 500));
      socket.end();
    });
  });
  
  req.on('error', (err) => {
    console.error(`HTTP request failed: ${err.message}`);
    socket.end();
  });
  
  req.end();
});

socket.on('error', (err) => {
  console.error(`TLS connection failed: ${err.message}`);
  console.error(`Error code: ${err.code}`);
  console.error(`Error stack: ${err.stack}`);
});

socket.on('timeout', () => {
  console.error('TLS connection timeout');
  socket.destroy();
});

console.log('Attempting TLS connection...');