import fs from 'fs';
import path from 'path';

const replacements = {
  // Replace Gold with Red
  '#C9A84C': '#D32F2F', 
  '#c9a84c': '#D32F2F',
  '#e2c06a': '#EF5350',
  '#fcd34d': '#EF5350', 
  
  // Replace Navy with BMS Blue
  '#0a1628': '#003366',
  '#0d1f3c': '#004080',
  '#040c18': '#001A33',
  '#162840': '#004C99',
  '#020810': '#001122',
  '#071020': '#002244',
  '#010510': '#000811',
  
  // Replace semantic class names in custom CSS
  'navy': 'bmsblue',
  'gold': 'bmsred'
};

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src').concat(['tailwind.config.js', 'index.html']);

files.forEach(file => {
  if (!file.match(/\.(jsx|js|css|html)$/)) return;
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  for (const [oldVal, newVal] of Object.entries(replacements)) {
    const isHex = oldVal.startsWith('#');
    const regex = new RegExp((isHex ? oldVal : '\\b' + oldVal + '\\b'), 'g');
    content = content.replace(regex, newVal);
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated theme in ${file}`);
  }
});
