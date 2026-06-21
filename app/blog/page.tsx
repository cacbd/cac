'use client';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllPosts, getAllCategories, getCategoryColor } from '@/lib/blog';
import styles from './blog.module.css';

const allPosts = getAllPosts();
const categories = getAllCategories();

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? allPosts
      : allPosts.filter((p) => p.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className={styles.page}>
      <Header />

      {/* Hero */}
      <div className={styles.hero}>
        <div className="container">
          <nav className={styles.heroBreadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Blog</span>
          </nav>
          <h1 className={styles.heroTitle}>
            English Learning{' '}
            <em className={styles.heroTitleAccent}>Insights</em>
          </h1>
          <p className={styles.heroDesc}>
            Expert guides, study plans, and tips from the teachers at Cambridge Academic Centre — helping students and professionals in Chittagong achieve their English goals.
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className={styles.filters}>
        <div className="container">
          <div className={styles.filtersInner}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts */}
      <div className={styles.postsSection}>
        <div className="container">
          {filtered.length === 0 ? (
            <div className={styles.grid}>
              <p className={styles.empty}>No articles found in this category yet.</p>
            </div>
          ) : (
            <>
              {/* Featured */}
              {featured && (
                <div className={styles.featuredWrap}>
                  <div className={styles.featuredLabel}>
                    <span className={styles.featuredDot} />
                    Featured Article
                  </div>
                  <Link href={`/blog/${featured.slug}`} className={styles.featuredCard}>
                    {/* Text */}
                    <div>
                      <div className={styles.featuredMeta}>
                        <span className={styles.featuredCatTag}>{featured.category}</span>
                        <span className={styles.featuredMetaText}>{featured.date} · {featured.readTime} min read</span>
                      </div>
                      <h2 className={styles.featuredTitle}>{featured.title}</h2>
                      <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                      <span className={styles.featuredReadMore}>
                        Read Article
                        <span className={styles.featuredArrow} />
                      </span>
                    </div>
                    {/* Visual */}
                    <div className={`${styles.featuredImgWrap} ${styles[getCategoryColor(featured.categorySlug)]}`}>
                      <div className={styles.featuredImgBg} />
                      <span className={styles.featuredImgIcon}>{featured.title.split(':')[0]}</span>
                    </div>
                  </Link>
                </div>
              )}

              {/* Rest */}
              {rest.length > 0 && (
                <div className={styles.grid}>
                  {rest.map((post) => {
                    const colorClass = getCategoryColor(post.categorySlug);
                    return (
                      <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                        <div className={`${styles.cardImgWrap} ${styles[colorClass]}`}>
                          <span className={styles.cardImgText}>{post.title.split(':')[0]}</span>
                        </div>
                        <div className={styles.cardBody}>
                          <div className={styles.cardTop}>
                            <span className={styles.catTag}>{post.category}</span>
                            <span className={styles.readTime}>{post.readTime} min</span>
                          </div>
                          <h3 className={styles.cardTitle}>{post.title}</h3>
                          <p className={styles.cardExcerpt}>{post.excerpt}</p>
                          <div className={styles.cardFooter}>
                            <span className={styles.cardDate}>{post.date}</span>
                            <span className={styles.cardArrow}>Read →</span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
