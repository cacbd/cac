import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Background Image */}
      <div className={styles.bg}>
        <Image
          src="/hero-classroom.png"
          alt="Students studying at Cambridge Academic Centre Chittagong"
          className={styles.bgImg}
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.overlay1} />
        <div className={styles.overlay2} />
      </div>

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <div className={styles.contentInner}>
          {/* Badge */}
          <div className={styles.badge} style={{ animationDelay: "0.3s" }}>
            <span className={styles.badgeDot} />
            <span>British Curriculum Inspired</span>
          </div>

          {/* Headline */}
          <h1 className={styles.headline} style={{ animationDelay: "0.4s" }}>
            We Don&rsquo;t Just Teach{" "}
            <em className={styles.accentItalic}>English</em>
            <br />
            We Build Confident Communicators
            <br />
            and Future <em>Leaders</em>
          </h1>

          {/* Bengali sub-headline */}
          <p className={styles.bengali} style={{ animationDelay: "0.55s" }}>
            আমরা শুধু ইংরেজি শেখাই না — আমরা আত্মবিশ্বাসী যোগাযোগকারী এবং ভবিষ্যৎ নেতা তৈরি করি
          </p>

          <p className={styles.tagline} style={{ animationDelay: "0.65s" }}>
            Cambridge Academic Centre is a premium English Language and Personal
            Development Institute in Chittagong. We offer IELTS, TOEFL, Speaking,
            Listening, Reading, Writing, Grammar, Business English, Public Speaking,
            Confidence Building and Leadership Development programmes for children,
            teenagers, adults and professionals.
          </p>
          <p className={styles.taglineBn} style={{ animationDelay: "0.75s" }}>
            আমরা বিশ্বাস করি শিক্ষা শুধু যোগাযোগ দক্ষতা নয়, চরিত্রও উন্নত করবে — যাতে
            শিক্ষার্থীরা একাডেমিক, পেশাদার এবং ব্যক্তিগত জীবনে সফল হতে পারে।
          </p>

          {/* CTAs */}
          <div className={styles.ctas} style={{ animationDelay: "0.85s" }}>
            <a href="#courses" className="btn-primary">
              Explore Courses / কোর্স দেখুন
            </a>
            <a href="#contact" className="btn-outline">
              Enrol Now / এখনই ভর্তি হন
            </a>
          </div>

          {/* Wordmarks */}
          <div className={styles.wordmarks} style={{ animationDelay: "1s" }}>
            {["English Excellence", "Confidence", "Character", "Leadership"].map((w, i) => (
              <span key={w} className={styles.wordmarkGroup}>
                <span className={styles.wordmark}>{w}</span>
                {i < 3 && <span className={styles.wordmarkDot} />}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[
              { val: "11+", en: "English Courses", bn: "ইংরেজি কোর্স" },
              { val: "500+", en: "Students Enrolled", bn: "শিক্ষার্থী ভর্তি" },
               {
                val: "100%",
                en: "Student-Friendly Environment",
                bn: "শিক্ষার্থীবান্ধব পরিবেশ",
              },
            ].map((s) => (
              <div key={s.val} className={styles.statItem}>
                <span className={styles.statVal}>{s.val}</span>
                <div className={styles.statLabels}>
                  <span className={styles.statEn}>{s.en}</span>
                  <span className={styles.statBn}>{s.bn}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
