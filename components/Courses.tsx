import styles from './Courses.module.css';

const courses = [
  {
    id: 'ielts',
    title: 'IELTS Preparation',
    titleBn: 'আইইএলটিএস প্রস্তুতি',
    tag: 'Most Popular',
    tagBn: 'সবচেয়ে জনপ্রিয়',
    desc: 'Comprehensive IELTS training covering all four modules — Listening, Reading, Writing, and Speaking. Targeted band score strategies with full-length mock tests and personalised feedback.',
    descBn: 'সমস্ত চারটি মডিউল — শ্রবণ, পঠন, লেখা এবং কথা বলা — কভার করে ব্যাপক আইইএলটিএস প্রশিক্ষণ। লক্ষ্যমাত্রা ব্যান্ড স্কোর কৌশল সহ পূর্ণ দৈর্ঘ্যের মক টেস্ট এবং ব্যক্তিগতকৃত মতামত।',
    featured: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" className="w-10 h-10 opacity-80">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    id: 'spoken',
    title: 'Spoken English',
    titleBn: 'কথ্য ইংরেজি',
    tag: 'All Ages',
    tagBn: 'সকল বয়স',
    desc: 'Build fluency and confidence in everyday conversation through structured speaking practice and real-world scenarios.',
    descBn: 'কাঠামোবদ্ধ কথা বলার অনুশীলন এবং বাস্তব পরিস্থিতির মাধ্যমে দৈনন্দিন কথোপকথনে দক্ষতা ও আত্মবিশ্বাস গড়ে তুলুন।',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" className="w-8 h-8 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    id: 'business',
    title: 'Business English',
    titleBn: 'ব্যবসায়িক ইংরেজি',
    tag: 'Professionals',
    tagBn: 'পেশাদারদের জন্য',
    desc: 'Professional communication skills for the workplace — emails, meetings, negotiations, and presentations.',
    descBn: 'কর্মক্ষেত্রের জন্য পেশাদার যোগাযোগ দক্ষতা — ইমেইল, মিটিং, আলোচনা এবং উপস্থাপনা।',
    muted: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" className="w-8 h-8 text-accent">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    id: 'toefl',
    title: 'TOEFL Preparation',
    titleBn: 'টোয়েফল প্রস্তুতি',
    tag: 'Exam Prep',
    tagBn: 'পরীক্ষার প্রস্তুতি',
    desc: 'Expert TOEFL iBT preparation with intensive practice tests, section-wise drills, and proven score-boosting techniques.',
    descBn: 'নিবিড় অনুশীলন পরীক্ষা, বিভাগ-ভিত্তিক ড্রিল এবং প্রমাণিত স্কোর বৃদ্ধির কৌশল সহ বিশেষজ্ঞ টোয়েফল আইবিটি প্রস্তুতি।',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" className="w-8 h-8 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    id: 'kids',
    title: 'English for Kids & Teens',
    titleBn: 'শিশু ও কিশোরদের জন্য ইংরেজি',
    tag: 'Ages 6–17',
    tagBn: '৬–১৭ বছর',
    desc: 'Fun, engaging English classes designed specifically for young learners aged 6–17, building a strong foundation.',
    descBn: '৬–১৭ বছর বয়সী তরুণ শিক্ষার্থীদের জন্য বিশেষভাবে ডিজাইন করা মজাদার, আকর্ষণীয় ইংরেজি ক্লাস, যা একটি শক্তিশালী ভিত্তি তৈরি করে।',
    secondary: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" className="w-8 h-8 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    id: 'reading',
    title: 'Reading Skills',
    titleBn: 'পঠন দক্ষতা',
    tag: 'Core Skill',
    tagBn: 'মূল দক্ষতা',
    desc: 'Develop speed reading, comprehension, and critical analysis skills for academic and professional contexts.',
    descBn: 'একাডেমিক এবং পেশাদার প্রেক্ষাপটের জন্য দ্রুত পঠন, বোধগম্যতা এবং সমালোচনামূলক বিশ্লেষণ দক্ষতা বিকাশ করুন।',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" className="w-8 h-8 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    id: 'writing',
    title: 'Writing Skills',
    titleBn: 'লেখার দক্ষতা',
    tag: 'Core Skill',
    tagBn: 'মূল দক্ষতা',
    desc: 'Master academic and creative writing — essays, reports, letters, and structured paragraphing techniques.',
    descBn: 'একাডেমিক এবং সৃজনশীল লেখায় দক্ষতা অর্জন করুন — প্রবন্ধ, প্রতিবেদন, চিঠি এবং কাঠামোবদ্ধ অনুচ্ছেদ লেখার কৌশল।',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" className="w-8 h-8 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
  },
  {
    id: 'listening',
    title: 'Listening Skills',
    titleBn: 'শ্রবণ দক্ষতা',
    tag: 'Core Skill',
    tagBn: 'মূল দক্ষতা',
    desc: 'Train your ear for accents, speed, and context through guided audio exercises and real-world listening tasks.',
    descBn: 'নির্দেশিত অডিও অনুশীলন এবং বাস্তব-জীবনের শ্রবণ কাজের মাধ্যমে উচ্চারণ, গতি এবং প্রসঙ্গের জন্য আপনার কান প্রশিক্ষণ দিন।',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" className="w-8 h-8 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
      </svg>
    ),
  },
  {
    id: 'grammar',
    title: 'Grammar & Vocabulary',
    titleBn: 'ব্যাকরণ ও শব্দভাণ্ডার',
    tag: 'Foundation',
    tagBn: 'ভিত্তি',
    desc: 'Systematic grammar instruction with vocabulary-building strategies to strengthen the foundation of all English skills.',
    descBn: 'সমস্ত ইংরেজি দক্ষতার ভিত্তি শক্তিশালী করতে শব্দভাণ্ডার-নির্মাণ কৌশল সহ পদ্ধতিগত ব্যাকরণ নির্দেশনা।',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" className="w-8 h-8 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
      </svg>
    ),
  },
  {
    id: 'interview',
    title: 'Interview & Presentation Skills',
    titleBn: 'সাক্ষাৎকার ও উপস্থাপনা দক্ষতা',
    tag: 'Career',
    tagBn: 'ক্যারিয়ার',
    desc: 'Prepare for job interviews, group discussions, and public speaking with confidence-building drills and mock sessions.',
    descBn: 'আত্মবিশ্বাস-নির্মাণ ড্রিল এবং মক সেশনের মাধ্যমে চাকরির সাক্ষাৎকার, গ্রুপ আলোচনা এবং জনসম্মুখে বক্তৃতার জন্য প্রস্তুত হন।',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" className="w-8 h-8 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    id: 'professional',
    title: 'Professional Development',
    titleBn: 'পেশাদার উন্নয়ন',
    tag: 'Professionals',
    tagBn: 'পেশাদারদের জন্য',
    desc: 'Structured programmes for working professionals seeking to advance their English communication for career growth.',
    descBn: 'কর্মজীবী পেশাদারদের জন্য কাঠামোবদ্ধ প্রোগ্রাম যারা ক্যারিয়ার বৃদ্ধির জন্য তাদের ইংরেজি যোগাযোগ উন্নত করতে চান।',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true" className="w-8 h-8 text-primary">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
];

