import { testConnection } from './lib/supabase';

const runTest = async () => {
  console.log('Testing Supabase connection...');
  const result = await testConnection();
  
  console.log('\nConnection Test Results:');
  console.log('------------------------');
  console.log(`Status: ${result.success ? 'SUCCESS' : 'FAILED'}`);
  console.log(`Latency: ${result.latency}ms`);
  
  if (result.success) {
    console.log(`Message: ${result.message}`);
  } else {
    console.log(`Error: ${result.error}`);
  }
};

runTest();
