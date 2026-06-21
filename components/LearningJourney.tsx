import styles from './LearningJourney.module.css';

const steps = [
  { num: '01', title: 'Free Assessment', titleBn: 'বিনামূল্যে মূল্যায়ন', icon: '📋' },
  { num: '02', title: 'Placement Test', titleBn: 'প্লেসমেন্ট টেস্ট', icon: '📝' },
  { num: '03', title: 'Join Suitable Batch', titleBn: 'উপযুক্ত ব্যাচে যোগদান', icon: '👥' },
  { num: '04', title: 'Weekly Practice', titleBn: 'সাপ্তাহিক অনুশীলন', icon: '📚' },
  { num: '05', title: 'Mock Tests', titleBn: 'মক টেস্ট', icon: '✍️' },
  { num: '06', title: 'Certification', titleBn: 'সার্টিফিকেশন', icon: '🎓' },
  { num: '07', title: 'Ongoing Development', titleBn: 'ধারাবাহিক উন্নয়ন', icon: '🚀' },
];

export default function LearningJourney() {
  return (
    <section id="learning-journey" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <p className="section-label">/ Your Path / আপনার পথ</p>
          <h2 className={styles.title}>
            Your Learning <em className={styles.titleAccent}>Journey</em>
          </h2>
          <p className={styles.titleBn}>আপনার শিক্ষা যাত্রা</p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepLine}>
                <div className={styles.stepDot}>
                  <span className={styles.stepNum}>{step.num}</span>
                </div>
                {i < steps.length - 1 && <div className={styles.connector} />}
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepTitleBn}>{step.titleBn}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="#contact" className="btn-primary">
            Start Your Journey / যাত্রা শুরু করুন
          </a>
        </div>
      </div>
    </section>
  );
}
