import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SplashScreen.module.css';

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Area: Logo */}
      <header className={`${styles['pt-12']} ${styles['px-margin-mobile']} ${styles.flex} ${styles['justify-center']} ${styles['items-center']} ${styles['z-10']}`}>
        <img
          alt="NAMA BRAND Logo"
          className={`${styles['h-14']} ${styles['w-auto']} ${styles['object-contain']}`}
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsbjKCk2_B040sPaiwvf9kvIhysdju6VkIheTBzcv_MrzgZWitaOzaaY0ZJdnEfrl_XDZmVFAjSuuQJMI0Cu65xJbs2sz1KkBb7vL0hZEWt_0oKjEdpXcgM7D-RoMksPn-n6zrqlCQO6ij2WzasN3wxIoeFbagWaE6IKVUqB4x9aIOqnel6qkVE0hSeg7CyUXvpJ_7_VAwmgatKDUnDhpY_uhQI1AWemJMSpteaCtrjHwMRFyPA3FL"
        />
      </header>

      {/* Content Canvas */}
      <main className={`${styles['flex-1']} ${styles.flex} ${styles['flex-col']} ${styles['items-center']} ${styles['justify-center']} ${styles['px-margin-mobile']} ${styles['pb-32']}`}>
        {/* Hero Illustration */}
        <div className={`${styles.relative} ${styles['w-full']} ${styles['max-w-[320px]']} ${styles['mb-8']} ${styles['animate-float']}`}>
          {/* Subtle glow background effect */}
          <div className={`${styles.absolute} ${styles['inset-0']} ${styles['bg-primary/10']} ${styles['blur-3xl']} ${styles['rounded-full']} ${styles['scale-125']}`}></div>
          <div className={styles.relative}>
            <img
              alt="Friendly 3D Shopping Bag with Gifts"
              className={`${styles['w-full']} ${styles['h-auto']} ${styles['drop-shadow-2xl']}`}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCwsJ_3e4vPrqSe4Y7nN2ExaM_2glg4IWblazIsKbuJRaKPfWv9k3hiNRZBUI6MiphqHN_bch3Rdgs42akczyj4Bq-pV7dnU7GlSeahqW2WoEJwN3V7E4JHuB_8zdWpguntIBmbrXWRxmuS_9BveWv7L0hNn7IeNYczRPlglmwAm0c64obkBL3ACOoB6oEQFpMTIHSOrdO-6_cpUxk6ed3TAFpTtraiLL0jgL1YKG84Q8kFkc_T_XJ"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className={`${styles['text-center']} ${styles['space-y-4']} ${styles['max-w-[300px]']} ${styles['animate-fade-up']}`} style={{ animationDelay: '0.2s' }}>
          <h1 className={`${styles['text-headline-xl-mobile']} ${styles['font-headline-xl-mobile']} ${styles['text-text-primary']}`}>
            Titip belanja, gampang &amp; aman
          </h1>
          <p className={`${styles['text-body-base']} ${styles['font-body-base']} ${styles['text-text-secondary']}`}>
            Belanja dari mana saja, kami antar sampai depan pintu.
          </p>
        </div>
      </main>

      {/* Bottom Actions */}
      <footer className={`${styles.fixed} ${styles['bottom-0']} ${styles['left-0']} ${styles['w-full']} ${styles['p-margin-mobile']} ${styles['bg-gradient-to-t']} ${styles['from-background']} ${styles['via-background']} ${styles['to-transparent']} ${styles['pt-12']} ${styles['z-20']}`}>
        <div className={`${styles.flex} ${styles['flex-col']} ${styles['gap-3']} ${styles['max-w-md']} ${styles['mx-auto']} ${styles['animate-fade-up']}`} style={{ animationDelay: '0.4s' }}>
          {/* Primary Button */}
          <button className={`${styles['w-full']} ${styles['py-4']} ${styles['bg-primary-container']} ${styles['text-on-primary-container']} ${styles['rounded-xl']} ${styles['font-heading-md']} ${styles['text-heading-md']} ${styles['shadow-lg']} ${styles['shadow-primary/20']} ${styles['active:scale-95']} ${styles['transition-transform']} ${styles['duration-200']} ${styles.flex} ${styles['items-center']} ${styles['justify-center']} ${styles['gap-2']}`}>
            Masuk
            <span className={`${styles['material-symbols-outlined']} ${styles['text-[20px]']}`}>arrow_forward</span>
          </button>

          {/* Secondary Button */}
          <button className={`${styles['w-full']} ${styles['py-4']} ${styles['bg-surface']} ${styles['border-2']} ${styles['border-outline-variant']} ${styles['text-on-surface-variant']} ${styles['rounded-xl']} ${styles['font-heading-md']} ${styles['text-heading-md']} ${styles['active:bg-surface-container-low']} ${styles['transition-colors']} ${styles['duration-200']}`}>
            Daftar
          </button>

          {/* Bottom Spacer for Home Indicator */}
          <div className={styles['h-4']}></div>
        </div>
      </footer>

      {/* Decorative Atmospheric Elements */}
      <div className={`${styles.fixed} ${styles['top-[-10%]']} ${styles['right-[-10%]']} ${styles['w-64']} ${styles['h-64']} ${styles['bg-primary/5']} ${styles['rounded-full']} ${styles['blur-3xl']} ${styles['pointer-events-none']}`}></div>
      <div className={`${styles.fixed} ${styles['bottom-[-5%]']} ${styles['left-[-10%]']} ${styles['w-48']} ${styles['h-48']} ${styles['bg-secondary/5']} ${styles['rounded-full']} ${styles['blur-3xl']} ${styles['pointer-events-none']}`}></div>
    </div>
  );
}
