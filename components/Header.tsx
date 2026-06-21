"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/#courses", label: "Courses" },
  { href: "/#why-parents", label: "Why Us" },
  { href: "/mock-tests", label: "Mock Tests" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.inner}`}>
          <a href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <Image
                src="/logo.png"
                alt="Cambridge Academic Centre"
                width={40}
                height={40}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>Cambridge Academic</span>
              <span className={styles.logoSub}>Centre Chittagong</span>
            </div>
          </a>

          <nav className={styles.nav} aria-label="Main navigation">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className={styles.navLink}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <a href="#contact" className={`btn-primary ${styles.ctaBtn}`}>
              Enrol Now
            </a>
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <div
          className={styles.drawerOverlay}
          onClick={() => setMenuOpen(false)}
        />
        <nav className={styles.drawerNav}>
          <div className={styles.drawerLinks}>
            {navLinks.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className={styles.drawerLink}
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className={styles.drawerFooter}>
            <a
              href="#contact"
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => setMenuOpen(false)}
            >
              Enrol Now
            </a>
            <div className={styles.drawerCall}>
              <span>Call us</span>
              <a href="tel:+447762308545">+44 7762 308 545</a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
