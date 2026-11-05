'use client';

import { useState, useEffect } from 'react';
import styles from './assessment.module.css';

/* ─── Question data ─── */
const questions = [
  {
    id: 1,
    text: 'Choose the correct word: I __ a student.',
    textBn: 'সঠিক শব্দটি বেছে নিন: I __ a student.',
    type: 'mcq' as const,
    options: ['am', 'is', 'are'],
  },
  {
    id: 2,
    text: 'Choose the correct word: She __ to school every day.',
    textBn: 'সঠিক শব্দটি বেছে নিন: She __ to school every day.',
    type: 'mcq' as const,
    options: ['go', 'goes', 'going'],
  },
  {
    id: 3,
    text: 'Write the opposite of the word "big".',
    textBn: '"big" শব্দটির বিপরীত শব্দ লিখুন।',
    type: 'text' as const,
    placeholder: 'Type your answer...',
  },
  {
    id: 4,
    text: 'Put these words in the correct order: English / learning / I / am',
    textBn: 'শব্দগুলো সঠিক ক্রমে সাজান: English / learning / I / am',
    type: 'text' as const,
    placeholder: 'Write the full sentence...',
  },
  {
    id: 5,
    text: 'What is your favorite subject at school?',
    textBn: 'স্কুলে আপনার প্রিয় বিষয় কোনটি?',
    type: 'text' as const,
    placeholder: 'Write your answer...',
  },
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function AssessmentForm() {
  const [step, setStep] = useState(0); // 0: info, 1: Part A, 2: Part B, 3: review
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [answers, setAnswers] = useState<string[]>(['', '', '', '', '']);
  const [writing, setWriting] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [partAScore, setPartAScore] = useState(0);

  // Word count for writing
  const wordCount = writing
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length;

  // Total steps
  const totalSteps = 4;
  const progressPercent = ((step + 1) / totalSteps) * 100;

  const stepLabels = ['Your Details', 'Part A — Questions', 'Part B — Writing', 'Review & Submit'];

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  function setAnswer(index: number, value: string) {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  }

  function canProceed(): boolean {
    if (step === 0) return name.trim().length > 0 && phone.trim().length >= 6;
    if (step === 1) return answers.every((a) => a.trim().length > 0);
    if (step === 2) return writing.trim().length >= 20;
    return true;
  }

  async function handleSubmit() {
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, answers, writing }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setPartAScore(data.partAScore ?? 0);
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(data?.error || 'Submission failed. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  }

  /* ─── Success screen ─── */
  if (status === 'success') {
    return (
      <div className={styles.assessmentCard}>
        <div className={styles.successWrap}>
          <div className={styles.successIcon}>✓</div>
          <h2 className={styles.successTitle}>Assessment Submitted!</h2>
          <p className={styles.successTitleBn}>আপনার এসেসমেন্ট সফলভাবে জমা হয়েছে!</p>

          {/* <div className={styles.scoreCard}>
            <span className={styles.scoreLabel}>Part A — Auto Score</span>
            <span className={styles.scoreValue}>{partAScore}/5</span>
            <span className={styles.scoreNote}>Writing evaluation pending</span>
          </div> */}
          <p className={styles.successDesc}>
            Your assessment has been received by our team. Our highly qualified instructors will
            evaluate your full English score and contact you with the results.
          </p>

          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <span className={styles.infoCardIcon}>⏰</span>
              <div>
                <div className={styles.infoCardText}>Results within 72 hours</div>
                <div className={styles.infoCardTextBn}>৭২ ঘণ্টার মধ্যে ফলাফল</div>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoCardIcon}>📱</span>
              <div>
                <div className={styles.infoCardText}>Via WhatsApp or phone call</div>
                <div className={styles.infoCardTextBn}>হোয়াটসঅ্যাপ বা ফোন কলে</div>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoCardIcon}>📊</span>
              <div>
                <div className={styles.infoCardText}>Personalised course recommendation</div>
                <div className={styles.infoCardTextBn}>স্কোর অনুসারে কোর্স সুপারিশ</div>
              </div>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoCardIcon}>🎓</span>
              <div>
                <div className={styles.infoCardText}>Free consultation</div>
                <div className={styles.infoCardTextBn}>বিনামূল্যে পরামর্শ প্রদান</div>
              </div>
            </div>
          </div>

          <div className={styles.successActions}>
            <a href="/" className="btn-primary">
              Back to Home
            </a>
            <a
              href="https://wa.me/8801519300121?text=Hello%2C%20I%20just%20completed%20the%20online%20assessment."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ color: 'var(--foreground)', borderColor: 'var(--border)' }}
            >
              Message on WhatsApp
            </a>
          </div>

          {/* Review answers */}
          <div className={styles.reviewSection}>
            <h4 className={styles.reviewTitle}>Your Answers</h4>
            {questions.map((q, i) => (
              <div key={q.id} className={styles.reviewItem}>
                <span className={styles.reviewMark}>Q{i + 1}.</span>
                <span className={styles.reviewQ}>{q.text}</span>
                <span className={styles.reviewA}>{answers[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ─── Form steps ─── */
  return (
    <div className={styles.assessmentCard}>
      {/* Progress */}
      <div className={styles.progressWrap}>
        <div className={styles.progressTop}>
          <span className={styles.progressLabel}>{stepLabels[step]}</span>
          <span className={styles.progressStep}>
            Step {step + 1} of {totalSteps}
          </span>
        </div>
        <div className={styles.progressTrack}>
          <div className={styles.progressFill} style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      {/* Step 0: Personal Info */}
      {step === 0 && (
        <div className={styles.stepContent} key="step-0">
          <h3 className={styles.stepTitle}>Your Details</h3>
          <p className={styles.stepTitleBn}>আপনার তথ্য দিন</p>
          <p className={styles.stepSubtitle}>
            Please provide your name and phone number so our instructors can send you the evaluation results.
          </p>

          <div className={styles.formGrid}>
            <div className={styles.field}>
              <label htmlFor="assess-name" className={styles.label}>
                Full Name *
              </label>
              <input
                id="assess-name"
                type="text"
                placeholder="e.g. Tanvir Ahmed"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
                autoComplete="name"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="assess-phone" className={styles.label}>
                Phone Number *
              </label>
              <input
                id="assess-phone"
                type="tel"
                placeholder="01XXXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={styles.input}
                autoComplete="tel"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 1: Part A — Questions */}
      {step === 1 && (
        <div className={styles.stepContent} key="step-1">
          <div className={styles.partHeader}>
            <div className={styles.partBadge}>A</div>
            <div className={styles.partInfo}>
              <h3>Five Questions</h3>
              <p>Answer all questions carefully / সবগুলো প্রশ্নের উত্তর দিন</p>
            </div>
          </div>

          {questions.map((q, i) => (
            <div
              key={q.id}
              className={`${styles.questionCard} ${answers[i].trim() ? styles.questionCardAnswered : ''}`}
            >
              <div className={styles.questionNum}>{i + 1}</div>
              <p className={styles.questionText}>{q.text}</p>
              <p className={styles.questionTextBn}>{q.textBn}</p>

              {q.type === 'mcq' && q.options ? (
                <div className={styles.optionGroup}>
                  {q.options.map((opt) => (
                    <label
                      key={opt}
                      className={`${styles.optionLabel} ${answers[i] === opt ? styles.optionSelected : ''}`}
                    >
                      <input
                        type="radio"
                        name={`q-${q.id}`}
                        value={opt}
                        checked={answers[i] === opt}
                        onChange={() => setAnswer(i, opt)}
                        className={styles.optionRadio}
                      />
                      <span
                        className={`${styles.optionDot} ${answers[i] === opt ? styles.optionDotSelected : ''}`}
                      />
                      <span className={styles.optionText}>{opt}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder={q.placeholder}
                    value={answers[i]}
                    onChange={(e) => setAnswer(i, e.target.value)}
                    className={styles.questionInput}
                  />
                  {i === 3 && (
                    <p className={styles.questionHint}>
                      Hint: Rearrange the words to form a correct sentence.
                    </p>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Step 2: Part B — Writing */}
      {step === 2 && (
        <div className={styles.stepContent} key="step-2">
          <div className={styles.partHeader}>
            <div className={styles.partBadge}>B</div>
            <div className={styles.partInfo}>
              <h3>Short Writing</h3>
              <p>Write five simple lines / পাঁচটি সহজ লাইন লিখুন</p>
            </div>
          </div>

          <div className={styles.writingSection}>
            <div className={styles.writingTopic}>
              <span className={styles.writingTopicIcon}>📝</span>
              <div>
                <strong>Topic: About Myself</strong>
                <br />
                <span style={{ fontWeight: 400, fontSize: '13px' }}>
                  Write five simple lines about yourself, your school, family, or hobbies.
                </span>
              </div>
            </div>

            <textarea
              placeholder="Start writing here...&#10;&#10;Example:&#10;My name is ... I am ... years old.&#10;I study at ... School.&#10;My favorite subject is ...&#10;I live with my family in ...&#10;I like to ..."
              value={writing}
              onChange={(e) => setWriting(e.target.value)}
              className={styles.writingTextarea}
            />

            <div className={styles.writingMeta}>
              <span>Minimum 20 characters required</span>
              <span className={styles.writingWordCount}>{wordCount} words</span>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Review */}
      {step === 3 && (
        <div className={styles.stepContent} key="step-3">
          <h3 className={styles.stepTitle}>Review Your Assessment</h3>
          <p className={styles.stepTitleBn}>আপনার মূল্যায়ন পর্যালোচনা করুন</p>
          <p className={styles.stepSubtitle}>
            Please review your answers below before submitting. Once submitted, our instructors will
            evaluate your assessment.
          </p>

          {/* Review Part A */}
          <div className={styles.partHeader}>
            <div className={styles.partBadge}>A</div>
            <div className={styles.partInfo}>
              <h3>Your Answers</h3>
              <p>{answers.filter((a) => a.trim()).length}/5 questions answered</p>
            </div>
          </div>

          {questions.map((q, i) => (
            <div key={q.id} className={styles.questionCard}>
              <div className={styles.questionNum}>{i + 1}</div>
              <p className={styles.questionText}>{q.text}</p>
              <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--primary)', marginTop: '-4px' }}>
                → {answers[i] || '(no answer)'}
              </p>
            </div>
          ))}

          {/* Review Part B */}
          <div className={styles.partHeader} style={{ marginTop: '28px' }}>
            <div className={styles.partBadge}>B</div>
            <div className={styles.partInfo}>
              <h3>Your Writing</h3>
              <p>{wordCount} words</p>
            </div>
          </div>

          <div className={styles.questionCard}>
            <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--foreground)', whiteSpace: 'pre-wrap' }}>
              {writing || '(no writing)'}
            </p>
          </div>
        </div>
      )}

      {/* Error banner */}
      {status === 'error' && <div className={styles.errorBanner}>{errorMsg}</div>}

      {/* Navigation */}
      <div className={styles.navButtons}>
        {step > 0 ? (
          <button
            type="button"
            className={styles.btnBack}
            onClick={() => {
              setStep(step - 1);
              setStatus('idle');
            }}
          >
            ← Back
          </button>
        ) : (
          <div className={styles.spacer} />
        )}

        {step < 3 ? (
          <button
            type="button"
            className={styles.btnNext}
            disabled={!canProceed()}
            onClick={() => setStep(step + 1)}
          >
            Continue →
          </button>
        ) : (
          <button
            type="button"
            className={`${styles.btnNext} ${styles.btnSubmit}`}
            disabled={status === 'submitting'}
            onClick={handleSubmit}
          >
            {status === 'submitting' ? 'Submitting...' : 'Submit Assessment ✓'}
          </button>
        )}
      </div>
    </div>
  );
}

