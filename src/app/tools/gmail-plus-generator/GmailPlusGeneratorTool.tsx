'use client';

import { useState } from 'react';
import { CopyButton } from '@/components/CopyButton';
import { copyToClipboard } from '@/lib/utils';

const SUGGESTED_TAGS = [
  'shopping', 'newsletters', 'work', 'finance', 'social',
  'gaming', 'travel', 'health', 'news', 'promo',
  'amazon', 'netflix', 'spotify', 'github', 'linkedin',
];

export function GmailPlusGeneratorTool() {
  const [email, setEmail] = useState('');
  const [tags, setTags] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [copyAllDone, setCopyAllDone] = useState(false);

  function generate() {
    const baseEmail = email.trim().toLowerCase();
    if (!baseEmail.includes('@')) return;
    const [local, domain] = baseEmail.split('@');
    const cleanLocal = local.split('+')[0]; // strip existing + if any

    const tagList = tags
      .split(/[\n,;]+/)
      .map((t) => t.trim().replace(/\s+/g, '-').toLowerCase())
      .filter(Boolean);

    if (tagList.length === 0) return;
    const generated = tagList.map((tag) => `${cleanLocal}+${tag}@${domain}`);
    setResults(generated);
  }

  function addSuggestedTag(tag: string) {
    const current = tags.trim();
    setTags(current ? `${current}\n${tag}` : tag);
  }

  async function handleCopyAll() {
    await copyToClipboard(results.join('\n'));
    setCopyAllDone(true);
    setTimeout(() => setCopyAllDone(false), 2000);
  }

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="email-input" className="block text-sm font-medium text-foreground mb-2">
          Your Gmail Address
        </label>
        <input
          id="email-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="yourname@gmail.com"
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted outline-none focus:border-primary transition-colors"
        />
      </div>

      <div>
        <label htmlFor="tags-input" className="block text-sm font-medium text-foreground mb-2">
          Tags / Labels
        </label>
        <textarea
          id="tags-input"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="shopping&#10;newsletters&#10;work"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted outline-none focus:border-primary transition-colors resize-none font-mono text-sm"
          aria-describedby="tags-help"
        />
        <p id="tags-help" className="mt-1 text-xs text-muted">
          One tag per line, or comma-separated.
        </p>
      </div>

      {/* Suggested Tags */}
      <div>
        <p className="text-xs font-medium text-muted mb-2">Quick Add:</p>
        <div className="flex flex-wrap gap-2">
          {SUGGESTED_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => addSuggestedTag(tag)}
              className="px-2.5 py-1 text-xs rounded-full border border-border text-muted hover:border-primary/50 hover:text-primary transition-colors"
            >
              +{tag}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={generate}
        disabled={!email.includes('@') || !tags.trim()}
        className="w-full py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Generate Plus Aliases
      </button>

      {results.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-foreground">
              {results.length} alias{results.length !== 1 ? 'es' : ''} generated
            </span>
            <button
              onClick={handleCopyAll}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                copyAllDone
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-primary text-white hover:bg-primary/90'
              }`}
            >
              {copyAllDone ? '✓ Copied All!' : 'Copy All'}
            </button>
          </div>
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="divide-y divide-border">
              {results.map((alias) => (
                <div
                  key={alias}
                  className="flex items-center justify-between px-4 py-2.5 bg-background hover:bg-card transition-colors"
                >
                  <span className="font-mono text-sm text-foreground">{alias}</span>
                  <CopyButton text={alias} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
