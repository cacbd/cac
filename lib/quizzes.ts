export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number; // 0-indexed
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface ResultBand {
  min: number; // score % inclusive
  max: number; // score % inclusive
  label: string;
  title: string;
  description: string;
  recommendation: string;
  color: 'blue' | 'teal' | 'amber' | 'green';
}

export interface Quiz {
  slug: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  metaDescription: string;
  keywords: string[];
  category: string;
  categorySlug: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: number; // minutes estimate
  passage?: string; // reading test passage shown alongside questions
  questions: QuizQuestion[];
  resultBands: ResultBand[];
}

/* ============================================================
   QUIZ 1 — IELTS Vocabulary Challenge
============================================================ */
const ieltsVocabularyQuiz: Quiz = {
  slug: 'ielts-vocabulary-challenge',
  title: 'IELTS Vocabulary Challenge: Are You Ready for Band 7?',
  shortTitle: 'IELTS Vocabulary Challenge',
  excerpt:
    'Test your academic vocabulary range with 15 questions at IELTS Band 6.5–8 level. Find out if your word knowledge is ready for your target score.',
  metaDescription:
    'Free IELTS vocabulary quiz online. Test your academic vocabulary with 15 Band 7-level questions. Instant score with explanations. Cambridge Academic Centre Chittagong.',
  keywords: [
    'IELTS vocabulary test online',
    'IELTS vocabulary quiz',
    'IELTS word test Bangladesh',
    'academic vocabulary quiz',
    'IELTS band 7 vocabulary',
  ],
  category: 'IELTS',
  categorySlug: 'ielts',
  difficulty: 'Advanced',
  duration: 10,
  questions: [
    {
      id: 1,
      question: 'The scientist\'s findings were __________ — impossible to refute with existing evidence.',
      options: ['ambiguous', 'inconclusive', 'irrefutable', 'negligible'],
      correct: 2,
      explanation: '"Irrefutable" means impossible to deny or disprove. It is a high-frequency IELTS word used in academic reading passages. "Ambiguous" means unclear, "inconclusive" means not decisive, and "negligible" means too small to matter.',
      difficulty: 'medium',
    },
    {
      id: 2,
      question: 'The government implemented __________ environmental regulations, imposing heavy fines for violations.',
      options: ['lenient', 'stringent', 'arbitrary', 'futile'],
      correct: 1,
      explanation: '"Stringent" means very strict and precise. It is commonly used in IELTS reading passages about policy and regulation. "Lenient" means not strict, "arbitrary" means random, and "futile" means pointless.',
      difficulty: 'medium',
    },
    {
      id: 3,
      question: 'His initial hypothesis was __________ by three separate independent studies.',
      options: ['undermined', 'contradicted', 'corroborated', 'obscured'],
      correct: 2,
      explanation: '"Corroborated" means confirmed or supported by evidence. This is a key academic word. "Undermined" means weakened, "contradicted" means opposed, and "obscured" means hidden.',
      difficulty: 'hard',
    },
    {
      id: 4,
      question: 'The speaker\'s tone was deliberately __________, making it impossible to determine their true position.',
      options: ['explicit', 'decisive', 'equivocal', 'transparent'],
      correct: 2,
      explanation: '"Equivocal" means ambiguous and open to more than one interpretation, often deliberately so. The opposite is "unequivocal." This word frequently appears in IELTS academic texts and opinion pieces.',
      difficulty: 'hard',
    },
    {
      id: 5,
      question: 'The new legislation was specifically designed to __________ corruption in public procurement.',
      options: ['perpetuate', 'overlook', 'eradicate', 'encourage'],
      correct: 2,
      explanation: '"Eradicate" means to destroy something completely. It is frequently used in IELTS texts about social issues, health, and policy. Related word: "eradication" (noun).',
      difficulty: 'medium',
    },
    {
      id: 6,
      question: 'The research revealed a strong __________ between physical activity levels and mental wellbeing.',
      options: ['divergence', 'opposition', 'correlation', 'disparity'],
      correct: 2,
      explanation: '"Correlation" refers to a statistical relationship between two variables. Note: correlation does not imply causation. This distinction is very common in IELTS academic reading and Writing Task 1.',
      difficulty: 'medium',
    },
    {
      id: 7,
      question: 'The artist\'s later work showed a marked __________ from her earlier minimalist style.',
      options: ['continuity', 'similarity', 'echo', 'departure'],
      correct: 3,
      explanation: '"Departure" in this context means a change from what was done before. The phrase "a marked departure from" is a very common IELTS collocation used in arts, science, and humanities texts.',
      difficulty: 'medium',
    },
    {
      id: 8,
      question: 'The committee\'s decision to proceed was deemed __________ given the available data.',
      options: ['imprudent', 'reckless', 'judicious', 'arbitrary'],
      correct: 2,
      explanation: '"Judicious" means having or showing good judgement. It is a formal adjective used in academic writing. Its opposite, "injudicious," means unwise. Both appear in IELTS reading passages.',
      difficulty: 'hard',
    },
    {
      id: 9,
      question: 'Despite __________ claims in the media, the study found no significant link between the two variables.',
      options: ['modest', 'tentative', 'prevalent', 'widespread'],
      correct: 3,
      explanation: '"Widespread" means existing or happening over a large area. Both "prevalent" and "widespread" are correct, but "widespread claims" is the more natural IELTS collocation in this context.',
      difficulty: 'medium',
    },
    {
      id: 10,
      question: 'The economic downturn had a __________ effect on small businesses across the region.',
      options: ['beneficial', 'detrimental', 'neutral', 'negligible'],
      correct: 1,
      explanation: '"Detrimental" means causing harm or damage. It is a very common IELTS adjective. The related noun is "detriment." Often used in the phrase "to the detriment of."',
      difficulty: 'easy',
    },
    {
      id: 11,
      question: 'The report contained several __________ — inconsistencies between figures in different sections.',
      options: ['ambiguities', 'anomalies', 'discrepancies', 'contradictions'],
      correct: 2,
      explanation: '"Discrepancies" refers to differences between things that should be the same. It is specifically used for numerical or factual inconsistencies. "Contradictions" implies logical opposition, which is slightly different.',
      difficulty: 'medium',
    },
    {
      id: 12,
      question: 'The professor\'s __________ lecture style encouraged students to think critically rather than memorise facts.',
      options: ['didactic', 'Socratic', 'monotonous', 'pedantic'],
      correct: 1,
      explanation: '"Socratic" refers to the method of learning through questioning and dialogue, named after the philosopher Socrates. "Didactic" means instructional (not necessarily through dialogue). "Pedantic" means overly focused on minor rules.',
      difficulty: 'hard',
    },
    {
      id: 13,
      question: 'The findings were __________ — they aligned perfectly with the theoretical predictions.',
      options: ['anomalous', 'contradictory', 'consistent', 'preliminary'],
      correct: 2,
      explanation: '"Consistent" means in agreement with something. The phrase "consistent with" is extremely common in IELTS academic texts, particularly in science and research contexts. Learn: "consistent with previous research."',
      difficulty: 'easy',
    },
    {
      id: 14,
      question: 'His argument, while __________ on the surface, contained several logical fallacies upon closer examination.',
      options: ['coherent', 'superficially plausible', 'speculative', 'definitive'],
      correct: 1,
      explanation: '"Superficially plausible" means seeming reasonable at first glance but not when examined carefully. "Plausible" alone (seeming reasonable or probable) is a key IELTS vocabulary item.',
      difficulty: 'hard',
    },
    {
      id: 15,
      question: 'The policy had __________ consequences — it solved the immediate problem but created new long-term challenges.',
      options: ['negligible', 'unintended', 'beneficial', 'predictable'],
      correct: 1,
      explanation: '"Unintended consequences" is a very important phrase in IELTS Writing Task 2 essays about policy, technology, and social issues. It means results that were not planned or expected.',
      difficulty: 'medium',
    },
  ],
  resultBands: [
    {
      min: 0,
      max: 40,
      label: 'Band 5–6',
      title: 'Foundation Level',
      description: 'Your vocabulary needs significant development for IELTS success. Many of these academic words are essential for Band 6.5+. The good news: vocabulary can be built systematically with the right guidance.',
      recommendation: 'We recommend our IELTS Foundation Course to build your academic vocabulary from the ground up.',
      color: 'amber',
    },
    {
      min: 41,
      max: 65,
      label: 'Band 6–6.5',
      title: 'Developing Level',
      description: 'You have a reasonable vocabulary base but gaps remain at the higher band levels. With focused study, you are close to achieving Band 6.5. Consistent reading of academic texts will accelerate your progress.',
      recommendation: 'Our IELTS Intermediate Course will target exactly these vocabulary gaps and get you to Band 7.',
      color: 'blue',
    },
    {
      min: 66,
      max: 85,
      label: 'Band 6.5–7',
      title: 'Good Level',
      description: 'You have a strong academic vocabulary with good range. You are working at Band 6.5–7 level. Fine-tuning your use of collocations and word forms will push you to Band 7.5.',
      recommendation: 'Our IELTS Advanced Course focuses on exactly the precision and range needed to reach Band 7.5+.',
      color: 'teal',
    },
    {
      min: 86,
      max: 100,
      label: 'Band 7.5–8',
      title: 'Excellent Level',
      description: 'Outstanding! Your vocabulary range is at Band 7.5–8 level. You have excellent command of academic language. Focus your preparation on test strategy and timing to achieve your target band.',
      recommendation: 'Book a free assessment at Cambridge Academic Centre — you may be ready for our intensive Band 8 programme.',
      color: 'green',
    },
  ],
};

