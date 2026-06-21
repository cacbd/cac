import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuizPlayer from '@/components/QuizPlayer';
import { getAllQuizzes, getQuizBySlug } from '@/lib/quizzes';

export function generateStaticParams() {
  return getAllQuizzes().map((q) => ({ slug: q.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const quiz = getQuizBySlug(params.slug);
  if (!quiz) return {};
  return {
    title: `${quiz.title} | Cambridge Academic Centre Chittagong`,
    description: quiz.metaDescription,
    keywords: quiz.keywords,
    alternates: { canonical: `https://cac.bd/mock-tests/${quiz.slug}` },
    openGraph: {
      title: quiz.title,
      description: quiz.metaDescription,
      url: `https://cac.bd/mock-tests/${quiz.slug}`,
      type: 'website',
    },
  };
}

export default function QuizPage({ params }: { params: { slug: string } }) {
  const quiz = getQuizBySlug(params.slug);
  if (!quiz) notFound();

  /* Schema.org Quiz markup — helps Google/AI show this in search */
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: quiz.title,
    description: quiz.metaDescription,
    educationalLevel: quiz.difficulty,
    url: `https://cac.bd/mock-tests/${quiz.slug}`,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Cambridge Academic Centre Chittagong',
      url: 'https://cac.bd',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '146 North Nalapara',
        addressLocality: 'Chittagong',
        addressCountry: 'BD',
      },
    },
    about: {
      '@type': 'Thing',
      name: quiz.category,
    },
    hasPart: quiz.questions.map((q) => ({
      '@type': 'Question',
      text: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.options[q.correct],
        comment: q.explanation,
      },
      suggestedAnswer: q.options
        .filter((_, i) => i !== q.correct)
        .map((opt) => ({ '@type': 'Answer', text: opt })),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main style={{ background: 'var(--background)', minHeight: '100vh' }}>
        {/* Page header */}
        <div
          style={{
            background: 'var(--primary)',
            padding: '100px 0 40px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse at 70% 40%, rgba(255,255,255,0.07) 0%, transparent 65%)',
              pointerEvents: 'none',
            }}
          />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.55)',
              }}
            >
              <Link
                href="/"
                style={{
                  color: 'rgba(255,255,255,0.65)',
                  textDecoration: 'none',
                }}
              >
                Home
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
              <Link
                href="/mock-tests"
                style={{
                  color: 'rgba(255,255,255,0.65)',
                  textDecoration: 'none',
                }}
              >
                Mock Tests
              </Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
              <span>{quiz.category}</span>
            </nav>
          </div>
        </div>

        {/* Quiz player */}
        <div className="container" style={{ padding: '48px 16px 96px' }}>
          <QuizPlayer quiz={quiz} />
        </div>
      </main>
      <Footer />
    </>
  );
}
