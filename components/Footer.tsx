export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-white font-semibold">Gunjan Solanki</span>
          <span className="text-slate-600">·</span>
          <span className="text-sm">Senior Software Engineer</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <span>Built with</span>
          <span className="text-white mx-1">Next.js</span>
          <span>·</span>
          <span className="text-white mx-1">Tailwind CSS</span>
          <span>·</span>
          <span className="text-white mx-1">GitHub Pages</span>
        </div>
        <p className="text-sm text-slate-500">{new Date().getFullYear()} · All rights reserved</p>
      </div>
    </footer>
  );
}
