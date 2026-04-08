import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, getBlogPostBySlug } from '@/lib/blog';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { AdBanner } from '@/components/AdBanner';
import { formatDate } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `https://emailtoolspro.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `https://emailtoolspro.com/blog/${post.slug}`,
    },
  };
}

function renderContent(content: string) {
  return content
    .trim()
    .split('\n')
    .map((line, i) => {
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4">{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={i} className="text-xl font-semibold text-foreground mt-8 mb-3">{line.slice(4)}</h3>;
      }
      if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
        return <p key={i} className="font-semibold text-foreground mb-2">{line.slice(2, -2)}</p>;
      }
      if (line.startsWith('- ')) {
        return (
          <li key={i} className="text-muted ml-4 mb-1 leading-relaxed list-disc">
            <span dangerouslySetInnerHTML={{
              __html: line.slice(2)
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
                .replace(/`(.*?)`/g, '<code class="bg-card border border-border px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
            }} />
          </li>
        );
      }
      if (line.trim() === '') return <div key={i} className="h-2" />;
      if (line.startsWith('| ')) return null; // skip table lines
      return (
        <p key={i} className="text-muted leading-relaxed mb-4" dangerouslySetInnerHTML={{
          __html: line
            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
            .replace(/`(.*?)`/g, '<code class="bg-card border border-border px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
        }} />
      );
    });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Email Tools Pro' },
    publisher: { '@type': 'Organization', name: 'Email Tools Pro', url: 'https://emailtoolspro.com' },
    url: `https://emailtoolspro.com/blog/${post.slug}`,
    keywords: post.tags.join(', '),
  };

  const otherPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title },
          ]}
        />

        <AdBanner slot="top" className="mb-8" />

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-0.5 text-sm font-medium bg-primary/10 text-primary rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-muted">{post.readTime}</span>
              <span className="text-sm text-muted">·</span>
              <span className="text-sm text-muted">{formatDate(post.date)}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-muted leading-relaxed">{post.description}</p>
          </header>

          <div className="border-t border-border pt-8">
            {renderContent(post.content)}
          </div>

          <footer className="mt-10 pt-6 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 text-xs rounded-full border border-border text-muted">
                  #{tag}
                </span>
              ))}
            </div>
          </footer>
        </article>

        <AdBanner slot="in-content" className="my-8" />

        {/* Related Posts */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-foreground mb-4">More Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group p-4 rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <span className="text-xs text-muted mb-2 block">{p.category}</span>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-3">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
