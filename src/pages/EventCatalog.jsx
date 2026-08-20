import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './EventCatalog.module.css';

const mockEvents = [
  {
    id: 1,
    name: 'Event Perlengkapan Bayi',
    status: 'Aktif',
    period: '10–20 Juli 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBYfWjYXc-DWyvV9VTdoIa7xx9rr2P5xemvZO_Omx9umR0wLaIgi_osy1yeQBoUK-z9bevNdW5Od33dGnJK1ZK7GW0zFoFnXbv2xIJwPbui-SXjSJncwfXv0VmlbHVehHeEzoNi-hxQPq6m79-pAE5LYWaB4GpcuZ6aBiU4hyt1jC2d2fQkxXZSWscDAdF2GQO76137NIheWA9Lr4clB6AW7pk6_Z5o42iIsjAM0dsXzEMX7qzo3VW'
  },
  {
    id: 2,
    name: 'Event Mainan Anak',
    status: 'Aktif',
    period: '15–25 Agustus 2026',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBYfWjYXc-DWyvV9VTdoIa7xx9rr2P5xemvZO_Omx9umR0wLaIgi_osy1yeQBoUK-z9bevNdW5Od33dGnJK1ZK7GW0zFoFnXbv2xIJwPbui-SXjSJncwfXv0VmlbHVehHeEzoNi-hxQPq6m79-pAE5LYWaB4GpcuZ6aBiU4hyt1jC2d2fQkxXZSWscDAdF2GQO76137NIheWA9Lr4clB6AW7pk6_Z5o42iIsjAM0dsXzEMX7qzo3VW'
  }
];

const mockProducts = [
  {
    id: 1,
    name: 'Popok Bayi Organik Ultra Soft S24',
    price: 'Rp150.000',
    fee: '+Fee Rp15.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuHsjHypyH8hL1CoL6K4VOK25kGlPs74k_3BxqFl3PniOBAYUiYCAzGW6ZA-z3kpK4oII4cSW1HxtYOvCiTVwcTves0zHsCeu8X7TrgsCBukC7WZ4iUdUOc0-k_sgG8rJRXAZHzxq79GxXjGP1v_EVL4F5keZxSlScVkP8K9HtfkJxjIIMOQ8hRkTxvGWAcC9_JhIrOXn_Y0ITA4jKfC7SmHRFfvD92YuhWCCQYPht5gi1IzQ57EIT',
    category: 'Popok'
  },
  {
    id: 2,
    name: 'Susu Formula Nutrisi Plus 800g',
    price: 'Rp320.000',
    fee: '+Fee 10%',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtnCtdt3MuLPbTNox01jixu81WxCvJZBdeU1pKqTbHkotHmR7B0grV8Mzw8xweXZjhKw5x8ZoLk_Y4uA9PvJjX842ayc5UvZwXwoPG3uWsSE_FyRjE3_6lVynf0lF9-kdUvlY26xDA8i2JRtIISlkJdqPMADWTc8DAevaLcwxPRk8t9JCYhhB_6d3pssLlnpjBgJUM7mSU7jWftD2QZ6LwBxR3GgUy8HnUhLRAJR1FaChWMFlAn-Pk',
    category: 'Susu'
  },
  {
    id: 3,
    name: 'Mainan Edukasi Bayi 360 Derajat',
    price: 'Rp250.000',
    fee: '+Fee Rp20.000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBYfWjYXc-DWyvV9VTdoIa7xx9rr2P5xemvZO_Omx9umR0wLaIgi_osy1yeQBoUK-z9bevNdW5Od33dGnJK1ZK7GW0zFoFnXbv2xIJwPbui-SXjSJncwfXv0VmlbHVehHeEzoNi-hxQPq6m79-pAE5LYWaB4GpcuZ6aBiU4hyt1jC2d2fQkxXZSWscDAdF2GQO76137NIheWA9Lr4clB6AW7pk6_Z5o42iIsjAM0dsXzEMX7qzo3VW',
    category: 'Mainan'
  }
];

export default function EventCatalog() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredProducts = activeCategory === 'Semua'
    ? mockProducts
    : mockProducts.filter(product => product.category === activeCategory);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCNXQLg5bBMtmr0XylDZqY_3-cXwJH0gKC4OKytDdiUVGRpwmkudKxMAf9QUkhj7pb-BwCitxynQAmusSNFCexIVd3ia-W1aEtLygWkyM06eoqDjJvp8HogjPqTPCAad4f8WVuxoW9dT150JfeT-0PNhCCGmm_luCTZwezupLNTELm9EFKTlK9vyX5iybmowpsuwrmfHvmkB6SHCxfour0sBxaHzbLexuJQx5cPyvy2Kr9_GO6VRyh" alt="EduFlow Logo" className={styles.logoImage} />
            </div>
            <span className={styles.appName}>EduFlow</span>
          </div>
          <button className={styles.notificationButton}>
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>

      <main className={styles.main}>
        {mockEvents.map(event => (
          <section key={event.id} className={styles.eventBanner}>
            <div className={styles.bannerImage} style={{ backgroundImage: `url(${event.image})` }}></div>
            <div className={styles.bannerOverlay}></div>
            <div className={styles.bannerContent}>
              <h1 className={styles.eventTitle}>{event.name}</h1>
              <div className={styles.eventDetails}>
                <span className={styles.eventStatus}>{event.status}</span>
                <span className={styles.eventPeriod}>Periode: {event.period}</span>
              </div>
            </div>
          </section>
        ))}

        <nav className={styles.categoryNav}>
          {['Semua', 'Popok', 'Susu', 'Mainan'].map(category => (
            <button
              key={category}
              className={`${styles.categoryButton} ${activeCategory === category ? styles.activeCategory : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </nav>

        <section className={styles.productGrid}>
          {filteredProducts.map(product => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImageContainer}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
              </div>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>{product.price}</p>
              <div className={styles.productFeeContainer}>
                <span className={styles.productFee}>{product.fee}</span>
              </div>
              <Link to={`/product/${product.id}`} className={styles.addButton}>
                <span className="material-symbols-outlined">add</span>
                Tambah
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
