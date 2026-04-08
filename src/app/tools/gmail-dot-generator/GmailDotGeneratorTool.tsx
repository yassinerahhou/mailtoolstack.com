'use client';

import { useState, useMemo } from 'react';
import { generateDotVariations, copyToClipboard } from '@/lib/utils';
import { CopyButton } from '@/components/CopyButton';

export function GmailDotGeneratorTool() {
  const [username, setUsername] = useState('');
  const [page, setPage] = useState(0);
  const [copyAllDone, setCopyAllDone] = useState(false);

  const PAGE_SIZE = 50;

  const variations = useMemo(() => {
    const clean = username.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!clean || clean.length < 2) return [];
    if (clean.length > 14) return [];
    return generateDotVariations(clean).map((v) => `${v}@gmail.com`);
  }, [username]);

  const totalPages = Math.ceil(variations.length / PAGE_SIZE);
  const pageItems = variations.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const cleanUsername = username.toLowerCase().replace(/[^a-z0-9]/g, '');
  const tooLong = cleanUsername.length > 14;
  const tooShort = cleanUsername.length === 1;

  async function handleCopyAll() {
    await copyToClipboard(variations.join('\n'));
    setCopyAllDone(true);
    setTimeout(() => setCopyAllDone(false), 2000);
  }

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="username-input" className="block text-sm font-medium text-foreground mb-2">
          Gmail Username
        </label>
        <div className="flex gap-3">
          <div className="flex-1 flex items-center border border-border rounded-lg overflow-hidden bg-background focus-within:border-primary transition-colors">
            <input
              id="username-input"
              type="text"
              value={username}
              onChange={(e) => { setUsername(e.target.value); setPage(0); }}
              placeholder="yourname"
              maxLength={20}
              className="flex-1 px-4 py-3 bg-transparent text-foreground placeholder-muted outline-none"
              aria-describedby="username-help"
            />
            <span className="px-3 py-3 text-muted border-l border-border text-sm select-none">
              @gmail.com
            </span>
          </div>
        </div>
        <p id="username-help" className="mt-1.5 text-xs text-muted">
          Enter your Gmail username without @gmail.com. Max 14 characters for generation.
        </p>
        {tooLong && (
          <p className="mt-1.5 text-xs text-amber-600 dark:text-amber-400">
            Username too long — please use 14 characters or fewer to avoid millions of results.
          </p>
        )}
        {tooShort && (
          <p className="mt-1.5 text-xs text-muted">
            Enter at least 2 characters.
          </p>
        )}
      </div>

      {variations.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-sm font-medium text-foreground">
                {variations.length} variation{variations.length !== 1 ? 's' : ''} generated
              </span>
              {totalPages > 1 && (
                <span className="ml-2 text-xs text-muted">
                  (showing {page * PAGE_SIZE + 1}–{Math.min((page + 1) * PAGE_SIZE, variations.length)})
                </span>
              )}
            </div>
            <button
              onClick={handleCopyAll}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                copyAllDone
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-primary text-white hover:bg-primary/90'
              }`}
            >
              {copyAllDone ? '✓ Copied All!' : `Copy All ${variations.length}`}
            </button>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <div className="divide-y divide-border">
              {pageItems.map((email) => (
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

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-4">
              <button
                onClick={() => setPage(Math.max(0, page - 1))}
                disabled={page === 0}
                className="px-3 py-1.5 text-sm rounded-lg border border-border text-muted hover:text-foreground hover:border-primary/50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                ← Prev
              </button>
              <span className="text-sm text-muted">
                Page {page + 1} of {totalPages}
              </span>
              <button
                onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
                disabled={page === totalPages - 1}
                className="px-3 py-1.5 text-sm rounded-lg border border-border text-muted hover:text-foreground hover:border-primary/50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next →
              </button>
            </div>
          )}
        </div>
      )}

      {cleanUsername.length >= 2 && !tooLong && variations.length === 0 && (
        <div className="text-center py-8 text-muted">
          <p>No variations generated. Check your input.</p>
        </div>
      )}
    </div>
  );
}
