import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { tools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'About Email Tools Pro — Free Email Utilities',
  description:
    'Learn about Email Tools Pro, our mission to provide free professional email tools, and the team behind the platform.',
  alternates: { canonical: 'https://emailtoolspro.com/about' },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-foreground mb-4">About Email Tools Pro</h1>
        <p className="text-xl text-muted leading-relaxed">
          Free, fast, and private email utilities for everyone — no signup required.
        </p>
      </div>

      <div className="space-y-8">
        <section className="prose max-w-none">
          <h2>Our Mission</h2>
          <p>
            Email Tools Pro was built with a single mission: to provide genuinely useful email tools that respect your privacy,
            work instantly, and cost nothing. We believe productivity tools shouldn&apos;t require accounts, subscriptions,
            or surrendering your data.
          </p>
          <p>
            Every tool on this site runs entirely in your browser. Nothing you type — no email addresses, no names, no domains —
            is ever sent to our servers. We don&apos;t store it. We don&apos;t sell it. It never leaves your device.
          </p>
        </section>

        <section className="prose max-w-none">
          <h2>What We Built</h2>
          <p>
            Email Tools Pro offers {tools.length} free tools covering the full spectrum of email utility needs:
          </p>
          <ul>
            {tools.map((tool) => (
              <li key={tool.slug}>
                <strong>{tool.name}</strong> — {tool.description}
              </li>
            ))}
          </ul>
        </section>

        <section className="prose max-w-none">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Privacy by design:</strong> All processing happens client-side. Zero data collection.</li>
            <li><strong>Always free:</strong> Core tools will always be free. No freemium traps.</li>
            <li><strong>Speed first:</strong> Tools should be instant. No loading spinners for simple operations.</li>
            <li><strong>Accessible:</strong> We follow WCAG accessibility guidelines so everyone can use our tools.</li>
            <li><strong>Honest:</strong> We tell you exactly what each tool does and doesn&apos;t do.</li>
          </ul>
        </section>

        <section className="prose max-w-none">
          <h2>Technology</h2>
          <p>
            Email Tools Pro is built with Next.js, TypeScript, and Tailwind CSS. It&apos;s deployed on Vercel&apos;s
            global edge network for maximum performance. All tools use static site generation where possible,
            delivering near-instant page loads regardless of your location.
          </p>
          <p>
            Our disposable email database is maintained manually and updated regularly to stay current with
            new throwaway email services.
          </p>
        </section>

        <section className="prose max-w-none">
          <h2>Contact & Feedback</h2>
          <p>
            We&apos;d love to hear from you. Whether you&apos;ve found a bug, have a feature request, or just
            want to say hello — reach out via our{' '}
            <a href="/contact" className="text-primary hover:underline">contact page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
