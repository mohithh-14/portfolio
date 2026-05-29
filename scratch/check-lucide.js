const lucide = require('lucide-react');

const keys = Object.keys(lucide);
console.log("Total Lucide Icons:", keys.length);
console.log("Github matches:", keys.filter(k => k.toLowerCase().includes('github')));
console.log("Linkedin matches:", keys.filter(k => k.toLowerCase().includes('linkedin')));
