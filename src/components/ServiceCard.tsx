export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  price?: number;
  priceUnit?: string;
  colorClass: string;
  bgClass: string;
}

export default function ServiceCard({ icon, title, description, price, priceUnit, colorClass, bgClass }: ServiceCardProps) {
  return (
    <div className={`group ${bgClass} p-10 rounded-xl hover:bg-surface-container-lowest transition-all duration-300 cursor-pointer hover:shadow-xl relative overflow-hidden flex flex-col h-full`}>
      <div className="w-16 h-16 bg-primary-container rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shrink-0">
        <span className={`material-symbols-outlined ${colorClass} text-3xl`}>{icon}</span>
      </div>
      <h3 className={`font-headline text-2xl font-bold mb-4 shrink-0 ${colorClass === 'text-primary' ? 'text-primary' : 'text-on-surface'}`}>
        {title}
      </h3>
      <p className="text-on-surface-variant leading-relaxed flex-grow">
        {description}
      </p>
      {price && (
        <div className={`mt-auto pt-6 shrink-0 text-3xl font-headline font-extrabold ${colorClass}`}>
          ${price} <span className="text-sm font-medium text-on-surface-variant">/ {priceUnit}</span>
        </div>
      )}
    </div>
  );
}
