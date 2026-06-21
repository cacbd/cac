import Image from "next/image";
import styles from "./Footer.module.css";

const links = [
  { href: "/#courses", label: "Courses" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
];

const courses = [
  "IELTS Preparation",
  "TOEFL Preparation",
  "Spoken English",
  "Business English",
  "English for Kids & Teens",
  "Grammar & Vocabulary",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <a href="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <Image
                  src="/logo.png"
                  alt="Cambridge Academic Centre"
                  width={44}
                  height={44}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div>
                <div className={styles.logoName}>Cambridge Academic</div>
                <div className={styles.logoSub}>Centre Chittagong</div>
              </div>
            </a>
            <p className={styles.tagline}>
              Premium English courses for all ages. Speak • Learn • Achieve •
              Succeed.
            </p>
            <p className={styles.taglineBn}>
              সকল বয়সের জন্য প্রিমিয়াম ইংরেজি কোর্স। বলুন • শিখুন • অর্জন করুন
              • সফল হন।
            </p>

            <div className={styles.socials}>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61590632803008"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.social}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="18"
                  height="18"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/447762308545"
                aria-label="WhatsApp"
                className={styles.social}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="18"
                  height="18"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.colList}>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={styles.colLink}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Our Courses</h4>
            <ul className={styles.colList}>
              {courses.map((c) => (
                <li key={c}>
                  <a href="#courses" className={styles.colLink}>
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.colList}>
              <li className={styles.colText}>
                <strong>146 North Nalapara</strong>
                <br />
                Chittagong, Bangladesh
              </li>
              <li>
                <a href="tel:+8801818256123" className={styles.colLink}>
                  +88 01818 256 123
                </a>
              </li>
              <li>
                <a href="tel:+447762308545" className={styles.colLink}>
                  +44 7762 308 545
                </a>
              </li>
              <li className={styles.colText}>
                <strong>Hours:</strong> Sat–Thu 8AM–9PM
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Cambridge Academic Centre Chittagong.
            All rights reserved.
          </p>
          <p className={styles.copyBn}>
            সর্বস্বত্ব সংরক্ষিত · ক্যামব্রিজ একাডেমিক সেন্টার চট্টগ্রাম
          </p>
        </div>
      </div>
    </footer>
  );
}
