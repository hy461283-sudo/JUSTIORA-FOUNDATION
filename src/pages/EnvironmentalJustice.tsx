import { Factory, Leaf, Droplets, Wind, ThermometerSun, Recycle } from 'lucide-react';

export default function EnvironmentalJustice() {
  return (
    <div className="min-h-screen">
      <div className="relative bg-[#f5f5f0] py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            opacity: 0.12,
          }}
        />

        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: 0.05 }}
        >
          <img
            src="/untitled_design.png"
            alt="Justiora Foundation"
            className="w-64 h-64 object-contain"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[#2c1810] mb-4 leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
            Environmental Justice
          </h1>
          <p className="text-lg text-[#2c1810] max-w-3xl mx-auto leading-relaxed">
            Protecting ecosystems, ensuring equitable access to natural resources, and holding industries accountable for environmental harm.
          </p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-16">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Factory className="w-16 h-16 text-[#d4a574]" strokeWidth={1.5} />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-[#2c1810] mb-6 text-center" style={{ fontFamily: 'Cinzel, serif' }}>
              Pollution & Industry Compliance
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#f9f9f7] p-6 rounded-lg border border-[#e8dcc8]">
                <div className="flex items-start mb-4">
                  <Wind className="w-8 h-8 text-[#d4a574] mr-3 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-xl font-semibold text-[#2c1810] mb-2">Air Quality Monitoring</h3>
                    <p className="text-[#2c1810] leading-relaxed">
                      Advocating for stricter enforcement of air quality standards, monitoring industrial emissions, and raising awareness about the health impacts of air pollution on vulnerable communities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f9f9f7] p-6 rounded-lg border border-[#e8dcc8]">
                <div className="flex items-start mb-4">
                  <Droplets className="w-8 h-8 text-[#d4a574] mr-3 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-xl font-semibold text-[#2c1810] mb-2">Water Pollution Control</h3>
                    <p className="text-[#2c1810] leading-relaxed">
                      Documenting industrial discharge into water bodies, supporting affected communities in seeking remedies, and promoting clean water access as a fundamental right.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f9f9f7] p-6 rounded-lg border border-[#e8dcc8]">
                <div className="flex items-start mb-4">
                  <Recycle className="w-8 h-8 text-[#d4a574] mr-3 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-xl font-semibold text-[#2c1810] mb-2">Waste Management</h3>
                    <p className="text-[#2c1810] leading-relaxed">
                      Addressing hazardous waste disposal violations, advocating for transparent industrial practices, and ensuring proper treatment of toxic and solid waste.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f9f9f7] p-6 rounded-lg border border-[#e8dcc8]">
                <div className="flex items-start mb-4">
                  <Factory className="w-8 h-8 text-[#d4a574] mr-3 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-xl font-semibold text-[#2c1810] mb-2">Industry Accountability</h3>
                    <p className="text-[#2c1810] leading-relaxed">
                      Tracking compliance with environmental clearances, demanding transparency in industrial operations, and supporting legal action against violations of pollution control norms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <ThermometerSun className="w-16 h-16 text-[#d4a574]" strokeWidth={1.5} />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-[#2c1810] mb-6 text-center" style={{ fontFamily: 'Cinzel, serif' }}>
              Climate & Sustainability
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-[#f9f9f7] p-6 rounded-lg border-l-4 border-[#d4a574]">
                <h3 className="text-xl font-semibold text-[#2c1810] mb-3">Climate Justice Advocacy</h3>
                <p className="text-[#2c1810] leading-relaxed mb-3">
                  Climate change disproportionately affects marginalized communities. Justiora Foundation advocates for climate policies that prioritize vulnerable populations and ensure equitable adaptation resources.
                </p>
                <ul className="space-y-2 text-[#2c1810]">
                  <li className="flex items-start">
                    <span className="text-[#d4a574] mr-2">•</span>
                    <span>Amplifying voices of climate-affected communities in policy discussions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4a574] mr-2">•</span>
                    <span>Supporting grassroots climate resilience initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4a574] mr-2">•</span>
                    <span>Promoting renewable energy access in underserved areas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#f9f9f7] p-6 rounded-lg border-l-4 border-[#d4a574]">
                <h3 className="text-xl font-semibold text-[#2c1810] mb-3">Sustainable Development</h3>
                <p className="text-[#2c1810] leading-relaxed mb-3">
                  Economic development must not come at the expense of environmental degradation or social inequity. We work to integrate sustainability into development planning.
                </p>
                <ul className="space-y-2 text-[#2c1810]">
                  <li className="flex items-start">
                    <span className="text-[#d4a574] mr-2">•</span>
                    <span>Reviewing environmental impact assessments of major projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4a574] mr-2">•</span>
                    <span>Advocating for green infrastructure and sustainable urban planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d4a574] mr-2">•</span>
                    <span>Supporting eco-friendly livelihood alternatives</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#f9f9f7] p-6 rounded-lg border-l-4 border-[#d4a574]">
                <h3 className="text-xl font-semibold text-[#2c1810] mb-3">Environmental Education</h3>
                <p className="text-[#2c1810] leading-relaxed">
                  Building awareness among communities, especially youth, about climate change, sustainable practices, conservation, and the interconnection between environmental health and human well-being.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Leaf className="w-16 h-16 text-[#d4a574]" strokeWidth={1.5} />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-[#2c1810] mb-6 text-center" style={{ fontFamily: 'Cinzel, serif' }}>
              Natural Resource Protection
            </h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-[#2c1810] leading-relaxed mb-8 max-w-3xl mx-auto">
                Natural resources are the foundation of livelihoods and ecosystems. Justiora Foundation works to protect these resources from exploitation, degradation, and unjust appropriation.
              </p>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-[#f9f9f7] p-6 rounded-lg text-center border border-[#e8dcc8] hover:shadow-lg transition-shadow">
                  <Droplets className="w-12 h-12 text-[#d4a574] mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-[#2c1810] mb-3">Water Bodies</h3>
                  <p className="text-[#2c1810] leading-relaxed text-sm">
                    Protecting rivers, lakes, wetlands, and groundwater from encroachment, pollution, and over-extraction. Advocating for community rights to clean water.
                  </p>
                </div>

                <div className="bg-[#f9f9f7] p-6 rounded-lg text-center border border-[#e8dcc8] hover:shadow-lg transition-shadow">
                  <Leaf className="w-12 h-12 text-[#d4a574] mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-[#2c1810] mb-3">Forests & Green Spaces</h3>
                  <p className="text-[#2c1810] leading-relaxed text-sm">
                    Opposing illegal deforestation, defending community forest rights, and supporting conservation efforts that involve local communities.
                  </p>
                </div>

                <div className="bg-[#f9f9f7] p-6 rounded-lg text-center border border-[#e8dcc8] hover:shadow-lg transition-shadow">
                  <Factory className="w-12 h-12 text-[#d4a574] mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-[#2c1810] mb-3">Land & Commons</h3>
                  <p className="text-[#2c1810] leading-relaxed text-sm">
                    Safeguarding common lands, grazing grounds, and agricultural resources from corporate encroachment and ensuring equitable land use policies.
                  </p>
                </div>

                <div className="bg-[#f9f9f7] p-6 rounded-lg text-center border border-[#e8dcc8] hover:shadow-lg transition-shadow">
                  <Wind className="w-12 h-12 text-[#d4a574] mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-[#2c1810] mb-3">Air</h3>
                  <p className="text-[#2c1810] leading-relaxed text-sm">
                    Protecting air quality by addressing industrial emissions, vehicular pollution, and hazardous air pollutants. Advocating for clean air standards, public health safeguards, and accountability for violations of environmental laws.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-[#e8dcc8] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2c1810] mb-3 text-center">Legal Tools for Protection</h3>
                <p className="text-[#2c1810] leading-relaxed text-center mb-4">
                  We guide communities in utilizing legal frameworks such as Forest Rights Act, Water Act, Public Trust Doctrine, and environmental impact assessment provisions to protect natural resources.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
