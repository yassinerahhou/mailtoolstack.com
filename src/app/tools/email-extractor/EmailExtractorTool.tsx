'use client';

import { useState } from 'react';
import { extractEmails, copyToClipboard } from '@/lib/utils';
import { CopyButton } from '@/components/CopyButton';

export function EmailExtractorTool() {
  const [input, setInput] = useState('');
  const [emails, setEmails] = useState<string[]>([]);
  const [extracted, setExtracted] = useState(false);
  const [copyAllDone, setCopyAllDone] = useState(false);

  function extract() {
    const found = extractEmails(input);
    setEmails(found);
    setExtracted(true);
  }

  async function handleCopyAll() {
    await copyToClipboard(emails.join('\n'));
    setCopyAllDone(true);
    setTimeout(() => setCopyAllDone(false), 2000);
  }

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="text-input" className="block text-sm font-medium text-foreground mb-2">
          Paste Your Text
        </label>
        <textarea
          id="text-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste any text here... All email addresses will be extracted automatically.&#10;&#10;Example: Contact us at info@example.com or support@company.org for help."
          rows={8}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted outline-none focus:border-primary transition-colors resize-none text-sm"
          aria-describedby="text-help"
        />
        <p id="text-help" className="mt-1 text-xs text-muted">
          {input.length > 0 ? `${input.length} characters` : 'No input yet'}
        </p>
      </div>

      <button
        onClick={extract}
        disabled={!input.trim()}
        className="w-full py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Extract Email Addresses
      </button>

      {extracted && (
        <div>
          {emails.length === 0 ? (
            <div className="text-center py-8 text-muted">
              <p className="text-2xl mb-2">🔍</p>
              <p className="font-medium">No email addresses found</p>
              <p className="text-sm mt-1">Make sure your text contains valid email addresses.</p>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-sm font-medium text-foreground">
                    {emails.length} unique email{emails.length !== 1 ? 's' : ''} extracted
                  </span>
                </div>
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
              <div className="rounded-lg border border-border overflow-hidden max-h-80 overflow-y-auto">
                <div className="divide-y divide-border">
                  {emails.map((email) => (
                    <div
                      key={email}
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
      )}
    </div>
  );
}
