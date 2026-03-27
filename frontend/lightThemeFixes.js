import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory() && !file.includes('node_modules')) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src').filter(file => file.match(/\.(jsx|js)$/));

files.forEach(filePath => {
  let code = fs.readFileSync(filePath, 'utf8');
  let original = code;
  
  // Fix button text issues where text-[#003366] got applied inappropriately
  code = code.replace(/text-\[#003366\]/g, 'text-white');
  code = code.replace(/text-\[#1e3a8a\]/g, 'text-blue-800');

  // Restore Home hero h1 text to white
  if (filePath.includes('Home.jsx')) {
    code = code.replace(/text-slate-900 leading-\[1.05\]/g, 'text-white leading-[1.05]');
    code = code.replace(/text-slate-900\/70/g, 'text-white/90');
    code = code.replace(/text-slate-900\/40/g, 'text-white/60');
  }

  // Restore PageHero h1 text to white
  if (filePath.includes('PageHero.jsx')) {
    code = code.replace(/text-slate-900 mb/g, 'text-white mb');
    code = code.replace(/text-slate-900\/60/g, 'text-blue-100/80');
    code = code.replace(/text-slate-900\/80/g, 'text-blue-100');
  }

  if(code !== original) {
    fs.writeFileSync(filePath, code);
    console.log(`Fixed theme in ${filePath}`);
  }
});
