export default function Mission() {
  return (
    <div className="relative py-16 bg-[#1b2f4c]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/1st_image.png')",
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <p className="text-3xl md:text-4xl font-light text-white mb-2 leading-relaxed">
          We do not protest. We do not politicise.
        </p>
        <p className="text-3xl md:text-4xl font-light text-white leading-relaxed">
          We institutionalise public interest through law.
        </p>
      </div>
    </div>
  );
}
