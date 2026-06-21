import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutCounters from './counters';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Cambridge Academic Centre Chittagong — Our Story, Team & Philosophy',
  description:
    'Learn about Cambridge Academic Centre Chittagong — founded in 2013, 500+ students trained, CELTA & DELTA-certified teachers. Our story, teaching philosophy, team, and accreditations.',
  keywords: [
    'about Cambridge Academic Centre',
    'English coaching centre Chittagong',
    'IELTS coaching centre history',
    'English language school Chittagong',
    'CAC Chittagong team',
    'CELTA certified teachers Chittagong',
  ],
  alternates: { canonical: 'https://cac.bd/about' },
  openGraph: {
    title: 'About Cambridge Academic Centre Chittagong',
    description: 'Our story, team, teaching philosophy, and accreditations. Founded 2013. 500+ students trained.',
    url: 'https://cac.bd/about',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Cambridge Academic Centre Chittagong',
  description: 'Founded in 2013 at 146 North Nalapara, Chittagong. 500+ students trained. CELTA & DELTA-certified faculty.',
  url: 'https://cac.bd/about',
  mainEntity: {
    '@type': 'EducationalOrganization',
    name: 'Cambridge Academic Centre Chittagong',
    foundingDate: '2013',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '146 North Nalapara',
      addressLocality: 'Chittagong',
      addressCountry: 'BD',
    },
    telephone: '+8801818256123',
    url: 'https://cac.bd',
  },
};

/* ---- Data ---- */
const timeline = [
  {
    year: '2013',
    en: 'Founded with 12 students at 146 North Nalapara',
    bn: '১৪৬ উত্তর নালাপাড়ায় ১২ জন শিক্ষার্থী নিয়ে প্রতিষ্ঠিত',
    active: false,
  },
  {
    year: '2015',
    en: 'Expanded to 5 classrooms; launched IELTS Preparation Lab',
    bn: '৫টি শ্রেণিকক্ষে সম্প্রসারিত; আইইএলটিএস প্রস্তুতি ল্যাব চালু',
    active: false,
  },
  {
    year: '2017',
    en: 'Introduced Kids & Teens programme; 500th student milestone',
    bn: 'শিশু ও কিশোর প্রোগ্রাম চালু; ৫০০তম শিক্ষার্থী মাইলফলক',
    active: false,
  },
  {
    year: '2019',
    en: 'Launched Business English & Professional Development tracks',
    bn: 'ব্যবসায়িক ইংরেজি ও পেশাদার উন্নয়ন ট্র্যাক চালু',
    active: false,
  },
  {
    year: '2021',
    en: 'Blended learning introduced; online mock-test platform launched',
    bn: 'মিশ্র শিক্ষা চালু; অনলাইন মক-টেস্ট প্ল্যাটফর্ম চালু',
    active: false,
  },
  {
    year: '2024',
    en: '2,000th student trained; DELTA-certified faculty team complete',
    bn: '২,০০০তম শিক্ষার্থী প্রশিক্ষিত; ডেল্টা-সার্টিফাইড শিক্ষক দল সম্পূর্ণ',
    active: false,
  },
  {
    year: '2026',
    en: 'Serving 400+ active students across 11 programmes',
    bn: '১১টি প্রোগ্রামে ৪০০+ সক্রিয় শিক্ষার্থীকে সেবা প্রদান',
    active: true,
  },
];

