import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import zxcvbn from 'zxcvbn';
import { registerUser } from '../mocks/auth';

const schema = z.object({
  name: z.string().min(1, 'Nama Lengkap harus diisi'),
  email: z.string().email('Email tidak valid'),
  phone: z.string().regex(/^\+?[0-9]{10,15}$/, 'Nomor telepon tidak valid'),
  address: z.string().min(1, 'Alamat harus diisi'),
  password: z.string().min(8, 'Kata sandi minimal 8 karakter'),
  confirmPassword: z.string(),
  terms: z.boolean().refine(val => val, 'Anda harus menyetujui syarat & ketentuan'),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Kata sandi tidak cocok',
  path: ['confirmPassword'],
});

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({
    resolver: zodResolver(schema),
  });

  const password = watch('password');

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setValue('password', value);
    const result = zxcvbn(value);
    setPasswordStrength(result.score);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await registerUser(data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <header className="bg-background px-margin-mobile py-4 flex items-center justify-between sticky top-0 z-10">
        <button aria-label="Kembali" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors active:scale-95">
          <ArrowLeft className="text-text-primary" />
        </button>
        <h1 className="font-headline-md text-headline-md text-text-primary flex-1 text-center pr-10">Daftar Akun</h1>
      </header>
      <main className="flex-1 px-margin-mobile pb-12">
        <div className="mt-4 mb-8">
          <h2 className="font-headline-xl-mobile text-headline-xl-mobile text-text-primary">Mulai Belajar</h2>
          <p className="font-body-base text-body-base text-text-secondary mt-1">Lengkapi data diri Anda untuk membuat akun baru.</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative form-group">
            <input
              className="peer w-full h-14 px-4 pt-4 pb-2 bg-surface border-0 rounded-input shadow-sm focus:ring-2 focus:ring-primary-container text-on-surface font-body-base transition-all"
              id="name"
              placeholder=" "
              type="text"
              {...register('name')}
            />
            <label className="absolute left-4 top-4 font-body-base text-text-secondary origin-top-left" htmlFor="name">Nama Lengkap</label>
            {errors.name && <p className="text-error text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div className="relative form-group">
            <input
              className="peer w-full h-14 px-4 pt-4 pb-2 bg-surface border-0 rounded-input shadow-sm focus:ring-2 focus:ring-primary-container text-on-surface font-body-base transition-all"
              id="email"
              placeholder=" "
              type="email"
              {...register('email')}
            />
            <label className="absolute left-4 top-4 font-body-base text-text-secondary origin-top-left" htmlFor="email">Email</label>
            {errors.email && <p className="text-error text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div className="relative form-group">
            <input
              className="peer w-full h-14 px-4 pt-4 pb-2 bg-surface border-0 rounded-input shadow-sm focus:ring-2 focus:ring-primary-container text-on-surface font-body-base transition-all"
              id="phone"
              placeholder=" "
              type="tel"
              {...register('phone')}
            />
            <label className="absolute left-4 top-4 font-body-base text-text-secondary origin-top-left" htmlFor="phone">No. Telepon</label>
            {errors.phone && <p className="text-error text-sm mt-1">{errors.phone.message}</p>}
          </div>
          <div className="relative form-group">
            <textarea
              className="peer w-full p-4 pt-6 bg-surface border-0 rounded-input shadow-sm focus:ring-2 focus:ring-primary-container text-on-surface font-body-base transition-all resize-none"
              id="address"
              placeholder=" "
              rows="2"
              {...register('address')}
            />
            <label className="absolute left-4 top-4 font-body-base text-text-secondary origin-top-left" htmlFor="address">Alamat</label>
            {errors.address && <p className="text-error text-sm mt-1">{errors.address.message}</p>}
          </div>
          <div className="relative form-group">
            <input
              className="peer w-full h-14 px-4 pt-4 pb-2 bg-surface border-0 rounded-input shadow-sm focus:ring-2 focus:ring-primary-container text-on-surface font-body-base transition-all"
              id="password"
              placeholder=" "
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              onChange={handlePasswordChange}
            />
            <label className="absolute left-4 top-4 font-body-base text-text-secondary origin-top-left" htmlFor="password">Kata Sandi</label>
            <button
              className="absolute right-4 top-4 text-text-secondary hover:text-primary transition-colors"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
            {errors.password && <p className="text-error text-sm mt-1">{errors.password.message}</p>}
            {password && (
              <div className="mt-2">
                <div className="h-1 bg-surface-container rounded-full">
                  <div
                    className={`h-full rounded-full ${
                      passwordStrength === 0 ? 'bg-error' :
                      passwordStrength === 1 ? 'bg-error-container' :
                      passwordStrength === 2 ? 'bg-warning' :
                      passwordStrength === 3 ? 'bg-primary-container' :
                      'bg-success'
                    }`}
                    style={{ width: `${(passwordStrength + 1) * 20}%` }}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="relative form-group">
            <input
              className="peer w-full h-14 px-4 pt-4 pb-2 bg-surface border-0 rounded-input shadow-sm focus:ring-2 focus:ring-primary-container text-on-surface font-body-base transition-all"
              id="confirmPassword"
              placeholder=" "
              type={showPassword ? 'text' : 'password'}
              {...register('confirmPassword')}
            />
            <label className="absolute left-4 top-4 font-body-base text-text-secondary origin-top-left" htmlFor="confirmPassword">Konfirmasi Kata Sandi</label>
            {errors.confirmPassword && <p className="text-error text-sm mt-1">{errors.confirmPassword.message}</p>}
          </div>
          <div className="flex items-start gap-3 mt-2">
            <div className="relative flex items-center">
              <input
                className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary-container cursor-pointer transition-all"
                id="terms"
                type="checkbox"
                {...register('terms')}
              />
            </div>
            <label className="font-label-sm text-label-sm text-on-surface-variant cursor-pointer" htmlFor="terms">
              Saya setuju dengan <a className="text-primary font-semibold hover:underline" href="#">syarat & ketentuan</a>
            </label>
            {errors.terms && <p className="text-error text-sm mt-1">{errors.terms.message}</p>}
          </div>
          <div className="pt-4">
            <button
              className="w-full bg-primary-container hover:bg-primary text-white font-semibold py-4 rounded-input shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
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
};

export default Register;
