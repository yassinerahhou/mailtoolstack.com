'use client';

import { useState } from 'react';
import { generateUsernameFromName } from '@/lib/utils';
import { CopyButton } from '@/components/CopyButton';

const EMAIL_DOMAINS = ['gmail.com', 'outlook.com', 'yahoo.com', 'proton.me', 'icloud.com'];

export function UsernameGeneratorTool() {
  const [name, setName] = useState('');
  const [domain, setDomain] = useState('gmail.com');
  const [customDomain, setCustomDomain] = useState('');
  const [showEmails, setShowEmails] = useState(false);
  const [usernames, setUsernames] = useState<string[]>([]);

  function generate() {
    const generated = generateUsernameFromName(name);
    setUsernames(generated);
  }

  const activeDomain = customDomain || domain;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name-input" className="block text-sm font-medium text-foreground mb-2">
            Your Name or Keywords
          </label>
          <input
            id="name-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && generate()}
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label htmlFor="domain-select" className="block text-sm font-medium text-foreground mb-2">
            Email Domain (optional)
          </label>
          <select
            id="domain-select"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground outline-none focus:border-primary transition-colors"
          >
            {EMAIL_DOMAINS.map((d) => <option key={d} value={d}>{d}</option>)}
            <option value="custom">Custom domain...</option>
          </select>
        </div>
      </div>

      {domain === 'custom' && (
        <div>
          <label htmlFor="custom-domain" className="block text-sm font-medium text-foreground mb-2">
            Custom Domain
          </label>
          <input
            id="custom-domain"
            type="text"
            value={customDomain}
            onChange={(e) => setCustomDomain(e.target.value)}
            placeholder="yourcompany.com"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted outline-none focus:border-primary transition-colors"
          />
        </div>
      )}

      <div className="flex items-center gap-3">
        <button
          onClick={generate}
          disabled={!name.trim()}
          className="flex-1 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Generate Usernames
        </button>
        {usernames.length > 0 && (
          <button
            onClick={() => setShowEmails(!showEmails)}
            className="px-4 py-3 rounded-lg border border-border text-sm font-medium text-foreground hover:border-primary/50 transition-colors whitespace-nowrap"
          >
            {showEmails ? 'Show Usernames' : 'Show as Emails'}
          </button>
        )}
      </div>

      {usernames.length > 0 && (
        <div>
          <div className="mb-3">
            <span className="text-sm font-medium text-foreground">
              {usernames.length} suggestions
            </span>
          </div>
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="divide-y divide-border">
              {usernames.map((username) => {
                const value = showEmails ? `${username}@${activeDomain}` : username;
                return (
                  <div
                    key={username}
                    className="flex items-center justify-between px-4 py-2.5 bg-background hover:bg-card transition-colors"
                  >
                    <span className="font-mono text-sm text-foreground">{value}</span>
                    <CopyButton text={value} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
