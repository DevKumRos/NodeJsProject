const fs = require('fs');
// It wont append content again
fs.writeFileSync('note.txt', 'New Nodes example for first time.');

// To append content to existing file system.
fs.appendFileSync('note.txt', '\nAppend content to existing file system.');