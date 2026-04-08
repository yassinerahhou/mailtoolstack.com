import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { AdBanner } from '@/components/AdBanner';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog — Gmail Tips, Email Guides & Productivity Hacks',
  description:
    'Expert guides on Gmail, email privacy, productivity, and email tools. Learn the Gmail dot trick, plus addressing, email organization, and more.',
  alternates: { canonical: 'https://emailtoolspro.com/blog' },
};

const categories = [...new Set(blogPosts.map((p) => p.category))];

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />

      <AdBanner slot="top" className="mb-8" />

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-foreground mb-3">Email Tools Blog</h1>
        <p className="text-lg text-muted">
          Expert guides on Gmail, email privacy, productivity, and making the most of your inbox.
        </p>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="px-3 py-1 rounded-full bg-primary text-white text-sm font-medium">All</span>
        {categories.map((cat) => (
          <span key={cat} className="px-3 py-1 rounded-full border border-border text-sm text-muted hover:border-primary/50 hover:text-foreground transition-colors cursor-default">
            {cat}
          </span>
        ))}
      </div>

      {/* Post grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-200 overflow-hidden"
          >
            {/* Color band */}
            <div className="h-1.5 bg-gradient-to-r from-primary to-blue-400" />
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-muted">{post.readTime}</span>
              </div>
              <h2 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-3 leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-muted line-clamp-3 flex-1 leading-relaxed">{post.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs text-muted">{formatDate(post.date)}</span>
                <span className="text-xs font-medium text-primary">Read more →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <AdBanner slot="bottom" className="mt-8" />
    </div>
  );
}
