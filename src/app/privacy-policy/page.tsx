import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy — Email Tools Pro',
  description: 'Email Tools Pro Privacy Policy. Learn how we handle your data — spoiler: we don\'t collect any.',
  alternates: { canonical: 'https://emailtoolspro.com/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />

      <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted mb-8">Last updated: January 1, 2025</p>

      <div className="prose max-w-none space-y-8">

        <section>
          <h2>Overview</h2>
          <p>
            Email Tools Pro (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we handle information when you use our website at emailtoolspro.com.
          </p>
          <p>
            <strong>The short version: We don&apos;t collect personal data. All tools run in your browser.</strong>
          </p>
        </section>

        <section>
          <h2>Information We Do NOT Collect</h2>
          <p>All tools on Email Tools Pro operate entirely client-side (in your browser). We do not:</p>
          <ul>
            <li>Collect, store, or transmit any email addresses you enter into our tools</li>
            <li>Collect names, contact information, or personally identifiable information</li>
            <li>Require user registration or accounts</li>
            <li>Sell, rent, or share data with third parties</li>
            <li>Use your data for advertising targeting</li>
          </ul>
        </section>

        <section>
          <h2>Information We Automatically Collect</h2>
          <p>
            Like most websites, we receive basic technical information when you visit:
          </p>
          <ul>
            <li><strong>Log data:</strong> Your browser type, pages visited, time of visit, and IP address (retained briefly by our hosting provider)</li>
            <li><strong>Analytics:</strong> We use privacy-respecting analytics to understand aggregate usage patterns (page views, popular tools). This data is anonymized and not linked to individuals.</li>
          </ul>
        </section>

        <section>
          <h2>Cookies and Local Storage</h2>
          <p>
            We use browser local storage to save your dark/light mode preference. This is a technical preference setting,
            not used for tracking. We do not use third-party tracking cookies.
          </p>
          <p>
            If we display advertisements (via Google AdSense or similar), those services may use cookies for
            ad personalization. You can opt out via Google&apos;s ad settings or browser cookie controls.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>We may use the following third-party services:</p>
          <ul>
            <li><strong>Vercel:</strong> Our hosting provider. Vercel logs request data per their privacy policy.</li>
            <li><strong>Google AdSense:</strong> If ads are displayed, Google&apos;s privacy policy applies to ad data.</li>
            <li><strong>Analytics provider:</strong> We use privacy-respecting analytics that do not require cookie consent.</li>
          </ul>
        </section>

        <section>
          <h2>Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to children under 13. We do not knowingly collect personal information
            from children. If you believe a child has provided us personal information, contact us immediately.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>Since we don&apos;t collect personal data, most data rights (access, deletion, correction) don&apos;t apply in a traditional sense. However, if you have questions about any data associated with your visit, contact us and we will respond within 30 days.</p>
          <p>EU/EEA residents: Under GDPR, you have the right to access, rectify, erase, and port your personal data. Since we don&apos;t collect personal data, these rights are satisfied by design.</p>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy occasionally. We will notify users of significant changes by
            updating the &quot;Last updated&quot; date. Continued use of our services after changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please <a href="/contact" className="text-primary hover:underline">contact us</a>.
          </p>
        </section>

      </div>
    </div>
  );
}
