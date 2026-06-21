'use client';
import { useState, FormEvent } from 'react';
import styles from './Contact.module.css';

const courses = [
  'IELTS Preparation', 'TOEFL Preparation', 'Spoken English',
  'Business English', 'English for Kids & Teens', 'Reading Skills',
  'Writing Skills', 'Listening Skills', 'Grammar & Vocabulary',
  'Interview & Presentation Skills', 'Professional Development',
];

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', phone: '', email: '', course: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', phone: '', email: '', course: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.section}>
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
              Ready to transform your English? Fill in the form and our team will get back to you within 24 hours.
            </p>
            <p className={styles.subtitleBn}>
              আপনার ইংরেজি রূপান্তর করতে প্রস্তুত? ফর্মটি পূরণ করুন এবং আমাদের টিম ২৪ ঘন্টার মধ্যে আপনার সাথে যোগাযোগ করবে।
            </p>

            <div className={styles.contactItems}>
              {/* Address */}
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <div className={styles.contactLabel}>Location / ঠিকানা</div>
                  <div className={styles.contactValue}>146 North Nalapara</div>
                  <div className={styles.contactSub}>Chittagong, Bangladesh</div>
                </div>
              </div>

              {/* Phone */}
              <a href="tel:+8801818256123" className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <div className={styles.contactLabel}>Phone / ফোন</div>
                  <div className={styles.contactValue}>+88 01818 256 123</div>
                </div>
              </a>
              <a href="tel:+8801818256123" className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <div className={styles.contactLabel}>Phone / ফোন</div>
                  <div className={styles.contactValue}>+44 7762 308 545</div>
                </div>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/447762308545?text=Hello%2C%20I%20am%20interested%20in%20your%20courses." target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <div className={`${styles.contactIcon} ${styles.contactIconWa}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.contactLabel}>WhatsApp</div>
                  <div className={styles.contactValue}>+44 7762 308 545</div>
                  <div className={styles.contactSub}>Message us instantly</div>
                </div>
              </a>

              {/* Website */}
              <a href="https://cac.bd" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div>
                  <div className={styles.contactLabel}>Website / ওয়েবসাইট</div>
                  <div className={styles.contactValue}>cac.bd</div>
                </div>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=61590632803008" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
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
              <h3 className={styles.formTitle}>Send an Enquiry</h3>
              <p className={styles.formTitleBn}>একটি অনুসন্ধান পাঠান</p>

              {status === 'success' ? (
                <div className={styles.successMsg}>
                  <div className={styles.successIcon}>✓</div>
                  <p>Thank you! We&apos;ll be in touch within 24 hours.</p>
                  <p className={styles.successBn}>ধন্যবাদ! আমরা ২৪ ঘন্টার মধ্যে যোগাযোগ করব।</p>
                  <button className="btn-primary" style={{ marginTop: '20px' }} onClick={() => setStatus('idle')}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label htmlFor="name" className={styles.label}>Full Name *</label>
                      <input
                        id="name" name="name" type="text"
                        placeholder="Your full name"
                        value={form.name} onChange={handleChange}
                        required className={styles.input}
                        autoComplete="name"
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="phone" className={styles.label}>Phone Number *</label>
                      <input
                        id="phone" name="phone" type="tel"
                        placeholder="01XXXXXXXXX"
                        value={form.phone} onChange={handleChange}
                        required className={styles.input}
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>Email Address</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="your@email.com"
                      value={form.email} onChange={handleChange}
                      className={styles.input}
                      autoComplete="email"
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="course" className={styles.label}>Course of Interest</label>
                    <select
                      id="course" name="course"
                      value={form.course} onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="">Select a course…</option>
                      {courses.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <textarea
                      id="message" name="message"
                      placeholder="Any questions or additional information…"
                      rows={4}
                      value={form.message} onChange={handleChange}
                      className={styles.textarea}
                    />
                  </div>

                  {status === 'error' && (
                    <p className={styles.errorMsg}>Something went wrong. Please call us directly at 01818 256 123.</p>
                  )}

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    disabled={status === 'sending'}
                    id="contact-submit"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Enquiry / অনুসন্ধান পাঠান'}
                  </button>

                  <p className={styles.privacy}>
                    Your information is kept private and will only be used to contact you about courses.
                  </p>
                </form>
              )}
            </div>

            {/* Map */}
            <div className={styles.mapWrap}>
              <iframe
                title="Cambridge Academic Centre location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.2!2d91.8333!3d22.3569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDIxJzI0LjgiTiA5McKwNTAnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1234567890"
                width="100%" height="240" style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.google.com/?q=146+North+Nalapara+Chittagong+Bangladesh"
                target="_blank" rel="noopener noreferrer"
                className={styles.mapLink}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="14" height="14">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Get Directions to 146 North Nalapara, Chittagong
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
