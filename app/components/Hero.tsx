type Props = {
  scrollY: number;
};

export default function Hero({ scrollY }: Props) {
  const opacity = Math.max(1 - scrollY / 500, 0);
  const scale = Math.max(1 - scrollY / 2000, 0.95);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900"
        style={{ opacity, transform: `scale(${scale})` }}
      />

      <div
        className="relative z-10 text-center px-6"
        style={{ opacity, transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <h1 className="text-7xl md:text-9xl font-bold mb-6">Carter Labs</h1>
        <p className="text-xl md:text-3xl text-zinc-400 mb-8">
          Not for everyone. Precisely for Bandra.
        </p>
        <div className="w-24 h-0.5 bg-white mx-auto" />
      </div>
    </section>
  );
}
