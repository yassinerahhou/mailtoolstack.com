import type { Metadata } from 'next';
import { ToolWrapper } from '@/components/ToolWrapper';
import { GmailDotGeneratorTool } from './GmailDotGeneratorTool';

export const metadata: Metadata = {
  title: 'Gmail Dot Generator — All Dot Variations of Your Gmail Address',
  description:
    'Generate all possible dot variations of your Gmail address instantly. Gmail ignores dots, so every variation delivers to the same inbox. Free, instant, no signup.',
  keywords: ['gmail dot generator', 'gmail dot trick', 'gmail dot variations', 'gmail aliases'],
  alternates: { canonical: 'https://emailtoolspro.com/tools/gmail-dot-generator' },
  openGraph: {
    title: 'Gmail Dot Generator — All Dot Variations of Your Gmail Address',
    description:
      'Generate all possible dot variations of your Gmail address instantly. Free, no signup required.',
    url: 'https://emailtoolspro.com/tools/gmail-dot-generator',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Gmail Dot Generator',
  description: 'Generate all possible dot variations of a Gmail address',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://emailtoolspro.com/tools/gmail-dot-generator',
};

export default function GmailDotGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolWrapper
        title="Gmail Dot Generator"
        description="Generate every possible dot variation of your Gmail address. Gmail treats them all as the same inbox — use them as unique aliases."
        toolName="Gmail Dot Generator"
      >
        <GmailDotGeneratorTool />
      </ToolWrapper>

      {/* How it works section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none">
          <h2>How the Gmail Dot Trick Works</h2>
          <p>
            Gmail ignores all dots (periods) in the local part of email addresses. This means{' '}
            <strong>john.doe@gmail.com</strong> and <strong>johndoe@gmail.com</strong> both deliver
            to the same inbox. Our generator creates every possible dot permutation for your address.
          </p>
          <h3>How Many Variations Are There?</h3>
          <p>
            For a username with <strong>n</strong> characters, there are <strong>2^(n-1)</strong>{' '}
            possible dot variations. A 5-character username like &quot;james&quot; generates 16 variations.
            A 10-character username generates 512 variations.
          </p>
          <h3>Use Cases</h3>
          <ul>
            <li>Track which services sell or share your email</li>
            <li>Create multiple accounts on services that allow only one per email</li>
            <li>Set up Gmail filters for different categories of mail</li>
            <li>Test email delivery systems and applications</li>
          </ul>
        </div>
      </div>
    </>
  );
}
