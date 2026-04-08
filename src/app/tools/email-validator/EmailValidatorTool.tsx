'use client';

import { useState } from 'react';
import { isDisposableEmail } from '@/lib/disposable-domains';

interface CheckResult {
  label: string;
  pass: boolean;
  detail: string;
}

const COMMON_TYPOS: Record<string, string> = {
  'gmial.com': 'gmail.com',
  'gmai.com': 'gmail.com',
  'gamil.com': 'gmail.com',
  'gmal.com': 'gmail.com',
  'hotmal.com': 'hotmail.com',
  'hotmai.com': 'hotmail.com',
  'yaho.com': 'yahoo.com',
  'yahooo.com': 'yahoo.com',
  'outloook.com': 'outlook.com',
  'outlok.com': 'outlook.com',
};

function validateEmail(email: string): { valid: boolean; checks: CheckResult[]; suggestion?: string } {
  const checks: CheckResult[] = [];
  let suggestion: string | undefined;

  // Check: not empty
  if (!email.trim()) {
    return { valid: false, checks: [{ label: 'Input', pass: false, detail: 'Email address is empty.' }] };
  }

  // Check: has exactly one @
  const atCount = (email.match(/@/g) || []).length;
  checks.push({
    label: 'Contains @ symbol',
    pass: atCount === 1,
    detail: atCount === 0 ? 'Missing @ symbol.' : atCount > 1 ? 'Multiple @ symbols found.' : 'Contains exactly one @ symbol.',
  });

  if (atCount !== 1) return { valid: false, checks };

  const [local, domain] = email.split('@');

  // Check: local part length
  checks.push({
    label: 'Local part length',
    pass: local.length >= 1 && local.length <= 64,
    detail: local.length < 1 ? 'Local part is empty.' : local.length > 64 ? 'Local part exceeds 64 characters.' : `Local part "${local}" has ${local.length} character(s).`,
  });

  // Check: local part characters
  const validLocalRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/;
  const localValid = validLocalRegex.test(local);
  checks.push({
    label: 'Local part characters',
    pass: localValid,
    detail: localValid ? 'Valid characters in local part.' : 'Invalid characters detected in local part.',
  });

  // Check: domain not empty
  checks.push({
    label: 'Domain present',
    pass: domain.length > 0,
    detail: domain.length > 0 ? `Domain: ${domain}` : 'Domain part is missing.',
  });

  if (!domain) return { valid: false, checks };

  // Check: domain has a dot
  const domainHasDot = domain.includes('.');
  checks.push({
    label: 'Domain format',
    pass: domainHasDot,
    detail: domainHasDot ? 'Domain contains a dot separator.' : 'Domain must contain at least one dot.',
  });

  // Check: TLD length
  const parts = domain.split('.');
  const tld = parts[parts.length - 1];
  const tldValid = tld.length >= 2 && tld.length <= 24 && /^[a-zA-Z]+$/.test(tld);
  checks.push({
    label: 'Valid TLD',
    pass: tldValid,
    detail: tldValid ? `TLD ".${tld}" looks valid.` : `TLD ".${tld}" appears invalid.`,
  });

  // Check: domain length
  const domainLengthValid = domain.length <= 253;
  checks.push({
    label: 'Domain length',
    pass: domainLengthValid,
    detail: domainLengthValid ? `Domain length (${domain.length}) is within limits.` : 'Domain exceeds 253 characters.',
  });

  // Check: no consecutive dots
  const noConsecutiveDots = !/\.\./.test(email);
  checks.push({
    label: 'No consecutive dots',
    pass: noConsecutiveDots,
    detail: noConsecutiveDots ? 'No consecutive dots found.' : 'Consecutive dots (..) are not allowed.',
  });

  // Check: common typo
  const lowerDomain = domain.toLowerCase();
  if (COMMON_TYPOS[lowerDomain]) {
    suggestion = `${local}@${COMMON_TYPOS[lowerDomain]}`;
  }
  checks.push({
    label: 'Typo check',
    pass: !COMMON_TYPOS[lowerDomain],
    detail: COMMON_TYPOS[lowerDomain]
      ? `Did you mean @${COMMON_TYPOS[lowerDomain]}?`
      : 'No common typos detected.',
  });

  // Check: disposable
  const disposable = isDisposableEmail(email);
  checks.push({
    label: 'Not a disposable domain',
    pass: !disposable,
    detail: disposable ? 'This domain is a known disposable/temporary email service.' : 'Domain is not a known disposable email service.',
  });

  const allCriticalPass = checks.slice(0, 7).every((c) => c.pass);
  return { valid: allCriticalPass, checks, suggestion };
}

export function EmailValidatorTool() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<ReturnType<typeof validateEmail> | null>(null);

  function validate() {
    setResult(validateEmail(email.trim()));
  }

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="email-validate" className="block text-sm font-medium text-foreground mb-2">
          Email Address to Validate
        </label>
        <div className="flex gap-3">
          <input
            id="email-validate"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && validate()}
            placeholder="example@domain.com"
            className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted outline-none focus:border-primary transition-colors"
          />
          <button
            onClick={validate}
            disabled={!email.trim()}
            className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
          >
            Validate
          </button>
        </div>
      </div>

      {result && (
        <div className="space-y-4">
          {/* Overall result */}
          <div className={`flex items-center gap-3 p-4 rounded-xl border ${
            result.valid
              ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900/50'
              : 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-900/50'
          }`}>
            <span className="text-2xl">{result.valid ? '✅' : '❌'}</span>
            <div>
              <div className={`font-bold ${result.valid ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                {result.valid ? 'Valid Email Address' : 'Invalid Email Address'}
              </div>
              {result.suggestion && (
                <div className="text-sm text-amber-700 dark:text-amber-400 mt-1">
                  💡 Did you mean: <strong>{result.suggestion}</strong>?
                </div>
              )}
            </div>
          </div>

          {/* Detailed checks */}
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="px-4 py-3 bg-card border-b border-border">
              <h3 className="text-sm font-semibold text-foreground">Validation Checks</h3>
            </div>
            <div className="divide-y divide-border">
              {result.checks.map((check, i) => (
                <div key={i} className="flex items-start gap-3 px-4 py-3 bg-background">
                  <span className={`mt-0.5 flex-shrink-0 ${check.pass ? 'text-green-500' : 'text-red-500'}`}>
                    {check.pass ? '✓' : '✗'}
                  </span>
                  <div>
                    <div className="text-sm font-medium text-foreground">{check.label}</div>
                    <div className="text-xs text-muted mt-0.5">{check.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
