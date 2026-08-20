import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowBack, Share, Favorite, EventAvailable, CheckCircle, Star, ShoppingBag } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import products from '../mocks/products';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const product = products.find(p => p.id === parseInt(id));

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity
    });
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="relative w-full h-[397px]">
        <div className="absolute top-4 left-4 z-20">
          <button
            className="w-10 h-10 flex items-center justify-center bg-surface/80 backdrop-blur-md rounded-full text-on-surface transition-transform active:scale-95"
            onClick={() => navigate(-1)}
          >
            <ArrowBack />
          </button>
        </div>
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          <button className="w-10 h-10 flex items-center justify-center bg-surface/80 backdrop-blur-md rounded-full text-on-surface transition-transform active:scale-95">
            <Share />
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-surface/80 backdrop-blur-md rounded-full text-on-surface transition-transform active:scale-95">
            <Favorite />
          </button>
        </div>
        <div className="embla w-full h-full bg-surface" ref={emblaRef}>
          <div className="embla__container w-full h-full">
            {product.images.map((image, index) => (
              <div className="embla__slide w-full h-full" key={index}>
                <img
                  className="w-full h-full object-cover"
                  src={image}
                  alt={`Product image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {product.images.map((_, index) => (
            <div
              key={index}
              className={`w-${index === selectedIndex ? '6' : '1.5'} h-1.5 bg-${index === selectedIndex ? 'primary' : 'surface/50'} rounded-full`}
            />
          ))}
        </div>
      </header>
      <main className="relative -mt-6 bg-background rounded-t-[24px] z-30 px-margin-mobile pt-6">
        <section className="bg-surface rounded-lg p-card-padding">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface mb-2">{product.name}</h1>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-headline-md text-headline-md text-primary">
              {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price).replace('IDR', 'Rp')}
            </span>
            <span className="text-label-sm font-label-sm text-text-secondary bg-surface-container-low px-2 py-0.5 rounded">Jasa Titip</span>
          </div>
          <p className="text-label-sm font-label-sm text-text-secondary mb-4">
            Harga {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price).replace('IDR', 'Rp')} + Fee {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.fee).replace('IDR', 'Rp')}
          </p>
          <div className="flex items-center gap-2 p-3 bg-secondary-fixed/30 rounded-lg border border-secondary-fixed mb-6">
            <EventAvailable className="text-secondary text-[20px]" />
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
                onClick={() => handleQuantityChange(-1)}
              >
                <span className="material-symbols-outlined">remove</span>
              </button>
              <span className="w-12 text-center font-bold text-lg">{quantity}</span>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-on-primary transition-all active:scale-90 shadow-lg shadow-primary/20"
                onClick={() => handleQuantityChange(1)}
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
                  <CheckCircle className="text-primary text-[20px]" />
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
              <h3 className="font-label-sm font-bold">{product.seller.name}</h3>
              <div className="flex items-center gap-1 text-[12px] text-text-secondary">
                <Star className="text-[14px] text-subject-yellow" style={{ fontVariationSettings: "'FILL' 1" }} />
                {product.seller.rating} ({product.seller.orders}+ pesanan)
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
            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price * quantity + product.fee).replace('IDR', 'Rp')}
          </span>
        </div>
        <button
          className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 flex items-center gap-2 transition-transform active:scale-95 hover:opacity-90"
          onClick={handleAddToCart}
        >
          <ShoppingBag className="text-[20px]" />
          Tambah ke Pesanan
        </button>
      </nav>
    </div>
  );
};

export default ProductDetail;