/* ============================================================
   QUIZ 2 — English Level Test
============================================================ */
const englishLevelQuiz: Quiz = {
  slug: 'english-level-test',
  title: 'English Level Test: What is Your Current Level? (A2–C1)',
  shortTitle: 'English Level Test',
  excerpt:
    'Not sure if you are Beginner, Intermediate, or Advanced? This 20-question grammar and usage test will identify your exact English level in under 15 minutes.',
  metaDescription:
    'Free English level test online. 20 questions covering A2–C1 grammar and usage. Find your English level instantly. Cambridge Academic Centre Chittagong.',
  keywords: [
    'English level test online',
    'check English level Bangladesh',
    'English proficiency test free',
    'English grammar test online',
    'what is my English level',
    'English test Chittagong',
  ],
  category: 'General English',
  categorySlug: 'general',
  difficulty: 'All Levels',
  duration: 15,
  questions: [
    {
      id: 1,
      question: 'The book is __________ the table.',
      options: ['in', 'on', 'at', 'by'],
      correct: 1,
      explanation: 'We use "on" for surfaces. The book is resting on the surface of the table. "In" is for enclosed spaces, "at" is for locations, "by" means near.',
      difficulty: 'easy',
    },
    {
      id: 2,
      question: 'I __________ coffee this morning before coming to work.',
      options: ['drink', 'am drinking', 'drank', 'have drink'],
      correct: 2,
      explanation: 'We use the simple past tense for completed actions at a specific time in the past. "This morning" refers to a finished time period.',
      difficulty: 'easy',
    },
    {
      id: 3,
      question: 'She __________ in Chittagong for three years and she is still here.',
      options: ['lives', 'is living', 'has been living', 'lived'],
      correct: 2,
      explanation: '"Has been living" (present perfect continuous) is used for an action that started in the past and is still continuing. The clue is "she is still here" — the action is not finished.',
      difficulty: 'medium',
    },
    {
      id: 4,
      question: 'If I __________ more time, I would study for IELTS every day.',
      options: ['have', 'had', 'would have', 'will have'],
      correct: 1,
      explanation: 'This is a second conditional (hypothetical present/future). The structure is: If + past simple, would + base verb. "Had" is the past simple of "have."',
      difficulty: 'medium',
    },
    {
      id: 5,
      question: 'The results of the survey __________ published last week.',
      options: ['signed', 'was published', 'were published', 'are publishing'],
      correct: 2,
      explanation: 'Passive voice: subject (The results) + was/were + past participle. "Results" is plural, so we use "were." Last week shows simple past.',
      difficulty: 'medium',
    },
    {
      id: 6,
      question: 'The committee suggested __________ the meeting until the following week.',
      options: ['to postpone', 'postpone', 'postponing', 'postponed'],
      correct: 2,
      explanation: 'The verb "suggest" must be followed by a gerund (-ing form): "suggest doing something." This is different from "recommend" which can take either form.',
      difficulty: 'medium',
    },
    {
      id: 7,
      question: 'Despite __________ very hard for three months, he did not pass the examination.',
      options: ['study', 'studied', 'to study', 'having studied'],
      correct: 3,
      explanation: '"Having studied" is the perfect gerund, used to show that the studying happened before the exam. After "despite," we need a gerund form. "Having + past participle" emphasises the completion of the action.',
      difficulty: 'hard',
    },
    {
      id: 8,
      question: 'Not only __________ the project on time, but she also exceeded all quality targets.',
      options: ['she delivered', 'delivered she', 'did she deliver', 'she did deliver'],
      correct: 2,
      explanation: 'When "not only" comes at the start of a sentence, we use subject-auxiliary inversion: "Not only did she deliver." This is a formal grammar structure common in academic writing and IELTS.',
      difficulty: 'hard',
    },
    {
      id: 9,
      question: 'She told me that she __________ call me back the following day.',
      options: ['will', 'would', 'should', 'can'],
      correct: 1,
      explanation: 'In reported speech, "will" becomes "would." She said: "I will call you." → She told me she would call me. This is backshifting in reported speech.',
      difficulty: 'medium',
    },
    {
      id: 10,
      question: 'The manager insisted that the report __________ by Monday morning.',
      options: ['submits', 'will be submitted', 'be submitted', 'is submitted'],
      correct: 2,
      explanation: 'After verbs of recommendation, requirement, and insistence (insist, recommend, suggest, require), we use the subjunctive mood: "that + subject + base verb." This is a formal grammar point.',
      difficulty: 'hard',
    },
    {
      id: 11,
      question: 'How many people __________ at the conference last year?',
      options: ['was there', 'are there', 'there were', 'were there'],
      correct: 3,
      explanation: 'In questions with "how many + plural noun," we invert the subject and verb: "were there." The word order is: question word + verb + subject.',
      difficulty: 'easy',
    },
    {
      id: 12,
      question: 'The project was so complex that it __________ the team nearly six months to complete.',
      options: ['takes', 'was taking', 'has taken', 'took'],
      correct: 3,
      explanation: 'We use simple past (took) for completed actions in the past. The context tells us the project is finished (it was completed).',
      difficulty: 'easy',
    },
    {
      id: 13,
      question: 'She does not enjoy __________ in front of large groups.',
      options: ['speak', 'spoken', 'to speaking', 'speaking'],
      correct: 3,
      explanation: 'The verb "enjoy" must be followed by a gerund (-ing form). Enjoy + gerund: "enjoy speaking," "enjoy working," "enjoy travelling."',
      difficulty: 'medium',
    },
    {
      id: 14,
      question: 'The government spends more money on healthcare __________ any other sector.',
      options: ['as', 'then', 'than', 'like'],
      correct: 2,
      explanation: '"Than" is used in comparisons: "more than," "less than," "better than." "Then" refers to time. This is one of the most common grammar mistakes in written English.',
      difficulty: 'easy',
    },
    {
      id: 15,
      question: 'The politician\'s comments were considered __________  — appearing to mean one thing while implying another.',
      options: ['sincere', 'candid', 'forthright', 'disingenuous'],
      correct: 3,
      explanation: '"Disingenuous" means not candid or sincere, typically pursuing an ulterior motive. It is a C1-level word used in formal academic and journalistic writing.',
      difficulty: 'hard',
    },
    {
      id: 16,
      question: 'The new shopping centre is expected to __________ significantly to the local economy.',
      options: ['contribute', 'contributing', 'contributed', 'has contributed'],
      correct: 0,
      explanation: '"Expected to" is followed by the base infinitive (without "to" again): "expected to contribute." This is an infinitive complement structure.',
      difficulty: 'medium',
    },
    {
      id: 17,
      question: '__________ known about the long-term effects of this medication.',
      options: ['Few is', 'Little is', 'A few is', 'Fewer are'],
      correct: 1,
      explanation: '"Little" is used with uncountable nouns ("knowledge," "information," "progress"). "Few" is used with countable nouns. "Effects" is countable, but "what is known" refers to knowledge (uncountable). "Little is known" is the standard academic phrase.',
      difficulty: 'hard',
    },
    {
      id: 18,
      question: 'This is the research paper __________ the committee has been waiting for.',
      options: ['whom', 'whose', 'what', 'which'],
      correct: 3,
      explanation: '"Which" is the relative pronoun used for things. "Whom" is for people (object). "Whose" shows possession. "What" cannot be used as a relative pronoun after a noun.',
      difficulty: 'medium',
    },
    {
      id: 19,
      question: 'The merger between the two companies was seen as __________ — both parties would benefit equally.',
      options: ['unilateral', 'asymmetric', 'arbitrary', 'reciprocal'],
      correct: 3,
      explanation: '"Reciprocal" means given or felt by each toward the other. A reciprocal arrangement benefits both parties equally. "Unilateral" means one-sided. "Asymmetric" means unequal.',
      difficulty: 'hard',
    },
    {
      id: 20,
      question: 'The government\'s new policy has come __________ criticism from environmental groups.',
      options: ['in', 'under', 'within', 'against'],
      correct: 1,
      explanation: '"Come under" is a fixed phrase: "come under fire," "come under criticism," "come under pressure," "come under scrutiny." This is a very common collocation in IELTS reading passages about policy.',
      difficulty: 'medium',
    },
  ],
  resultBands: [
    {
      min: 0,
      max: 30,
      label: 'A2 – Elementary',
      title: 'Elementary Level',
      description: 'You are at Elementary (A2) level. You can communicate in simple situations but need to develop your grammar foundations, vocabulary, and sentence structure before attempting IELTS.',
      recommendation: 'Our Spoken English Foundation course will build your confidence and grammar from A2 up to B1.',
      color: 'amber',
    },
    {
      min: 31,
      max: 55,
      label: 'B1 – Intermediate',
      title: 'Intermediate Level',
      description: 'You are at Intermediate (B1) level. You understand main points on familiar topics and can handle everyday situations. With focused study, you can reach IELTS Band 5.5–6 within a few months.',
      recommendation: 'Our General English Intermediate course or IELTS Foundation programme would be the perfect next step.',
      color: 'blue',
    },
    {
      min: 56,
      max: 75,
      label: 'B2 – Upper Intermediate',
      title: 'Upper Intermediate Level',
      description: 'You are at Upper Intermediate (B2) level — the level required for IELTS Band 6–6.5. You can communicate complex ideas with reasonable accuracy. Focused IELTS preparation will help you achieve Band 6.5–7.',
      recommendation: 'Our IELTS Intermediate course is designed for exactly your level. You can realistically reach Band 7 with 2–3 months of coaching.',
      color: 'teal',
    },
    {
      min: 76,
      max: 100,
      label: 'C1 – Advanced',
      title: 'Advanced Level',
      description: 'Excellent! You are at Advanced (C1) level, equivalent to IELTS Band 7–8. You can understand a wide range of demanding texts and express ideas fluently and spontaneously.',
      recommendation: 'Our IELTS Band 7.5+ programme will refine your test strategies and push you to your highest possible score.',
      color: 'green',
    },
  ],
};

