export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-zinc-600 text-sm">
          © 2024 Carter Labs. Bandra.
        </span>

        <div className="flex gap-8 text-sm text-zinc-600">
          <a
            href="#"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="mailto:hello@carterlabs.in"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
