import { Mail, MapPin } from 'lucide-react';
import IndiaMap from '../components/IndiaMap';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#e8dcc8]">
      <div className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <img
              src="/4211aacc-bfba-443a-89dd-d3676d5e55ec.jpg"
              alt="Justiora Foundation"
              className="h-32 w-32 mx-auto rounded-full object-cover mb-6"
            />

            <h1
              className="text-4xl md:text-5xl font-bold text-[#2c1810] mb-4"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Contact Us
            </h1>

            <p className="text-lg text-[#2c1810]">
              Get in touch with Justiora Foundation for support, guidance, and
              assistance
            </p>
          </div>

          <div className="bg-[#f5eee0] rounded-lg shadow-2xl p-8 md:p-12 border border-[#c4b498]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-[#8b6f47] p-4 rounded-full">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold text-[#2c1810] mb-2"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      Email
                    </h3>
                    <a
                      href="mailto:justicesupport@justiorafoundation.com"
                      className="text-lg text-[#2c1810] hover:text-[#8b6f47] transition-colors break-all"
                    >
                      justicesupport@justiorafoundation.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-[#8b6f47] p-4 rounded-full">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold text-[#2c1810] mb-2"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      Head Office
                    </h3>
                    <p className="text-lg text-[#2c1810] leading-relaxed">
                      14 New Road, Park View Mansions,
                      <br />
                      Southampton, SO14 0AY, England
                      <br />
                      <br />
                      69 Verbena House, 7 Samara Drive,
                      <br />
                      UB1 1FZ, London, England
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-[#8b6f47] p-4 rounded-full">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold text-[#2c1810] mb-2"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      Corporate Office
                    </h3>
                    <p className="text-lg text-[#2c1810] leading-relaxed">
                      3123, Sector 15D,
                      <br />
                      Chandigarh, India
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#c4b498]">
                  <h3
                    className="text-xl font-bold text-[#2c1810] mb-3"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    Office Hours
                  </h3>
                  <p className="text-lg text-[#2c1810]">
                    Monday – Saturday: 10:00 AM – 6:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>

              </div>

              {/* Right column: map */}
              <div className="flex items-start justify-center">
                <div className="w-full">
                  <IndiaMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
