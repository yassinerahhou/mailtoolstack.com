'use client';

import { useState } from 'react';
import { isValidEmail, copyToClipboard } from '@/lib/utils';
import { CopyButton } from '@/components/CopyButton';

export function EmailCleanerTool() {
  const [input, setInput] = useState('');
  const [cleaned, setCleaned] = useState<string[]>([]);
  const [stats, setStats] = useState<{ total: number; duplicates: number; invalid: number } | null>(null);
  const [copyAllDone, setCopyAllDone] = useState(false);

  function clean() {
    const raw = input
      .split(/[\n,;]+/)
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean);

    const total = raw.length;
    const seen = new Set<string>();
    const duplicates: string[] = [];
    const invalid: string[] = [];
    const valid: string[] = [];

    for (const email of raw) {
      if (seen.has(email)) {
        duplicates.push(email);
        continue;
      }
      seen.add(email);
      if (!isValidEmail(email)) {
        invalid.push(email);
      } else {
        valid.push(email);
      }
    }

    setCleaned(valid);
    setStats({ total, duplicates: duplicates.length, invalid: invalid.length });
  }

  async function handleCopyAll() {
    await copyToClipboard(cleaned.join('\n'));
    setCopyAllDone(true);
    setTimeout(() => setCopyAllDone(false), 2000);
  }

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="email-list" className="block text-sm font-medium text-foreground mb-2">
          Email List
        </label>
        <textarea
          id="email-list"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="john@example.com&#10;jane@example.com&#10;john@example.com&#10;invalid-email&#10;..."
          rows={8}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted outline-none focus:border-primary transition-colors resize-none font-mono text-sm"
          aria-describedby="email-list-help"
        />
        <p id="email-list-help" className="mt-1 text-xs text-muted">
          One email per line, or comma/semicolon separated.
        </p>
      </div>

      <button
        onClick={clean}
        disabled={!input.trim()}
        className="w-full py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Clean Email List
      </button>

      {stats && (
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 rounded-lg bg-background border border-border">
            <div className="text-2xl font-bold text-foreground">{stats.total}</div>
            <div className="text-xs text-muted">Total Input</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-red-50 border border-red-100 dark:bg-red-900/20 dark:border-red-900/40">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">{stats.duplicates + stats.invalid}</div>
            <div className="text-xs text-red-500 dark:text-red-400">Removed</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-green-50 border border-green-100 dark:bg-green-900/20 dark:border-green-900/40">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{cleaned.length}</div>
            <div className="text-xs text-green-500 dark:text-green-400">Clean Emails</div>
          </div>
        </div>
      )}

      {cleaned.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-foreground">
              {cleaned.length} clean email{cleaned.length !== 1 ? 's' : ''}
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
          <div className="rounded-lg border border-border overflow-hidden max-h-80 overflow-y-auto">
            <div className="divide-y divide-border">
              {cleaned.map((email) => (
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
  );
}
