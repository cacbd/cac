import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Farhan Rahman',
    role: 'IELTS Student',
    roleBn: 'আইইএলটিএস শিক্ষার্থী',
    rating: 5,
    quote: 'Cambridge Academic Centre completely transformed my English skills. I scored 7.5 in IELTS after just 3 months of their preparation course. The teachers are amazing and the mock tests were exactly like the real exam.',
    result: 'IELTS Band 7.5',
    initials: 'FR',
  },
  {
    id: 2,
    name: 'Nadia Islam',
    role: 'Business Professional',
    roleBn: 'ব্যবসায়িক পেশাদার',
    rating: 5,
    quote: 'The Business English course helped me communicate confidently in international meetings. My presentation skills improved dramatically. I highly recommend this centre to all working professionals.',
    result: 'Business English',
    initials: 'NI',
  },
  {
    id: 3,
    name: 'Arafat Hossain',
    role: 'University Student',
    roleBn: 'বিশ্ববিদ্যালয় শিক্ষার্থী',
    rating: 5,
    quote: 'I was nervous about TOEFL but the structured course and supportive teachers made all the difference. The small class size meant I got individual attention every session. Got 105 in my TOEFL!',
    result: 'TOEFL 105',
    initials: 'AH',
  },
  {
    id: 4,
    name: 'Sumaiya Akter',
    role: 'Parent of Teen Student',
    roleBn: 'কিশোর শিক্ষার্থীর অভিভাবক',
    rating: 5,
    quote: 'My daughter joined the Kids & Teens programme at age 13 and her confidence has grown enormously. She now speaks English fluently at school and participates in debates. Excellent teaching staff!',
    result: 'English for Teens',
    initials: 'SA',
  },
  {
    id: 5,
    name: 'Karim Uddin',
    role: 'IELTS Graduate',
    roleBn: 'আইইএলটিএস গ্র্যাজুয়েট',
    rating: 5,
    quote: 'The flexible evening batches were perfect for me as a working professional. The IELTS coaching was thorough and the personalised feedback on my writing tasks was invaluable. Scored 8.0 overall!',
    result: 'IELTS Band 8.0',
    initials: 'KU',
  },
  {
    id: 6,
    name: 'Tasnim Chowdhury',
    role: 'Spoken English Student',
    roleBn: 'কথ্য ইংরেজি শিক্ষার্থী',
    rating: 5,
    quote: 'After completing the Spoken English course, I joined a multinational company. The real-world conversation practice and pronunciation drills built my confidence tremendously. Best decision ever!',
    result: 'Spoken English',
    initials: 'TC',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.sectionHeader}>
          <div>
            <p className="section-label">/ Student Success Stories / শিক্ষার্থীদের সাফল্যের গল্প</p>
            <h2 className={styles.title}>
              What Our <em className={styles.titleAccent}>Students Say</em>
            </h2>
            <p className={styles.titleBn}>আমাদের শিক্ষার্থীরা কী বলেন</p>
          </div>
          <div className={styles.overall}>
            <div className={styles.overallScore}>4.9</div>
            <div>
              <Stars count={5} />
              <div className={styles.overallLabel}>Based on 500+ reviews</div>
              <div className={styles.overallLabelBn}>৫০০+ রিভিউ থেকে</div>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <article key={t.id} className={styles.card}>
              <Stars count={t.rating} />
              <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
              <div className={styles.footer}>
                <div className={styles.avatar}>{t.initials}</div>
                <div className={styles.info}>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role} · {t.roleBn}</div>
                </div>
                <span className={styles.result}>{t.result}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
