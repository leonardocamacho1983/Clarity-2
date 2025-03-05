import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

// Get current file directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to calculate file hash
function calculateFileHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('sha256');
  hashSum.update(fileBuffer);
  return hashSum.digest('hex');
}

// Function to get file stats including creation and modification time
function getFileStats(filePath) {
  const stats = fs.statSync(filePath);
  return {
    path: filePath,
    size: stats.size,
    created: stats.birthtime,
    modified: stats.mtime
  };
}

// Main function to scan for duplicates
async function scanForDuplicates(rootDir) {
  console.log(`Scanning for duplicate files in project...`);
  
  const fileHashes = new Map();
  const duplicates = [];
  
  // Function to recursively scan directories
  function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      // Skip node_modules and .git directories
      if (entry.isDirectory()) {
        if (entry.name !== 'node_modules' && entry.name !== '.git') {
          scanDir(fullPath);
        }
        continue;
      }
      
      // Process files
      try {
        const hash = calculateFileHash(fullPath);
        const stats = getFileStats(fullPath);
        
        if (fileHashes.has(hash)) {
          const existingFile = fileHashes.get(hash);
          duplicates.push({
            hash,
            files: [existingFile, stats]
          });
        } else {
          fileHashes.set(hash, stats);
        }
      } catch (error) {
        console.error(`Error processing file ${fullPath}: ${error.message}`);
      }
    }
  }
  
  // Start scanning from the root directory
  scanDir(rootDir);
  
  // Process duplicates
  if (duplicates.length > 0) {
    console.log(`\nFound ${duplicates.length} sets of duplicate files:`);
    
    for (const [index, duplicate] of duplicates.entries()) {
      console.log(`\nDuplicate set #${index + 1}:`);
      
      // Sort files by modification time (newest first)
      const sortedFiles = duplicate.files.sort((a, b) => b.modified - a.modified);
      
      // Keep the newest file, mark others for deletion
      console.log(`  Keeping (newest): ${sortedFiles[0].path}`);
      
      for (let i = 1; i < sortedFiles.length; i++) {
        console.log(`  Removing (older): ${sortedFiles[i].path}`);
        // Uncomment the line below to actually delete the files
        // fs.unlinkSync(sortedFiles[i].path);
      }
    }
    
    console.log(`\nTo actually delete the duplicate files, edit this script and uncomment the deletion line.`);
  } else {
    console.log(`\nNo duplicate files found.`);
  }
}

// Run the scan starting from the parent directory
scanForDuplicates(path.resolve('..'));

console.log('\nNote: This script identifies duplicates but does not delete them by default.');
console.log('Review the results and modify the script to enable deletion if needed.');