export default function Courses() {
  return (
    <section id="courses" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        {/* Header */}
        <div className={styles.sectionHeader}>
          <div>
            <p className="section-label">/ What We Teach / আমরা কী শেখাই</p>
            <h2 className={styles.title}>
              Courses <em className={styles.titleAccent}>We Offer</em>
            </h2>
            <p className={styles.titleBn}>আমাদের কোর্সসমূহ</p>
          </div>
          <div className={styles.sectionDesc}>
            <p>Eleven expertly crafted programmes covering every aspect of English — from IELTS prep to Business communication.</p>
            <p className={styles.sectionDescBn}>আইইএলটিএস প্রস্তুতি থেকে ব্যবসায়িক যোগাযোগ পর্যন্ত ইংরেজির প্রতিটি দিক কভার করে এগারোটি বিশেষজ্ঞ-প্রণীত প্রোগ্রাম।</p>
          </div>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {courses.map((c) => {
            let cardClass = styles.card;
            let tagClass = styles.tag;
            let tagBnClass = styles.tagBn;
            let iconClass = styles.icon;
            
            if (c.featured) {
              cardClass += ` ${styles.featured}`;
              tagClass = styles.tagFeatured;
              tagBnClass = styles.tagBnFeatured;
              iconClass = styles.iconFeatured;
            } else if (c.muted) {
              cardClass += ` ${styles.muted}`;
              tagClass = `${styles.tag} ${styles.tagBusiness}`;
            } else if (c.secondary) {
              cardClass += ` ${styles.secondary}`;
              tagClass = styles.tagKids;
            }

            return (
              <div key={c.id} className={cardClass}>
                <div>
                  <div className={styles.cardTop}>
                    <div className={iconClass}>{c.icon}</div>
                    <div className={styles.tagGroup}>
                      <span className={tagClass}>{c.tag}</span>
                      <span className={tagBnClass}>{c.tagBn}</span>
                    </div>
                  </div>
                  <h3 className={styles.cardTitle}>{c.title}</h3>
                  <p className={styles.cardTitleBn}>{c.titleBn}</p>
                  <p className={styles.cardDesc}>{c.desc}</p>
                  <p className={styles.cardDescBn}>{c.descBn}</p>
                </div>
                {c.featured ? (
                  <a href="#contact" className={`${styles.cardCta} ${styles.cardCtaFeatured} group`}>
                    Enrol Now / এখনই ভর্তি হন
                    <span className={styles.ctaLine}></span>
                  </a>
                ) : (
                  <a href="#contact" className={styles.cardCta}>
                    Learn More / আরও জানুন →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
