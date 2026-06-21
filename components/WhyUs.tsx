'use client';
import { useState } from 'react';
import styles from './WhyUs.module.css';

const steps = [
  {
    id: '01',
    title: 'British Curriculum Inspired',
    titleBn: 'ব্রিটিশ পাঠ্যক্রম অনুপ্রাণিত',
    desc: 'Our curriculum draws from British Council-endorsed frameworks, ensuring globally recognised standards of English language teaching.',
    descBn: 'আমাদের পাঠ্যক্রম ব্রিটিশ কাউন্সিল-অনুমোদিত কাঠামো থেকে অনুপ্রাণিত, বিশ্বব্যাপী স্বীকৃত ইংরেজি ভাষা শিক্ষার মান নিশ্চিত করে।',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>,
  },
  {
    id: '02',
    title: 'Modern Learning Environment',
    titleBn: 'আধুনিক শিক্ষার পরিবেশ',
    desc: 'Bright, well-equipped classrooms with audio-visual aids, digital resources, and a comfortable atmosphere that inspires learning.',
    descBn: 'অডিও-ভিজ্যুয়াল সহায়তা, ডিজিটাল সম্পদ এবং আরামদায়ক পরিবেশ সহ উজ্জ্বল, সু-সজ্জিত শ্রেণিকক্ষ যা শেখার অনুপ্রেরণা দেয়।',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" /></svg>,
  },
  {
    id: '03',
    title: 'Experienced Teachers',
    titleBn: 'অভিজ্ঞ শিক্ষকবৃন্দ',
    desc: 'Our faculty comprises highly qualified educators with years of experience in IELTS coaching, spoken English, and professional communication.',
    descBn: 'আমাদের অনুষদে উচ্চযোগ্য শিক্ষকরা রয়েছেন যারা আইইএলটিএস কোচিং, কথ্য ইংরেজি এবং পেশাদার যোগাযোগে বছরের অভিজ্ঞতাসম্পন্ন।',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>,
  },
  {
    id: '04',
    title: 'Small Interactive Classes',
    titleBn: 'ছোট ইন্টারেক্টিভ ক্লাস',
    desc: 'We maintain small batch sizes to ensure every student receives personalised attention and maximum speaking practice time.',
    descBn: 'প্রতিটি শিক্ষার্থী ব্যক্তিগতকৃত মনোযোগ এবং সর্বাধিক কথা বলার অনুশীলনের সময় পান তা নিশ্চিত করতে আমরা ছোট ব্যাচের আকার বজায় রাখি।',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>,
  },
  {
    id: '05',
    title: 'Flexible Batch Timings',
    titleBn: 'নমনীয় ব্যাচ সময়সূচী',
    desc: 'Morning, afternoon, and evening batches available to accommodate students, working professionals, and homemakers of all schedules.',
    descBn: 'শিক্ষার্থী, কর্মজীবী পেশাদার এবং গৃহিণী সকলের সময়সূচী অনুযায়ী সকাল, বিকেল এবং সন্ধ্যার ব্যাচ পাওয়া যায়।',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
  },
  {
    id: '06',
    title: 'Progress Tracking & Mock Tests',
    titleBn: 'অগ্রগতি ট্র্যাকিং ও মক টেস্ট',
    desc: 'Regular assessments, mock examinations, and detailed progress reports keep students on track toward their goals.',
    descBn: 'নিয়মিত মূল্যায়ন, মক পরীক্ষা এবং বিস্তারিত অগ্রগতি প্রতিবেদন শিক্ষার্থীদের তাদের লক্ষ্যের দিকে এগিয়ে রাখে।',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>,
  },
  {
    id: '07',
    title: 'Affordable Course Fees',
    titleBn: 'সাশ্রয়ী কোর্স ফি',
    desc: 'Premium quality education at accessible fees, with flexible payment options and scholarship opportunities for deserving students.',
    descBn: 'যোগ্য শিক্ষার্থীদের জন্য নমনীয় পেমেন্ট বিকল্প এবং বৃত্তির সুযোগ সহ সাশ্রয়ী ফিতে প্রিমিয়াম মানের শিক্ষা।',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
  },
];

export default function WhyUs() {
  const [active, setActive] = useState(0);
  const current = active >= 0 && active < steps.length ? steps[active] : steps[0];

  return (
    <section id="why-us" className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          {/* Left: steps list */}
          <div className={styles.left}>
            <p className="section-label">/ Why Choose Us / কেন আমাদের বেছে নেবেন</p>
            <h2 className={styles.title}>
              Why Cambridge
              <br />
              <em className={styles.titleAccent}>Academic?</em>
            </h2>
            <p className={styles.titleBn}>কেন ক্যামব্রিজ একাডেমিক?</p>

            {/* Desktop step list */}
            <div className={styles.stepList}>
              {steps.map((s, i) => (
                <button
                  key={s.id}
                  className={`${styles.step} ${active === i ? styles.stepActive : ''}`}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                >
                  <div className={styles.stepBar}>
                    <div className={`${styles.stepBarFill} ${active === i ? styles.stepBarFillActive : ''}`} />
                  </div>
                  <div className={styles.stepIcon}>{s.icon}</div>
                  <span className={styles.stepLabel}>{s.id} / {s.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: detail panel */}
          <div className={styles.right}>
            <div className={styles.panel} key={active}>
              <div className={styles.panelNum}>{current.id}</div>
              <div className={styles.panelIcon}>{current.icon}</div>
              <h3 className={styles.panelTitle}>{current.title}</h3>
              <p className={styles.panelTitleBn}>{current.titleBn}</p>
              <p className={styles.panelDesc}>{current.desc}</p>
              <p className={styles.panelDescBn}>{current.descBn}</p>
              <a href="#contact" className="btn-primary" style={{ marginTop: '32px' }}>
                Enrol Now / ভর্তি হন
              </a>
            </div>

            {/* Mobile: accordion */}
            <div className={styles.accordion}>
              {steps.map((s, i) => (
                <div key={s.id} className={`${styles.accordionItem} ${active === i ? styles.accordionOpen : ''}`}>
                  <button className={styles.accordionHeader} onClick={() => setActive(active === i ? 0 : i)}>
                    <span className={styles.accordionNum}>{s.id}</span>
                    <span className={styles.accordionTitle}>{s.title}</span>
                    <span className={styles.accordionChevron}>{active === i ? '−' : '+'}</span>
                  </button>
                  {active === i && (
                    <div className={styles.accordionBody}>
                      <p>{s.desc}</p>
                      <p className={styles.panelDescBn}>{s.descBn}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
