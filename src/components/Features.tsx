import { Leaf, Scale, BookOpen } from 'lucide-react';

export default function Features() {
  return (
    <div className="py-16 bg-[#e8dcc8] relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('/3rd_image.jpg')",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="flex justify-center mb-5">
              <Leaf size={64} strokeWidth={1.5} className="text-[#8b6f47]" />
            </div>
            <h3 className="text-xl font-bold text-[#2c1810] mb-3" style={{ fontFamily: 'Cinzel, serif' }}>Environmental Justice</h3>
            <p className="text-[#2c1810] text-sm leading-relaxed">
              Pollution control awareness, industrial<br />
              compliance, climate protection,<br />
              and sustainable development.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-5">
              <Scale size={64} strokeWidth={1.5} className="text-[#8b6f47]" />
            </div>
            <h3 className="text-xl font-bold text-[#2c1810] mb-3" style={{ fontFamily: 'Cinzel, serif' }}>Legal Awareness & RTI</h3>
            <p className="text-[#2c1810] text-sm leading-relaxed">
              RTI drafting guidance, CM Window<br />
              awareness, statutory accountability,<br />
              governance eliteracy.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-5">
              <BookOpen size={64} strokeWidth={1.5} className="text-[#8b6f47]" />
            </div>
            <h3 className="text-xl font-bold text-[#2c1810] mb-3" style={{ fontFamily: 'Cinzel, serif' }}>Research & Policy</h3>
            <p className="text-[#2c1810] text-sm leading-relaxed">
              Documentation, publications, citizen<br />
              issue analysis, and policy-oriented<br />
              insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
