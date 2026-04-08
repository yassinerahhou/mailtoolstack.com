import type { Metadata } from 'next';
import { ToolWrapper } from '@/components/ToolWrapper';
import { EmailExtractorTool } from './EmailExtractorTool';

export const metadata: Metadata = {
  title: 'Email Extractor — Extract All Email Addresses from Text',
  description:
    'Extract all email addresses from any text, document, or webpage content instantly. Auto-deduplication and one-click copy. Free email extraction tool.',
  keywords: ['email extractor', 'extract emails from text', 'email address finder', 'bulk email extractor'],
  alternates: { canonical: 'https://emailtoolspro.com/tools/email-extractor' },
};

export default function EmailExtractorPage() {
  return (
    <>
      <ToolWrapper
        title="Email Extractor"
        description="Paste any text content and instantly extract every email address. Automatically deduplicates results for a clean, unique list."
        toolName="Email Extractor"
      >
        <EmailExtractorTool />
      </ToolWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none">
          <h2>How to Use the Email Extractor</h2>
          <p>
            Simply paste any text — from a webpage, document, spreadsheet, or logs — into the input box. The tool uses
            a regex pattern to find all email addresses in the text, then deduplicates the results.
          </p>
          <h3>What It Extracts From</h3>
          <ul>
            <li>Website HTML source code</li>
            <li>PDF or document text</li>
            <li>CSV or spreadsheet data</li>
            <li>Log files and code</li>
            <li>Any text that contains email addresses</li>
          </ul>
        </div>
      </div>
    </>
  );
}
