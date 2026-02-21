import { useEffect, useRef, useState } from 'react';

type Marker = {
  id: string;
  name: string;
  top: string;
  left: string;
  locations: string[];
};

const markers: Marker[] = [
  { id: 'haryana', name: 'Haryana', top: '9.86%', left: '30.34%', locations: ['Rewari', 'Sirsa', 'Sonipat', 'Chandigarh'] },
  { id: 'up', name: 'Uttar Pradesh', top: '16.31%', left: '45.47%', locations: ['Lucknow', 'Kanpur', 'Prayagraj', 'Meerut', 'Gorakhpur', 'Agra', 'Varanasi', 'Ghaziabad', 'Greater Noida', 'Bareilly'] },
  { id: 'uttarakhand', name: 'Uttarakhand', top: '11.63%', left: '41.48%', locations: ['Haridwar', 'Rudrapur', 'Dehradun', 'Roorkee'] },
  { id: 'jharkhand', name: 'Jharkhand', top: '21.38%', left: '58.21%', locations: ['Ranchi', 'Jamshedpur', 'Bokaro', 'Dhanbad', 'Adityapur', 'Ramgarh', 'Girdhi', 'Hazaribagh', 'Devgarh'] },
  { id: 'bihar', name: 'Bihar', top: '17.79%', left: '59.64%', locations: ['Patna', 'Hajipur', 'Gaya'] },
  { id: 'jammu', name: 'Jammu & Kashmir', top: '5.89%', left: '29.33%', locations: ['Pulwama', 'Jammu', 'Shempora', 'Baithali'] },
  { id: 'himachal', name: 'Himachal Pradesh', top: '8.73%', left: '35.67%', locations: ['Baddi', 'Solan', 'Shimla'] },
  { id: 'punjab', name: 'Punjab', top: '12.70%', left: '31.61%', locations: ['Ludhiana', 'Jalandhar', 'Mohali', 'Amritsar', 'Rajpura'] },
  { id: 'rajasthan', name: 'Rajasthan', top: '16.77%', left: '25.09%', locations: ['Jaipur', 'Jodhpur', 'Kota', 'Udaipur'] },
  { id: 'gujarat', name: 'Gujarat', top: '21.97%', left: '17.90%', locations: ['Ahmedabad', 'Vadodara', 'Surat', 'Rajkot', 'Vapi'] },
  { id: 'maharashtra', name: 'Maharashtra', top: '27.84%', left: '29.05%', locations: ['Nashik', 'Nagpur', 'Pune', 'Mumbai', 'Mahabaleshwar', 'Navi Mumbai', 'Airoli'] },
  { id: 'mp', name: 'Madhya Pradesh', top: '22.09%', left: '37.33%', locations: ['Bhopal', 'Devashri', 'Gwalior', 'Indore'] },
  { id: 'karnataka', name: 'Karnataka', top: '34.83%', left: '29.87%', locations: ['Bengaluru', 'Tumkur', 'Belagavi', 'Mangalore'] },
  { id: 'wb', name: 'West Bengal', top: '21.68%', left: '66.83%', locations: ['Kolkata', 'Bengal'] },
  { id: 'delhi', name: 'Delhi (Head Office)', top: '12.73%', left: '34.71%', locations: ['Head Office - Delhi'] },
  { id: 'ap', name: 'Andhra Pradesh', top: '34.37%', left: '40.36%', locations: ['Amravati'] },
  { id: 'telangana', name: 'Telangana', top: '29.97%', left: '40.03%', locations: ['Hyderabad'] },
  { id: 'kerala', name: 'Kerala', top: '41.45%', left: '31.99%', locations: [] },
];

