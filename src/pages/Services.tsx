export default function Services() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-8 mb-24 relative">
        <div className="md:w-2/3">
          <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tight text-primary mb-6 leading-[1.1]">
            Clear Vet Fees. <br />Exceptional Care.
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
            Transparent vet pricing and holistic services tailored to your pet's unique journey. Experience the Sussex Home Vets difference with complete financial peace of mind.
          </p>
        </div>

        {/* Floating Rotating Badge */}
        <div className="absolute right-8 top-0 hidden lg:block">
          <div className="relative w-40 h-40">
            <svg className="rotating-badge w-full h-full" viewBox="0 0 100 100">
              <path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" id="circlePath"></path>
              <text className="text-[10px] font-bold fill-tertiary uppercase tracking-widest font-label">
                <textPath href="#circlePath">Certified Organic Care • Premium Pet Sanctuary •</textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-tertiary-container rounded-full flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-on-tertiary-container text-3xl">payments</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1: Detailed Service Grid */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="group bg-surface-container-low p-10 rounded-xl relative overflow-hidden hover:bg-surface-container-lowest transition-colors duration-500">
            <div className="mb-8 w-14 h-14 bg-primary-container rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">medical_services</span>
            </div>
            <h3 className="text-2xl font-headline font-bold text-primary mb-3">At-Home Wellness Exams</h3>
            <p className="text-on-surface-variant mb-8 leading-relaxed">Comprehensive check-ups tailored to your pet's specific breed, all from the comfort of your living room.</p>
            <div className="text-3xl font-headline font-extrabold text-primary">£85 <span className="text-sm font-medium text-on-surface-variant">/ session (inc. VAT)</span></div>
          </div>

          {/* Service Card 2 */}
          <div className="group bg-secondary-container p-10 rounded-xl relative overflow-visible hover:shadow-xl transition-all duration-500">
            <div className="mb-8 w-14 h-14 bg-surface-container-lowest rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-3xl">vaccines</span>
            </div>
            <h3 className="text-2xl font-headline font-bold text-secondary-dim mb-3">Vaccinations</h3>
            <p className="text-on-secondary-fixed-variant mb-8 leading-relaxed">Essential preventative care and booster shots administered with minimal stress.</p>
            <div className="text-3xl font-headline font-extrabold text-secondary-dim">£150 <span className="text-sm font-medium opacity-70">/ session (inc. VAT)</span></div>
          </div>

          {/* Service Card 3 */}
          <div className="group bg-tertiary-container/30 p-10 rounded-xl relative overflow-hidden hover:bg-tertiary-container/50 transition-colors duration-500">
            <div className="mb-8 w-14 h-14 bg-tertiary-container rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-on-tertiary-container text-3xl">favorite</span>
            </div>
            <h3 className="text-2xl font-headline font-bold text-on-tertiary-container mb-3">Compassionate End-of-Life Care</h3>
            <p className="text-on-tertiary-fixed-variant mb-8 leading-relaxed">Dignified, peaceful farewells in the sanctuary of your own home.</p>
            <div className="text-3xl font-headline font-extrabold text-on-tertiary-container">£150 <span className="text-sm font-medium opacity-70">/ session (inc. VAT)</span></div>
          </div>

          {/* Service Card 4 */}
          <div className="group bg-surface-container-low p-10 rounded-xl relative overflow-hidden hover:bg-surface-container-lowest transition-colors duration-500">
            <div className="mb-8 w-14 h-14 bg-primary-container rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">biotech</span>
            </div>
            <h3 className="text-2xl font-headline font-bold text-primary mb-3">Diagnostic Consultations</h3>
            <p className="text-on-surface-variant mb-8 leading-relaxed">In-depth analysis and collaborative care with our advanced surgical partners.</p>
            <div className="text-3xl font-headline font-extrabold text-primary">£95 <span className="text-sm font-medium text-on-surface-variant">/ consult (inc. VAT)</span></div>
          </div>

          {/* Service Card 5 */}
          <div className="group bg-surface-container p-10 rounded-xl relative overflow-visible hover:bg-surface-container-high transition-all duration-500">
            <div className="mb-8 w-14 h-14 bg-surface-container-lowest rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">home_health</span>
            </div>
            <h3 className="text-2xl font-headline font-bold text-primary mb-3">At-Home Medical Care</h3>
            <p className="text-on-surface-variant mb-8 leading-relaxed">Treatment plans and medication administration without the anxious clinic trips.</p>
            <div className="text-3xl font-headline font-extrabold text-primary">£180 <span className="text-sm font-medium text-on-surface-variant">/ session (inc. VAT)</span></div>
          </div>

          {/* Service Card 6 */}
          <div className="group bg-primary-container p-10 rounded-xl relative overflow-hidden hover:shadow-lg transition-colors duration-500">
            <div className="mb-8 w-14 h-14 bg-surface-container-lowest rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
            </div>
            <h3 className="text-2xl font-headline font-bold text-primary-dim mb-3">Behavioural Care</h3>
            <p className="text-on-primary-fixed-variant mb-8 leading-relaxed">Positive reinforcement training focusing on emotional well-being and bonding.</p>
            <div className="text-3xl font-headline font-extrabold text-primary-dim">£110 <span className="text-sm font-medium opacity-70">/ session (inc. VAT)</span></div>
          </div>
        </div>
      </section>

      {/* Section: Financial Transparency & Estimate Tool */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Financial Transparency Content */}
          <div className="lg:w-2/3 bg-surface-container-low p-12 rounded-3xl border border-outline-variant/20">
            <h2 className="text-4xl font-headline font-extrabold text-primary mb-8">Financial Transparency</h2>
            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
              <p>At Sussex Home Vets, we recognise that discussing vet pricing can be difficult. We are committed to absolute clarity so you can focus on your pet's health without financial surprises.</p>
              <div className="bg-primary-container/30 p-8 rounded-2xl border-l-8 border-primary">
                <h4 className="text-primary font-headline font-bold text-xl mb-3">The £500 Estimate Rule</h4>
                <p className="text-on-primary-container">For any non-emergency treatment expected to exceed £500 (inc. VAT), we will provide a written estimate in advance, including anticipated aftercare costs. You will receive a fully itemised bill for every service.</p>
              </div>
              <p>Whether it is a routine checkup or a complex programme of care, our team is always available to discuss fees and payment options before any treatment begins.</p>
            </div>
          </div>

          {/* Interactive Request Widget */}
          <aside className="lg:w-1/3">
            <div className="bg-primary p-10 rounded-3xl text-on-primary neo-shadow sticky top-32">
              <span className="material-symbols-outlined text-5xl mb-6">description</span>
              <h3 className="text-2xl font-headline font-extrabold mb-4">Request an Estimate</h3>
              <p className="mb-8 opacity-90 leading-relaxed">Need a formal written estimate for an upcoming procedure or treatment plan?</p>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Estimate request sent! We will contact you shortly.'); }}>
                <div>
                  <label className="block text-sm font-bold mb-1 opacity-80" htmlFor="your-name">Your Name</label>
                  <input className="w-full bg-white/10 border-white/20 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all text-white placeholder:text-white/40" id="your-name" placeholder="E.g. Jane Doe" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1 opacity-80" htmlFor="your-email">Your Email</label>
                  <input className="w-full bg-white/10 border-white/20 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all text-white placeholder:text-white/40" id="your-email" placeholder="jane@example.com" type="email" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1 opacity-80" htmlFor="pet-name">Pet's Name</label>
                  <input className="w-full bg-white/10 border-white/20 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all text-white placeholder:text-white/40" id="pet-name" placeholder="E.g. Barnaby" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1 opacity-80" htmlFor="service">Required Treatment</label>
                  <select className="w-full bg-white/10 border-white/20 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all text-white appearance-none" id="service" defaultValue="">
                    <option value="" disabled className="text-on-surface">Select a service...</option>
                    <option value="surgery" className="text-on-surface">Surgery</option>
                    <option value="diagnostics" className="text-on-surface">Specialised Diagnostics</option>
                    <option value="dental" className="text-on-surface">Dental Work</option>
                    <option value="other" className="text-on-surface">Other</option>
                  </select>
                </div>
                <button className="w-full bg-primary-container text-on-primary-container font-headline font-bold py-3 rounded-full shadow-lg hover:bg-white transition-all mt-4" type="submit">
                  Send Request
                </button>
              </form>
              <p className="text-xs mt-6 opacity-70 text-center italic">Response within 24 working hours.</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Section: Prescriptions */}
      <section className="max-w-7xl mx-auto px-8 py-32 border-t border-outline-variant/10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-headline font-extrabold text-primary mb-8">Prescriptions</h2>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
              We ensure your pets receive the exact medicine they need, either directly through our clinic or via your preferred pharmacy.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-container p-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary">medical_services</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-primary text-lg">First Medicine</h4>
                  <p className="text-on-surface-variant font-bold text-2xl">£21.00 <span className="text-sm font-normal">(inc. VAT)</span></p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-container p-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary">add_circle</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-primary text-lg">Additional Medicine</h4>
                  <p className="text-on-surface-variant font-bold text-2xl">£12.50 <span className="text-sm font-normal">(on same prescription, inc. VAT)</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-surface-container-low p-12 rounded-3xl border-2 border-primary/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              <h3 className="text-3xl font-headline font-bold text-primary mb-6 relative">Your Right to a Prescription</h3>
              <p className="text-on-surface-variant leading-relaxed mb-10 text-lg relative">
                You have the right to request a prescription and buy medicine from your pharmacy of choice. Our prescription fees are capped at £21 for the first medicine and £12.50 for each additional medicine on the same prescription.
              </p>
              <a className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-full font-headline font-bold neo-shadow hover:scale-[1.02] transition-all" href="https://vmd.defra.gov.uk/register/online-retailers" rel="noopener noreferrer" target="_blank">
                <span>VMD Register of Online Retailers</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Complaints & Mediation */}
      <section className="bg-surface-container-high py-32 rounded-[4rem]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-extrabold text-primary mb-4">In-House Complaints & Mediation</h2>
            <p className="text-on-surface-variant text-lg">Your feedback helps us maintain our high standards. If we haven't met your expectations, we have a clear 3-step resolution process.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-surface p-8 rounded-2xl relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-on-primary rounded-full flex items-center justify-center font-headline font-bold">1</div>
              <h4 className="font-headline font-bold text-primary mb-3">Informal Resolution</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">Speak with our Practice Manager for an informal chat. Most concerns can be resolved quickly through open dialogue.</p>
            </div>
            {/* Step 2 */}
            <div className="bg-surface p-8 rounded-2xl relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-on-primary rounded-full flex items-center justify-center font-headline font-bold">2</div>
              <h4 className="font-headline font-bold text-primary mb-3">Formal Internal Review</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">If unresolved, submit a formal written review. We guarantee a thorough investigation and a response within 14 days.</p>
            </div>
            {/* Step 3 */}
            <div className="bg-surface p-8 rounded-2xl relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-on-primary rounded-full flex items-center justify-center font-headline font-bold">3</div>
              <h4 className="font-headline font-bold text-primary mb-3">Independent Mediation</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">Should you remain dissatisfied, we will refer you to the Veterinary Client Mediation Service (VCMS) for independent resolution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: FAQ */}
      <section className="max-w-4xl mx-auto px-8 py-32">
        <h2 className="text-4xl font-headline font-extrabold text-primary mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <details className="group bg-surface-container-low rounded-lg transition-all duration-300 open:bg-surface-container-lowest open:shadow-md">
            <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
              <span className="text-xl font-headline font-bold text-primary">Do you accept pet insurance?</span>
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
            </summary>
            <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
              Yes, we work with most major pet insurance providers. We provide itemised receipts and can help with direct claim filing for many premium plans.
            </div>
          </details>
          <details className="group bg-surface-container-low rounded-lg transition-all duration-300 open:bg-surface-container-lowest open:shadow-md">
            <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
              <span className="text-xl font-headline font-bold text-primary">How far in advance should I book?</span>
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
            </summary>
            <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
              For wellness exams, we recommend 1-2 weeks. For luxury boarding during holiday seasons, we suggest booking 2-3 months in advance as our sanctuary suites fill up quickly.
            </div>
          </details>
          <details className="group bg-surface-container-low rounded-lg transition-all duration-300 open:bg-surface-container-lowest open:shadow-md">
            <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
              <span className="text-xl font-headline font-bold text-primary">Can I customise my pet's care plan?</span>
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
            </summary>
            <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">
              Absolutely. We believe every pet is unique. During your initial consultation, we'll design a holistic strategy that balances nutritional needs, physical activity, and social enrichment tailored to your companion.
            </div>
          </details>
        </div>
      </section>
    </main>
  );
}
