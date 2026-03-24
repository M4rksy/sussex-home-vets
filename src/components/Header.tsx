import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-4 inset-x-4 max-w-7xl mx-auto z-50">
      {/* Utility Bar */}
      <div className="w-full bg-[#EAE8E7] dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700 py-2 px-8 rounded-t-2xl">
        <div className="max-w-7xl mx-auto flex justify-end">
          <span className="font-body text-[12px] uppercase tracking-wider text-stone-600 dark:text-stone-400 font-medium">
            Independent Practice
          </span>
        </div>
      </div>
      <nav className="w-full bg-[#FFFAF2]/80 dark:bg-stone-900/80 glass-nav shadow-[0px_20px_40px_rgba(47,47,47,0.06)] rounded-b-2xl">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <Link to="/" className="text-2xl font-extrabold text-[#486245] dark:text-[#C5E3BE] tracking-tighter font-headline">
            Sussex Home Vets
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/services"
              className={`font-bold tracking-tight font-headline transition-colors duration-300 ${
                location.pathname === "/services"
                  ? "text-[#486245] dark:text-[#C5E3BE] border-b-4 border-[#C5E3BE]/30"
                  : "text-stone-600 dark:text-stone-400 hover:text-[#486245]"
              }`}
            >
              Services
            </Link>
            <a
              href="/#our-story"
              className={`font-bold tracking-tight font-headline transition-colors duration-300 ${
                location.hash === "#our-story"
                  ? "text-[#486245] dark:text-[#C5E3BE] border-b-4 border-[#C5E3BE]/30"
                  : "text-stone-600 dark:text-stone-400 hover:text-[#486245]"
              }`}
            >
              Our Story
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-full font-headline font-bold neo-offset-shadow-secondary active:scale-95 transition-transform">
              Book a Call
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