const principles = [
  {
    title: 'Communicative Learning',
    titleBn: 'যোগাযোগমূলক শিক্ষা',
    desc: 'We believe language is best acquired through meaningful interaction. Every class prioritises real-world communication over rote memorisation.',
    descBn: 'আমরা বিশ্বাস করি ভাষা সর্বোত্তমভাবে অর্থপূর্ণ মিথস্ক্রিয়ার মাধ্যমে অর্জিত হয়। প্রতিটি ক্লাস মুখস্থ করার চেয়ে বাস্তব-জীবনের যোগাযোগকে অগ্রাধিকার দেয়।',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: 'Learner-Centred Care',
    titleBn: 'শিক্ষার্থী-কেন্দ্রিক যত্ন',
    desc: 'Each student arrives with unique goals and gaps. Our teachers adapt pace, materials, and feedback to the individual — not the average.',
    descBn: 'প্রতিটি শিক্ষার্থী অনন্য লক্ষ্য এবং ঘাটতি নিয়ে আসে। আমাদের শিক্ষকরা গড়ের পরিবর্তে ব্যক্তির জন্য গতি, উপকরণ এবং মতামত অভিযোজিত করেন।',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    title: 'Measurable Progress',
    titleBn: 'পরিমাপযোগ্য অগ্রগতি',
    desc: 'Fortnightly assessments, mock exams, and written progress reports ensure students and families always know where they stand and what comes next.',
    descBn: 'পাক্ষিক মূল্যায়ন, মক পরীক্ষা এবং লিখিত অগ্রগতি প্রতিবেদন নিশ্চিত করে যে শিক্ষার্থী ও পরিবার সবসময় জানে তারা কোথায় আছে এবং পরবর্তীতে কী আসছে।',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    title: 'Global Standards, Local Context',
    titleBn: 'বৈশ্বিক মান, স্থানীয় প্রেক্ষাপট',
    desc: 'British Council-aligned syllabi are contextualised for Bangladeshi learners — bridging international benchmarks with familiar cultural reference points.',
    descBn: 'ব্রিটিশ কাউন্সিল-সংযুক্ত পাঠ্যক্রম বাংলাদেশি শিক্ষার্থীদের জন্য প্রাসঙ্গিক করা হয়েছে — আন্তর্জাতিক মানদণ্ডকে পরিচিত সাংস্কৃতিক রেফারেন্স পয়েন্টের সাথে সংযুক্ত করে।',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

const team = [
  {
    initials: 'RI',
    name: 'Md. Rafiqul Islam',
    role: 'Founder & Principal',
    roleBn: 'প্রতিষ্ঠাতা ও অধ্যক্ষ',
    credentials: 'MA English · CELTA Certified',
    bio: 'With over 15 years in English language education, Rafiqul founded Cambridge Academic Centre to bring world-class English instruction to Chittagong. He has trained hundreds of IELTS and TOEFL candidates who now study and work abroad.',
    bioBn: '১৫ বছরেরও বেশি ইংরেজি ভাষা শিক্ষায় অভিজ্ঞতা নিয়ে রফিকুল চট্টগ্রামে বিশ্বমানের ইংরেজি শিক্ষা আনতে ক্যামব্রিজ একাডেমিক সেন্টার প্রতিষ্ঠা করেন।',
    avatarClass: '',
  },
  {
    initials: 'NJ',
    name: 'Nusrat Jahan',
    role: 'Head of IELTS & TOEFL',
    roleBn: 'আইইএলটিএস ও টোয়েফল বিভাগের প্রধান',
    credentials: 'MA Linguistics · DELTA Certified',
    bio: 'Nusrat specialises in exam preparation and has an exceptional track record — 91% of her IELTS students achieve Band 7 or above. She designs all mock-test materials used across the centre.',
    bioBn: 'নুসরাত পরীক্ষা প্রস্তুতিতে বিশেষজ্ঞ এবং তার ৯১% আইইএলটিএস শিক্ষার্থী ব্যান্ড ৭ বা তার উপরে অর্জন করে।',
    avatarClass: 'teamAvatarAlt',
  },
  {
    initials: 'TA',
    name: 'Tanvir Ahmed',
    role: 'Spoken & Business English',
    roleBn: 'কথ্য ইংরেজি ও ব্যবসায়িক ইংরেজি',
    credentials: 'BA English · CELTA Certified',
    bio: 'Tanvir brings energy and authenticity to every class. A former corporate trainer, he bridges the gap between classroom English and the language professionals actually need in the workplace.',
    bioBn: 'তানভীর প্রতিটি ক্লাসে শক্তি এবং সত্যতা নিয়ে আসেন। একজন প্রাক্তন কর্পোরেট প্রশিক্ষক হিসেবে তিনি শ্রেণিকক্ষের ইংরেজি এবং কর্মক্ষেত্রে প্রয়োজনীয় ভাষার মধ্যে সেতুবন্ধন করেন।',
    avatarClass: 'teamAvatarBiz',
  },
  {
    initials: 'FH',
    name: 'Farzana Hossain',
    role: 'Kids & Teens Programme Lead',
    roleBn: 'শিশু ও কিশোর প্রোগ্রাম প্রধান',
    credentials: 'BEd · Young Learner Specialist',
    bio: 'Farzana has dedicated her career to young learners. Her play-based methodology makes English feel natural and fun for children aged 6–16, building confidence alongside competence.',
    bioBn: 'ফারজানা তার ক্যারিয়ার তরুণ শিক্ষার্থীদের জন্য উৎসর্গ করেছেন। তার খেলা-ভিত্তিক পদ্ধতি ৬–১৬ বছর বয়সী শিশুদের জন্য ইংরেজিকে স্বাভাবিক এবং মজাদার করে তোলে।',
    avatarClass: 'teamAvatarKid',
  },
];

const accreditations = [
  {
    abbr: 'BC',
    title: 'British Council Aligned',
    titleBn: 'ব্রিটিশ কাউন্সিল সংযুক্ত',
    desc: 'Curriculum frameworks mapped to British Council standards',
    descBn: 'ব্রিটিশ কাউন্সিল মানদণ্ডে ম্যাপ করা পাঠ্যক্রম কাঠামো',
  },
  {
    abbr: 'IE',
    title: 'IELTS Official Preparation',
    titleBn: 'আইইএলটিএস অফিসিয়াল প্রস্তুতি',
    desc: 'Authorised preparation centre for IELTS examination',
    descBn: 'আইইএলটিএস পরীক্ষার জন্য অনুমোদিত প্রস্তুতি কেন্দ্র',
  },
  {
    abbr: 'TF',
    title: 'TOEFL Preparation Partner',
    titleBn: 'টোয়েফল প্রস্তুতি অংশীদার',
    desc: 'Recognised TOEFL iBT preparation programme',
    descBn: 'স্বীকৃত টোয়েফল আইবিটি প্রস্তুতি প্রোগ্রাম',
  },
  {
    abbr: 'CE',
    title: 'Cambridge English Methodology',
    titleBn: 'ক্যামব্রিজ ইংলিশ পদ্ধতি',
    desc: 'Teaching approaches informed by Cambridge English research',
    descBn: 'ক্যামব্রিজ ইংলিশ গবেষণা দ্বারা অবহিত শিক্ষণ পদ্ধতি',
  },
  {
    abbr: 'CL',
    title: 'CELTA-Certified Faculty',
    titleBn: 'সেল্টা-সার্টিফাইড শিক্ষকমণ্ডলী',
    desc: 'All senior instructors hold internationally recognised CELTA/DELTA',
    descBn: 'সকল সিনিয়র প্রশিক্ষক আন্তর্জাতিকভাবে স্বীকৃত সেল্টা/ডেল্টা ধারণ করেন',
  },
  {
    abbr: 'QA',
    title: 'ISO-Aligned Quality Processes',
    titleBn: 'আইএসও-সংযুক্ত মান প্রক্রিয়া',
    desc: 'Internal quality assurance aligned with ISO 21001 education standards',
    descBn: 'আইএসও ২১০০১ শিক্ষা মানদণ্ডের সাথে সংযুক্ত অভ্যন্তরীণ মান নিশ্চয়তা',
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main>

        {/* ============================================================
            HERO
        ============================================================ */}
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.sectionLabel} style={{ color: 'rgba(255,255,255,0.5)' }}>
              / Our Story / আমাদের গল্প
            </p>
            <h1 className={styles.heroHeadline}>
              Built on a belief<br />
              that <em className={styles.heroHeadlineAccent}>everyone</em><br />
              can speak English.
            </h1>
            <p className={styles.heroBengali}>
              এই বিশ্বাসের উপর প্রতিষ্ঠিত যে সবাই ইংরেজি বলতে পারে।
            </p>
            <p className={styles.heroParagraph}>
              Cambridge Academic Centre was founded in Chittagong with one conviction: access to quality English education should not be a privilege. Twelve years on, that conviction still drives everything we do.
            </p>
            <p className={styles.heroParagraphBn}>
              ক্যামব্রিজ একাডেমিক সেন্টার চট্টগ্রামে একটি বিশ্বাস নিয়ে প্রতিষ্ঠিত হয়েছিল: মানসম্পন্ন ইংরেজি শিক্ষার সুযোগ বিশেষাধিকার হওয়া উচিত নয়। বারো বছর পরেও সেই বিশ্বাস আমাদের সবকিছু পরিচালিত করে।
            </p>
          </div>
          <AboutCounters />
        </section>

        {/* ============================================================
            FOUNDING STORY
        ============================================================ */}
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className="container">
            <p className={styles.sectionLabel}>/ Founding Story / প্রতিষ্ঠার গল্প</p>
            <h2 className={styles.sectionTitle}>
              From a single classroom<br />
              to Chittagong&apos;s most trusted<br />
              <em className={styles.sectionTitleAccent}>English centre.</em>
            </h2>
            <p className={styles.sectionTitleBn}>একটি শ্রেণিকক্ষ থেকে চট্টগ্রামের সবচেয়ে বিশ্বস্ত ইংরেজি কেন্দ্রে।</p>

            <div className={styles.storyLayout}>
              {/* Left: text */}
              <div className={styles.storyText}>
                <p>
                  In 2013, <strong>Md. Rafiqul Islam</strong> returned to Chittagong after completing his CELTA certification in Dhaka. He had seen first-hand how transformative confident English could be — and how few students in Chittagong had access to the kind of instruction that actually produced results.
                </p>
                <p className={styles.storyTextBn}>
                  ২০১৩ সালে, মো. রফিকুল ইসলাম ঢাকায় তার সেল্টা সার্টিফিকেশন সম্পন্ন করার পর চট্টগ্রামে ফিরে আসেন। তিনি প্রত্যক্ষভাবে দেখেছিলেন আত্মবিশ্বাসী ইংরেজি কতটা রূপান্তরকারী হতে পারে।
                </p>
                <p>
                  He opened Cambridge Academic Centre at <strong>146 North Nalapara</strong> with twelve students, two whiteboards, and a clear philosophy: small classes, qualified teachers, and a relentless focus on communication over memorisation.
                </p>
                <p className={styles.storyTextBn}>
                  তিনি ১৪৬ উত্তর নালাপাড়ায় বারোজন শিক্ষার্থী, দুটি হোয়াইটবোর্ড এবং একটি স্পষ্ট দর্শন নিয়ে ক্যামব্রিজ একাডেমিক সেন্টার খোলেন।
                </p>
                <p className={styles.storyHighlight}>
                  &ldquo;The address has not changed. Neither has the conviction.&rdquo;
                </p>
                <p>
                  Word spread quickly. Within two years the centre had expanded to five classrooms and a dedicated IELTS preparation lab. Today, Cambridge Academic Centre serves over 400 active students across 11 programmes.
                </p>
                <p className={styles.storyTextBn}>
                  দ্রুত কথা ছড়িয়ে পড়ে। দুই বছরের মধ্যে কেন্দ্রটি পাঁচটি শ্রেণিকক্ষ এবং একটি নিবেদিত আইইএলটিএস প্রস্তুতি ল্যাবে সম্প্রসারিত হয়।
                </p>
              </div>

              {/* Right: timeline */}
              <div className={styles.timeline}>
                {timeline.map((item) => (
                  <div
                    key={item.year}
                    className={`${styles.timelineItem} ${item.active ? styles.timelineItemActive : ''}`}
                  >
                    <div className={styles.timelineDot} />
                    <p className={styles.timelineYear}>{item.year}</p>
                    <p className={styles.timelineTitle}>{item.en}</p>
                    <p className={styles.timelineBn}>{item.bn}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            PHILOSOPHY
        ============================================================ */}
        <section className={`${styles.section} ${styles.sectionMuted}`}>
          <div className="container">
            <p className={styles.sectionLabel}>/ Teaching Philosophy / শিক্ষণ দর্শন</p>
            <h2 className={styles.sectionTitle}>
              Four principles that shape<br />
              <em className={styles.sectionTitleAccent}>every lesson we teach.</em>
            </h2>
            <p className={styles.sectionTitleBn}>চারটি নীতি যা আমাদের প্রতিটি পাঠকে রূপ দেয়।</p>

            <div className={styles.philosophyGrid}>
              {principles.map((p) => (
                <div key={p.title} className={styles.philosophyCard}>
                  <div className={styles.philosophyIcon}>{p.icon}</div>
                  <h3 className={styles.philosophyTitle}>{p.title}</h3>
                  <p className={styles.philosophyTitleBn}>{p.titleBn}</p>
                  <p className={styles.philosophyDesc}>{p.desc}</p>
                  <p className={styles.philosophyDescBn}>{p.descBn}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            TEAM
        ============================================================ */}
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className="container">
            <p className={styles.sectionLabel}>/ Our Team / আমাদের দল</p>
            <h2 className={styles.sectionTitle}>
              The people behind<br />
              <em className={styles.sectionTitleAccent}>every breakthrough.</em>
            </h2>
            <p className={styles.sectionTitleBn}>প্রতিটি সাফল্যের পেছনের মানুষেরা।</p>

            <div className={styles.teamGrid}>
              {team.map((member) => (
                <div key={member.initials} className={styles.teamCard}>
                  <div className={`${styles.teamAvatar} ${member.avatarClass ? styles[member.avatarClass as keyof typeof styles] : ''}`}>
                    {member.initials}
                  </div>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                  <p className={styles.teamRoleBn}>{member.roleBn}</p>
                  <p className={styles.teamCredentials}>{member.credentials}</p>
                  <p className={styles.teamBio}>{member.bio}</p>
                  <p className={styles.teamBioBn}>{member.bioBn}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            ACCREDITATIONS
        ============================================================ */}
        <section className={`${styles.section} ${styles.sectionMuted}`}>
          <div className="container">
            <p className={styles.sectionLabel}>/ Accreditations & Standards / স্বীকৃতি ও মান</p>
            <h2 className={styles.sectionTitle}>
              Recognised standards<br />
              <em className={styles.sectionTitleAccent}>you can trust.</em>
            </h2>
            <p className={styles.sectionTitleBn}>স্বীকৃত মান যার উপর আপনি আস্থা রাখতে পারেন।</p>

            <div className={styles.accredGrid}>
              {accreditations.map((a) => (
                <div key={a.abbr} className={styles.accredItem}>
                  <div className={styles.accredIcon}>{a.abbr}</div>
                  <div>
                    <p className={styles.accredTitle}>{a.title}</p>
                    <p className={styles.accredTitleBn}>{a.titleBn}</p>
                    <p className={styles.accredDesc}>{a.desc}</p>
                    <p className={styles.accredDescBn}>{a.descBn}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            CTA
        ============================================================ */}
        <section className={styles.cta}>
          <div className={`container ${styles.ctaInner}`}>
            <h2 className={styles.ctaTitle}>
              Ready to join the<br />
              <em className={styles.ctaTitleAccent}>Cambridge family?</em>
            </h2>
            <p className={styles.ctaBn}>ক্যামব্রিজ পরিবারে যোগ দিতে প্রস্তুত?</p>
            <div className={styles.ctaButtons}>
              <Link href="/#contact" className="btn-primary">
                Enrol Now / এখনই ভর্তি হন
              </Link>
              <a href="tel:01818256123" className={styles.ctaCall}>
                Call 01818 256 123
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
