import type { Metadata } from 'next';
import { ToolWrapper } from '@/components/ToolWrapper';
import { DisposableEmailCheckerTool } from './DisposableEmailCheckerTool';

export const metadata: Metadata = {
  title: 'Disposable Email Checker — Detect Throwaway Email Addresses',
  description:
    'Check if an email address is from a disposable or temporary email service. Identifies thousands of throwaway email domains. Free disposable email detector.',
  keywords: ['disposable email checker', 'temporary email detector', 'throwaway email checker', 'fake email checker'],
  alternates: { canonical: 'https://emailtoolspro.com/tools/disposable-email-checker' },
};

export default function DisposableEmailCheckerPage() {
  return (
    <>
      <ToolWrapper
        title="Disposable Email Checker"
        description="Instantly check if an email address belongs to a known disposable or temporary email service. Protect your platform from fake signups."
        toolName="Disposable Email Checker"
      >
        <DisposableEmailCheckerTool />
      </ToolWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none">
          <h2>What Is a Disposable Email Address?</h2>
          <p>
            Disposable email services provide temporary addresses that expire after a short period. They&apos;re commonly used to
            bypass email verification, avoid spam, or create multiple accounts. Our checker identifies addresses from
            hundreds of known disposable email domains.
          </p>
          <h3>Why Check for Disposable Emails?</h3>
          <ul>
            <li>Prevent fake account registrations on your platform</li>
            <li>Maintain clean user databases</li>
            <li>Improve email deliverability metrics</li>
            <li>Reduce fraud and abuse</li>
          </ul>
        </div>
      </div>
    </>
  );
}
