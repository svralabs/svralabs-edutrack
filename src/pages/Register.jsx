import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
    terms: false
  });
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Nama Lengkap wajib diisi';
    if (!formData.email) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    if (!formData.phone) {
      newErrors.phone = 'No. Telepon wajib diisi';
    } else if (!/^[\d\s\-+]+$/.test(formData.phone)) {
      newErrors.phone = 'Format nomor telepon tidak valid';
    }
    if (!formData.password) {
      newErrors.password = 'Kata Sandi wajib diisi';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Kata Sandi minimal 8 karakter';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Kata Sandi tidak cocok';
    }
    if (!formData.terms) newErrors.terms = 'Anda harus menyetujui syarat & ketentuan';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getPasswordStrength = () => {
    if (!formData.password) return 0;
    let strength = 0;
    if (formData.password.length >= 8) strength += 1;
    if (/[A-Z]/.test(formData.password)) strength += 1;
    if (/[0-9]/.test(formData.password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(formData.password)) strength += 1;
    return strength;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header className="bg-background px-margin-mobile py-4 flex items-center justify-between sticky top-0 z-10">
        <button aria-label="Kembali" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors active:scale-95">
          <span className="material-symbols-outlined text-text-primary" data-icon="arrow_back">arrow_back</span>
        </button>
        <h1 className="font-headline-md text-headline-md text-text-primary flex-1 text-center pr-10">Daftar Akun</h1>
      </header>
      <main className="flex-1 px-margin-mobile pb-12">
        <div className="mt-4 mb-8">
          <h2 className="font-headline-xl-mobile text-headline-xl-mobile text-text-primary">Mulai Belajar</h2>
          <p className="font-body-base text-body-base text-text-secondary mt-1">Lengkapi data diri Anda untuk membuat akun baru.</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative form-group">
            <input
              className={`peer w-full h-14 px-4 pt-4 pb-2 bg-surface border-0 rounded-input shadow-sm focus:ring-2 focus:ring-primary-container text-on-surface font-body-base transition-all ${errors.name ? 'ring-2 ring-error' : ''}`}
              id="name"
              placeholder=" "
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            <label className="absolute left-4 top-4 font-body-base text-text-secondary origin-top-left" htmlFor="name">Nama Lengkap</label>
            {errors.name && <p className="mt-1 text-error text-body-sm">{errors.name}</p>}
          </div>

          <div className="relative form-group">
            <input
              className={`peer w-full h-14 px-4 pt-4 pb-2 bg-surface border-0 rounded-input shadow-sm focus:ring-2 focus:ring-primary-container text-on-surface font-body-base transition-all ${errors.email ? 'ring-2 ring-error' : ''}`}
              id="email"
              placeholder=" "
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label className="absolute left-4 top-4 font-body-base text-text-secondary origin-top-left" htmlFor="email">Email</label>
            {errors.email && <p className="mt-1 text-error text-body-sm">{errors.email}</p>}
          </div>

          <div className="relative form-group">
            <input
              className={`peer w-full h-14 px-4 pt-4 pb-2 bg-surface border-0 rounded-input shadow-sm focus:ring-2 focus:ring-primary-container text-on-surface font-body-base transition-all ${errors.phone ? 'ring-2 ring-error' : ''}`}
              id="phone"
              placeholder=" "
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
            <label className="absolute left-4 top-4 font-body-base text-text-secondary origin-top-left" htmlFor="phone">No. Telepon</label>
            {errors.phone && <p className="mt-1 text-error text-body-sm">{errors.phone}</p>}
          </div>

          <div className="relative form-group">
            <textarea
              className="peer w-full p-4 pt-6 bg-surface border-0 rounded-input shadow-sm focus:ring-2 focus:ring-primary-container text-on-surface font-body-base transition-all resize-none"
              id="address"
              placeholder=" "
              rows="2"
              value={formData.address}
              onChange={handleChange}
            />
            <label className="absolute left-4 top-4 font-body-base text-text-secondary origin-top-left" htmlFor="address">Alamat</label>
          </div>

          <div className="relative form-group">
            <input
              className={`peer w-full h-14 px-4 pt-4 pb-2 bg-surface border-0 rounded-input shadow-sm focus:ring-2 focus:ring-primary-container text-on-surface font-body-base transition-all ${errors.password ? 'ring-2 ring-error' : ''}`}
              id="password"
              placeholder=" "
              type={passwordVisible ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
            />
            <label className="absolute left-4 top-4 font-body-base text-text-secondary origin-top-left" htmlFor="password">Kata Sandi</label>
            <button
              className="absolute right-4 top-4 text-text-secondary hover:text-primary transition-colors"
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              <span className="material-symbols-outlined" data-icon={passwordVisible ? 'visibility_off' : 'visibility'}>
                {passwordVisible ? 'visibility_off' : 'visibility'}
              </span>
            </button>
            {errors.password && <p className="mt-1 text-error text-body-sm">{errors.password}</p>}
            <div className="mt-2 h-2 bg-surface-container rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${
                  getPasswordStrength() === 0 ? 'bg-error' :
                  getPasswordStrength() === 1 ? 'bg-error-container' :
                  getPasswordStrength() === 2 ? 'bg-warning' :
                  getPasswordStrength() === 3 ? 'bg-primary-container' :
                  'bg-success'
                }`}
                style={{ width: `${getPasswordStrength() * 25}%` }}
              />
            </div>
          </div>

          <div className="relative form-group">
            <input
              className={`peer w-full h-14 px-4 pt-4 pb-2 bg-surface border-0 rounded-input shadow-sm focus:ring-2 focus:ring-primary-container text-on-surface font-body-base transition-all ${errors.confirmPassword ? 'ring-2 ring-error' : ''}`}
              id="confirmPassword"
              placeholder=" "
              type={passwordVisible ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <label className="absolute left-4 top-4 font-body-base text-text-secondary origin-top-left" htmlFor="confirmPassword">Konfirmasi Kata Sandi</label>
            {errors.confirmPassword && <p className="mt-1 text-error text-body-sm">{errors.confirmPassword}</p>}
          </div>

          <div className="flex items-start gap-3 mt-2">
            <div className="relative flex items-center">
              <input
                className={`w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary-container cursor-pointer transition-all ${errors.terms ? 'ring-2 ring-error' : ''}`}
                id="terms"
                type="checkbox"
                checked={formData.terms}
                onChange={handleChange}
              />
            </div>
            <label className="font-label-sm text-label-sm text-on-surface-variant cursor-pointer" htmlFor="terms">
              Saya setuju dengan <a className="text-primary font-semibold hover:underline" href="#">syarat & ketentuan</a>
            </label>
          </div>

          <div className="pt-4">
            <button
              className="w-full bg-primary-container hover:bg-primary text-white font-semibold py-4 rounded-input shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Memproses...
                </span>
              ) : 'Daftar'}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="font-body-base text-body-base text-text-secondary">
            Sudah punya akun? <a className="text-primary-container font-semibold hover:underline" href="#">Masuk</a>
          </p>
        </div>
      </main>

      <div className="fixed -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed -bottom-24 -left-24 w-64 h-64 bg-secondary-container/5 rounded-full blur-3xl pointer-events-none"></div>
    </>
  );
}
