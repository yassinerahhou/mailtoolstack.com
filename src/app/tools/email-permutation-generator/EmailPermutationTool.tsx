'use client';

import { useState } from 'react';
import { generateEmailPermutations, copyToClipboard } from '@/lib/utils';
import { CopyButton } from '@/components/CopyButton';

export function EmailPermutationTool() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [domain, setDomain] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [copyAllDone, setCopyAllDone] = useState(false);

  function generate() {
    if (!firstName.trim() || !lastName.trim() || !domain.trim()) return;
    const emails = generateEmailPermutations(
      firstName.trim(),
      lastName.trim(),
      domain.trim().replace(/^@/, '')
    );
    setResults(emails);
  }

  async function handleCopyAll() {
    await copyToClipboard(results.join('\n'));
    setCopyAllDone(true);
    setTimeout(() => setCopyAllDone(false), 2000);
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium text-foreground mb-2">
            First Name
          </label>
          <input
            id="first-name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium text-foreground mb-2">
            Last Name
          </label>
          <input
            id="last-name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Smith"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label htmlFor="company-domain" className="block text-sm font-medium text-foreground mb-2">
            Company Domain
          </label>
          <input
            id="company-domain"
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="company.com"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <button
        onClick={generate}
        disabled={!firstName.trim() || !lastName.trim() || !domain.trim()}
        className="w-full py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Generate Permutations
      </button>

      {results.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-foreground">
              {results.length} email format{results.length !== 1 ? 's' : ''} generated
            </span>
            <button
              onClick={handleCopyAll}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                copyAllDone
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-primary text-white hover:bg-primary/90'
              }`}
            >
              {copyAllDone ? '✓ Copied!' : 'Copy All'}
            </button>
          </div>
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="divide-y divide-border">
              {results.map((email, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-4 py-2.5 bg-background hover:bg-card transition-colors"
                >
                  <span className="font-mono text-sm text-foreground">{email}</span>
                  <CopyButton text={email} />
                </div>
              ))}
            </div>
          </div>
          <p className="mt-3 text-xs text-muted">
            💡 Tip: Verify the correct format by finding any publicly known email at the target company, then identify the pattern.
          </p>
        </div>
      )}
    </div>
  );
}
