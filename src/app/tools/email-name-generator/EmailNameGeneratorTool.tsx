'use client';

import { useState } from 'react';
import { generateEmailPermutations } from '@/lib/utils';
import { CopyButton } from '@/components/CopyButton';

const DOMAINS = ['gmail.com', 'outlook.com', 'yahoo.com', 'proton.me', 'icloud.com'];

export function EmailNameGeneratorTool() {
  const [fullName, setFullName] = useState('');
  const [selectedDomains, setSelectedDomains] = useState<string[]>(['gmail.com']);
  const [customDomain, setCustomDomain] = useState('');
  const [results, setResults] = useState<string[]>([]);

  function toggleDomain(d: string) {
    setSelectedDomains((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    );
  }

  function generate() {
    const parts = fullName.trim().toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/).filter(Boolean);
    if (parts.length < 2) return;

    const [first, ...rest] = parts;
    const last = rest[rest.length - 1];

    const domains = [...selectedDomains, ...(customDomain ? [customDomain] : [])];
    const allResults: string[] = [];

    for (const domain of domains) {
      const perms = generateEmailPermutations(first, last, domain);
      allResults.push(...perms);
    }

    setResults([...new Set(allResults)]);
  }

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="full-name" className="block text-sm font-medium text-foreground mb-2">
          Full Name
        </label>
        <input
          id="full-name"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="John Smith"
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted outline-none focus:border-primary transition-colors"
        />
        <p className="mt-1 text-xs text-muted">Enter at least first and last name.</p>
      </div>

      <div>
        <p className="block text-sm font-medium text-foreground mb-2">Select Domains</p>
        <div className="flex flex-wrap gap-2">
          {DOMAINS.map((d) => (
            <button
              key={d}
              onClick={() => toggleDomain(d)}
              className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                selectedDomains.includes(d)
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-muted hover:border-primary/50 hover:text-foreground'
              }`}
            >
              @{d}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="custom-domain-name" className="block text-sm font-medium text-foreground mb-2">
          Custom Domain (optional)
        </label>
        <input
          id="custom-domain-name"
          type="text"
          value={customDomain}
          onChange={(e) => setCustomDomain(e.target.value)}
          placeholder="yourcompany.com"
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted outline-none focus:border-primary transition-colors"
        />
      </div>

      <button
        onClick={generate}
        disabled={fullName.trim().split(/\s+/).length < 2}
        className="w-full py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Generate Email Suggestions
      </button>

      {results.length > 0 && (
        <div>
          <div className="mb-3">
            <span className="text-sm font-medium text-foreground">
              {results.length} email suggestion{results.length !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="rounded-lg border border-border overflow-hidden max-h-96 overflow-y-auto">
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
        </div>
      )}
    </div>
  );
}
