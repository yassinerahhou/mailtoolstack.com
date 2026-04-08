import type { Metadata } from 'next';
import { ToolWrapper } from '@/components/ToolWrapper';
import { EmailCleanerTool } from './EmailCleanerTool';

export const metadata: Metadata = {
  title: 'Email Cleaner — Remove Duplicates & Clean Email Lists',
  description:
    'Clean and deduplicate email lists instantly. Remove invalid, duplicate, and empty lines. Normalize email formatting for marketing lists, CRMs, and databases.',
  keywords: ['email cleaner', 'remove duplicate emails', 'email list cleaner', 'clean email list'],
  alternates: { canonical: 'https://emailtoolspro.com/tools/email-cleaner' },
};

export default function EmailCleanerPage() {
  return (
    <>
      <ToolWrapper
        title="Email List Cleaner"
        description="Paste any email list to instantly remove duplicates, fix formatting, and filter invalid addresses. Supports comma, semicolon, and newline-separated lists."
        toolName="Email Cleaner"
      >
        <EmailCleanerTool />
      </ToolWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none">
          <h2>What Does the Email Cleaner Do?</h2>
          <ul>
            <li><strong>Deduplication:</strong> Removes all duplicate email addresses</li>
            <li><strong>Normalization:</strong> Converts all addresses to lowercase</li>
            <li><strong>Validation:</strong> Filters out obviously malformed addresses</li>
            <li><strong>Whitespace removal:</strong> Strips extra spaces and empty lines</li>
            <li><strong>Multiple formats:</strong> Accepts newline, comma, or semicolon separated lists</li>
          </ul>
        </div>
      </div>
    </>
  );
}
