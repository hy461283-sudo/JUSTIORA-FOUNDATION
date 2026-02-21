import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-[650px] flex items-center justify-center bg-[#e8dcc8]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('/1st_image.png')",
        }}
      />
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-16">
        <div className="mb-8">
          <img
            src="/4211aacc-bfba-443a-89dd-d3676d5e55ec.jpg"
            alt="Justiora Foundation"
            className="h-52 w-52 mx-auto rounded-full object-cover"
            style={{
              objectPosition: 'center 45%',
              transform: 'scale(1.15)'
            }}
          />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#2c1810] mb-6 leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
          Environmental Justice, Legal<br />Awareness & Public Accountability
        </h2>
        <p className="text-base md:text-lg text-[#2c1810] mb-10 max-w-4xl mx-auto leading-relaxed">
          A public charitable trust facilitating environmental protection, legal literacy,<br />
          citizen grievance guidance, and institutional public-interest action<br />
          in accordance with law.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#complaint-form"
            className="px-7 py-3 bg-[#d4c4a8] hover:bg-[#c4b498] text-[#2c1810] font-medium rounded border border-[#a89070] shadow-md transition-all"
          >
            File a Citizen Complaint
          </a>
          <Link
            to="/environmental-justice"
            className="px-7 py-3 bg-[#d4c4a8] hover:bg-[#c4b498] text-[#2c1810] font-medium rounded border border-[#a89070] shadow-md transition-all"
          >
            Environmental Legal Awareness
          </Link>
          <Link
            to="/legal-awareness"
            className="px-7 py-3 bg-[#d4c4a8] hover:bg-[#c4b498] text-[#2c1810] font-medium rounded border border-[#a89070] shadow-md transition-all"
          >
            RTI & Governance Guidance
          </Link>
        </div>
      </div>
    </div>
  );
}
