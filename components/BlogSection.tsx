import Link from 'next/link';
import { getAllPosts, getCategoryColor } from '@/lib/blog';
import styles from './BlogSection.module.css';

export default function BlogSection() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="blog" className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={styles.sectionHeader}>
          <div>
            <p className="section-label">/ From Our Blog / আমাদের ব্লগ থেকে</p>
            <h2 className={styles.title}>
              English Learning{' '}
              <em className={styles.titleAccent}>Insights</em>
            </h2>
            <p className={styles.titleBn}>ইংরেজি শেখার টিপস ও গাইড</p>
          </div>
          <Link href="/blog" className={styles.viewAll}>
            View All Articles
            <span className={styles.viewAllLine} />
          </Link>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {posts.map((post) => {
            const colorClass = getCategoryColor(post.categorySlug);
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                {/* Thumbnail */}
                <div className={`${styles.cardThumb} ${styles[colorClass]}`}>
                  <span className={styles.cardThumbText}>{post.title.split(':')[0]}</span>
                </div>

                {/* Body */}
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardCat}>{post.category}</span>
                    <span className={styles.cardReadTime}>{post.readTime} min read</span>
                  </div>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardDate}>{post.date}</span>
                    <span className={styles.cardCta}>Read →</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
