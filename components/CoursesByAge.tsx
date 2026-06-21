import styles from './CoursesByAge.module.css';

const ageGroups = [
  {
    id: 'kids',
    age: '6-12',
    title: 'Kids',
    titleBn: 'শিশু',
    color: 'kids',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    ),
    courses: [
      { name: 'Foundation English', nameBn: 'ফাউন্ডেশন ইংরেজি' },
      { name: 'Speaking Skills', nameBn: 'কথা বলার দক্ষতা' },
      { name: 'Reading & Writing', nameBn: 'পড়া ও লেখা' },
    ],
  },
  {
    id: 'teens',
    age: '13-18',
    title: 'Teens',
    titleBn: 'কিশোর',
    color: 'teens',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    courses: [
      { name: 'Academic English', nameBn: 'একাডেমিক ইংরেজি' },
      { name: 'IELTS Foundation', nameBn: 'আইইএলটিএস ফাউন্ডেশন' },
      { name: 'Public Speaking', nameBn: 'পাবলিক স্পিকিং' },
    ],
  },
  {
    id: 'adults',
    age: '18+',
    title: 'Adults & Professionals',
    titleBn: 'প্রাপ্তবয়স্ক ও পেশাদার',
    color: 'adults',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
      </svg>
    ),
    courses: [
      { name: 'IELTS', nameBn: 'আইইএলটিএস' },
      { name: 'TOEFL', nameBn: 'টোয়েফল' },
      { name: 'Business English', nameBn: 'ব্যবসায়িক ইংরেজি' },
      { name: 'Interview Skills', nameBn: 'ইন্টারভিউ দক্ষতা' },
    ],
  },
];

export default function CoursesByAge() {
  return (
    <section id="courses-by-age" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <p className="section-label">/ Find Your Programme / আপনার প্রোগ্রাম খুঁজুন</p>
          <h2 className={styles.title}>
            Courses by <em className={styles.titleAccent}>Age Group</em>
          </h2>
          <p className={styles.titleBn}>বয়স অনুযায়ী কোর্সসমূহ</p>
        </div>

        <div className={styles.grid}>
          {ageGroups.map((group) => (
            <div key={group.id} className={`${styles.card} ${styles[group.color]}`}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>{group.icon}</div>
                <div>
                  <span className={styles.ageTag}>Ages {group.age}</span>
                  <h3 className={styles.cardTitle}>{group.title}</h3>
                  <p className={styles.cardTitleBn}>{group.titleBn}</p>
                </div>
              </div>
              <ul className={styles.courseList}>
                {group.courses.map((course) => (
                  <li key={course.name} className={styles.courseItem}>
                    <span className={styles.checkIcon}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="14" height="14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <div>
                      <span className={styles.courseName}>{course.name}</span>
                      <span className={styles.courseNameBn}>{course.nameBn}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={styles.cardCta}>
                Enrol Now / ভর্তি হন &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
