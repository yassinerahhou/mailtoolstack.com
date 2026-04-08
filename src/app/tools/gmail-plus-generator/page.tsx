import type { Metadata } from 'next';
import { ToolWrapper } from '@/components/ToolWrapper';
import { GmailPlusGeneratorTool } from './GmailPlusGeneratorTool';

export const metadata: Metadata = {
  title: 'Gmail Plus Generator — Create Plus-Address Aliases Instantly',
  description:
    'Generate Gmail plus-addressing aliases with custom tags. yourname+tag@gmail.com goes to the same inbox. Use for tracking, filtering, and organizing emails.',
  keywords: ['gmail plus generator', 'gmail plus addressing', 'email subaddressing', 'gmail aliases', 'gmail tags'],
  alternates: { canonical: 'https://emailtoolspro.com/tools/gmail-plus-generator' },
};

export default function GmailPlusGeneratorPage() {
  return (
    <>
      <ToolWrapper
        title="Gmail Plus Generator"
        description="Create Gmail plus-addressing aliases by adding a +tag to your email. Perfect for filtering emails and tracking which services share your data."
        toolName="Gmail Plus Generator"
      >
        <GmailPlusGeneratorTool />
      </ToolWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none">
          <h2>What Is Gmail Plus Addressing?</h2>
          <p>
            Gmail allows you to add a <strong>+</strong> sign followed by any text to your address. For example,{' '}
            <strong>yourname+shopping@gmail.com</strong> delivers to <strong>yourname@gmail.com</strong>.
            This is called subaddressing and is defined in RFC 5233.
          </p>
          <h3>Top Use Cases</h3>
          <ul>
            <li><strong>Track data sharing:</strong> Use a unique tag per service. If that address gets spammed, you know who shared it.</li>
            <li><strong>Automatic filtering:</strong> Create Gmail filters on the &quot;To&quot; field to auto-label incoming emails.</li>
            <li><strong>Testing:</strong> Register multiple accounts on services without creating multiple Gmail accounts.</li>
            <li><strong>Organization:</strong> Different tags for work, shopping, newsletters, and more.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
