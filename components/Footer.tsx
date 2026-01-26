export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 sm:flex-row">
        {/* Left */}
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} DSA Progress · Built for practice
        </p>

        {/* Right */}
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <span className="text-slate-300">•</span>

          <a href="/about" className="hover:text-indigo-600 transition-colors">
            About
          </a>
        </div>
      </div>
    </footer>
  );
}
