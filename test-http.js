const http = require('http');

const hostname = 'garagejs.com';
const port = 80;

console.log(`Testing HTTP connection to ${hostname}:${port}...`);

const req = http.request({
  hostname: hostname,
  port: port,
  path: '/',
  method: 'GET',
  headers: {
    'User-Agent': 'Node.js Test Client',
    'Host': hostname
  },
  timeout: 10000
}, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Headers:`, res.headers);
  
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log(`\nHTTP connection successful!`);
    console.log(`Response length: ${data.length} characters`);
    console.log(`\nFirst 500 characters of response:`);
    console.log(data.substring(0, 500));
  });
});

req.on('error', (err) => {
  console.error(`HTTP connection failed: ${err.message}`);
  console.error(`Error code: ${err.code}`);
});

req.setTimeout(10000, () => {
  console.error('HTTP connection timeout after 10 seconds');
  req.destroy();
});

req.end();