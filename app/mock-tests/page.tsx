import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllQuizzes } from '@/lib/quizzes';
import styles from './mock-tests.module.css';

export const metadata: Metadata = {
  title: 'Free English Mock Tests & IELTS Practice | Cambridge Academic Centre Chittagong',
  description:
    'Take free IELTS vocabulary, grammar, reading, and English level tests online. Instant results with band scores and expert explanations. Cambridge Academic Centre, Chittagong.',
  keywords: [
    'free IELTS practice test online',
    'English mock test Bangladesh',
    'IELTS vocabulary test online',
    'English level test free',
    'IELTS grammar test',
    'IELTS reading practice',
    'business English test online',
    'English test Chittagong',
  ],
  alternates: { canonical: 'https://cac.bd/mock-tests' },
  openGraph: {
    title: 'Free English Mock Tests | Cambridge Academic Centre Chittagong',
    description: 'Free IELTS and English practice tests with instant results and expert explanations.',
    url: 'https://cac.bd/mock-tests',
  },
};

const stripeMap: Record<string, string> = {
  ielts: styles.stripeIelts,
  general: styles.stripeGeneral,
  business: styles.stripeBusiness,
};

export default function MockTestsPage() {
  const quizzes = getAllQuizzes();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Free English Mock Tests — Cambridge Academic Centre Chittagong',
    description: 'Free IELTS and English language practice tests with instant results.',
    url: 'https://cac.bd/mock-tests',
    numberOfItems: quizzes.length,
    itemListElement: quizzes.map((q, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: q.title,
      url: `https://cac.bd/mock-tests/${q.slug}`,
    })),
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />

      {/* Hero */}
      <div className={styles.hero}>
        <div className="container">
          <nav className={styles.heroBreadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Mock Tests</span>
          </nav>
          <h1 className={styles.heroTitle}>
            Free English{' '}
            <em className={styles.heroTitleAccent}>Mock Tests</em>
          </h1>
          <p className={styles.heroDesc}>
            Test your IELTS readiness, find your English level, and practise the exact question types that appear in the exam — completely free, no sign-up required.
          </p>
          <div className={styles.heroBadges}>
            {['Instant Results', 'Full Explanations', 'Band Score Estimate', 'No Sign-up'].map((b) => (
              <span key={b} className={styles.heroBadge}>
                <span className={styles.heroBadgeDot} />
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className={styles.gridSection}>
        <div className="container">
          <div className={styles.grid}>
            {quizzes.map((quiz) => {
              const stripeClass = stripeMap[quiz.categorySlug] ?? styles.stripeIelts;
              return (
                <Link
                  key={quiz.slug}
                  href={`/mock-tests/${quiz.slug}`}
                  className={styles.card}
                >
                  <div className={`${styles.cardStripe} ${stripeClass}`} />
                  <div className={styles.cardBody}>
                    <div className={styles.cardHead}>
                      <span className={styles.cardCat}>{quiz.category}</span>
                      <span className={styles.cardDiff}>{quiz.difficulty}</span>
                    </div>
                    <h2 className={styles.cardTitle}>{quiz.title}</h2>
                    <p className={styles.cardExcerpt}>{quiz.excerpt}</p>
                    <div className={styles.cardMeta}>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <span className={styles.cardMetaItem}>
                          {quiz.questions.length} questions
                        </span>
                        <span className={styles.cardMetaItem}>·</span>
                        <span className={styles.cardMetaItem}>
                          ~{quiz.duration} min
                        </span>
                      </div>
                      <span className={styles.startLink}>Start Test →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA Banner */}
          <div className={styles.ctaBanner}>
            <div>
              <p className={styles.ctaBannerTitle}>Want personalised feedback on your English?</p>
              <p className={styles.ctaBannerText}>
                Our mock tests give you a score — our teachers give you a plan. Book a free assessment at Cambridge Academic Centre, Chittagong.
              </p>
            </div>
            <a href="/#contact" className="btn-primary">
              Book Free Assessment
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
