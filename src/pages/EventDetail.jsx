import { useParams, useSearchParams } from 'react-router-dom';
import { events } from '../mocks/events';
import { Plus } from 'lucide-react';
import Image from 'next/image';

const EventDetail = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const view = searchParams.get('view') || 'variant1';

  const event = events.find((event) => event.id === parseInt(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  const isActive = event.status === 'Aktif';

  return (
    <main className="max-w-md mx-auto">
      <section className="relative w-full h-64 overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-cover bg-center">
          <Image
            src={event.image}
            alt="Event banner"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-on-background/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-margin-mobile">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-white mb-2">{event.title}</h1>
          <div className="flex items-center gap-3">
            <span className="bg-subject-green text-on-background px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{event.status}</span>
            <span className="text-white/90 text-sm font-medium">Periode: {event.period}</span>
          </div>
        </div>
      </section>

      {view === 'variant1' ? (
        <nav className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm py-4 px-margin-mobile overflow-x-auto hide-scrollbar flex gap-3">
          <button className="whitespace-nowrap px-6 py-2 bg-primary-container text-on-primary-container rounded-full text-sm font-semibold shadow-sm shadow-primary/20">Semua</button>
          <button className="whitespace-nowrap px-6 py-2 bg-white text-text-secondary border border-outline-variant rounded-full text-sm font-medium hover:bg-surface-container transition-colors">Popok</button>
          <button className="whitespace-nowrap px-6 py-2 bg-white text-text-secondary border border-outline-variant rounded-full text-sm font-medium hover:bg-surface-container transition-colors">Susu</button>
          <button className="whitespace-nowrap px-6 py-2 bg-white text-text-secondary border border-outline-variant rounded-full text-sm font-medium hover:bg-surface-container transition-colors">Mainan</button>
        </nav>
      ) : (
        <nav className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm py-4 px-margin-mobile overflow-x-auto hide-scrollbar flex gap-3">
          <button className="whitespace-nowrap px-6 py-2 bg-primary-container text-on-primary-container rounded-full text-sm font-semibold shadow-sm shadow-primary/20">All</button>
          <button className="whitespace-nowrap px-6 py-2 bg-white text-text-secondary border border-outline-variant rounded-full text-sm font-medium hover:bg-surface-container transition-colors">Diapers</button>
          <button className="whitespace-nowrap px-6 py-2 bg-white text-text-secondary border border-outline-variant rounded-full text-sm font-medium hover:bg-surface-container transition-colors">Formula</button>
          <button className="whitespace-nowrap px-6 py-2 bg-white text-text-secondary border border-outline-variant rounded-full text-sm font-medium hover:bg-surface-container transition-colors">Toys</button>
        </nav>
      )}

      <section className="px-margin-mobile grid grid-cols-2 gap-4 mt-2">
        {event.products.map((product) => (
          <div key={product.id} className="bg-surface rounded-2xl p-3 shadow-sm border border-surface-container-high flex flex-col">
            <div className="aspect-square rounded-xl bg-surface-container-low mb-3 overflow-hidden relative">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
              {product.sale && (
                <div className="absolute top-2 right-2 bg-error text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Sale</div>
              )}
            </div>
            <h3 className="font-label-sm text-on-surface line-clamp-2 mb-1">{product.name}</h3>
            <p className="text-primary font-bold text-sm">{product.price}</p>
            <div className="mt-1 mb-3">
              <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">{product.fee}</span>
            </div>
            <button
              className={`mt-auto w-full py-2 ${isActive ? 'bg-primary-container text-on-primary-container' : 'bg-gray-300 text-gray-500 cursor-not-allowed'} rounded-lg text-xs font-bold flex items-center justify-center gap-1 active:scale-95 transition-transform`}
              disabled={!isActive}
            >
              <Plus className="text-sm" />
              Tambah
            </button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default EventDetail;