/* ============================================================
   QUIZ 3 — IELTS Grammar Test
============================================================ */
const ieltsGrammarQuiz: Quiz = {
  slug: 'ielts-grammar-accuracy-test',
  title: 'IELTS Grammar Accuracy Test: 15 Questions to Check Your Writing Score',
  shortTitle: 'IELTS Grammar Test',
  excerpt:
    'Grammar errors are one of the biggest reasons students lose marks in IELTS Writing. Test the 15 grammar points that matter most for your band score — with full explanations.',
  metaDescription:
    'Free IELTS grammar test online. 15 questions on the grammar patterns that affect your IELTS Writing band score. Instant results with explanations. Cambridge Academic Centre Chittagong.',
  keywords: [
    'IELTS grammar test online',
    'IELTS grammar practice',
    'English grammar test Bangladesh',
    'IELTS writing grammar',
    'grammar test for IELTS',
    'IELTS preparation test',
  ],
  category: 'IELTS',
  categorySlug: 'ielts',
  difficulty: 'Intermediate',
  duration: 10,
  questions: [
    {
      id: 1,
      question: 'The number of students studying abroad __________ increased significantly over the past decade.',
      options: ['have', 'has', 'are', 'were'],
      correct: 1,
      explanation: '"The number of" always takes a singular verb. Compare: "A number of students HAVE increased their scores" (a number of = several = plural). This distinction is a common IELTS grammar trap.',
      difficulty: 'medium',
    },
    {
      id: 2,
      question: '__________ the bad weather, the outdoor event was a great success.',
      options: ['Despite of', 'Although', 'Despite', 'Even though'],
      correct: 2,
      explanation: '"Despite" and "in spite of" are followed directly by a noun/gerund: "despite the rain." "Although" and "even though" are followed by a subject + verb clause: "although it rained." "Despite of" does not exist in English.',
      difficulty: 'easy',
    },
    {
      id: 3,
      question: 'Not only __________ the report on time, but he also corrected all the errors.',
      options: ['he submitted', 'submitted he', 'did he submit', 'he did submit'],
      correct: 2,
      explanation: 'After "not only" at the start of a clause, subject-auxiliary inversion is required: "Not only did he submit." This structure adds emphasis and is valued in IELTS Writing for grammatical range.',
      difficulty: 'hard',
    },
    {
      id: 4,
      question: 'The report, along with its appendices, __________ to be reviewed before submission.',
      options: ['need', 'needs', 'have', 'were'],
      correct: 1,
      explanation: 'When "along with," "as well as," or "together with" connect two subjects, the verb agrees with the FIRST subject. "The report" is singular, so "needs" is correct.',
      difficulty: 'hard',
    },
    {
      id: 5,
      question: 'The policy has had a significant effect __________ the environment.',
      options: ['in', 'to', 'at', 'on'],
      correct: 3,
      explanation: '"Effect on" and "impact on" are fixed preposition collocations in academic English. Note the difference: "effect on" (noun), "affect" (verb, no preposition). This colocation appears constantly in IELTS.',
      difficulty: 'easy',
    },
    {
      id: 6,
      question: 'The findings are consistent __________ earlier research on the same topic.',
      options: ['to', 'in', 'with', 'of'],
      correct: 2,
      explanation: '"Consistent with" is a fixed prepositional phrase in academic English: "consistent with previous findings," "consistent with expectations." Other collocations: "associated with," "related to," "linked to."',
      difficulty: 'easy',
    },
    {
      id: 7,
      question: 'It was not until 1953 __________ the structure of DNA was first described.',
      options: ['when', 'which', 'where', 'that'],
      correct: 3,
      explanation: 'This is an "It was not until... that" cleft sentence — used for emphasis. Structure: "It was not until [time] THAT [result]." This advanced grammar structure is highly valued in IELTS Writing band 7+.',
      difficulty: 'hard',
    },
    {
      id: 8,
      question: 'Neither the students nor the teacher __________ aware of the change in timetable.',
      options: ['were', 'are', 'was', 'have been'],
      correct: 2,
      explanation: 'In "neither...nor" and "either...or" constructions, the verb agrees with the CLOSEST subject. "The teacher" is singular and closest, so "was" is correct.',
      difficulty: 'hard',
    },
    {
      id: 9,
      question: '__________ progress has been made in understanding climate change over recent decades.',
      options: ['A remarkable', 'Remarkably', 'The remarkable', 'Remarkable'],
      correct: 3,
      explanation: '"Progress" is an uncountable noun and does not take an article ("a/the" is generally not used). The correct phrase is "remarkable progress has been made." Compare: "a great deal of progress."',
      difficulty: 'medium',
    },
    {
      id: 10,
      question: 'By 2030, scientists predict that global temperatures __________ by at least 1.5 degrees.',
      options: ['will rise', 'will have risen', 'have risen', 'are rising'],
      correct: 1,
      explanation: '"Will have risen" is the future perfect tense, used for an action that will be completed before a specific future time. "By 2030" is the future deadline. This tense is used in predictions in IELTS Writing Task 1 trend graphs.',
      difficulty: 'medium',
    },
    {
      id: 11,
      question: 'The researchers concluded that further investigation __________ urgently required.',
      options: ['are', 'were', 'was', 'have been'],
      correct: 2,
      explanation: '"Investigation" is a singular uncountable noun (or singular countable noun here), so the verb must be singular: "was." The past tense is used because "concluded" indicates reported speech.',
      difficulty: 'easy',
    },
    {
      id: 12,
      question: 'The urban population has grown rapidly, __________ increased pressure on public services.',
      options: ['result in', 'resulting in', 'results in', 'resulted in'],
      correct: 1,
      explanation: '"Resulting in" is a participial clause showing consequence. It modifies the main clause and means "which has resulted in." Participial clauses are an important grammar feature for IELTS Band 7+ writing.',
      difficulty: 'medium',
    },
    {
      id: 13,
      question: 'The data __________ that the intervention programme was highly effective.',
      options: ['suggest', 'suggests', 'is suggesting', 'are suggesting'],
      correct: 1,
      explanation: 'In academic English, "data" can be treated as singular or plural. In modern academic usage, the singular form is increasingly accepted: "The data suggests." "Data" as plural ("the data suggest") is also acceptable in formal writing.',
      difficulty: 'medium',
    },
    {
      id: 14,
      question: 'The proposal was rejected __________ a lack of supporting evidence.',
      options: ['because', 'due to', 'since', 'as'],
      correct: 1,
      explanation: '"Due to" is a preposition and must be followed by a noun phrase: "due to a lack of evidence." "Because," "since," and "as" are conjunctions and must be followed by a clause with a subject and verb.',
      difficulty: 'medium',
    },
    {
      id: 15,
      question: 'The more funding that is invested in education, __________ the economy tends to become.',
      options: ['stronger', 'more strong', 'the most strong', 'the stronger'],
      correct: 3,
      explanation: 'This is the "the more... the more/adjective" comparative structure. Both parts require "the + comparative adjective": "The more... the stronger." This structure is used to show proportional relationships in IELTS Writing.',
      difficulty: 'hard',
    },
  ],
  resultBands: [
    {
      min: 0,
      max: 40,
      label: 'Band 5–5.5',
      title: 'Needs Development',
      description: 'Your grammar accuracy is affecting your IELTS Writing score significantly. The structures tested here are exactly what IELTS examiners look for. Systematic grammar coaching will make an immediate difference to your band score.',
      recommendation: 'Our IELTS Writing Workshop specifically targets the grammar points that cost students marks. Book a class today.',
      color: 'amber',
    },
    {
      min: 41,
      max: 65,
      label: 'Band 5.5–6.5',
      title: 'Developing Accuracy',
      description: 'You have a reasonable grammar foundation but still make errors on more complex structures. Improving your accuracy on conditional sentences, passive voice, and academic collocations will push your writing band up significantly.',
      recommendation: 'Our IELTS Intermediate programme includes a dedicated grammar component that directly improves writing accuracy.',
      color: 'blue',
    },
    {
      min: 66,
      max: 85,
      label: 'Band 6.5–7',
      title: 'Good Accuracy',
      description: 'You have good grammatical control with only occasional errors on advanced structures. Your grammar is sufficient for Band 6.5–7. Mastering inversion, cleft sentences, and advanced clause structures will push you to Band 7.5.',
      recommendation: 'Our IELTS Advanced Writing Course will help you use complex grammar confidently and accurately for Band 7.5+.',
      color: 'teal',
    },
    {
      min: 86,
      max: 100,
      label: 'Band 7.5+',
      title: 'Excellent Accuracy',
      description: 'Excellent grammatical accuracy! You handle complex structures including inversion, cleft sentences, and participial clauses. Your grammar is at Band 7.5+ level. Focus on vocabulary range and task response to maximise your score.',
      recommendation: 'Consider our mock test and assessment sessions at Cambridge Academic Centre to fine-tune your remaining areas.',
      color: 'green',
    },
  ],
};

