import React from 'react';
import styles from './JasaTitipHome.module.css';

const JasaTitipHome = () => {
  const events = [
    {
      id: 1,
      title: 'Tokyo Flash Sale',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJmGC89dvP-dagNCdJGn2JcYpBqu7aKeZFMwHW0XqYGVQQwDnwFfGgm7e6rW1BMVv4yA6OVaUWls2wcfoxl4EUzlihNimBg7taK67ReP8xTW7nAVW4YJ4qv3jNYr0AfVaLwAR050n-gAIAiWIcQG_OfJlxi8eAZf_VnMt1MPEutc6FLVJqOfQwGirmRBJemRjoMKh7MgaLtwaRZ3c7WfShIYR1VW6R4CswNoxBsL4lntqEX2Tg_mB0',
      badge: 'Populer',
      timeLeft: 'Berakhir 3 hari lagi',
      badgeClass: styles.badgePopular,
      timeClass: styles.timeIndicatorPopular
    },
    {
      id: 2,
      title: 'Paris Fashion Week',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClyZWS0mZR8vFOLecqv8RWtiM_yLTQADAWNmljHEnTMjUqnklD3TnQ9VP_Aec9svgglcKl9g_Wgt1GoMpC90sR0jujJ6D8YLP78ZtX5SGfTi4zGX8kw8nMQf8T6FHBrBQakCpEsvBRvsb1PgiDz0Jq62UrsQ-QiDShyXWzEMPesnHweVqK4VGRg_PXdPa7DXY5HQnIYihGYxRcxZkoBzFkgPGEs2nR7SX3kWRz-VmewMMvWMEsbp9v',
      badge: 'Baru',
      timeLeft: 'Berakhir 5 hari lagi',
      badgeClass: styles.badgeNew,
      timeClass: styles.timeIndicatorNew
    }
  ];

  const categories = [
    { id: 1, name: 'Semua', active: true },
    { id: 2, name: 'Bayi', active: false },
    { id: 3, name: 'Skincare', active: false },
    { id: 4, name: 'Fashion', active: false },
    { id: 5, name: 'Elektronik', active: false },
    { id: 6, name: 'Makanan', active: false }
  ];

  const products = [
    {
      id: 1,
      title: 'Tokyo Flash Sale',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzjwDhfsLkxP1MQTb9IpRpl2uOSQ8CL_0OnCY4z2b36u4Wewu3APiXq2OxCOe9_ofjEZGkxbWNWCK0b7L_Ae3taHUIzR1BSDi14ojN3Mrkfl1_bgProxgERxfpqhDbIHWFnLEMJaYKac1eJyDOcWySwx8BXSrViGNjXcH6SaZJDDB2EgDhMH9RVZdm6duispv9EAYltsSwDuCIy1GxgaFvW5MDPR-Af40jXmdLIG2I_ELVTOjyy2iD'
    },
    {
      id: 2,
      title: 'Paris Fashion Week',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClyZWS0mZR8vFOLecqv8RWtiM_yLTQADAWNmljHEnTMjUqnklD3TnQ9VP_Aec9svgglcKl9g_Wgt1GoMpC90sR0jujJ6D8YLP78ZtX5SGfTi4zGX8kw8nMQf8T6FHBrBQakCpEsvBRvsb1PgiDz0Jq62UrsQ-QiDShyXWzEMPesnHweVqK4VGRg_PXdPa7DXY5HQnIYihGYxRcxZkoBzFkgPGEs2nR7SX3kWRz-VmewMMvWMEsbp9v'
    },
    {
      id: 3,
      title: 'Baby Care Set',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzjwDhfsLkxP1MQTb9IpRpl2uOSQ8CL_0OnCY4z2b36u4Wewu3APiXq2OxCOe9_ofjEZGkxbWNWCK0b7L_Ae3taHUIzR1BSDi14ojN3Mrkfl1_bgProxgERxfpqhDbIHWFnLEMJaYKac1eJyDOcWySwx8BXSrViGNjXcH6SaZJDDB2EgDhMH9RVZdm6duispv9EAYltsSwDuCIy1GxgaFvW5MDPR-Af40jXmdLIG2I_ELVTOjyy2iD'
    },
    {
      id: 4,
      title: 'Luxury Skincare',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClyZWS0mZR8vFOLecqv8RWtiM_yLTQADAWNmljHEnTMjUqnklD3TnQ9VP_Aec9svgglcKl9g_Wgt1GoMpC90sR0jujJ6D8YLP78ZtX5SGfTi4zGX8kw8nMQf8T6FHBrBQakCpEsvBRvsb1PgiDz0Jq62UrsQ-QiDShyXWzEMPesnHweVqK4VGRg_PXdPa7DXY5HQnIYihGYxRcxZkoBzFkgPGEs2nR7SX3kWRz-VmewMMvWMEsbp9v'
    }
  ];

  return (
    <div>
      <header className="sticky top-0 z-40 bg-background flex justify-between items-center px-margin-mobile py-4 w-full">
        <div className="flex flex-col">
          <span className="text-text-secondary font-label-sm text-label-sm">Selamat Datang,</span>
          <h1 className="font-headline-md text-headline-md-mobile font-bold text-on-surface">Halo, Rio</h1>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface hover:opacity-80 transition-opacity active:scale-95">
          <span className="material-symbols-outlined text-primary" data-icon="notifications">notifications</span>
        </button>
      </header>

      <main className="px-margin-mobile space-y-6">
        <div className="relative mt-2">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
          <input className={styles.inputSearch} placeholder="Cari produk atau event" type="text" />
        </div>

        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="font-heading-md text-heading-md text-on-surface">Event Berlangsung</h2>
            <button className="text-primary font-label-sm text-label-sm hover:underline">Lihat Semua</button>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {events.map(event => (
              <div key={event.id} className={styles.card + " min-w-[280px] flex flex-col gap-3"}>
                <div className="relative w-full h-40 rounded-xl overflow-hidden">
                  <img className="w-full h-full object-cover" src={event.image} alt={event.title} />
                  <div className={styles.badge + " " + event.badgeClass}>
                    {event.badge}
                  </div>
                </div>
                <div className="px-1">
                  <h3 className="font-heading-md text-on-surface mb-1">{event.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className={styles.timeIndicator + " " + event.timeClass}>
                      {event.timeLeft}
                    </span>
                    <button className={styles.btnPrimary + " px-4 py-1.5 rounded-lg text-label-sm font-bold"}>
                      Lihat
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex gap-2 overflow-x-auto no-scrollbar py-2">
          {categories.map(category => (
            <button
              key={category.id}
              className={category.active ? styles.chip + " " + styles.chipPrimary : styles.chip + " " + styles.chipSecondary}
            >
              {category.name}
            </button>
          ))}
        </section>

        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="font-heading-md text-heading-md text-on-surface">Katalog Populer</h2>
            <span className="material-symbols-outlined text-outline" data-icon="tune">tune</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {products.map(product => (
              <div key={product.id} className={styles.card}>
                <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
                  <img className="w-full h-full object-cover" src={product.image} alt={product.title} />
                </div>
                <h3 className="font-heading-md text-on-surface mb-1">{product.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default JasaTitipHome;
