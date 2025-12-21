type Props = {
  isVisible: Record<string, boolean>;
  observerRefs: React.MutableRefObject<(HTMLElement | null)[]>;
};

const ITEMS = [
  { title: 'Cafés', color: 'from-amber-900 to-amber-700' },
  { title: 'Restaurants', color: 'from-red-900 to-red-700' },
  { title: 'Bars & Clubs', color: 'from-purple-900 to-purple-700' },
  { title: 'Salons', color: 'from-pink-900 to-pink-700' },
  { title: 'Clinics', color: 'from-blue-900 to-blue-700' },
  { title: 'Bakeries', color: 'from-orange-900 to-orange-700' },
];

export default function BusinessGrid({ isVisible, observerRefs }: Props) {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {ITEMS.map((item, i) => (
          <div
            key={item.title}
            ref={(el) => {
              observerRefs.current[i + 1] = el;
            }}
            data-section={`card-${i}`}
            className="relative h-80 rounded-2xl overflow-hidden transition-all duration-700"
            style={{
              opacity: isVisible[`card-${i}`] ? 1 : 0,
              transform: isVisible[`card-${i}`]
                ? 'translateY(0)'
                : 'translateY(40px)',
            }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-4xl font-bold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
