import type { Metadata } from 'next';
import { ToolWrapper } from '@/components/ToolWrapper';
import { EmailNameGeneratorTool } from './EmailNameGeneratorTool';

export const metadata: Metadata = {
  title: 'Email Name Generator — Professional Email Address Suggestions',
  description:
    'Generate professional email address suggestions from your name. Find the perfect email for personal branding, business, or professional use. Free tool.',
  keywords: ['email name generator', 'professional email generator', 'email address suggestions', 'business email ideas'],
  alternates: { canonical: 'https://emailtoolspro.com/tools/email-name-generator' },
};

export default function EmailNameGeneratorPage() {
  return (
    <>
      <ToolWrapper
        title="Email Name Generator"
        description="Generate professional email address suggestions from your full name. Find the perfect email for your personal brand or business."
        toolName="Email Name Generator"
      >
        <EmailNameGeneratorTool />
      </ToolWrapper>
    </>
  );
}