/* ============================================================
   QUIZ 4 — IELTS Reading Skills Test (passage-based)
============================================================ */
const ieltsReadingQuiz: Quiz = {
  slug: 'ielts-reading-mini-test',
  title: 'IELTS Reading Mini-Test: True / False / Not Given + Comprehension (10 Questions)',
  shortTitle: 'IELTS Reading Mini-Test',
  excerpt:
    'Practise the most challenging IELTS Reading question types — True/False/Not Given and multiple-choice comprehension — with a real academic passage and full answer explanations.',
  metaDescription:
    'Free IELTS Reading practice test online. True/False/Not Given and comprehension questions with an academic passage. Instant answers and explanations. Cambridge Academic Centre.',
  keywords: [
    'IELTS reading practice test online',
    'IELTS true false not given practice',
    'IELTS reading test Bangladesh',
    'IELTS reading comprehension quiz',
    'IELTS reading questions free',
    'IELTS reading Chittagong',
  ],
  category: 'IELTS',
  categorySlug: 'ielts',
  difficulty: 'Intermediate',
  duration: 12,
  passage: `The Global Shift Towards Renewable Energy

The transition to renewable energy sources has accelerated dramatically over the past decade. Solar power capacity worldwide has grown by more than 600% since 2012, driven primarily by falling installation costs and increasing governmental support. Wind energy has followed a comparable trajectory, with many countries now generating a significant proportion of their electricity from onshore and offshore wind farms.

Critics, however, argue that renewable energy is not yet reliable enough to replace fossil fuels entirely. The intermittent nature of solar and wind power — both dependent on weather conditions — presents considerable challenges for energy grid management. Some analysts suggest that without substantial improvements in battery storage technology, renewable energy alone cannot meet global energy demand consistently.

Despite these concerns, proponents point to the rapidly falling costs and continuously improving technology in the sector. The cost of solar panels, for instance, has decreased by approximately 90% over the last ten years, making solar power competitive with — and in many regions cheaper than — conventional energy sources such as coal and natural gas. Several countries, including Denmark and Costa Rica, have already achieved extended periods of 100% renewable electricity generation.

The International Energy Agency (IEA) projects that renewable energy could account for up to 80% of global electricity generation by 2050, provided that governments maintain their current levels of investment and policy support. Whether this target is realistically achievable remains a matter of debate among energy economists, with some arguing that the political will to transition away from fossil fuels is ultimately as important as the technology itself.`,
  questions: [
    {
      id: 1,
      question: 'STATEMENT: Solar power capacity has increased by more than six times since 2012.',
      options: ['True', 'False', 'Not Given'],
      correct: 0,
      explanation: 'TRUE. The passage states: "Solar power capacity worldwide has grown by more than 600% since 2012." A 600% increase means it has grown to more than 7 times its original size — so it has "increased by more than six times." This matches the statement.',
      difficulty: 'easy',
    },
    {
      id: 2,
      question: 'STATEMENT: Wind energy is currently growing more rapidly than solar energy globally.',
      options: ['True', 'False', 'Not Given'],
      correct: 2,
      explanation: 'NOT GIVEN. The passage says wind energy "has followed a comparable trajectory" to solar, but does not compare their relative growth rates. We cannot confirm or deny whether wind is growing faster. Never assume information that is not stated.',
      difficulty: 'medium',
    },
    {
      id: 3,
      question: 'STATEMENT: All energy analysts agree that renewable energy alone cannot meet global demand.',
      options: ['True', 'False', 'Not Given'],
      correct: 1,
      explanation: 'FALSE. The passage says "SOME analysts suggest" that renewable energy alone cannot meet demand. It does not say all analysts agree. The use of "some" tells us this is not a universal view.',
      difficulty: 'easy',
    },
    {
      id: 4,
      question: 'STATEMENT: The cost of solar panels fell by roughly 90% over the past decade.',
      options: ['True', 'False', 'Not Given'],
      correct: 0,
      explanation: 'TRUE. The passage states: "The cost of solar panels has decreased by approximately 90% over the last ten years." This directly confirms the statement. "Roughly" and "approximately" have the same meaning.',
      difficulty: 'easy',
    },
    {
      id: 5,
      question: 'STATEMENT: Denmark and Costa Rica have permanently eliminated the use of fossil fuels.',
      options: ['True', 'False', 'Not Given'],
      correct: 1,
      explanation: 'FALSE. The passage says they have achieved "extended periods" of 100% renewable electricity — not that they have permanently eliminated fossil fuels. A period of 100% renewable does not mean fossil fuels have been eliminated entirely.',
      difficulty: 'medium',
    },
    {
      id: 6,
      question: 'According to the passage, what is the main challenge facing renewable energy sources?',
      options: [
        'The high cost of installation',
        'Insufficient government support',
        'The irregular, weather-dependent supply',
        'Public opposition to wind farms',
      ],
      correct: 2,
      explanation: 'The passage states: "The intermittent nature of solar and wind power — both dependent on weather conditions — presents considerable challenges for energy grid management." The key word is "intermittent" (not continuous). Options A and B are contradicted by the passage.',
      difficulty: 'easy',
    },
    {
      id: 7,
      question: 'What condition does the IEA attach to its prediction of 80% renewable electricity by 2050?',
      options: [
        'Major breakthroughs in battery storage technology',
        'Elimination of coal and natural gas',
        'Continued government investment and policy support',
        'International cooperation between major economies',
      ],
      correct: 2,
      explanation: 'The passage states the 80% target is achievable "provided that governments maintain their current levels of investment and policy support." Option A is mentioned as a concern by critics, not as the IEA\'s condition.',
      difficulty: 'medium',
    },
    {
      id: 8,
      question: 'The word "intermittent" (paragraph 2) is closest in meaning to:',
      options: ['continuous', 'powerful', 'not consistent or regular', 'decreasing'],
      correct: 2,
      explanation: '"Intermittent" means occurring at irregular intervals — not continuous or steady. Solar power is intermittent because it only works when the sun shines. Understanding vocabulary in context is a key IELTS reading skill.',
      difficulty: 'medium',
    },
    {
      id: 9,
      question: 'The word "trajectory" (paragraph 1) is closest in meaning to:',
      options: [
        'speed of movement',
        'path or course of development',
        'sharp decline',
        'sudden change in direction',
      ],
      correct: 1,
      explanation: '"Trajectory" originally refers to the curved path of a moving object, but in academic writing it means the general course of development or progress over time. "Wind energy has followed a comparable trajectory" means it has developed in a similar way.',
      difficulty: 'medium',
    },
    {
      id: 10,
      question: 'According to the final paragraph, what do some economists consider equally important as technology for the energy transition?',
      options: [
        'International cooperation',
        'Public awareness campaigns',
        'Battery storage improvements',
        'Political will to change',
      ],
      correct: 3,
      explanation: 'The passage states: "the political will to transition away from fossil fuels is ultimately as important as the technology itself." Option C (battery storage) is mentioned as a concern but not as being equally important as technology.',
      difficulty: 'hard',
    },
  ],
  resultBands: [
    {
      min: 0,
      max: 40,
      label: 'Band 4.5–5.5',
      title: 'Needs Practice',
      description: 'IELTS Reading requires specific techniques that most students have never been taught. True/False/Not Given questions in particular follow strict rules. With the right coaching, significant improvement is possible quickly.',
      recommendation: 'Our IELTS Reading Workshop teaches the exact strategies for every question type. Many students improve a full band after just 4 weeks.',
      color: 'amber',
    },
    {
      min: 41,
      max: 65,
      label: 'Band 5.5–6.5',
      title: 'Developing Skills',
      description: 'You are on the right track but still making avoidable errors — particularly with Not Given questions and vocabulary-in-context. Practising these question types systematically will push your Reading band up.',
      recommendation: 'Our IELTS Intermediate course includes dedicated Reading strategy sessions for every question type.',
      color: 'blue',
    },
    {
      min: 66,
      max: 85,
      label: 'Band 6.5–7.5',
      title: 'Good Performance',
      description: 'Well done! You have strong reading comprehension skills. Your main challenge will be timing — completing 40 questions in 60 minutes while maintaining accuracy. Focused practice will push you to Band 7.5.',
      recommendation: 'Our IELTS Advanced programme focuses on timing, skimming and scanning techniques, and eliminating careless errors.',
      color: 'teal',
    },
    {
      min: 86,
      max: 100,
      label: 'Band 7.5–8.5',
      title: 'Excellent Reading',
      description: 'Outstanding reading comprehension! You are at Band 7.5–8.5 level. You clearly understand how to handle academic texts and tricky question types. Focus your preparation on Writing and Speaking to achieve an overall Band 7.5+.',
      recommendation: 'Book a free assessment at Cambridge Academic Centre to identify your remaining preparation needs.',
      color: 'green',
    },
  ],
};

