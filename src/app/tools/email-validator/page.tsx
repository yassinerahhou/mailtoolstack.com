import type { Metadata } from 'next';
import { ToolWrapper } from '@/components/ToolWrapper';
import { EmailValidatorTool } from './EmailValidatorTool';

export const metadata: Metadata = {
  title: 'Email Validator — Check If an Email Address Is Valid',
  description:
    'Instantly validate any email address. Check RFC 5322 syntax, domain format, TLD validity, and common typos. Free email validation tool with detailed reports.',
  keywords: ['email validator', 'email validation', 'check email address', 'validate email', 'email format checker'],
  alternates: { canonical: 'https://emailtoolspro.com/tools/email-validator' },
};

export default function EmailValidatorPage() {
  return (
    <>
      <ToolWrapper
        title="Email Address Validator"
        description="Validate any email address with detailed checks. Verify syntax, domain structure, and detect common typos instantly."
        toolName="Email Validator"
      >
        <EmailValidatorTool />
      </ToolWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none">
          <h2>What Does the Email Validator Check?</h2>
          <ul>
            <li><strong>RFC 5322 Syntax:</strong> Verifies the email follows the internet email format standard</li>
            <li><strong>Local Part:</strong> Checks for valid characters before the @</li>
            <li><strong>Domain Format:</strong> Validates the domain portion has proper structure</li>
            <li><strong>TLD Validity:</strong> Ensures the top-level domain exists and has appropriate length</li>
            <li><strong>Typo Detection:</strong> Flags common typos in popular email domains</li>
            <li><strong>Disposable Detection:</strong> Identifies known throwaway email domains</li>
          </ul>
        </div>
      </div>
    </>
  );
}
