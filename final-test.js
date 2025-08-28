const https = require('https');
const tls = require('tls');
const dns = require('dns').promises;

async function checkDNS(hostname) {
  try {
    console.log(`\n🔍 Checking DNS resolution for ${hostname}...`);
    const addresses = await dns.resolve4(hostname);
    console.log(`✅ DNS resolved: ${addresses.join(', ')}`);
    return addresses;
  } catch (error) {
    console.log(`❌ DNS resolution failed: ${error.message}`);
    return [];
  }
}

async function testTLSConnection(hostname, port = 443) {
  return new Promise((resolve) => {
    console.log(`\n🔐 Testing TLS connection to ${hostname}:${port}...`);
    
    const socket = tls.connect({
      host: hostname,
      port: port,
      servername: hostname,
      rejectUnauthorized: false,
      timeout: 10000,
      minVersion: 'TLSv1.2',
      maxVersion: 'TLSv1.3'
    }, () => {
      console.log(`✅ TLS connection established!`);
      console.log(`Protocol: ${socket.getProtocol()}`);
      console.log(`Cipher: ${socket.getCipher()}`);
      socket.end();
      resolve({ success: true });
    });
    
    socket.on('error', (err) => {
      console.log(`❌ TLS connection failed: ${err.message}`);
      console.log(`Error code: ${err.code}`);
      resolve({ success: false, error: err.message, code: err.code });
    });
    
    socket.on('timeout', () => {
      console.log(`⏰ TLS connection timeout`);
      socket.destroy();
      resolve({ success: false, error: 'timeout' });
    });
  });
}

async function testHTTPConnection(hostname, port = 80) {
  return new Promise((resolve) => {
    console.log(`\n🌐 Testing HTTP connection to ${hostname}:${port}...`);
    
    const http = require('http');
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
      console.log(`✅ HTTP connection successful: ${res.statusCode}`);
      resolve({ success: true, status: res.statusCode });
    });
    
    req.on('error', (err) => {
      console.log(`❌ HTTP connection failed: ${err.message}`);
      console.log(`Error code: ${err.code}`);
      resolve({ success: false, error: err.message, code: err.code });
    });
    
    req.setTimeout(10000, () => {
      console.log(`⏰ HTTP connection timeout`);
      req.destroy();
      resolve({ success: false, error: 'timeout' });
    });
    
    req.end();
  });
}

async function main() {
  const hostname = 'garagejs.com';
  
  console.log(`🚀 Comprehensive connection test for ${hostname}`);
  console.log(`==============================================`);
  
  // Check DNS resolution
  const addresses = await checkDNS(hostname);
  
  if (addresses.length === 0) {
    console.log(`\n❌ Cannot proceed without DNS resolution`);
    return;
  }
  
  // Test HTTP connection
  const httpResult = await testHTTPConnection(hostname);
  
  // Test TLS connection
  const tlsResult = await testTLSConnection(hostname);
  
  // Summary
  console.log(`\n📊 SUMMARY:`);
  console.log(`DNS Resolution: ${addresses.length > 0 ? '✅ SUCCESS' : '❌ FAILED'}`);
  console.log(`HTTP Connection: ${httpResult.success ? '✅ SUCCESS' : '❌ FAILED'}`);
  console.log(`TLS Connection: ${tlsResult.success ? '✅ SUCCESS' : '❌ FAILED'}`);
  
  if (!httpResult.success && !tlsResult.success) {
    console.log(`\n🔍 ANALYSIS:`);
    console.log(`The server at ${hostname} appears to be unreachable.`);
    console.log(`Possible causes:`);
    console.log(`- Server is down or not running`);
    console.log(`- Firewall blocking connections`);
    console.log(`- Network routing issues`);
    console.log(`- Server configuration problems`);
  }
}

main().catch(console.error);