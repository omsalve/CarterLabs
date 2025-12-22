type Props = {
  scrollY: number;
};

export default function Hero({ scrollY }: Props) {
  const opacity = Math.max(1 - scrollY / 500, 0);
  const scale = Math.max(1 - scrollY / 2000, 0.95);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity, transform: `scale(${scale})` }}
      />

      <div
        className="relative z-10 text-center px-6"
        style={{ opacity, transform: `translateY(${scrollY * 0.5}px)` }}
      >
        {/* LOGO */}
        <img
          src="/logos/CarterLabsWhite.svg"
          alt="Carter Labs"
          className="mx-auto mb-8 w-[280px] md:w-[420px]"
        />

        <p className="text-xl md:text-3xl text-gray-400 mb-8 font-body">
          We exist to elevate the perceived value of ventures around Bandra
        </p>

        <div className="w-24 h-0.5 bg-white mx-auto" />
      </div>
    </section>
  );
}
