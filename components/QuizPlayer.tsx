'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import type { Quiz } from '@/lib/quizzes';
import styles from './QuizPlayer.module.css';

const LETTERS = ['A', 'B', 'C', 'D'];

type Phase = 'intro' | 'quiz' | 'result';

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function getBandForScore(quiz: Quiz, pct: number) {
  return (
    quiz.resultBands.find((b) => pct >= b.min && pct <= b.max) ??
    quiz.resultBands[quiz.resultBands.length - 1]
  );
}

const heroColorMap: Record<string, string> = {
  blue: styles.scoreHeroBlue,
  teal: styles.scoreHeroTeal,
  amber: styles.scoreHeroAmber,
  green: styles.scoreHeroGreen,
};
const bandColorMap: Record<string, string> = {
  blue: styles.bandBlue,
  teal: styles.bandTeal,
  amber: styles.bandAmber,
  green: styles.bandGreen,
};

export default function QuizPlayer({ quiz }: { quiz: Quiz }) {
  const [phase, setPhase] = useState<Phase>('intro');
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [elapsed, setElapsed] = useState(0);

  /* ---- Timer ---- */
  useEffect(() => {
    if (phase !== 'quiz') return;
    const id = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [phase]);

  /* ---- Start ---- */
  const handleStart = useCallback(() => {
    setAnswers(new Array(quiz.questions.length).fill(null));
    setCurrent(0);
    setSelected(null);
    setElapsed(0);
    setPhase('quiz');
  }, [quiz.questions.length]);

  /* ---- Select option ---- */
  const handleSelect = useCallback((idx: number) => {
    setSelected(idx);
  }, []);

  /* ---- Next ---- */
  const handleNext = useCallback(() => {
    const newAnswers = [...answers];
    newAnswers[current] = selected;
    setAnswers(newAnswers);

    if (current < quiz.questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(newAnswers[current + 1] ?? null);
    }
  }, [answers, current, selected, quiz.questions.length]);

  /* ---- Previous ---- */
  const handlePrev = useCallback(() => {
    const newAnswers = [...answers];
    newAnswers[current] = selected;
    setAnswers(newAnswers);
    setCurrent((c) => c - 1);
    setSelected(newAnswers[current - 1] ?? null);
  }, [answers, current, selected]);

  /* ---- Submit ---- */
  const handleSubmit = useCallback(() => {
    const newAnswers = [...answers];
    newAnswers[current] = selected;
    setAnswers(newAnswers);
    setPhase('result');
  }, [answers, current, selected]);

  /* ---- Score calc ---- */
  const correctCount = answers.filter(
    (a, i) => a === quiz.questions[i]?.correct
  ).length;
  const scorePct = Math.round((correctCount / quiz.questions.length) * 100);
  const band = getBandForScore(quiz, scorePct);

  const isLast = current === quiz.questions.length - 1;
  const progressPct = ((current + 1) / quiz.questions.length) * 100;

  /* ================================================================
     INTRO
  ================================================================ */
  if (phase === 'intro') {
    return (
      <div className={styles.wrap}>
        <div className={styles.intro}>
          <div className={styles.introMeta}>
            <span className={styles.introCat}>{quiz.category}</span>
            <span className={styles.introDiff}>{quiz.difficulty}</span>
          </div>
          <h1 className={styles.introTitle}>{quiz.title}</h1>
          <p className={styles.introDesc}>{quiz.excerpt}</p>

          <div className={styles.introStats}>
            <div className={styles.introStat}>
              <span className={styles.introStatVal}>{quiz.questions.length}</span>
              <span className={styles.introStatLabel}>Questions</span>
            </div>
            <div className={styles.introStat}>
              <span className={styles.introStatVal}>{quiz.duration}</span>
              <span className={styles.introStatLabel}>Minutes</span>
            </div>
            <div className={styles.introStat}>
              <span className={styles.introStatVal}>Free</span>
              <span className={styles.introStatLabel}>No Sign-up</span>
            </div>
          </div>

          <button className={styles.startBtn} onClick={handleStart}>
            Start Test →
          </button>
        </div>
      </div>
    );
  }

  /* ================================================================
     QUIZ
  ================================================================ */
  if (phase === 'quiz') {
    const q = quiz.questions[current];
    return (
      <div className={styles.wrap}>
        <div className={styles.quizWrap}>
          {/* Progress bar */}
          <div className={styles.progress}>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <span className={styles.progressText}>
              {current + 1} / {quiz.questions.length}
            </span>
            <span className={styles.progressTimer}>{formatTime(elapsed)}</span>
          </div>

          {/* Reading passage */}
          {quiz.passage && (
            <div className={styles.passageBox}>
              <p className={styles.passageLabel}>Reading Passage — read carefully</p>
              <p className={styles.passageText}>{quiz.passage}</p>
            </div>
          )}

          {/* Question */}
          <div className={styles.questionCard}>
            <p className={styles.questionNum}>Question {current + 1}</p>
            <p className={styles.questionText}>{q.question}</p>

            <div className={styles.options}>
              {q.options.map((opt, idx) => (
                <button
                  key={idx}
                  className={`${styles.option} ${selected === idx ? styles.optionSelected : ''}`}
                  onClick={() => handleSelect(idx)}
                >
                  <span className={styles.optionLetter}>{LETTERS[idx]}</span>
                  <span className={styles.optionText}>{opt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.navRow}>
            <button
              className={styles.navBtn}
              onClick={handlePrev}
              disabled={current === 0}
            >
              ← Previous
            </button>

            {isLast ? (
              <button
                className={`${styles.navBtn} ${styles.submitBtn}`}
                onClick={handleSubmit}
                disabled={selected === null}
              >
                Submit Test →
              </button>
            ) : (
              <button
                className={`${styles.navBtn} ${styles.nextBtn}`}
                onClick={handleNext}
                disabled={selected === null}
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  /* ================================================================
     RESULT
  ================================================================ */
  return (
    <div className={styles.wrap}>
      <div className={styles.result}>
        {/* Score hero */}
        <div className={`${styles.scoreHero} ${heroColorMap[band.color] ?? styles.scoreHeroTeal}`}>
          <p className={styles.scoreHeroBand}>{band.label}</p>
          <p className={styles.scoreHeroNum}>
            {correctCount}
            <span className={styles.scoreHeroOf}> / {quiz.questions.length}</span>
          </p>
          <p className={styles.scoreHeroLabel}>{band.title}</p>
          <p className={styles.scoreHeroDesc}>{band.description}</p>
          <p style={{ fontSize: '12px', opacity: 0.65 }}>
            Completed in {formatTime(elapsed)}
          </p>
        </div>

        {/* Recommendation */}
        <div className={styles.recommendBox}>
          <div>
            <p className={styles.recommendLabel}>Our Recommendation</p>
            <p className={styles.recommendText}>{band.recommendation}</p>
          </div>
          <a href="/#contact" className={styles.recommendCta}>
            Enrol Now →
          </a>
        </div>

        {/* Answer review */}
        <div>
          <p className={styles.reviewTitle}>Answer Review</p>
          <p className={styles.reviewSubtitle}>
            See what you got right, what you missed, and why — with full explanations.
          </p>

          <div className={styles.reviewList}>
            {quiz.questions.map((q, i) => {
              const userAnswer = answers[i];
              const isCorrect = userAnswer === q.correct;
              return (
                <div key={q.id} className={styles.reviewItem}>
                  <div className={styles.reviewItemHeader}>
                    <span
                      className={`${styles.reviewStatus} ${isCorrect ? styles.reviewCorrect : styles.reviewWrong}`}
                    >
                      {isCorrect ? '✓' : '✗'}
                    </span>
                    <span className={styles.reviewQuestion}>{q.question}</span>
                  </div>
                  <div className={styles.reviewAnswers}>
                    {!isCorrect && (
                      <p className={`${styles.reviewYours} ${styles.reviewYoursWrong}`}>
                        Your answer:{' '}
                        {userAnswer !== null
                          ? `${LETTERS[userAnswer]}. ${q.options[userAnswer]}`
                          : 'Not answered'}
                      </p>
                    )}
                    <p className={styles.reviewCorrectAns}>
                      Correct: {LETTERS[q.correct]}. {q.options[q.correct]}
                    </p>
                    <p className={styles.reviewExplanation}>{q.explanation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Try again / other tests */}
        <div className={styles.tryAgainRow}>
          <button className={styles.tryAgainBtn} onClick={handleStart}>
            Try Again
          </button>
          <Link href="/mock-tests" className={styles.otherTestsLink}>
            View All Tests →
          </Link>
        </div>
      </div>
    </div>
  );
}
