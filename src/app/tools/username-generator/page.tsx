import type { Metadata } from 'next';
import { ToolWrapper } from '@/components/ToolWrapper';
import { UsernameGeneratorTool } from './UsernameGeneratorTool';

export const metadata: Metadata = {
  title: 'Username Generator — Create Unique Usernames from Your Name',
  description:
    'Generate creative, unique usernames from your name or keywords. Perfect for email addresses, social media, and online accounts. Free username generator tool.',
  keywords: ['username generator', 'email username generator', 'create username', 'username ideas', 'unique username'],
  alternates: { canonical: 'https://emailtoolspro.com/tools/username-generator' },
};

export default function UsernameGeneratorPage() {
  return (
    <>
      <ToolWrapper
        title="Username Generator"
        description="Generate unique, creative usernames from your name or keywords. Great for email addresses, social media, and online profiles."
        toolName="Username Generator"
      >
        <UsernameGeneratorTool />
      </ToolWrapper>
    </>
  );
}
