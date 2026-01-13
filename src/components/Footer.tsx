export default function Footer() {
  return (
    <footer className="bg-[#1a2847] py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center items-center mb-4">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent to-[#d4a574] mx-4"></div>
          <div className="relative">
            <img
              src="/4211aacc-bfba-443a-89dd-d3676d5e55ec.jpg"
              alt="Justiora Foundation"
              className="relative h-16 w-16 rounded-full object-cover"
            />
          </div>
          <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent to-[#d4a574] mx-4"></div>
        </div>
        <p className="text-gray-400 text-xs">
          &copy; 2026 Justiora Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
