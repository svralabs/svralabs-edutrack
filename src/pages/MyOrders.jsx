import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MyOrders.module.css';

const mockOrders = [
  {
    id: 1,
    name: 'Paket Perlengkapan Bayi Premium',
    quantity: 1,
    price: 150000,
    fee: 15000,
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLsfvnpIJB45H2aM-zSg_G0Sl9UzuA4H5_SiqxlyKDfcXL4LfzQwSORJPYYUyecJ-eMLzkYDbfwe2DqhHyl8E4Dr7XUxpHg3TkkauQK7ahYD4H-u8lGTE_sE5hly2J1Pl2vzKg9aY2bXcG34z-nrtlwaM-bWt0wqiMBVhC8IjDqGb0cxKlTECWEBWjObLJGgjQiX-N4koRudRAJpqJ3zfDp7y9--D2kWo2t5gQGho1z3AFUxD1tTLqfwVEw'
  },
  {
    id: 2,
    name: 'Set Mainan Edukasi Kayu',
    quantity: 2,
    price: 85000,
    fee: 5000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMHA8Y4noGsmWL7txl5DdkbtTfXUjLOO2sA5dARQahjrgY54mYD0zKBaox9cq805wdm2mHQcV7bWgZ1XN1jMXwVK_9-8_9eVYPuzTmjTXElEi-RflR8KHurljAoQnuoA908b0mQXT_mKHdbci9BPjXkWI6F80HShpIM0iIsS-4tBbL-l4IGQeeJskxbeeWGgCHjhYPv1JuleKO96SeZRkmfSVzgxAygjOe2UAwPJQ-w5jO7nQ_yvC0'
  }
];

export default function MyOrders() {
  const [orders, setOrders] = useState(mockOrders);
  const [recipientType, setRecipientType] = useState('self');
  const [recipientData, setRecipientData] = useState({
    name: '',
    phone: '',
    address: ''
  });
  const navigate = useNavigate();

  const handleRecipientTypeChange = (type) => {
    setRecipientType(type);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipientData(prev => ({ ...prev, [name]: value }));
  };

  const handleDeleteOrder = (id) => {
    setOrders(prev => prev.filter(order => order.id !== id));
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.backButton} onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className={styles.title}>Pesanan Saya</h1>
        </div>
        <div className={styles.headerRight}>
          <span className="material-symbols-outlined">notifications</span>
          <div className={styles.profileImage}>
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN_2OcchmhCoLLI7QxGvK5scy2C4afAnHNNil5LD1Q1Bttupmjo9MLEyEnOAUCkUWVcMHSFtZuUqhpn0J__YLEySDM9cH5x5qSkzaQ2arKkwq9E7mVgrT2rJzYd8tdTF5PELwLPxUA-WOEPpFXMPCEN3FuS9PJThZgukZLQJv-lwF5LX3bXPSF9H1PHM1tm3rhq36m0xsroGExPWnjf5Gl8uW3M2t3Oq8ebdJSlzrm2LWIHlgSIAry" alt="Profile" />
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.orderSection}>
          <h2 className={styles.sectionTitle}>Item Pesanan</h2>
          {orders.map(order => (
            <div key={order.id} className={styles.orderCard}>
              <div className={styles.orderImage}>
                <img src={order.image} alt={order.name} />
              </div>
              <div className={styles.orderDetails}>
                <div>
                  <h3 className={styles.orderName}>{order.name}</h3>
                  <p className={styles.orderQuantity}>Quantity: {order.quantity}x</p>
                </div>
                <div className={styles.orderPrice}>
                  <span className={styles.price}>Rp{order.price.toLocaleString()}</span>
                  <span className={styles.fee}>Fee Rp{order.fee.toLocaleString()}</span>
                </div>
              </div>
              <div className={styles.orderActions}>
                <button className={styles.editButton}>
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button className={styles.deleteButton} onClick={() => handleDeleteOrder(order.id)}>
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.recipientSection}>
          <h2 className={styles.sectionTitle}>Data Penerima</h2>
          <div className={styles.recipientButtons}>
            <button
              className={`${styles.recipientButton} ${recipientType === 'self' ? styles.activeButton : ''}`}
              onClick={() => handleRecipientTypeChange('self')}
            >
              Diri Sendiri
            </button>
            <button
              className={`${styles.recipientButton} ${recipientType === 'others' ? styles.activeButton : ''}`}
              onClick={() => handleRecipientTypeChange('others')}
            >
              Orang Lain
            </button>
          </div>
          <div className={styles.divider}></div>
          {recipientType === 'others' && (
            <div className={styles.recipientForm}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Nama Penerima</label>
                <input
                  className={styles.formInput}
                  type="text"
                  name="name"
                  value={recipientData.name}
                  onChange={handleInputChange}
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>No. Telepon Penerima</label>
                <input
                  className={styles.formInput}
                  type="tel"
                  name="phone"
                  value={recipientData.phone}
                  onChange={handleInputChange}
                  placeholder="0812xxxx"
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Alamat Lengkap Penerima</label>
                <textarea
                  className={styles.formTextarea}
                  name="address"
                  value={recipientData.address}
                  onChange={handleInputChange}
                  placeholder="Tuliskan alamat lengkap pengiriman..."
                  rows="4"
                ></textarea>
              </div>
            </div>
          )}
        </section>

        <section className={styles.summarySection}>
          <h2 className={styles.sectionTitle}>Ringkasan Biaya</h2>
          <div className={styles.summaryItems}>
            <div className={styles.summaryItem}>
              <span>Subtotal</span>
              <span>Rp{orders.reduce((sum, order) => sum + order.price, 0).toLocaleString()}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Total Fee</span>
              <span>Rp{orders.reduce((sum, order) => sum + order.fee, 0).toLocaleString()}</span>
            </div>
            <div className={styles.summaryTotal}>
              <span>Total</span>
              <span>Rp{(orders.reduce((sum, order) => sum + order.price + order.fee, 0)).toLocaleString()}</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
