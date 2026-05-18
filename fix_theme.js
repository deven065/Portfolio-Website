const fs = require('fs');
const files = ['client/pages/PrivacyPolicy.tsx', 'client/pages/TermsOfService.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Replace colors
  content = content.replace(/bg-slate-800\/50/g, 'bg-white');
  content = content.replace(/bg-slate-800\/30/g, 'bg-white');
  content = content.replace(/bg-slate-950/g, 'bg-[#F8FAFC]');
  content = content.replace(/border-slate-700\/50/g, 'border-[#E2E8F0]');
  content = content.replace(/text-slate-300/g, 'text-[#64748B]');
  content = content.replace(/text-slate-400/g, 'text-[#64748B]');
  content = content.replace(/text-blue-400/g, 'text-[#2563EB]');
  content = content.replace(/bg-blue-500\/10/g, 'bg-[#2563EB]/10');
  content = content.replace(/bg-blue-500\/5/g, 'bg-[#2563EB]/5');
  content = content.replace(/border-blue-500\/20/g, 'border-[#2563EB]/20');
  content = content.replace(/text-blue-200/g, 'text-[#2563EB]');
  content = content.replace(/text-blue-300/g, 'text-[#2563EB]/90');
  content = content.replace(/bg-yellow-500\/10/g, 'bg-yellow-100');
  content = content.replace(/border-yellow-500\/20/g, 'border-yellow-200');
  content = content.replace(/text-yellow-200/g, 'text-yellow-800');
  content = content.replace(/text-yellow-400/g, 'text-yellow-600');
  content = content.replace(/prose-invert/g, ''); // Remove invert for light mode
  content = content.replace(/text-white/g, 'text-[#0F172A]');
  content = content.replace(/bg-slate-900\/40/g, 'bg-[#F8FAFC]');

  // specific replacements
  content = content.replace(/bg-cyan-500\/5/g, 'bg-cyan-500/10');
  
  fs.writeFileSync(file, content);
  console.log('Fixed', file);
});
