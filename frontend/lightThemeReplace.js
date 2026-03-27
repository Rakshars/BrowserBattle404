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

const files = walk('./src').filter(file => file.match(/\.(jsx|js|css)$/));

files.forEach(filePath => {
  let code = fs.readFileSync(filePath, 'utf8');
  let original = code;
  
  // 1. Force white backgrounds where there were dark sections
  code = code.replace(/bg-\[#(003366|001A33|001122|004080|040c18|0a1628|002244|0d1f3c)\]/g, 'bg-white shadow-sm border-blue-50');
  
  // Remove dark mode classes
  code = code.replace(/dark:[A-Za-z0-9_/[\]#-]+(\s|")/g, '$1');

  // 2. Borders
  code = code.replace(/border-white\/[0-9]+/g, 'border-blue-100');
  
  // 3. Colors: D32F2F (Red), EF5350 (Light Red), C9A84C (Gold) -> Blue Shades
  code = code.replace(/#D32F2F/gi, '#1e3a8a'); // blue-900 for dark accents
  code = code.replace(/#EF5350/gi, '#3b82f6'); // blue-500 for mid accents
  code = code.replace(/#C9A84C/gi, '#2563eb'); // blue-600
  code = code.replace(/#fcd34d/gi, '#93c5fd'); // blue-300
  
  // 4. Text adjustments for Light Mode readability
  code = code.replace(/text-gray-400/g, 'text-slate-600');
  code = code.replace(/text-gray-500/g, 'text-slate-500');
  code = code.replace(/text-gray-300/g, 'text-slate-700');
  
  // 5. Replace text-white globally, EXCEPT we will manually restore the Home Hero later.
  code = code.replace(/text-white/g, 'text-slate-900');

  // Fix up specific weird tailwind classes produced by simple regex
  code = code.replace(/text-slate-900\/[0-9]+/g, 'text-slate-600'); // No transparent black usually looks good, just use slate-600

  // 6. Fix gradient from old dark colors
  code = code.replace(/from-\[#(003366|0a1628)\]/g, 'from-blue-50');
  code = code.replace(/var-\[#(0d1f3c)\]/g, 'via-white');
  code = code.replace(/to-\[#(003366|0a1628)\]/g, 'to-blue-50');
  code = code.replace(/via-\[#(004080|0d1f3c)\]/g, 'via-white');

  if(code !== original) {
    fs.writeFileSync(filePath, code);
    console.log(`Converted to Light Theme: ${filePath}`);
  }
});
