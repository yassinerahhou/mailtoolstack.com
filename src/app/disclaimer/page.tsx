import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Disclaimer — Email Tools Pro',
  description: 'Important disclaimers about Email Tools Pro and the use of our free email tools.',
  alternates: { canonical: 'https://emailtoolspro.com/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Disclaimer' }]} />

      <h1 className="text-4xl font-bold text-foreground mb-2">Disclaimer</h1>
      <p className="text-sm text-muted mb-8">Last updated: January 1, 2025</p>

      <div className="prose max-w-none space-y-8">

        <section>
          <h2>Website Disclaimer</h2>
          <p>
            The information provided by Email Tools Pro on emailtoolspro.com is for general informational
            and utility purposes only. All information on the Site is provided in good faith, however we make
            no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy,
            validity, reliability, availability, or completeness of any information on the Site.
          </p>
        </section>

        <section>
          <h2>Tool Accuracy Disclaimer</h2>
          <p>
            Our email tools are designed to be helpful utilities, but results should not be treated as
            definitive or authoritative. Specifically:
          </p>
          <ul>
            <li>
              <strong>Email Validator:</strong> Our validator checks format and known patterns but cannot
              verify whether an email address actually exists or is deliverable. Only sending a test email
              can verify deliverability.
            </li>
            <li>
              <strong>Disposable Email Checker:</strong> Our database of disposable email domains may be
              incomplete. A &quot;clean&quot; result does not guarantee an address is real or legitimate.
            </li>
            <li>
              <strong>Email Permutation Generator:</strong> Generated permutations are possibilities only.
              We cannot confirm which format a specific organization uses without verification.
            </li>
            <li>
              <strong>Gmail Dot Generator:</strong> While Gmail&apos;s dot behavior is well-documented, Google
              may change this behavior. Some services may normalize Gmail addresses differently.
            </li>
          </ul>
        </section>

        <section>
          <h2>External Links Disclaimer</h2>
          <p>
            The Site may contain links to external websites. These links are provided for convenience only.
            We have no control over the content of those sites and accept no responsibility for them or
            for any loss or damage that may arise from your use of them.
          </p>
        </section>

        <section>
          <h2>Affiliate Disclaimer</h2>
          <p>
            Email Tools Pro may display advertisements through Google AdSense or similar programs. We may
            receive compensation for displaying these advertisements. The presence of advertisements does
            not imply endorsement of the advertised products or services.
          </p>
        </section>

        <section>
          <h2>Professional Advice Disclaimer</h2>
          <p>
            The content on this site, including blog posts and guides, is for informational purposes only
            and does not constitute legal, technical, or professional advice. Email regulations (CAN-SPAM,
            GDPR, CASL) are complex and jurisdiction-specific. Consult a qualified professional for
            compliance advice specific to your situation.
          </p>
        </section>

        <section>
          <h2>Fair Use Disclaimer</h2>
          <p>
            This site may contain copyrighted material whose use has not been specifically authorized by
            the copyright owner. This material is made available for educational and informational purposes.
            We believe this constitutes fair use of copyrighted material as provided in Section 107 of the
            US Copyright Law.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            If you have questions or concerns about this Disclaimer, please <a href="/contact" className="text-primary hover:underline">contact us</a>.
          </p>
        </section>

      </div>
    </div>
  );
}
