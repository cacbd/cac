import styles from './WhyParentsChooseUs.module.css';

const reasons = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: 'British-Inspired Learning Approach',
    titleBn: 'ব্রিটিশ-অনুপ্রাণিত শিক্ষা পদ্ধতি',
    desc: 'Our curriculum draws from British Council-endorsed frameworks, ensuring globally recognised standards.',
    descBn: 'আমাদের পাঠ্যক্রম ব্রিটিশ কাউন্সিল-অনুমোদিত কাঠামো থেকে অনুপ্রাণিত।',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    title: 'Small Interactive Classes',
    titleBn: 'ছোট ইন্টারেক্টিভ ক্লাস',
    desc: 'Small batch sizes ensure every student receives personalised attention and maximum practice time.',
    descBn: 'ছোট ব্যাচে প্রতিটি শিক্ষার্থী ব্যক্তিগত মনোযোগ এবং সর্বাধিক অনুশীলনের সময় পায়।',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: 'Speaking-Focused Learning',
    titleBn: 'কথা বলা-কেন্দ্রিক শিক্ষা',
    desc: 'Every session prioritises speaking practice so students build real-world communication skills.',
    descBn: 'প্রতিটি সেশনে কথা বলার অনুশীলনকে অগ্রাধিকার দেওয়া হয়।',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
      </svg>
    ),
    title: 'Confidence Building in Every Session',
    titleBn: 'প্রতিটি সেশনে আত্মবিশ্বাস বৃদ্ধি',
    desc: 'We integrate confidence-building activities into every class, helping shy learners come out of their shell.',
    descBn: 'আমরা প্রতিটি ক্লাসে আত্মবিশ্বাস বৃদ্ধির কার্যক্রম অন্তর্ভুক্ত করি।',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
    title: 'Character, Manners & Communication Training',
    titleBn: 'চরিত্র, শিষ্টাচার ও যোগাযোগ প্রশিক্ষণ',
    desc: 'Beyond language, we teach manners, etiquette, and professional behaviour essential for life success.',
    descBn: 'ভাষার বাইরে, আমরা শিষ্টাচার এবং পেশাদার আচরণ শেখাই।',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: 'Progress Monitoring and Feedback',
    titleBn: 'অগ্রগতি পর্যবেক্ষণ ও মতামত',
    desc: 'Regular assessments and detailed feedback keep parents informed and students on track.',
    descBn: 'নিয়মিত মূল্যায়ন এবং বিস্তারিত মতামত অভিভাবকদের অবগত রাখে।',
  },
];

export default function WhyParentsChooseUs() {
  return (
    <section id="why-parents" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <div>
            <p className="section-label">/ For Parents / অভিভাবকদের জন্য</p>
            <h2 className={styles.title}>
              Why Parents <em className={styles.titleAccent}>Choose Us</em>
            </h2>
            <p className={styles.titleBn}>কেন অভিভাবকরা আমাদের বেছে নেন</p>
          </div>
          <p className={styles.headerDesc}>
            Many of our students are children and teenagers. Here is why parents trust Cambridge Academic Centre for their child&apos;s development.
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((r, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardIcon}>{r.icon}</div>
              <div>
                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardTitleBn}>{r.titleBn}</p>
                <p className={styles.cardDesc}>{r.desc}</p>
                <p className={styles.cardDescBn}>{r.descBn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
