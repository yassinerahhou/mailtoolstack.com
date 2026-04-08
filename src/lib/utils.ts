export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  }
  // Fallback for older browsers
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  return Promise.resolve();
}

export function isValidEmail(email: string): boolean {
  // RFC 5322 compliant regex (simplified but comprehensive)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export function extractEmails(text: string): string[] {
  const emailRegex = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}/g;
  const found = text.match(emailRegex) || [];
  return [...new Set(found)];
}

export function generateDotVariations(username: string): string[] {
  const chars = username.split('');
  const n = chars.length;
  const positions = n - 1;
  const total = Math.pow(2, positions);
  const results: string[] = [];

  for (let i = 0; i < total; i++) {
    let result = chars[0];
    for (let j = 0; j < positions; j++) {
      if ((i >> j) & 1) {
        result += '.';
      }
      result += chars[j + 1];
    }
    results.push(result);
  }
  return results;
}

export function generateEmailPermutations(
  firstName: string,
  lastName: string,
  domain: string
): string[] {
  const f = firstName.toLowerCase();
  const l = lastName.toLowerCase();
  const fi = f[0];
  const li = l[0];
  const d = domain.toLowerCase();

  const patterns = [
    `${f}.${l}@${d}`,
    `${f}${l}@${d}`,
    `${fi}${l}@${d}`,
    `${fi}.${l}@${d}`,
    `${f}.${li}@${d}`,
    `${f}@${d}`,
    `${l}@${d}`,
    `${l}.${f}@${d}`,
    `${l}${f}@${d}`,
    `${l}${fi}@${d}`,
    `${l}.${fi}@${d}`,
    `${f}_${l}@${d}`,
    `${f}-${l}@${d}`,
    `${fi}${li}@${d}`,
    `${fi}.${li}@${d}`,
  ];

  return [...new Set(patterns)];
}

export function generateUsernameFromName(name: string): string[] {
  const clean = name.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  const results: string[] = [];

  if (parts.length === 0) return results;

  const main = parts.join('');
  const dotted = parts.join('.');
  const underscored = parts.join('_');
  const dashed = parts.join('-');

  results.push(main);
  if (parts.length > 1) {
    results.push(dotted);
    results.push(underscored);
    results.push(dashed);
    results.push(`${parts[0]}${parts[parts.length - 1][0]}`);
    results.push(`${parts[0][0]}${parts[parts.length - 1]}`);
  }

  // Add number suffixes
  const suffixes = ['1', '2', '123', '99', '007', new Date().getFullYear().toString()];
  const base = parts.length > 1 ? dotted : main;
  for (const suffix of suffixes) {
    results.push(`${base}${suffix}`);
  }

  return [...new Set(results)].slice(0, 20);
}

const adjectives = ['cool', 'swift', 'bright', 'smart', 'quick', 'bold', 'sharp', 'clear', 'prime', 'elite'];
const nouns = ['eagle', 'fox', 'wolf', 'hawk', 'tiger', 'lion', 'bear', 'byte', 'pixel', 'spark'];

export function generateRandomGmail(): string {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const num = Math.floor(Math.random() * 999) + 1;
  const patterns = [
    `${adj}${noun}${num}`,
    `${adj}.${noun}${num}`,
    `${noun}.${adj}${num}`,
    `${adj}${noun}.${num}`,
  ];
  return patterns[Math.floor(Math.random() * patterns.length)] + '@gmail.com';
}
