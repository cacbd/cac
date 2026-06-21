'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Admissions.module.css';

export default function Admissions() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="admissions" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Side: Information */}
          <div className={styles.infoCol}>
            <p className="section-label">/ Admissions Open / ভর্তি চলছে</p>
            <h2 className={styles.title}>
              Start Your Journey <br />
              <em className={styles.titleAccent}>At Cambridge</em>
            </h2>
            <p className={styles.titleBn}>ক্যামব্রিজে আপনার যাত্রা শুরু করুন</p>
            <p className={styles.desc}>
              Enrolment is now open for our upcoming batches. Learn from certified trainers, access state-of-the-art resources, and fast-track your path to fluency. Check out our latest admission flyer for detailed structure and schedules.
            </p>
            <p className={styles.descBn}>
              আমাদের নতুন ব্যাচসমূহে ভর্তি চলছে। সার্টিফাইড মেন্টরদের নিবিড় তত্ত্বাবধান ও সর্বাধুনিক লার্নিং রিসোর্সের মাধ্যমে আপনার ইংরেজি দক্ষতার দ্রুত ও কার্যকর উন্নয়ন নিশ্চিত করুন। বিস্তারিত কোর্স প্ল্যান এবং সময়সূচী জানতে আমাদের সাম্প্রতিক অ্যাডমিশন ফ্লায়ারটি দেখুন।
            </p>

            {/* Enrollment Steps */}
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNum}>01</div>
                <div>
                  <h4 className={styles.stepTitle}>Select Your Course / কোর্স নির্বাচন</h4>
                  <p className={styles.stepText}>Choose from IELTS, TOEFL, Spoken English, or specialized tracks.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNum}>02</div>
                <div>
                  <h4 className={styles.stepTitle}>Take Placement Test / প্লেসমেন্ট টেস্ট</h4>
                  <p className={styles.stepText}>Evaluate your level to ensure placement in the correct learning tier.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNum}>03</div>
                <div>
                  <h4 className={styles.stepTitle}>Secure Your Seat / ভর্তি নিশ্চিতকরণ</h4>
                  <p className={styles.stepText}>Pick your batch timings, complete formalities, and begin learning.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Flyer Image */}
          <div className={styles.flyerCol}>
            <div className={styles.flyerFrame} onClick={() => setIsOpen(true)}>
              <Image
                src="/admisson.jpg"
                alt="Cambridge Academic Centre Admissions Flyer"
                width={500}
                height={700}
                className={styles.flyerImg}
                priority
              />
              <div className={styles.flyerOverlay}>
                <span className={styles.zoomIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="24" height="24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637zM10.5 7.5v6m3-3h-6" />
                  </svg>
                  Click to Expand / বড় করে দেখুন
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className={styles.lightbox} onClick={() => setIsOpen(false)}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Close lightbox">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" width="28" height="28">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className={styles.lightboxImgContainer}>
              <Image
                src="/admisson.jpg"
                alt="Admissions Flyer Full Size"
                width={800}
                height={1120}
                className={styles.lightboxImg}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