export default function IndiaMap() {
  const [active, setActive] = useState<Marker | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null | undefined>(undefined); // undefined = loading
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // positions stored as percent strings, initial from markers (no edit UI)
  const [positions] = useState<Record<string, { top: string; left: string }>>(() => {
    const base: Record<string, { top: string; left: string }> = {};
    for (const m of markers) base[m.id] = { top: m.top, left: m.left };
    return base;
  });
  const [imgOffsetY] = useState<number>(() => {
    try {
      const raw = localStorage.getItem('indiaMapOffsetY');
      return raw ? Number(raw) : -0.28; // saved default offset from user
    } catch {
      return -0.28;
    }
  });

  useEffect(() => {
    async function detect() {
      try {
        let res = await fetch('/india-custom.png', { method: 'HEAD' });
        if (res.ok) {
          setImageSrc('/india-custom.png');
          return;
        }
      } catch {}

      try {
        let res2 = await fetch('/india-map.png', { method: 'HEAD' });
        if (res2.ok) {
          setImageSrc('/india-map.png');
          return;
        }
      } catch {}

      setImageSrc(null);
    }

    // (no edit UI) positions come from source defaults
    detect();
  }, []);

  // Render image into canvas and remove near-white pixels (make transparent)
  useEffect(() => {
    if (!imageSrc || !containerRef.current || !canvasRef.current) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;

    let mounted = true;

    function renderCanvas() {
      if (!mounted || !containerRef.current || !canvasRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      canvas.width = Math.max(1, Math.floor(rect.width));
      canvas.height = Math.max(1, Math.floor(rect.height));
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // draw with contain behavior
      const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
      const drawW = img.width * scale;
      const drawH = img.height * scale;
      const dx = (canvas.width - drawW) / 2;
      const dy = (canvas.height - drawH) / 2 + imgOffsetY * canvas.height; // offset as fraction of container height
      ctx.drawImage(img, dx, dy, drawW, drawH);

      try {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const threshold = 240; // near-white threshold
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i], g = data[i + 1], b = data[i + 2];
          if (r >= threshold && g >= threshold && b >= threshold) {
            data[i + 3] = 0;
          }
        }
        ctx.putImageData(imageData, 0, 0);
      } catch (e) {
        // cross-origin or other errors can prevent pixel access
        // fallback: no processing
      }
    }

    img.onload = () => {
      renderCanvas();
      window.addEventListener('resize', renderCanvas);
    };

    // if image already loaded (cache) render immediately
    if (img.complete) {
      renderCanvas();
      window.addEventListener('resize', renderCanvas);
    }

    return () => {
      mounted = false;
      window.removeEventListener('resize', renderCanvas);
    };
  }, [imageSrc, imgOffsetY]);

  // persist imgOffsetY
  useEffect(() => {
    try {
      localStorage.setItem('indiaMapOffsetY', String(imgOffsetY));
    } catch {}
  }, [imgOffsetY]);

  // Edit features removed: no drag/pointer handlers, no export/reset

  return (
    <div className="my-4 h-full">
      <h2 className="text-2xl font-bold text-[#2c1810] mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
        Our Presence in India
      </h2>

      <div className="relative w-full rounded-lg overflow-hidden bg-transparent h-[520px] md:h-[760px] lg:h-[900px]">
        {/* Edit controls removed */}

        {imageSrc === undefined ? (
          <div className="flex items-center justify-center h-96">Loading map…</div>
        ) : imageSrc ? (
          <div className="relative w-full h-full" ref={containerRef}>
            <canvas ref={canvasRef} className="w-full h-full object-cover select-none pointer-events-none" style={{ backgroundColor: 'transparent' }} />

            {/* Overlay clickable markers positioned with percentages (static) */}
            {markers.map((m) => (
              <button
                key={m.id}
                onClick={() => setActive(m)}
                title={m.name}
                aria-label={m.name}
                className={`absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none z-10 cursor-pointer`}
                style={{ top: positions[m.id]?.top ?? m.top, left: positions[m.id]?.left ?? m.left }}
              >
                <span className={`inline-block transform transition hover:scale-110`}>
                  <svg className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#FF9933" stroke="#FFFFFF" strokeWidth="0.8" />
                    <circle cx="12" cy="9" r="2.2" fill="#FFFFFF" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="p-6 text-center">
            <p className="mb-4">Map image not found.</p>
            <p className="text-sm text-gray-600 mb-4">To use a custom map, save your image as <strong>public/india-custom.png</strong> in the project root, then reload. The app will also use <strong>public/india-map.png</strong> if present.</p>
            <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center">
              <span className="text-sm text-gray-500">Map placeholder</span>
            </div>
          </div>
        )}

        {active && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/40" onClick={() => setActive(null)} />
            <div className="relative bg-white rounded-lg max-w-md w-full p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3">{active.name}</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4 text-[#2c1810]">
                {active.locations.length > 0 ? (
                  active.locations.map((loc) => <li key={loc}>{loc}</li>)
                ) : (
                  <li>Locations will be added soon.</li>
                )}
              </ul>
              <div className="text-right">
                <button onClick={() => setActive(null)} className="px-4 py-2 bg-[#8b6f47] text-white rounded hover:bg-[#7a5f3f]">Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
