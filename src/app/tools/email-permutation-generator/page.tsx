import type { Metadata } from 'next';
import { ToolWrapper } from '@/components/ToolWrapper';
import { EmailPermutationTool } from './EmailPermutationTool';

export const metadata: Metadata = {
  title: 'Email Permutation Generator — Find Business Email Addresses',
  description:
    'Generate all possible email permutations from a first name, last name, and company domain. Perfect for sales prospecting and finding professional contact emails.',
  keywords: ['email permutation generator', 'email finder', 'business email finder', 'email format generator', 'sales prospecting'],
  alternates: { canonical: 'https://emailtoolspro.com/tools/email-permutation-generator' },
};

export default function EmailPermutationPage() {
  return (
    <>
      <ToolWrapper
        title="Email Permutation Generator"
        description="Generate all common email formats for a person at any company. Enter first name, last name, and domain to get every possible email variation."
        toolName="Email Permutation Generator"
      >
        <EmailPermutationTool />
      </ToolWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none">
          <h2>How Email Permutation Works</h2>
          <p>
            Most companies use a consistent email naming convention. Our generator produces all common formats
            like <strong>firstname.lastname@domain.com</strong>, <strong>flastname@domain.com</strong>, and more —
            so you can identify the correct email for any contact at a given company.
          </p>
          <h3>Common Business Email Formats</h3>
          <ul>
            <li>firstname.lastname@domain.com (most common)</li>
            <li>firstnamelastname@domain.com</li>
            <li>f.lastname@domain.com</li>
            <li>flastname@domain.com</li>
            <li>firstname@domain.com</li>
            <li>lastname@domain.com</li>
          </ul>
        </div>
      </div>
    </>
  );
}
