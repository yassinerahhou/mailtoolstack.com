import Link from 'next/link';

const toolLinks = [
  { href: '/tools/gmail-dot-generator', label: 'Gmail Dot Generator' },
  { href: '/tools/gmail-plus-generator', label: 'Gmail Plus Generator' },
  { href: '/tools/random-gmail-generator', label: 'Random Gmail Generator' },
  { href: '/tools/email-cleaner', label: 'Email Cleaner' },
  { href: '/tools/email-validator', label: 'Email Validator' },
  { href: '/tools/email-extractor', label: 'Email Extractor' },
  { href: '/tools/username-generator', label: 'Username Generator' },
  { href: '/tools/disposable-email-checker', label: 'Disposable Email Checker' },
  { href: '/tools/email-permutation-generator', label: 'Permutation Generator' },
  { href: '/tools/email-name-generator', label: 'Email Name Generator' },
];

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/disclaimer', label: 'Disclaimer' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-foreground mb-3">
              <span className="text-2xl">✉</span>
              <span>Email Tools Pro</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              Free professional email tools for everyone. No signup required. Fast, private, and built to help you get more from your inbox.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Tools</h3>
            <ul className="space-y-2">
              {toolLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Email Tools Pro. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Built with ❤ for email productivity
          </p>
        </div>
      </div>
    </footer>
  );
}
