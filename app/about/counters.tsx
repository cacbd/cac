'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './about.module.css';

interface Stat {
  target: number;
  suffix: string;
  en: string;
  bn: string;
}

const STATS: Stat[] = [
  { target: 20, suffix: '', en: 'Students Per Batch', bn: 'প্রতি ব্যাচে শিক্ষার্থী' },
  { target: 100, suffix: '%', en: 'Target-Oriented Focus', bn: 'লক্ষ্য-ভিত্তিক পাঠদান' },
  { target: 11, suffix: '', en: 'Specialized Courses', bn: 'বিশেষায়িত কোর্সসমূহ' },
  { target: 12, suffix: '+', en: 'Years of Team Experience', bn: 'অভিজ্ঞ মেন্টর প্যানেল' },
];

function useCounting(target: number, duration = 1400) {
  const [value, setValue] = useState(0);
  const triggered = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || triggered.current) return;
        triggered.current = true;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const elapsed = now - start;
          const p = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.floor(eased * target));
          if (p < 1) requestAnimationFrame(tick);
          else setValue(target);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

function StatCounter({ stat }: { stat: Stat }) {
  const { value, ref } = useCounting(stat.target);
  return (
    <div ref={ref} className={styles.statItem}>
      <span className={styles.statVal}>
        {value}
        <span className={styles.statAccent}>{stat.suffix}</span>
      </span>
      <span className={styles.statEn}>{stat.en}</span>
      <span className={styles.statBn}>{stat.bn}</span>
    </div>
  );
}

export default function AboutCounters() {
  return (
    <div className={styles.statsBar}>
      <div className="container">
        <div className={styles.statsGrid}>
          {STATS.map((s) => (
            <StatCounter key={s.en} stat={s} />
          ))}
        </div>
      </div>
    </div>
  );
}
