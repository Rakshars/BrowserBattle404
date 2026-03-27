const fs = require('fs');
const path = 'src/pages/Home.jsx';
const content = fs.readFileSync(path, 'utf8').split('\n');
const idxStart = content.findIndex(l => l.includes('DEPARTMENTS ───'));
const idxEnd = content.findIndex(l => l.includes('NEWS & EVENTS ───'));

if (idxStart !== -1 && idxEnd !== -1) {
    const newContent = [...content.slice(0, idxStart), ...content.slice(idxEnd - 1)];
    fs.writeFileSync(path, newContent.join('\n'));
    console.log(`Successfully removed lines from ${idxStart + 1} to ${idxEnd}.`);
} else {
    console.log('Could not find the sections.');
}
