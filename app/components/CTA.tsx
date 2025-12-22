export default function CTA() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-12">
          Are you <span className="text-red-600 font-script">Bandra?</span>
        </h2>

        <p className="text-xl md:text-2xl text-zinc-400 mb-16">
          Then let’s talk.
        </p>

        <button
          className="
            relative px-12 py-5 text-xl font-medium rounded-full
            border-2 border-black overflow-hidden group
          "
        >
          <span className="relative z-10 group-hover:text-black transition-colors duration-300">
            Get in touch
          </span>

          <div
            className="
              absolute inset-0 bg-red-600
              scale-x-0 group-hover:scale-x-100
              origin-left transition-transform duration-300
            "
          />
        </button>
      </div>
    </section>
  );
}
