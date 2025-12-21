type Props = {
  isVisible: Record<string, boolean>;
  refEl: (el: HTMLElement | null) => void;
  scrollY: number;
};

const LINES = [
  'Born in Bandra. Confined to it.',
  'No scale-chasing. No city hopping.',
  'Only consumer businesses rooted here.',
];

export default function Manifesto({ isVisible, refEl, scrollY }: Props) {
  return (
    <section
      ref={refEl}
      data-section="manifesto"
      className="min-h-screen flex items-center px-6 py-32"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading stays intersection-based */}
        <h2
          className="text-5xl md:text-7xl font-bold mb-20 transition-all duration-1000"
          style={{
            opacity: isVisible.manifesto ? 1 : 0,
            transform: isVisible.manifesto
              ? 'translateY(0)'
              : 'translateY(40px)',
          }}
        >
          Digital-first growth.
          <br />
          Bandra-only focus.
        </h2>

        {/* Scroll-reveal body */}
        <div className="space-y-12">
          {LINES.map((line, i) => {
            // Tune these numbers to taste
            const start = 500 + i * 120;
            const end = start + 200;

            const progress = Math.min(
              Math.max((scrollY - start) / (end - start), 0),
              1
            );

            return (
              <p
                key={line}
                className="text-xl md:text-2xl text-zinc-400 will-change-transform"
                style={{
                  opacity: progress,
                  transform: `translateY(${24 * (1 - progress)}px)`,
                }}
              >
                {line}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
