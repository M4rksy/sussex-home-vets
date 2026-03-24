import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

const EXPERT_TEAM = [
  {
    name: "Rachael",
    role: "Veterinary Care Expert",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCak77REk4RRItbKnIFgnY50UQCKdWFyuV4H_LZ4x_hE4BA_ij4y-7IzoAwyzGrQHB7qbCoCzESaAjFIlQ2VmFJO_VOZm1XcesaBwIEXoJCgwWBy1iqpn1EBu-r_A-pcd0UeaemSCOYQVGIWCMfY_r9jbBTW0BOLnL5WDIyqK0K8swnC5y8ri1UTU7Umgy35d7Qoo3hieukkjdgdyryYAXZ8Xpo7jWN0ZQ8FQHq-_R0t1deNhMhFMOmqHBrO6223fPvdq2xbjmfJKE",
    icon: "medical_information",
    colorClass: "text-secondary",
    bgClass: "bg-tertiary-container"
  },
  {
    name: "Joe",
    role: "Veterinary Care Expert",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_z4qOF9n8LPJB3Dv1Na8B2rWhtm_YrHzLWsckeCXhEAxD4X4VevDibZvKIyxmP2xkBSaUzvF2ZXd9XteFo-MWCxZmzjWBm0amX--pjNAD7QTBsmlqZqKv8rzvEmVCG0E3mMA-GlV-dYxRng3UMN3oT2_HoWy_DBE4lMRmQIQPm7sfFsY6q1luknRk9kjOoG9oqyXGGcj3aQ9pRVjhXz3jegRi0pl5BPUWj37nmDx6maF28oMJVBdZRBLnikomxq_5bAW-JgvQ1m4",
    icon: "spa",
    colorClass: "text-primary",
    bgClass: "bg-primary-container"
  }
];

