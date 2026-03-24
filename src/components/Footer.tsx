export default function Footer() {
  return (
    <footer className="w-full rounded-t-[3rem] bg-[#EAE8E7] dark:bg-stone-800 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <span className="text-xl font-bold text-[#486245] dark:text-[#C5E3BE] mb-4 block font-headline">
            Sussex Home Vets
          </span>
          <p className="text-stone-600 dark:text-stone-400 font-['Inter'] text-sm leading-relaxed mb-6">
            Redefining pet excellence through organic design and modern veterinary science. A sanctuary for your best friend.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
              <span className="material-symbols-outlined text-xl">social_leaderboard</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
              <span className="material-symbols-outlined text-xl">camera</span>
            </a>
          </div>
        </div>

        <div className="md:col-span-1">
          <h6 className="font-headline font-extrabold text-[#486245] mb-6 uppercase tracking-widest text-xs">
            Navigation
          </h6>
          <ul className="space-y-4">
            <li><a href="/services" className="text-stone-600 dark:text-stone-400 hover:text-[#486245] dark:hover:text-white transition-all text-sm font-medium">Services</a></li>
            <li><a href="/#our-story" className="text-stone-600 dark:text-stone-400 hover:text-[#486245] dark:hover:text-white transition-all text-sm font-medium">Our Story</a></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h6 className="font-headline font-extrabold text-[#486245] mb-6 uppercase tracking-widest text-xs">
            Support
          </h6>
          <ul className="space-y-4">
            <li><a href="#" className="text-stone-600 dark:text-stone-400 hover:text-[#486245] dark:hover:text-white transition-all text-sm font-medium">Privacy Policy</a></li>
            <li><a href="#" className="text-stone-600 dark:text-stone-400 hover:text-[#486245] dark:hover:text-white transition-all text-sm font-medium">Terms of Service</a></li>
            <li><a href="#" className="text-stone-600 dark:text-stone-400 hover:text-[#486245] dark:hover:text-white transition-all text-sm font-medium">Cookie Settings</a></li>
            <li><a href="#" className="text-stone-600 dark:text-stone-400 hover:text-[#486245] dark:hover:text-white transition-all text-sm font-medium">Sustainability Report</a></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h6 className="font-headline font-extrabold text-[#486245] mb-6 uppercase tracking-widest text-xs">
            Contact
          </h6>
          <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-4">
            Renroc, Horsted Pond Ln<br />Uckfield TN22 5TH, UK
          </p>
          <p className="text-[#486245] font-bold text-sm">info@sussexhomevets.com</p>
          <p className="text-[#486245] font-bold text-sm">+44 7845 176339</p>
        </div>
      </div>
      <div className="px-12 py-10 max-w-7xl mx-auto border-t border-stone-200 dark:border-stone-700 text-center">
        <span className="text-stone-600 dark:text-stone-400 text-sm font-['Inter']">
          © 2024 Sussex Home Vets. Serving Uckfield and the Sussex area.
        </span>
      </div>
    </footer>
  );
}
