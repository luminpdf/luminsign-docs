const https = require('https');

const url = 'https://garagejs.com/';

console.log(`Testing connection to ${url}...`);

const req = https.get(url, (res) => {
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
  });
});

req.on('error', (err) => {
  console.error(`Connection failed: ${err.message}`);
});

req.setTimeout(10000, () => {
  console.error('Connection timeout after 10 seconds');
  req.destroy();
});

console.log('Request sent, waiting for response...');