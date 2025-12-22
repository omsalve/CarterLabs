import WeDontRotate from "./misc/wedontrotate";

type Props = {
  isVisible: Record<string, boolean>;
  refEl: (el: HTMLElement | null) => void;
};

export default function Manifesto({ isVisible, refEl }: Props) {
  return (
    <section
      ref={refEl}
      data-section="manifesto"
      className="min-h-screen flex items-center px-6 py-32"
    >
      <div className="flex w-full max-w-7xl mx-auto gap-20 items-start">
        
        {/* LEFT — 70% MANIFESTO */}
        <div className="basis-[70%]">
          <div className="bg-black rounded-3xl px-10 md:px-20 py-20 md:py-28">
            
            {/* Heading */}
            <h2
              className="text-3xl md:text-5xl font-body mb-14 text-white transition-all duration-700"
              style={{
                opacity: isVisible.manifesto ? 1 : 0,
                transform: isVisible.manifesto
                  ? "translateY(0)"
                  : "translateY(32px)",
              }}
            >
              <span className="font-bold">Growth</span> <span className="text-red-600 font-bold">Partners.</span>
              <br />
              Not Service Providers.
            </h2>

            {/* Rotating statement */}
            <div className="mb-12">
              <WeDontRotate />
            </div>

            {/* Body */}
            <div
              className="max-w-3xl space-y-6 text-white/80 transition-all duration-700"
              style={{
                opacity: isVisible.manifesto ? 1 : 0,
                transform: isVisible.manifesto
                  ? "translateY(0)"
                  : "translateY(24px)",
              }}
            >
              <p className="text-lg md:text-xl leading-relaxed">
                We work with consumer businesses rooted in Bandra — cafés,
                bars, salons, clinics, bakeries, food spots, and cultural
                spaces that shape the neighborhood.
              </p>

              <p className="text-lg md:text-xl leading-relaxed">
                Some have history. Some are just getting started.
              </p>

              <p className="text-lg md:text-xl font-medium text-white">
                As long as you’re <span className="text-red-600">Bandra</span>, you’re in the conversation.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — 30% VISUAL */}
        <div className="hidden md:block basis-[30%]">
          <div className="relative h-[68vh] w-full rounded-3xl overflow-hidden">
            <img
              src="/images/bandra-portrait.jpg"
              alt="Bandra street culture"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
