import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const updateQuantity = (delta) => {
    setQuantity((prevQty) => Math.max(1, prevQty + delta));
  };

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number).replace('IDR', 'Rp');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  const totalPrice = (product.price + 15000) * quantity;

  return (
    <div className="min-h-screen bg-background">
      <ImageCarousel images={product.images} />

      <main className="relative -mt-6 bg-background rounded-t-[24px] z-30 px-margin-mobile pt-6">
        <section className="bg-surface rounded-lg p-card-padding">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface mb-2">
            {product.name}
          </h1>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-headline-md text-headline-md text-primary">
              {formatRupiah(product.price)}
            </span>
            <span className="text-label-sm font-label-sm text-text-secondary bg-surface-container-low px-2 py-0.5 rounded">
              Jasa Titip
            </span>
          </div>
          <p className="text-label-sm font-label-sm text-text-secondary mb-4">
            Harga {formatRupiah(product.price)} + Fee Rp15.000
          </p>

          <div className="flex items-center gap-2 p-3 bg-secondary-fixed/30 rounded-lg border border-secondary-fixed mb-6">
            <span className="material-symbols-outlined text-secondary text-[20px]">event_available</span>
            <p className="text-label-sm font-label-sm text-on-secondary-fixed-variant">
              Event: <span className="font-bold">Perlengkapan Bayi</span> · Berakhir 3 hari lagi
            </p>
          </div>

          <hr className="border-outline-variant/30 mb-6" />

          <div className="flex items-center justify-between mb-8">
            <span className="font-heading-md text-heading-md">Jumlah</span>
            <div className="flex items-center bg-surface-container rounded-full p-1 border border-outline-variant/20">
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-surface text-primary transition-all active:scale-90 hover:bg-primary-fixed"
                onClick={() => updateQuantity(-1)}
              >
                <span className="material-symbols-outlined">remove</span>
              </button>
              <span className="w-12 text-center font-bold text-lg">{quantity}</span>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-on-primary transition-all active:scale-90 shadow-lg shadow-primary/20"
                onClick={() => updateQuantity(1)}
              >
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading-md text-heading-md">Deskripsi Produk</h2>
            <p className="text-on-surface-variant text-body-base leading-relaxed">
              {product.description}
            </p>
            <ul className="space-y-2 text-on-surface-variant text-body-base">
              {product.features.map((feature, index) => (
                <li key={index} className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-4 bg-surface rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-container flex items-center justify-center text-on-primary-container font-bold">
              JP
            </div>
            <div>
              <h3 className="font-label-sm font-bold">Jastiper Professional</h3>
              <div className="flex items-center gap-1 text-[12px] text-text-secondary">
                <span className="material-symbols-outlined text-[14px] text-subject-yellow" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                4.9 (2k+ pesanan)
              </div>
            </div>
          </div>
          <button className="px-4 py-2 text-primary border border-primary/20 rounded-full font-label-sm hover:bg-primary/5 transition-colors">
            Chat
          </button>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-outline-variant/10 px-margin-mobile py-4 z-50 flex items-center justify-between shadow-[0_-8px_20px_-10px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col">
          <span className="text-text-secondary text-[12px]">Total Harga</span>
          <span className="font-headline-md text-headline-md text-on-surface">
            {formatRupiah(totalPrice)}
          </span>
        </div>
        <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 flex items-center gap-2 transition-transform active:scale-95 hover:opacity-90">
          <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
          Tambah ke Pesanan
        </button>
      </nav>
    </div>
  );
}