/* ============================================================
   QUIZ 5 — Business English Test
============================================================ */
const businessEnglishQuiz: Quiz = {
  slug: 'business-english-quiz',
  title: 'Business English Quiz: How Professional Is Your Workplace English?',
  shortTitle: 'Business English Quiz',
  excerpt:
    'From professional emails to meeting language and formal reports — test your Business English across 12 real workplace scenarios. See how you compare to top professionals.',
  metaDescription:
    'Free Business English test online. 12 questions on professional email writing, meetings, presentations, and formal language. Instant results. Cambridge Academic Centre Chittagong.',
  keywords: [
    'business English test online',
    'professional English quiz',
    'business English Bangladesh',
    'workplace English test',
    'professional email English quiz',
    'business communication test',
  ],
  category: 'Business English',
  categorySlug: 'business',
  difficulty: 'Intermediate',
  duration: 8,
  questions: [
    {
      id: 1,
      question: 'Which is the most appropriate opening for a formal business email to a new contact?',
      options: [
        'Hey Sarah,',
        'Hi there,',
        'Dear Ms Rahman,',
        'To Whom,',
      ],
      correct: 2,
      explanation: '"Dear Ms [Surname]," is the standard formal opening in business correspondence. "Hey" and "Hi there" are too informal. "To Whom It May Concern" is acceptable when you do not know the recipient\'s name at all, but "To Whom" alone is incomplete.',
      difficulty: 'easy',
    },
    {
      id: 2,
      question: 'Complete the sentence: "I am writing __________ your recent enquiry regarding our services."',
      options: [
        'according to',
        'with reference to',
        'regarding to',
        'concerning with',
      ],
      correct: 1,
      explanation: '"With reference to" is the standard formal phrase for acknowledging the subject of a business email or letter. Note: "regarding to" and "concerning with" do not exist — "regarding" and "concerning" are used alone without a preposition.',
      difficulty: 'medium',
    },
    {
      id: 3,
      question: 'Which phrase most professionally expresses disagreement during a meeting?',
      options: [
        'You are completely wrong about that.',
        'I totally disagree with everything you said.',
        'I see your point; however, I would argue that the data suggests otherwise.',
        'No, that does not work.',
      ],
      correct: 2,
      explanation: 'Professional disagreement requires acknowledging the other person\'s view before offering your own. The phrase "I see your point; however, I would argue..." does this effectively. Direct contradiction ("You are wrong") damages professional relationships.',
      difficulty: 'easy',
    },
    {
      id: 4,
      question: 'Which word best completes this sentence: "The project was delayed __________ unforeseen supply chain issues."',
      options: ['because', 'since', 'due to', 'as'],
      correct: 2,
      explanation: '"Due to" is a preposition used in formal writing, followed by a noun phrase: "due to unforeseen issues." "Because," "since," and "as" are conjunctions and must be followed by a subject + verb: "because unforeseen issues arose."',
      difficulty: 'medium',
    },
    {
      id: 5,
      question: '"The figures are promising; __________, we should verify them before presenting to the board."',
      options: ['therefore', 'moreover', 'however', 'consequently'],
      correct: 2,
      explanation: '"However" signals contrast or a caveat — here, the positive figures are contrasted with the need for caution. "Therefore" and "consequently" signal results. "Moreover" adds information. Using discourse markers accurately is essential in professional writing.',
      difficulty: 'medium',
    },
    {
      id: 6,
      question: 'Which is NOT an appropriate email subject line for a professional context?',
      options: [
        'Follow-up: Q3 Sales Report Review',
        'Introduction: Ahmed Hassan, New Account Manager',
        'hey — quick question lol',
        'Urgent: Contract Renewal Required by Friday',
      ],
      correct: 2,
      explanation: 'A professional subject line should be clear, specific, and formal. "hey — quick question lol" uses informal language, slang, and is vague. A good subject line tells the recipient exactly what the email is about and any required action or urgency.',
      difficulty: 'easy',
    },
    {
      id: 7,
      question: '"Please find __________ the revised contract for your consideration."',
      options: ['attached', 'enclosed', 'appended', 'All of the above are correct'],
      correct: 3,
      explanation: 'All three options are grammatically and professionally correct in this context. "Attached" is most common in email, "enclosed" is used in formal letters, and "appended" is used in reports. Knowing all three options demonstrates professional range.',
      difficulty: 'medium',
    },
    {
      id: 8,
      question: 'Which sentence uses the most appropriate formal register for a business proposal?',
      options: [
        'We are going to make loads of money from this.',
        'This deal will make us super profitable.',
        'The proposed initiative is projected to yield a significant return on investment.',
        'We will definitely earn a lot from this deal.',
      ],
      correct: 2,
      explanation: 'Business proposals use formal vocabulary: "proposed initiative," "projected," "yield," "return on investment." Informal language ("loads of," "super," "definitely") is inappropriate in formal documents and undermines your professional credibility.',
      difficulty: 'easy',
    },
    {
      id: 9,
      question: 'In a business presentation, which phrase best transitions between main points?',
      options: [
        'OK so, anyway, let me talk about the next thing...',
        'Erm, now I want to say something about...',
        'Moving on to our next point, I would like to address...',
        'Right, so now it is time for the next bit...',
      ],
      correct: 2,
      explanation: '"Moving on to our next point" is clear, formal, and signals the transition smoothly. Discourse markers like this show the audience you are in control of your presentation. Avoid fillers ("erm," "right, so") which reduce your professional impact.',
      difficulty: 'easy',
    },
    {
      id: 10,
      question: 'Which word correctly completes: "The meeting has been __________ from Tuesday to Thursday."',
      options: ['moved', 'rescheduled', 'changed', 'Both A and B are correct'],
      correct: 3,
      explanation: 'Both "moved" and "rescheduled" are correct and professionally appropriate for changing meeting times. "Rescheduled" is slightly more formal. "Changed" is less specific and less professional in this context.',
      difficulty: 'medium',
    },
    {
      id: 11,
      question: 'Which phrase is most appropriate to use when you need to politely interrupt a speaker in a meeting?',
      options: [
        'Excuse me, but you are wrong.',
        'Stop — I need to say something.',
        'Sorry to interrupt, but I would like to add a point on that.',
        'Hey, can I say something real quick?',
      ],
      correct: 2,
      explanation: '"Sorry to interrupt, but I would like to add a point on that" is polite, professional, and clear. Apologising for interrupting is standard professional etiquette. "Stop" and "Hey" are too direct and informal for a formal meeting.',
      difficulty: 'medium',
    },
    {
      id: 12,
      question: 'Which word means to officially bring a contract or employment to an end?',
      options: ['Waive', 'Suspend', 'Terminate', 'Defer'],
      correct: 2,
      explanation: '"Terminate" means to officially bring something to an end — a contract, an agreement, or employment. "Suspend" means to pause temporarily. "Waive" means to voluntarily give up a right. "Defer" means to postpone.',
      difficulty: 'medium',
    },
  ],
  resultBands: [
    {
      min: 0,
      max: 40,
      label: 'Developing',
      title: 'Building Professional English',
      description: 'Your Business English needs development for the professional workplace. The formal register, email conventions, and meeting language tested here are skills that can be learned quickly with the right instruction.',
      recommendation: 'Our Business English Foundation module is designed for exactly this — building professional communication from the ground up.',
      color: 'amber',
    },
    {
      min: 41,
      max: 65,
      label: 'Functional',
      title: 'Functional Professional English',
      description: 'You can communicate in most professional situations but still make formal register errors. Improving your precision in email language, meeting vocabulary, and formal writing will significantly increase your professional impact.',
      recommendation: 'Our Business English Intermediate course targets the exact gaps in your professional communication.',
      color: 'blue',
    },
    {
      min: 66,
      max: 85,
      label: 'Proficient',
      title: 'Proficient Professional English',
      description: 'You have strong Business English skills and can communicate confidently in most professional situations. Fine-tuning your use of formal discourse markers, hedging language, and presentation techniques will take you to expert level.',
      recommendation: 'Our Advanced Business English programme develops the precision and fluency expected at executive and international levels.',
      color: 'teal',
    },
    {
      min: 86,
      max: 100,
      label: 'Expert',
      title: 'Expert Professional English',
      description: 'Excellent! Your Business English is at a high professional level. You have strong command of formal register, professional correspondence conventions, and workplace communication norms.',
      recommendation: 'Consider our Executive Presentation and Negotiation Skills workshop to add the final polish to your professional English.',
      color: 'green',
    },
  ],
};

/* ============================================================
   EXPORT
============================================================ */
export const quizzes: Quiz[] = [
  ieltsVocabularyQuiz,
  englishLevelQuiz,
  ieltsGrammarQuiz,
  ieltsReadingQuiz,
  businessEnglishQuiz,
];

export function getAllQuizzes(): Quiz[] {
  return quizzes;
}

export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes.find((q) => q.slug === slug);
}
