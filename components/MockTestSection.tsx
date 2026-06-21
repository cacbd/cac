import Link from 'next/link';
import { getAllQuizzes } from '@/lib/quizzes';
import styles from './MockTestSection.module.css';

const accentMap: Record<string, string> = {
  ielts: styles.cardAccentIelts,
  general: styles.cardAccentGeneral,
  business: styles.cardAccentBusiness,
};

export default function MockTestSection() {
  const quizzes = getAllQuizzes().slice(0, 3);

  return (
    <section id="mock-tests" className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={styles.sectionHeader}>
          <div>
            <p className="section-label">/ Free Mock Tests / বিনামূল্যে মক টেস্ট</p>
            <h2 className={styles.title}>
              Test Your{' '}
              <em className={styles.titleAccent}>English Level</em>
            </h2>
            <p className={styles.titleBn}>আপনার ইংরেজি দক্ষতা পরীক্ষা করুন</p>
          </div>
          <Link href="/mock-tests" className={styles.viewAll}>
            All Tests
            <span className={styles.viewAllLine} />
          </Link>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {quizzes.map((quiz) => {
            const accentClass = accentMap[quiz.categorySlug] ?? styles.cardAccentIelts;
            return (
              <Link
                key={quiz.slug}
                href={`/mock-tests/${quiz.slug}`}
                className={styles.card}
              >
                <div className={`${styles.cardAccent} ${accentClass}`} />
                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <span className={styles.catBadge}>{quiz.category}</span>
                    <span className={styles.diffBadge}>{quiz.difficulty}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{quiz.shortTitle}</h3>
                  <p className={styles.cardExcerpt}>{quiz.excerpt}</p>
                  <div className={styles.cardFooter}>
                    <div className={styles.cardStats}>
                      <span className={styles.cardStat}>
                        {quiz.questions.length} questions
                      </span>
                      <span className={styles.cardStat}>·</span>
                      <span className={styles.cardStat}>{quiz.duration} min</span>
                    </div>
                    <span className={styles.cardCta}>Start →</span>
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
