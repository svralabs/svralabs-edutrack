import React from 'react';
import NavBar from '../components/NavBar';
import styles from './Dashboard.module.css';

const stats = [
  { id: 1, title: 'Total Lessons', value: '12', change: '+2', color: 'primary' },
  { id: 2, title: 'Completed', value: '8', change: '+1', color: 'secondary' },
  { id: 3, title: 'In Progress', value: '4', change: '+1', color: 'tertiary' },
];

const activities = [
  { id: 1, title: 'Math Quiz', time: '2 hours ago', icon: 'school' },
  { id: 2, title: 'History Essay', time: '5 hours ago', icon: 'description' },
  { id: 3, title: 'Culture Discussion', time: '1 day ago', icon: 'star' },
];

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.statusBar}>
        <span>9:41</span>
        <div className={styles.statusIcons}>
          <span className="material-symbols-outlined">signal_cellular_4_bar</span>
          <span className="material-symbols-outlined">wifi</span>
          <span className="material-symbols-outlined">battery_full</span>
        </div>
      </div>

      <NavBar />

      <section className={styles.welcomeSection}>
        <h1 className={styles.welcomeTitle}>Good morning, Anna Lane!</h1>
        <p className={styles.welcomeSubtitle}>Ready to continue your learning journey?</p>
      </section>

      <nav className={styles.filterNav}>
        <div className={styles.filterPills}>
          <button className={`${styles.filterPill} ${styles.active}`}>Lessons</button>
          <button className={styles.filterPill}>Add. classes</button>
          <button className={styles.filterPill}>Forum</button>
        </div>
      </nav>

      <main className={styles.statsGrid}>
        {stats.map((stat) => (
          <div key={stat.id} className={`${styles.statCard} ${styles[stat.color]}`}>
            <div className={styles.statHeader}>
              <span className={styles.statTitle}>{stat.title}</span>
              <span className={styles.statChange}>{stat.change}</span>
            </div>
            <span className={styles.statValue}>{stat.value}</span>
          </div>
        ))}
      </main>

      <section className={styles.activitySection}>
        <h2 className={styles.activityTitle}>Recent Activity</h2>
        <div className={styles.activityList}>
          {activities.map((activity) => (
            <div key={activity.id} className={styles.activityItem}>
              <div className={styles.activityIcon}>
                <span className="material-symbols-outlined">{activity.icon}</span>
              </div>
              <div className={styles.activityContent}>
                <span className={styles.activityTitle}>{activity.title}</span>
                <span className={styles.activityTime}>{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
