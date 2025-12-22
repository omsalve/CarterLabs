import { useRef } from 'react';

type Props = {
  scrollY: number;
};

const BLOCKS = [
  { type: 'headline', text: 'Curated collaborations. Measurable growth.' },
  { type: 'body', text: 'When you work with Carter Labs, you’re not hiring an agency.' },
  { type: 'body', text: 'You’re entering a small, curated ecosystem.' },
  { type: 'label', text: 'A lean business model means:' },
  { type: 'list', text: 'Fewer clients' },
  { type: 'list', text: 'Deeper involvement' },
  { type: 'list', text: 'Absolute priority' },
  { type: 'body', text: 'There’s security in knowing your agency isn’t stretched thin.' },
  { type: 'body-strong', text: 'There’s confidence in knowing your growth is being shaped, not rushed.' },
];

export default function CuratedReveal({ scrollY }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  /* SECTION PROGRESS */
  let sectionProgress = 0;

  if (ref.current) {
    const rect = ref.current.getBoundingClientRect();
    const viewportH = window.innerHeight;

    sectionProgress = Math.min(
      Math.max((viewportH - rect.top) / (rect.height + viewportH), 0),
      1
    );
  }

  /* REVEAL CONTROL */
  const START_AT = 0.30;
  const REVEAL_WINDOW = 0.35;

  const revealProgress = Math.min(
    Math.max((sectionProgress - START_AT) / REVEAL_WINDOW, 0),
    1
  );

  // 🔥 EXCLUDE HEADLINE FROM WORD COUNT
  const revealBlocks = BLOCKS.filter(b => b.type !== 'headline');

  const totalWords = revealBlocks.reduce(
    (acc, b) => acc + b.text.split(' ').length,
    0
  );

  let wordCursor = 0;

  return (
    <div ref={ref} className="max-w-4xl mx-auto text-center">
      {/* ✅ HEADLINE — STATIC */}
      <h2 className="text-5xl md:text-7xl font-bold mb-12 text-black">
        Curated collaborations. Measurable growth.
      </h2>

      {/* 🔥 REVEALED CONTENT */}
      {revealBlocks.map((block, blockIndex) => {
        const words = block.text.split(' ');

        const baseClass =
          block.type === 'label'
            ? 'text-lg md:text-xl text-black/70 mt-8 mb-3'
            : block.type === 'list'
            ? 'text-lg md:text-xl font-medium mb-1'
            : block.type === 'body-strong'
            ? 'text-lg md:text-xl font-medium mt-6'
            : 'text-lg md:text-xl text-black/80 leading-snug mb-3';

        return (
          <p
            key={blockIndex}
            className={`${baseClass} text-gray-600 flex flex-wrap justify-center`}
          >
            {words.map((word, i) => {
              const wordStart = wordCursor / totalWords;
              const wordEnd = (wordCursor + 1) / totalWords;

              const progress = Math.min(
                Math.max(
                  (revealProgress - wordStart) /
                    (wordEnd - wordStart),
                  0
                ),
                1
              );

              wordCursor++;

              return (
                <span
                  key={`${word}-${i}`}
                  className="inline-block mr-1 will-change-transform"
                  style={{
                    opacity: progress,
                    transform: `translateY(${4 * (1 - progress)}px)`,
                  }}
                >
                  {word}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}
