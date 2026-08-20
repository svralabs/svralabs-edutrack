import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Splash.module.css';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.splash}>
      {/* Top Area: Logo */}
      <header className={styles.header}>
        <img
          alt="NAMA BRAND Logo"
          className={styles.logo}
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsbjKCk2_B040sPaiwvf9kvIhysdju6VkIheTBzcv_MrzgZWitaOzaaY0ZJdnEfrl_XDZmVFAjSuuQJMI0Cu65xJbs2sz1KkBb7vL0hZEWt_0oKjEdpXcgM7D-RoMksPn-n6zrqlCQO6ij2WzasN3wxIoeFbagWaE6IKVUqB4x9aIOqnel6qkVE0hSeg7CyUXvpJ_7_VAwmgatKDUnDhpY_uhQI1AWemJMSpteaCtrjHwMRFyPA3FL"
        />
      </header>

      {/* Content Canvas */}
      <main className={styles.main}>
        {/* Hero Illustration */}
        <div className={`${styles.illustrationContainer} ${styles.animateFloat}`}>
          {/* Subtle glow background effect */}
          <div className={styles.glowBackground}></div>
          <div>
            <img
              alt="Friendly 3D Shopping Bag with Gifts"
              className={styles.illustration}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCwsJ_3e4vPrqSe4Y7nN2ExaM_2glg4IWblazIsKbuJRaKPfWv9k3hiNRZBUI6MiphqHN_bch3Rdgs42akczyj4Bq-pV7dnU7GlSeahqW2WoEJwN3V7E4JHuB_8zdWpguntIBmbrXWRxmuS_9BveWv7L0hNn7IeNYczRPlglmwAm0c64obkBL3ACOoB6oEQFpMTIHSOrdO-6_cpUxk6ed3TAFpTtraiLL0jgL1YKG84Q8kFkc_T_XJ"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className={`${styles.textContent} ${styles.animateFadeUp}`} style={{ animationDelay: '0.2s' }}>
          <h1 className={styles.headline}>
            Titip belanja, gampang &amp; aman
          </h1>
          <p className={styles.subhead}>
            Belanja dari mana saja, kami antar sampai depan pintu.
          </p>
        </div>
      </main>

      {/* Bottom Actions */}
      <footer className={styles.footer}>
        <div className={`${styles.actions} ${styles.animateFadeUp}`} style={{ animationDelay: '0.4s' }}>
          {/* Primary Button */}
          <button className={styles.primaryButton}>
            Masuk
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
          </button>

          {/* Secondary Button */}
          <button className={styles.secondaryButton}>
            Daftar
          </button>

          {/* Bottom Spacer for Home Indicator */}
          <div className={styles.spacer}></div>
        </div>
      </footer>

      {/* Decorative Atmospheric Elements */}
      <div className={styles.decorativeTop}></div>
      <div className={styles.decorativeBottom}></div>
    </div>
  );
}
