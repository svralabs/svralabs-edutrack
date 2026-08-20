import React from 'react';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.avatar}>
          <img
            className={styles.avatarImg}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-HACFyMEImumBab9jPvhuX6PAiA1KGo0b2wc_r-uoIVsI69MadKRfF0UWZObWmcVfRLyCElNMQJOLgpsojaeYgtIBVbzCcTfVBVFJ5V2ebbp8vj4-z7gm8ErXZBhgWtNK2ZMxzXSZq8mWWnIu7vrjY3UldD_r3Zztga05i4TAUrLceD_24xcSGfZLJEnCXDPcbGQLJyf1HCOR5BPtjFysHlxIJher5dF9qdedzm-2Ndj65JmX722k"
            alt="Anna Lane"
          />
        </div>
        <span className={styles.appName}>EduFlow</span>
      </div>
      <button className={styles.notificationButton}>
        <span className="material-symbols-outlined">notifications</span>
      </button>
    </header>
  );
}
