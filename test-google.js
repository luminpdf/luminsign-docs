const https = require('https');

const testUrls = [
  'https://www.google.com/',
  'https://httpbin.org/get',
  'https://garagejs.com/'
];

async function testConnection(url) {
  return new Promise((resolve) => {
    console.log(`\n=== Testing ${url} ===`);
    
    const req = https.get(url, (res) => {
      console.log(`✅ SUCCESS: ${res.statusCode}`);
      console.log(`Headers: ${JSON.stringify(res.headers, null, 2)}`);
      resolve({ url, success: true, status: res.statusCode });
    });
    
    req.on('error', (err) => {
      console.log(`❌ FAILED: ${err.message}`);
      console.log(`Error code: ${err.code}`);
      resolve({ url, success: false, error: err.message, code: err.code });
    });
    
    req.setTimeout(10000, () => {
      console.log(`⏰ TIMEOUT: Connection timeout`);
      req.destroy();
      resolve({ url, success: false, error: 'timeout' });
    });
  });
}

async function runTests() {
  console.log('Testing network connectivity...');
  
  for (const url of testUrls) {
    const result = await testConnection(url);
    console.log(`Result for ${url}: ${result.success ? 'SUCCESS' : 'FAILED'}`);
  }
  
  console.log('\n=== Summary ===');
  console.log('If Google and httpbin work but garagejs.com fails, the issue is specific to garagejs.com');
  console.log('If all fail, there is a general network connectivity issue');
}

runTests();