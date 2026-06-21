import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog';
import styles from './post.module.css';

/* ---- Static generation ---- */
export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

/* ---- Per-post SEO metadata ---- */
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Cambridge Academic Centre Chittagong`,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: { canonical: `https://cac.bd/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.metaDescription,
      url: `https://cac.bd/blog/${post.slug}`,
      siteName: 'Cambridge Academic Centre Chittagong',
      publishedTime: post.dateISO,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
    },
  };
}

/* ---- Page ---- */
export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 3);

  /* Schema.org Article markup */
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    keywords: post.keywords.join(', '),
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: {
      '@type': 'Organization',
      name: 'Cambridge Academic Centre',
      url: 'https://cac.bd',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cambridge Academic Centre Chittagong',
      url: 'https://cac.bd',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '146 North Nalapara',
        addressLocality: 'Chittagong',
        addressCountry: 'BD',
      },
    },
    url: `https://cac.bd/blog/${post.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://cac.bd/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main>
        {/* Post Header */}
        <div className={styles.postHeader}>
          <div className="container">
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/blog">Blog</Link>
              <span>/</span>
              <span>{post.category}</span>
            </nav>
            <span className={styles.catTag}>{post.category}</span>
            <h1 className={styles.postTitle}>{post.title}</h1>
            <div className={styles.postMeta}>
              <time dateTime={post.dateISO}>{post.date}</time>
              <span>·</span>
              <span>{post.readTime} min read</span>
              <span>·</span>
              <span>{post.author}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container">
          <div className={styles.layout}>
            {/* Article prose */}
            <article>
              <div
                className={styles.prose}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <Link href="/blog" className={styles.backLink}>
                ← Back to All Articles
              </Link>
            </article>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {/* Enrol CTA */}
              <div className={styles.ctaBox}>
                <p className={styles.ctaLabel}>Ready to start?</p>
                <p className={styles.ctaTitle}>Enrol at Cambridge Academic Centre</p>
                <p className={styles.ctaText}>146 North Nalapara, Chittagong</p>
                <div className={styles.ctaButtons}>
                  <a href="tel:01818256123" className={styles.ctaPhone}>
                    📞 Call 01818 256 123
                  </a>
                  <a href="/#contact" className={styles.ctaEnquire}>
                    Enquire Online
                  </a>
                </div>
              </div>

              {/* Related articles */}
              <div className={styles.relatedBox}>
                <p className={styles.relatedTitle}>More Articles</p>
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className={styles.relatedLink}>
                    <span className={styles.relatedCat}>{r.category}</span>
                    <span className={styles.relatedName}>{r.title}</span>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
