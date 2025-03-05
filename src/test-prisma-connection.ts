import prisma from './lib/prisma';

async function testPrismaConnection() {
  console.log('Testing Prisma database connection...');
  const startTime = Date.now();
  
  try {
    // Try to query the database
    const userCount = await prisma.user.count();
    const latency = Date.now() - startTime;
    
    console.log('\nPrisma Connection Test Results:');
    console.log('------------------------------');
    console.log(`Status: SUCCESS`);
    console.log(`Latency: ${latency}ms`);
    console.log(`User count: ${userCount}`);
    console.log(`Message: Connection successful with read permissions verified.`);
    
    return {
      success: true,
      latency,
      message: 'Connection successful with read permissions verified.'
    };
  } catch (error) {
    const latency = Date.now() - startTime;
    console.log('\nPrisma Connection Test Results:');
    console.log('------------------------------');
    console.log(`Status: FAILED`);
    console.log(`Latency: ${latency}ms`);
    console.log(`Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`);
    
    return {
      success: false,
      latency,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  } finally {
    await prisma.$disconnect();
  }
}

// Run the test if this file is executed directly
if (require.main === module) {
  testPrismaConnection()
    .catch(console.error);
}

export default testPrismaConnection;
