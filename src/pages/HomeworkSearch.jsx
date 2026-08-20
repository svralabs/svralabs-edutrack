import React, { useState } from 'react';
import styles from './HomeworkSearch.module.css';

const mockHomework = [
  { id: 1, subject: 'Music', title: 'Jazz Theory', dueDate: '19 May', icon: 'music_note', color: 'secondary' },
  { id: 2, subject: 'Math', title: 'Calculus II', dueDate: '29 May', icon: 'calculate', color: 'primary' },
  { id: 3, subject: 'History', title: 'World War II', dueDate: '30 May', icon: 'history_edu', color: 'tertiary-container' },
  { id: 4, subject: 'Science', title: 'Biology', dueDate: '31 May', icon: 'biotech', color: 'subject-green' },
];

export default function HomeworkSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(null);

  const filteredHomework = mockHomework.filter(item =>
    (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.subject.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (!selectedSubject || item.subject === selectedSubject)
  );

  const subjects = [...new Set(mockHomework.map(item => item.subject))];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.profileImage}>
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtGPNpEDryWoYbolyWWBz3x9oRxC5Ty0arhQ0-O_PSxbR-hKGluMJWieDser_udDaKc4Hjy6mFqz5gN8vR4vYv-VVi573epHhaXNSiqegy9WBeNB3hUHWR6zjdC--0bgzRO7ikAI400C4Ju3BSBk7hMAd4wRmKu88jXUnpH7dgz_nnZ-qm_Kij-2Q-4PcXs4fBhJYqr1z67VPrwHA1Bk328Er6JZTsSh1qH63kvOOKRplKf3F1_nEB" alt="Profile" />
          </div>
          <h1 className={styles.appTitle}>EduFlow</h1>
        </div>
        <button className={styles.notificationButton}>
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      <main className={styles.main}>
        <section className={styles.searchSection}>
          <div className={styles.searchContainer}>
            <span className="material-symbols-outlined">search</span>
            <input
              className={styles.searchInput}
              placeholder="Search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className={styles.filterButton}>
              <span className="material-symbols-outlined">tune</span>
            </button>
          </div>
        </section>

        <section className={styles.subjectsSection}>
          <div className={styles.sectionHeader}>
            <h2>Subjects</h2>
            <a href="#" className={styles.seeAllLink}>See all</a>
          </div>
          <div className={styles.subjectsContainer}>
            {subjects.map(subject => {
              const subjectData = mockHomework.find(item => item.subject === subject);
              return (
                <div
                  key={subject}
                  className={`${styles.subjectChip} ${styles[`${subjectData.color}Chip`]}`}
                  onClick={() => setSelectedSubject(selectedSubject === subject ? null : subject)}
                >
                  <span className="material-symbols-outlined">{subjectData.icon}</span>
                  <span>{subject}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles.homeworkSection}>
          <div className={styles.sectionHeader}>
            <h2>Homework</h2>
            <a href="#" className={styles.seeAllLink}>See all</a>
          </div>
          <div className={styles.homeworkGrid}>
            {filteredHomework.map(item => (
              <div key={item.id} className={styles.homeworkCard}>
                <div className={`${styles.homeworkIcon} ${styles[`${item.color}Icon`]}`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.subject} - {item.dueDate}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <nav className={styles.bottomNav}>
        <a href="#" className={styles.navItem}>
          <span className="material-symbols-outlined">home</span>
        </a>
        <a href="#" className={`${styles.navItem} ${styles.activeNavItem}`}>
          <span className="material-symbols-outlined">menu_book</span>
        </a>
        <a href="#" className={styles.navItem}>
          <span className="material-symbols-outlined">calendar_month</span>
        </a>
        <a href="#" className={styles.navItem}>
          <span className="material-symbols-outlined">settings</span>
        </a>
      </nav>
    </div>
  );
}
