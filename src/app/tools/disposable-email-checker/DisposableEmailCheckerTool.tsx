'use client';

import { useState } from 'react';
import { isDisposableEmail, getDomainInfo } from '@/lib/disposable-domains';
import { isValidEmail } from '@/lib/utils';

export function DisposableEmailCheckerTool() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<{
    email: string;
    valid: boolean;
    disposable: boolean;
    domain: string;
    tld: string;
  } | null>(null);

  function check() {
    const e = email.trim().toLowerCase();
    const valid = isValidEmail(e);
    const info = getDomainInfo(e);
    setResult({
      email: e,
      valid,
      disposable: info.isDisposable,
      domain: info.domain,
      tld: info.tld,
    });
  }

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="disposable-email" className="block text-sm font-medium text-foreground mb-2">
          Email Address to Check
        </label>
        <div className="flex gap-3">
          <input
            id="disposable-email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && check()}
            placeholder="user@mailinator.com"
            className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted outline-none focus:border-primary transition-colors"
          />
          <button
            onClick={check}
            disabled={!email.trim()}
            className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
          >
            Check
          </button>
        </div>
      </div>

      {result && (
        <div className="space-y-4">
          {!result.valid ? (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 dark:bg-amber-900/20 dark:border-amber-900/50">
              <span className="text-2xl">⚠️</span>
              <div>
                <div className="font-bold text-amber-700 dark:text-amber-400">Invalid Email Format</div>
                <div className="text-sm text-amber-600 dark:text-amber-300 mt-0.5">
                  Please enter a valid email address to check.
                </div>
              </div>
            </div>
          ) : (
            <div className={`flex items-center gap-3 p-5 rounded-xl border ${
              result.disposable
                ? 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-900/50'
                : 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900/50'
            }`}>
              <span className="text-3xl">{result.disposable ? '🚫' : '✅'}</span>
              <div>
                <div className={`text-xl font-bold ${
                  result.disposable
                    ? 'text-red-700 dark:text-red-400'
                    : 'text-green-700 dark:text-green-400'
                }`}>
                  {result.disposable ? 'Disposable Email Detected' : 'Not a Disposable Email'}
                </div>
                <div className={`text-sm mt-1 ${
                  result.disposable ? 'text-red-600 dark:text-red-300' : 'text-green-600 dark:text-green-300'
                }`}>
                  {result.disposable
                    ? `The domain @${result.domain} is a known disposable/temporary email service.`
                    : `The domain @${result.domain} is not in our disposable email database.`}
                </div>
              </div>
            </div>
          )}

          {result.valid && (
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-border bg-card">
                <div className="text-xs text-muted mb-1">Domain</div>
                <div className="font-mono text-sm font-medium text-foreground">{result.domain}</div>
              </div>
              <div className="p-4 rounded-lg border border-border bg-card">
                <div className="text-xs text-muted mb-1">Top-Level Domain</div>
                <div className="font-mono text-sm font-medium text-foreground">.{result.tld}</div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="p-4 rounded-lg bg-card border border-border">
        <p className="text-xs text-muted">
          <strong className="text-foreground">Note:</strong> Our database contains hundreds of known disposable
          email domains. A &quot;not disposable&quot; result means the domain is not in our list — it does not guarantee the
          email is real or deliverable.
        </p>
      </div>
    </div>
  );
}
