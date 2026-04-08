import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us — Email Tools Pro',
  description:
    'Get in touch with the Email Tools Pro team. Report bugs, suggest features, or ask questions about our free email tools.',
  alternates: { canonical: 'https://emailtoolspro.com/contact' },
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-3">Contact Us</h1>
        <p className="text-lg text-muted">
          Have a question, found a bug, or want to suggest a new tool? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="bg-card rounded-xl border border-border p-6 sm:p-8">
        <ContactForm />
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl border border-border bg-card text-center">
          <div className="text-2xl mb-2">🐛</div>
          <div className="font-semibold text-foreground text-sm mb-1">Bug Report</div>
          <div className="text-xs text-muted">Found a broken tool? Let us know.</div>
        </div>
        <div className="p-4 rounded-xl border border-border bg-card text-center">
          <div className="text-2xl mb-2">💡</div>
          <div className="font-semibold text-foreground text-sm mb-1">Feature Request</div>
          <div className="text-xs text-muted">Suggest a new tool or improvement.</div>
        </div>
        <div className="p-4 rounded-xl border border-border bg-card text-center">
          <div className="text-2xl mb-2">❓</div>
          <div className="font-semibold text-foreground text-sm mb-1">General Question</div>
          <div className="text-xs text-muted">Anything else on your mind.</div>
        </div>
      </div>
    </div>
  );
}
