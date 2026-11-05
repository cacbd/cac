import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AssessmentForm from './AssessmentForm';
import styles from './assessment.module.css';

export const metadata: Metadata = {
  title: 'Free English Level Assessment | Cambridge Academic Centre Chittagong',
  description:
    'Take our free online English level assessment. Get evaluated by our highly qualified instructors and receive personalised course recommendations within 72 hours. Cambridge Academic Centre, Chittagong.',
  keywords: [
    'free English level test',
    'English assessment online',
    'IELTS level test free',
    'English placement test Chittagong',
    'Cambridge Academic Centre assessment',
  ],
  alternates: { canonical: 'https://cac.bd/assessment' },
  openGraph: {
    title: 'Free English Level Assessment | Cambridge Academic Centre',
    description: 'Take our free online assessment and get evaluated by qualified instructors within 72 hours.',
    url: 'https://cac.bd/assessment',
  },
};

export default function AssessmentPage() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Hero */}
      <div className={styles.hero}>
        <div className="container">
          <nav className={styles.heroBreadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Level Assessment</span>
          </nav>
          <h1 className={styles.heroTitle}>
            Free English{' '}
            <em className={styles.heroTitleAccent}>Level Assessment</em>
          </h1>
          <p className={styles.heroDesc}>
            Take our quick online assessment to evaluate your current English level.
            Our highly qualified instructors will review your answers and provide
            a personalised score and course recommendation.
          </p>
          <p className={styles.heroDescBn}>
            আপনার বর্তমান ইংরেজি দক্ষতা যাচাই করার জন্য এই ফ্রি অনলাইন এসেসমেন্টটি পূরণ করুন।
            আমাদের উচ্চ দক্ষতা সম্পন্ন প্রশিক্ষকরা আপনার এসেসমেন্ট পর্যালোচনা করে স্কোর জানাবে এবং প্রয়োজনে বর্তমান ইংরেজি দক্ষতা অনুসারে আপনার জন্য উপযুক্ত কোর্সের সুপারিশ করবেন।
          </p>
          <div className={styles.heroBadges}>
            {['5 Questions + Writing', 'Expert Evaluation', 'Results in 72 Hours', 'Free — No Sign-up'].map((b) => (
              <span key={b} className={styles.heroBadge}>
                <span className={styles.heroBadgeDot} />
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Assessment Content */}
      <div className={styles.main}>
        <div className="container">
          <AssessmentForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}

