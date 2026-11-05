'use client';

import { useState, useEffect, FormEvent } from 'react';
import styles from './Contact.module.css';

const courses = [
  'IELTS Preparation',
  'TOEFL Preparation',
  'Spoken English',
  'Business English',
  'English for Kids & Teens',
  'Reading Skills',
  'Writing Skills',
  'Listening Skills',
  'Grammar & Vocabulary',
  'Interview & Presentation Skills',
  'Professional Development',
];

const batchOptions = [
  'Morning Batch (9:00 AM – 11:00 AM)',
  'Afternoon Batch (3:00 PM – 5:00 PM)',
  'Evening Batch (6:00 PM – 8:00 PM)',
  'Weekend Batch (Friday & Saturday)',
  'Flexible / Any Available Batch',
];

const levelOptions = [
  'Beginner (Foundational English)',
  'Intermediate (Looking to improve fluency)',
  'Advanced (Targeting IELTS 7.0+ / Professional)',
  'School Student (Class 1–10)',
  'College Student (HSC / A-Level)',
  'University Student / Job Aspirant',
  'Working Professional',
];

type Status = 'idle' | 'sending' | 'success' | 'error';
type FormType = 'inquiry' | 'admission';

export default function Contact() {
  const [formType, setFormType] = useState<FormType>('inquiry');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    course: '',
    batchTiming: '',
    englishLevel: '',
    message: '',
  });

  // Listen to hash and query changes (e.g. #contact?type=admission or #admission)
  useEffect(() => {
    const handleNavigation = () => {
      const hash = window.location.hash || '';
      const search = window.location.search || '';
      const fullUrl = hash + '&' + search;

      if (fullUrl.includes('admission') || fullUrl.includes('enrol')) {
        setFormType('admission');
      } else if (fullUrl.includes('inquiry')) {
        setFormType('inquiry');
      }

      const match = fullUrl.match(/[?&]course=([^&]+)/);
      if (match && match[1]) {
        const decodedCourse = decodeURIComponent(match[1].replace(/\+/g, ' '));
        if (courses.includes(decodedCourse)) {
          setForm((prev) => ({ ...prev, course: decodedCourse }));
        }
      }

      // Smooth scroll if URL targets contact or admission
      if (
        hash.includes('contact') ||
        hash.includes('admission') ||
        search.includes('admission')
      ) {
        setTimeout(() => {
          const el = document.getElementById('contact');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      }
    };

    // Global click listener so clicking "Enrol Now" buttons works even if the hash is already set
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;
      const href = target.getAttribute('href') || '';

      if (
        href.includes('contact') ||
        href.includes('admission') ||
        href.includes('enrol')
      ) {
        if (href.includes('admission') || href.includes('enrol')) {
          setFormType('admission');
        } else if (href.includes('inquiry')) {
          setFormType('inquiry');
        }

        const match = href.match(/[?&]course=([^&]+)/);
        if (match && match[1]) {
          const decodedCourse = decodeURIComponent(match[1].replace(/\+/g, ' '));
          if (courses.includes(decodedCourse)) {
            setForm((prev) => ({ ...prev, course: decodedCourse }));
          }
        }

        // If on homepage, smooth scroll immediately to contact form
        const currentPath = window.location.pathname;
        if (currentPath === '/' || currentPath === '') {
          setTimeout(() => {
            const el = document.getElementById('contact');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 50);
        }
      }
    };

    handleNavigation();
    window.addEventListener('hashchange', handleNavigation);
    window.addEventListener('popstate', handleNavigation);
    document.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('hashchange', handleNavigation);
      window.removeEventListener('popstate', handleNavigation);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType,
          ...form,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus('success');
        setForm({
          name: '',
          phone: '',
          course: '',
          batchTiming: '',
          englishLevel: '',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(
          data?.error || 'Something went wrong. Please call us directly at +88 01519 300 121.'
        );
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please call us directly at +88 01519 300 121 or message on WhatsApp.');
    }
  };

  return (
    <section id="contact" className={styles.section} style={{ position: 'relative' }}>
      {/* Anchor targets so browser native hash navigation matches all URL variants */}
      <span id="contact?type=admission" style={{ position: 'absolute', top: '-60px' }} aria-hidden="true" />
      <span id="admission" style={{ position: 'absolute', top: '-60px' }} aria-hidden="true" />
      <span id="enrol" style={{ position: 'absolute', top: '-60px' }} aria-hidden="true" />
      <div className="container">
        <div className={styles.layout}>
          {/* Left: Info */}
          <div className={styles.info}>
            <p className="section-label">/ Get In Touch / যোগাযোগ করুন</p>
            <h2 className={styles.title}>
              Start Your <br />
              <em className={styles.titleAccent}>English Journey</em>
            </h2>
            <p className={styles.titleBn}>আপনার ইংরেজি যাত্রা শুরু করুন</p>

            <p className={styles.subtitle}>
              Ready to transform your English? Fill in the inquiry or admission form and our team will get back to you within 24 hours.
            </p>
            <p className={styles.subtitleBn}>
              আপনার ইংরেজি রূপান্তর করতে প্রস্তুত? অনুসন্ধান বা ভর্তি ফর্মটি পূরণ করুন এবং আমাদের টিম ২৪ ঘন্টার মধ্যে আপনার সাথে যোগাযোগ করবে।
            </p>

            <div className={styles.contactItems}>
              {/* Address */}
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <div className={styles.contactLabel}>Location / ঠিকানা</div>
                  <div className={styles.contactValue}>146 North Nalapara</div>
                  <div className={styles.contactSub}>Chittagong, Bangladesh</div>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <a
                href="https://wa.me/8801519300121?text=Hello%2C%20I%20am%20interested%20in%20your%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >
                <div className={`${styles.contactIcon} ${styles.contactIconWa}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <div className={styles.contactLabel}>Phone / WhatsApp</div>
                  <div className={styles.contactValue}>015 193 300 121 </div>
                  <div className={styles.contactValue}>015 193 300 122 </div>
                  <div className={styles.contactValue}>015 193 300 123 </div>
                  <div className={styles.contactSub}>Message us instantly</div>
                </div>
              </a>

              {/* Phone / WhatsApp */}
              <a
                href="https://wa.me/447762308545?text=Hello%2C%20I%20am%20interested%20in%20your%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >
                <div className={`${styles.contactIcon} ${styles.contactIconWa}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <div className={styles.contactLabel}>Phone / WhatsApp</div>
                  <div className={styles.contactValue}>+44 7762 308 545</div>
                  <div className={styles.contactSub}>Message us instantly</div>
                </div>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61590632803008"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >
                <div className={`${styles.contactIcon} ${styles.contactIconFb}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <div className={styles.contactLabel}>Facebook / ফেসবুক</div>
                  <div className={styles.contactValue}>Cambridge Academic Centre</div>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:info@cac.bd" className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <div className={styles.contactLabel}>Email / ইমেইল</div>
                  <div className={styles.contactValue}>info@cac.bd</div>
                </div>
              </a>

              {/* Hours */}
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <div className={styles.contactLabel}>Office Hours / অফিস সময়</div>
                  <div className={styles.contactValue}>Sat – Thu: 8AM – 9PM</div>
                  <div className={styles.contactSub}>Friday: Closed / শুক্রবার বন্ধ</div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/447762308545?text=Hello%2C%20I%20would%20like%20to%20book%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-primary ${styles.consultBtn}`}
            >
              Book a Free Consultation / বিনামূল্যে পরামর্শ বুক করুন
            </a>
          </div>

          {/* Right: Form */}
          <div className={styles.formWrap}>
            <div className={styles.formCard}>
              {/* Form Type Tabs */}
              <div className={styles.tabGroup} role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={formType === 'inquiry'}
                  className={`${styles.tabBtn} ${formType === 'inquiry' ? styles.tabBtnActive : ''}`}
                  onClick={() => {
                    setFormType('inquiry');
                    setStatus('idle');
                  }}
                >
                  <span>📝 Course Enquiry</span>
                  <span className={styles.tabBtnBn}>কোর্স সম্পর্কিত তথ্য</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={formType === 'admission'}
                  className={`${styles.tabBtn} ${formType === 'admission' ? styles.tabBtnActive : ''}`}
                  onClick={() => {
                    setFormType('admission');
                    setStatus('idle');
                  }}
                >
                  <span>🎓 Admission Form</span>
                  <span className={styles.tabBtnBn}>অনলাইন ভর্তি আবেদন</span>
                </button>
              </div>

              <h3 className={styles.formTitle}>
                {formType === 'admission'
                  ? 'Online Admission Application'
                  : 'Send a Course Enquiry'}
              </h3>
              <p className={styles.formTitleBn}>
                {formType === 'admission'
                  ? 'ক্যামব্রিজে ভর্তির জন্য নিচের তথ্যগুলো পূরণ করুন'
                  : 'কোর্স সম্পর্কে জানতে আপনার তথ্য দিয়ে ফর্মটি পূরণ করুন'}
              </p>

              {status === 'success' ? (
                <div className={styles.successMsg}>
                  <div className={styles.successIcon}>✓</div>
                  <p>
                    {formType === 'admission'
                      ? 'Thank you for your application! Our admissions team has received your details.'
                      : "Thank you for your enquiry! We'll be in touch within 24 hours."}
                  </p>
                  <p className={styles.successBn}>
                    {formType === 'admission'
                      ? 'আপনার ভর্তি আবেদন সফলভাবে জমা হয়েছে। আমাদের অ্যাডমিশন টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে।'
                      : 'ধন্যবাদ! আমাদের টিম ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করবে।'}
                  </p>
                  <button
                    className="btn-primary"
                    style={{ marginTop: '20px' }}
                    onClick={() => setStatus('idle')}
                  >
                    Submit Another / আরেকটি জমা দিন
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label htmlFor="name" className={styles.label}>
                        {formType === 'admission' ? 'Student Full Name *' : 'Full Name *'}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="e.g. Tanvir Ahmed"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className={styles.input}
                        autoComplete="name"
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="phone" className={styles.label}>
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="01XXXXXXXXX"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className={styles.input}
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="course" className={styles.label}>
                      {formType === 'admission' ? 'Course to Enrol *' : 'Course of Interest'}
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={form.course}
                      onChange={handleChange}
                      required={formType === 'admission'}
                      className={styles.select}
                    >
                      <option value="">Select a course...</option>
                      {courses.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Additional fields for Admission Form */}
                  {formType === 'admission' && (
                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label htmlFor="batchTiming" className={styles.label}>
                          Preferred Batch Timing
                        </label>
                        <select
                          id="batchTiming"
                          name="batchTiming"
                          value={form.batchTiming}
                          onChange={handleChange}
                          className={styles.select}
                        >
                          <option value="">Select batch time...</option>
                          {batchOptions.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className={styles.field}>
                        <label htmlFor="englishLevel" className={styles.label}>
                          Current Level / Background
                        </label>
                        <select
                          id="englishLevel"
                          name="englishLevel"
                          value={form.englishLevel}
                          onChange={handleChange}
                          className={styles.select}
                        >
                          <option value="">Select your background...</option>
                          {levelOptions.map((lvl) => (
                            <option key={lvl} value={lvl}>
                              {lvl}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  <div className={styles.field}>
                    <label htmlFor="message" className={styles.label}>
                      {formType === 'admission'
                        ? 'Additional Notes / Goals (Optional)'
                        : 'Message / Questions'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder={
                        formType === 'admission'
                          ? 'Any specific target band score, timeline, or inquiries...'
                          : 'Any questions about fees, timings, or course syllabus...'
                      }
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      className={styles.textarea}
                    />
                  </div>

                  {status === 'error' && (
                    <div className={styles.errorMsg}>
                      <p>{errorMessage}</p>
                      <p style={{ marginTop: '6px', fontSize: '12px' }}>
                        Need immediate help? Call <strong>+88 01519 300 121</strong> or message us on WhatsApp.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    disabled={status === 'sending'}
                    id="contact-submit"
                  >
                    {status === 'sending'
                      ? 'Sending...'
                      : formType === 'admission'
                        ? 'Submit Admission Application / ভর্তি আবেদন সম্পন্ন করুন'
                        : 'Send Course Enquiry / অনুসন্ধান পাঠান'}
                  </button>

                  <p className={styles.privacy}>
                    Your information is kept confidential and sent securely to our admissions team.
                  </p>
                </form>
              )}
            </div>

            {/* Map */}
            <div className={styles.mapWrap}>
              <iframe
                title="Cambridge Academic Centre location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.571527384711!2d91.82809587533745!3d22.332038779663787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ff1990c5c90ef5b%3A0x79d3c32ea64783de!2sCambridge%20Academic%20Centre%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1793185453452!5m2!1sen!2sbd"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <a
                href="https://maps.google.com/?q=Cambridge+Academic+Centre+Chittagong"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  width="14"
                  height="14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                Get Directions to Cambridge Academic Centre
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
