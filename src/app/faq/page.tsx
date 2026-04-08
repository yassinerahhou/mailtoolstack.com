import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { AdBanner } from '@/components/AdBanner';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — Email Tools Pro',
  description:
    'Find answers to common questions about our free email tools, Gmail tricks, email validation, and more.',
  alternates: { canonical: 'https://emailtoolspro.com/faq' },
};

const faqs = [
  {
    category: 'Gmail Tools',
    questions: [
      { q: 'What is the Gmail dot trick?', a: 'Gmail completely ignores dots (periods) in email addresses. This means john.doe@gmail.com and johndoe@gmail.com go to the exact same inbox. Our Gmail Dot Generator helps you find all possible dot variations of your address.' },
      { q: 'How many dot variations does my Gmail address have?', a: 'For a username with n characters, there are 2^(n-1) possible dot variations. A 5-character username has 16 variations; a 10-character username has 512. Our tool calculates all of them instantly.' },
      { q: 'Does the Gmail dot trick work on Google Workspace accounts?', a: 'No, the dot trick only works for standard @gmail.com addresses. Google Workspace administrators can enable or disable this behavior for custom domain accounts.' },
      { q: 'What is Gmail plus addressing?', a: 'Gmail allows you to add +anything after your username before the @. For example, yourname+shopping@gmail.com still delivers to yourname@gmail.com. It\'s called subaddressing and is useful for filtering and tracking emails.' },
      { q: 'Can I log into Google with a dot variation of my email?', a: 'No. You can only log into Google services with your canonical email address (the one you registered with). Dot variations work for receiving email only.' },
      { q: 'Do other email providers support the dot trick?', a: 'No, this is specific to Gmail. Other providers like Yahoo, Outlook, and custom domain email servers treat dots as significant characters, meaning john.doe@yahoo.com and johndoe@yahoo.com are completely different accounts.' },
    ],
  },
  {
    category: 'Email Validation',
    questions: [
      { q: 'What does the email validator check?', a: 'Our email validator checks RFC 5322 syntax compliance, the local part (before @) for valid characters, the domain format, TLD validity, presence of consecutive dots, common typos in popular domains, and whether the domain belongs to a known disposable email service.' },
      { q: 'Why does a real email fail validation?', a: 'Our validator performs format and domain checks only — it does not send test emails. A real address could fail if it has an unusual format, a very new or obscure TLD, or a domain our disposable database incorrectly flags. The most authoritative validation is sending a verification email.' },
      { q: 'Can the validator check if an email is actually deliverable?', a: 'Our free tool checks format validity only. True deliverability requires an SMTP check or sending a test email. For bulk verification needs, professional services like NeverBounce or Hunter.io offer SMTP-level verification.' },
    ],
  },
  {
    category: 'Email Extractor',
    questions: [
      { q: 'What types of content can I extract emails from?', a: 'Any plain text — website copy, HTML source, CSV files, log files, code, documents, spreadsheets. Paste the text into the extractor and it will find all email addresses using pattern matching.' },
      { q: 'Does the extractor handle duplicates?', a: 'Yes, our Email Extractor automatically deduplicates results. Each unique email address appears only once in the output, regardless of how many times it appears in the input.' },
    ],
  },
  {
    category: 'Disposable Email Checker',
    questions: [
      { q: 'How does the disposable email checker work?', a: 'We maintain a database of thousands of known disposable email domains (like mailinator.com, guerrillamail.com, temp-mail.org). When you check an address, we compare its domain against this list.' },
      { q: 'If an email passes the disposable check, is it real?', a: 'Not necessarily. A "not disposable" result means the domain isn\'t in our known disposable list. The email could still be fake, invalid, or belong to a new disposable service we haven\'t indexed yet.' },
      { q: 'How often is the disposable domain database updated?', a: 'We regularly update our database to include newly discovered disposable email services. However, since new disposable domains appear constantly, our list may not be 100% comprehensive.' },
    ],
  },
  {
    category: 'Privacy & Security',
    questions: [
      { q: 'Do you store the emails I enter into your tools?', a: 'No. All our tools run entirely in your browser using JavaScript. Nothing you type is ever sent to our servers. Your email addresses are completely private.' },
      { q: 'Is it safe to use these tools?', a: 'Yes. Since all processing happens in your browser, there\'s no risk of your email data being intercepted or stored. Our tools are read-only — they generate or analyze data without transmitting it.' },
      { q: 'Are these tools free?', a: 'Yes, all tools on Email Tools Pro are completely free. There\'s no signup, no subscription, no usage limits, and no hidden costs.' },
      { q: 'What\'s the difference between email aliases and disposable emails?', a: 'An email alias is a permanent alternative address that forwards to your real inbox. A disposable email is a temporary address that expires after a short period and has its own inbox. Aliases are better for ongoing privacy; disposable emails are for one-time use.' },
    ],
  },
  {
    category: 'Email Permutation Generator',
    questions: [
      { q: 'What is email permutation?', a: 'Email permutation generates all possible email address formats for a person at a given company domain. Since companies typically use consistent email naming conventions (like firstname.lastname@company.com), you can guess the right format by generating all common patterns.' },
      { q: 'Is email permutation legal?', a: 'Generating email permutations is legal. However, sending unsolicited commercial email to addresses you\'ve guessed without prior permission may violate CAN-SPAM, GDPR, or CASL regulations. Always verify consent and comply with applicable laws before sending cold emails.' },
    ],
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.flatMap((cat) =>
    cat.questions.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />

        <AdBanner slot="top" className="mb-8" />

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-foreground mb-3">Frequently Asked Questions</h1>
          <p className="text-lg text-muted">
            Everything you need to know about our email tools, Gmail tricks, and email best practices.
          </p>
        </div>

        <div className="space-y-10">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((faq, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <AdBanner slot="bottom" className="mt-8" />
      </div>
    </>
  );
}