export default function Home() {
  return (
    <main className="pt-[112px]">
      {/* Hero Section */}
      <section className="relative bg-primary-container min-h-[870px] flex items-center overflow-hidden px-8 md:px-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 py-20">
            <span className="bg-tertiary-container text-on-tertiary-container px-4 py-1 rounded-full text-sm font-bold tracking-wider mb-6 inline-block">PREMIUM CARE</span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-primary-dim tracking-tight leading-[1.1] mb-8">
              We take care of your furry best friend, at home
            </h1>
            <p className="text-lg md:text-xl text-on-primary-container/80 max-w-lg mb-10 leading-relaxed">
              Where modern veterinary science meets the comfort of your living room. Experience a stress-free sanctuary designed for your pet's ultimate comfort and health.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="bg-primary text-on-primary px-8 py-4 rounded-full font-headline font-bold neo-offset-shadow active:scale-95 transition-transform flex items-center gap-2 w-max">
                Explore Services
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <div className="flex items-center gap-3 px-4">
                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-primary-container object-cover" alt="Client" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfE6xuszOrtMs_G7W0VNzz377F2PdibdgcGDXw84caYlMjd0ZFOglJI_N3md8oJLL87iiPyf43ioflRGdheisZ1FP8O7WfP1aSMM7QgCvLxXD4iVr2xTccvkCSOPQkkOmKEf3g-COIodDNvZfUgVKCnzQ_iNt_W4pH6-9U0eQMIcpeIx0hCHGfNXsElac1voRCCohFOcpPnAaPZps6FxsJp9ZEFFKPpC-m222t909GH_iAGh3K-F3Gy-8hQ684HacQiB5sCgKGIoE" />
                  <img className="w-10 h-10 rounded-full border-2 border-primary-container object-cover" alt="Client" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4VmLUCcDvsD48O2ZmMz0TyzqJPZzT_GCkC1NXNrg4C56DIO-PB-jeQ7hrC_EpqaXv1oimoIW1tQeIXmQA8mjQqXjy6BbTRSwUhNhcAWUwOhI5ONRVRrbDl8A1o_NVaTFYTPrLY7YOxB1pAMKdSjv7Cl5X2RSGuK6C9SyoG9cXvwn_wuNuj9AWfTeW_uRKqw53UvQAN4SEe1xySj9SyVJVbAUgTaYrf8CueEN0MXtoePhDFzHMC4dzYTbPgV12ZdQlWa9We1U1Zf4" />
                </div>
                <span className="text-sm font-bold text-on-primary-container">Trusted by 2k+ pet parents</span>
              </div>
            </div>
          </div>
          <div className="relative lg:h-[921px] flex items-center justify-center">
            {/* Hero Image */}
            <div className="relative w-full aspect-square md:aspect-auto md:h-full max-h-[700px] overflow-visible">
              <img className="w-full h-full object-cover rounded-xl shadow-2xl scale-110 translate-y-20 lg:translate-y-32 z-10" alt="Happy dog" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtkTZLk6nZvP8C_ou9yeBb7EvooPLqYwnyg2gkolFo_aZeuav2J7CW1zcJqqF09nYJydBqaCJH-T5C0OX6FOek_1gGPMzlsha9_2ghYu8OgbmRzR_r7FWeMJo53V-vhvEza65zdBZLhhaD2Sek9Co4X0HFUOTbUpFmZxjgQX0rXITUc1Gsw20YHEbgGoejLRL8szZ3zP7J3K1ktvVbFMU6X2nx_CCutFUndmF9T7LzLMSazo_QJyKBJU3X_Y59XgvPhIqlKtk5-xQ" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary-container/40 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-surface relative z-30 pt-48 pb-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-surface-container-lowest rounded-xl p-10 shadow-[0px_20px_40px_rgba(47,47,47,0.06)] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-surface-container gap-y-12">
            <div className="text-center flex flex-col items-center justify-center">
              <p className="text-5xl font-headline font-extrabold text-primary mb-2">4k+</p>
              <p className="text-stone-600 font-bold uppercase tracking-widest text-xs">Happy Visitors</p>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <p className="text-5xl font-headline font-extrabold text-secondary mb-2">1k+</p>
              <p className="text-stone-600 font-bold uppercase tracking-widest text-xs">Services Provided</p>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <p className="text-5xl font-headline font-extrabold text-tertiary mb-2">99%</p>
              <p className="text-stone-600 font-bold uppercase tracking-widest text-xs">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="relative bg-[#FFFAF2] py-24 overflow-visible scroll-mt-24">
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 -mt-20 lg:-mt-32 lg:-mb-32">
                <img className="w-full h-auto max-w-md mx-auto drop-shadow-2xl rounded-2xl object-cover" alt="Happy pet owners" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2O539R2DuwGAp8-FqTn99CEK9g1dDXXIozAARR96OxI8jgdfb1hu_vMv9ubk0fMy_HGqgrOW1pnV2VWmC0pbxnO39UsehwcRoWS0yRJw8RrNwiZiHs_dLTxFFVAEf42npSzZ_1YlHRSpCMY6LF6rmGCAMpl44oWT5er6iXqmg0cg6K8H6U7wcyfp-9Fu1xAqgXIGFHZAdzAnsWdjQq1eHZuWIZAFRl0XISbyRUAklIvQkEUamMwOzLmvvJ6RDht7IOspTzWKI-0c" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-8 leading-tight">Our Story</h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                <p>It started with a simple realisation: veterinary clinics shouldn't feel clinical. At Sussex Home Vets, Rachael and Joe bring nearly 40 years of combined animal care experience directly to your door. We envision a world where the sterile white walls and cold metal tables are replaced by the warmth and comfort of your own home.</p>
                <p>Sussex Home Vets was born from a deep-seated belief that healing happens best in a familiar, stress-free sanctuary.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-extrabold tracking-widest text-xs uppercase mb-4 block">Our Expertise</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface leading-tight">Which services do we provide for you?</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard icon="medical_services" title="At-Home Wellness Exams" description="Comprehensive check-ups tailored to your pet's specific breed, all from the comfort of your living room." colorClass="text-primary" bgClass="bg-surface-container-low" />
          <ServiceCard icon="vaccines" title="Vaccinations" description="Essential preventative care and booster shots administered with minimal stress." colorClass="text-secondary" bgClass="bg-surface-container-low" />
          <ServiceCard icon="favorite" title="Compassionate End-of-Life Care" description="Dignified, peaceful farewells in the sanctuary of your own home." colorClass="text-tertiary" bgClass="bg-surface-container-low" />
          <ServiceCard icon="biotech" title="Diagnostic Consultations" description="In-depth analysis and collaborative care with our advanced surgical partners." colorClass="text-on-surface" bgClass="bg-surface-container-low" />
          <ServiceCard icon="home_health" title="At-Home Medical Care" description="Treatment plans and medication administration without the anxious clinic trips." colorClass="text-primary-dim" bgClass="bg-surface-container-low" />
          <ServiceCard icon="psychology" title="Behavioral Care" description="Positive reinforcement coaching to help your pet navigate the world with confidence." colorClass="text-on-secondary-fixed" bgClass="bg-surface-container-low" />
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-surface-container">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-6">The humans behind the care.</h2>
              <p className="text-on-surface-variant mb-10 text-lg">Our specialists are more than doctors and groomers; they are dedicated pet advocates with decades of combined experience.</p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {EXPERT_TEAM.map((member, i) => (
                <div key={i} className="relative bg-surface rounded-xl p-4 shadow-sm group cursor-pointer hover:shadow-md transition-shadow duration-300">
                  <img className="w-full aspect-[4/5] object-cover rounded-lg mb-6" alt={member.name} src={member.image} />
                  <div className={`absolute top-8 right-8 ${member.bgClass} p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity`}>
                    <span className={`material-symbols-outlined text-[${member.bgClass.replace('bg-', '')}]`}>{member.icon}</span>
                  </div>
                  <h4 className="font-headline text-xl font-extrabold text-on-surface">{member.name}</h4>
                  <p className={`${member.colorClass} font-bold text-sm uppercase tracking-wider`}>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
