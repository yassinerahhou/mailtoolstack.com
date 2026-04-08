'use client';

import { useState } from 'react';
import { CopyButton } from '@/components/CopyButton';
import { copyToClipboard } from '@/lib/utils';

const firstNames = ['alex', 'blake', 'casey', 'dana', 'drew', 'eden', 'finn', 'gray', 'hunter', 'ivy', 'jade', 'kai', 'lane', 'morgan', 'noel', 'quinn', 'riley', 'sage', 'skylar', 'taylor'];
const lastNames = ['smith', 'jones', 'davis', 'miller', 'wilson', 'moore', 'taylor', 'lee', 'parker', 'hall', 'allen', 'young', 'king', 'wright', 'scott', 'green', 'baker', 'hill', 'clark', 'turner'];
const adjectives = ['swift', 'bright', 'cool', 'quick', 'smart', 'bold', 'sharp', 'epic', 'lucky', 'prime'];
const nouns = ['wolf', 'eagle', 'fox', 'hawk', 'byte', 'pixel', 'spark', 'wave', 'star', 'cloud'];

function rand<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randNum(max = 999): number {
  return Math.floor(Math.random() * max) + 1;
}

type Style = 'name-dot-name' | 'name-number' | 'adj-noun' | 'adj-noun-number' | 'name-name';

function generateOne(style: Style): string {
  switch (style) {
    case 'name-dot-name':
      return `${rand(firstNames)}.${rand(lastNames)}@gmail.com`;
    case 'name-number':
      return `${rand(firstNames)}${rand(lastNames)}${randNum()}@gmail.com`;
    case 'adj-noun':
      return `${rand(adjectives)}${rand(nouns)}@gmail.com`;
    case 'adj-noun-number':
      return `${rand(adjectives)}.${rand(nouns)}${randNum(99)}@gmail.com`;
    case 'name-name':
      return `${rand(firstNames)}${rand(firstNames)}@gmail.com`;
    default:
      return `${rand(firstNames)}.${rand(lastNames)}@gmail.com`;
  }
}

export function RandomGmailGeneratorTool() {
  const [style, setStyle] = useState<Style>('name-dot-name');
  const [count, setCount] = useState(10);
  const [results, setResults] = useState<string[]>([]);
  const [copyAllDone, setCopyAllDone] = useState(false);

  function generate() {
    const emails: string[] = [];
    const seen = new Set<string>();
    let attempts = 0;
    while (emails.length < count && attempts < count * 10) {
      const email = generateOne(style);
      if (!seen.has(email)) {
        seen.add(email);
        emails.push(email);
      }
      attempts++;
    }
    setResults(emails);
  }

  async function handleCopyAll() {
    await copyToClipboard(results.join('\n'));
    setCopyAllDone(true);
    setTimeout(() => setCopyAllDone(false), 2000);
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="style-select" className="block text-sm font-medium text-foreground mb-2">
            Naming Style
          </label>
          <select
            id="style-select"
            value={style}
            onChange={(e) => setStyle(e.target.value as Style)}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground outline-none focus:border-primary transition-colors"
          >
            <option value="name-dot-name">firstname.lastname (e.g. alex.smith)</option>
            <option value="name-number">namelastnamenumber (e.g. alexsmith42)</option>
            <option value="adj-noun">adjectivenoun (e.g. swiftwolf)</option>
            <option value="adj-noun-number">adj.noun+number (e.g. swift.wolf12)</option>
            <option value="name-name">firstname+firstname (e.g. alexblake)</option>
          </select>
        </div>

        <div>
          <label htmlFor="count-input" className="block text-sm font-medium text-foreground mb-2">
            Number to Generate
          </label>
          <input
            id="count-input"
            type="number"
            value={count}
            onChange={(e) => setCount(Math.min(100, Math.max(1, parseInt(e.target.value) || 1)))}
            min={1}
            max={100}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <button
        onClick={generate}
        className="w-full py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
      >
        Generate Random Emails
      </button>

      {results.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-foreground">
              {results.length} addresses generated
            </span>
            <div className="flex gap-2">
              <button
                onClick={generate}
                className="px-3 py-1.5 text-xs font-medium rounded-md border border-border text-muted hover:text-foreground transition-colors"
              >
                Regenerate
              </button>
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
        </div>
      )}
    </div>
  );
}
