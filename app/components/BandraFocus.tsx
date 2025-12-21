export default function BandraFocus({ isVisible, refEl }: any) {
  return (
    <section
      ref={refEl}
      data-section="focus"
      className="min-h-screen flex items-center justify-center bg-zinc-950 px-6"
    >
      <div
        className="transition-all duration-1000 text-center"
        style={{
          opacity: isVisible.focus ? 1 : 0,
          transform: isVisible.focus ? 'translateY(0)' : 'translateY(60px)',
        }}
      >
        <div className="text-8xl md:text-9xl font-bold mb-12">Bandra</div>
        <p className="text-2xl text-zinc-400">
          Not Mumbai. Not global.
          <br />
          Just Bandra.
        </p>
      </div>
    </section>
  );
}
