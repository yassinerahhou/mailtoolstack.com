import type { Metadata } from 'next';
import Link from 'next/link';
import { tools } from '@/lib/tools';
import { blogPosts } from '@/lib/blog';
import { ToolCard } from '@/components/ToolCard';
import { AdBanner } from '@/components/AdBanner';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Email Tools Pro — Free Gmail & Email Utilities',
  description:
    'Free professional email tools: Gmail Dot Generator, Plus Addressing, Email Validator, Extractor, Cleaner, Disposable Email Checker, and more. No signup required.',
  alternates: { canonical: 'https://emailtoolspro.com' },
};

const faqs = [
  {
    q: 'What is the Gmail dot trick?',
    a: 'Gmail ignores all dots in email addresses. So john.doe@gmail.com and johndoe@gmail.com go to the same inbox. Our Gmail Dot Generator creates all possible dot variations of your address.',
  },
  {
    q: 'How does Gmail plus addressing work?',
    a: 'You can add a + sign and any text to your Gmail address — like yourname+shopping@gmail.com — and it still delivers to your inbox. Use it to filter and track emails.',
  },
  {
    q: 'How do I validate an email address?',
    a: 'Our Email Validator checks the format, domain structure, and common error patterns. It verifies RFC 5322 compliance and flags obvious typos.',
  },
  {
    q: 'What is a disposable email address?',
    a: 'Disposable email services provide temporary email addresses that expire after a short period. Our checker identifies thousands of known throwaway email domains.',
  },
  {
    q: 'Are these tools free to use?',
    a: 'Yes! All tools on Email Tools Pro are completely free, with no signup, no limits, and no data stored.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Email Tools Pro',
  url: 'https://emailtoolspro.com',
  description: 'Free professional email tools and utilities',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://emailtoolspro.com/tools/{search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

const features = [
  {
    icon: '⚡',
    title: 'Instant Results',
    description: 'All tools run in your browser. No server round-trips, no waiting — results appear as you type.',
  },
  {
    icon: '🔒',
    title: 'Privacy First',
    description: 'Nothing you enter is ever sent to a server or stored. Your data stays on your device.',
  },
  {
    icon: '📋',
    title: 'One-Click Copy',
    description: 'Every result has a copy button. Grab individual items or copy all results at once.',
  },
  {
    icon: '📱',
    title: 'Mobile Friendly',
    description: 'All tools are fully responsive and work perfectly on phones, tablets, and desktops.',
  },
  {
    icon: '🆓',
    title: '100% Free',
    description: 'No signup, no subscription, no limits. All tools are free forever.',
  },
  {
    icon: '🌐',
    title: '10 Powerful Tools',
    description: 'Everything from Gmail generators to email validators, cleaners, and permutation generators.',
  },
];

export default function HomePage() {
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span>✨</span>
            <span>10 Free Email Tools — No Signup Required</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
            Professional Email Tools,{' '}
            <span className="text-primary">Completely Free</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Gmail Dot Generator, Email Validator, Extractor, Cleaner, Disposable Email Checker, and 5 more powerful tools — all free, instant, and private.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#tools"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-lg hover:bg-primary/90 transition-colors shadow-md"
            >
              Explore All Tools
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <Link
              href="/tools/gmail-dot-generator"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card text-foreground font-semibold text-lg hover:border-primary/50 transition-colors"
            >
              Try Gmail Dot Generator
            </Link>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        </div>
      </section>

      {/* Ad Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <AdBanner slot="top" />
      </div>

      {/* Tools Grid */}
      <section id="tools" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            All Email Tools
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Powerful, free tools for Gmail users, developers, marketers, and email professionals.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-card border-y border-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Email Tools Pro?
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Built for speed, privacy, and simplicity. Everything you need, nothing you don&apos;t.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4 p-5 rounded-xl bg-background border border-border">
                <div className="text-2xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted">Quick answers to the most common questions about our tools.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-xl p-5 bg-card">
              <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
              <p className="text-sm text-muted">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View all FAQs
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-card border-t border-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Latest from the Blog</h2>
              <p className="text-muted">Gmail tips, email guides, and productivity hacks.</p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              All posts
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col p-6 rounded-xl border border-border bg-background hover:border-primary/50 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted">{post.readTime}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted line-clamp-2 flex-1">{post.description}</p>
                <p className="text-xs text-muted mt-3">{formatDate(post.date)}</p>
              </Link>
            ))}
          </div>
          <div className="sm:hidden mt-6 text-center">
            <Link href="/blog" className="text-primary font-medium hover:underline">
              View all blog posts →
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="bg-background border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-muted">
            <strong>Disclaimer:</strong> This tool is for educational, testing, and legitimate purposes only. Any illegal or abusive use is strictly prohibited. Please comply with all applicable laws and Gmail&apos;s terms of service when using this tool.
          </p>
        </div>
      </section>

      {/* Ad Banner Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdBanner slot="bottom" />
      </div>
    </>
  );
}
