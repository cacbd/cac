import styles from './Philosophy.module.css';

export default function Philosophy() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <p className={`section-label ${styles.label}`}>/ Our Philosophy / আমাদের দর্শন</p>
        <div className={styles.quote}>
          <h2 className={styles.text}>
            Your journey to{' '}
            <span className={styles.highlight}>English</span>{' '}
            excellence starts with the{' '}
            <span className={styles.box}>right</span>{' '}
            teacher, the right method, and the right{' '}
            <span className={styles.accent}>environment.</span>
          </h2>
          <p className={styles.bengali}>
            ইংরেজিতে শ্রেষ্ঠত্বের দিকে আপনার যাত্রা শুরু হয় সঠিক শিক্ষক, সঠিক পদ্ধতি এবং সঠিক পরিবেশ দিয়ে।
          </p>
        </div>
      </div>
    </section>
  );
}
