import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Top Area: Logo */}
      <header className="pt-12 px-margin-mobile flex justify-center items-center z-10">
        <img
          alt="NAMA BRAND Logo"
          className="h-14 w-auto object-contain"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsbjKCk2_B040sPaiwvf9kvIhysdju6VkIheTBzcv_MrzgZWitaOzaaY0ZJdnEfrl_XDZmVFAjSuuQJMI0Cu65xJbs2sz1KkBb7vL0hZEWt_0oKjEdpXcgM7D-RoMksPn-n6zrqlCQO6ij2WzasN3wxIoeFbagWaE6IKVUqB4x9aIOqnel6qkVE0hSeg7CyUXvpJ_7_VAwmgatKDUnDhpY_uhQI1AWemJMSpteaCtrjHwMRFyPA3FL"
        />
      </header>

      {/* Content Canvas */}
      <main className="flex-1 flex flex-col items-center justify-center px-margin-mobile pb-32">
        {/* Hero Illustration */}
        <div className="relative w-full max-w-[320px] mb-8 animate-float">
          {/* Subtle glow background effect */}
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-125"></div>
          <div className="relative">
            <img
              alt="Friendly 3D Shopping Bag with Gifts"
              className="w-full h-auto drop-shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCwsJ_3e4vPrqSe4Y7nN2ExaM_2glg4IWblazIsKbuJRaKPfWv9k3hiNRZBUI6MiphqHN_bch3Rdgs42akczyj4Bq-pV7dnU7GlSeahqW2WoEJwN3V7E4JHuB_8zdWpguntIBmbrXWRxmuS_9BveWv7L0hNn7IeNYczRPlglmwAm0c64obkBL3ACOoB6oEQFpMTIHSOrdO-6_cpUxk6ed3TAFpTtraiLL0jgL1YKG84Q8kFkc_T_XJ"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-4 max-w-[300px] animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-headline-xl-mobile font-headline-xl-mobile text-text-primary">
            Titip belanja, gampang &amp; aman
          </h1>
          <p className="text-body-base font-body-base text-text-secondary">
            Belanja dari mana saja, kami antar sampai depan pintu.
          </p>
        </div>
      </main>

      {/* Bottom Actions */}
      <footer className="fixed bottom-0 left-0 w-full p-margin-mobile bg-gradient-to-t from-background via-background to-transparent pt-12 z-20">
        <div className="flex flex-col gap-3 max-w-md mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
          {/* Primary Button */}
          <button className="w-full py-4 bg-primary-container text-on-primary-container rounded-xl font-heading-md text-heading-md shadow-lg shadow-primary/20 active:scale-95 transition-transform duration-200 flex items-center justify-center gap-2">
            Masuk
            <ArrowRight className="text-[20px]" />
          </button>

          {/* Secondary Button */}
          <button className="w-full py-4 bg-surface border-2 border-outline-variant text-on-surface-variant rounded-xl font-heading-md text-heading-md active:bg-surface-container-low transition-colors duration-200">
            Daftar
          </button>

          {/* Bottom Spacer for Home Indicator */}
          <div className="h-4"></div>
        </div>
      </footer>

      {/* Decorative Atmospheric Elements */}
      <div className="fixed top-[-10%] right-[-10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-[-5%] left-[-10%] w-48 h-48 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
};

export default Splash;
