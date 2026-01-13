export default function LegalAwareness() {
  return (
    <div className="min-h-screen">
      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-[#1e3a5f] mb-4 text-center leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
            Legal Awareness & RTI
          </h1>
          <p className="text-lg text-[#2c1810] text-center leading-snug max-w-3xl mx-auto">
            Empowering citizens through legal literacy, Right to Information access, and governance accountability mechanisms.
          </p>
        </div>
      </div>

      <div className="h-2 bg-gradient-to-r from-[#1e3a5f] via-white to-[#1e3a5f]"></div>

      <div className="bg-[#f5f5f0] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-[#1e3a5f]">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4 leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
              RTI Guidance
            </h2>
            <p className="text-base text-[#2c1810] leading-snug mb-4">
              The Right to Information Act, 2005 is a fundamental tool for transparency and accountability in governance. Justiora Foundation provides comprehensive guidance on utilizing RTI effectively.
            </p>

            <h3 className="text-xl font-semibold text-[#1e3a5f] mt-6 mb-3">How to File an RTI Application</h3>
            <ul className="space-y-2 text-[#2c1810] leading-snug">
              <li className="flex items-start">
                <span className="font-semibold mr-2 text-[#1e3a5f]">1.</span>
                <span>Identify the concerned Public Information Officer (PIO) and public authority relevant to your query.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2 text-[#1e3a5f]">2.</span>
                <span>Draft your application in clear, specific language. Specify the information sought and relevant time period.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2 text-[#1e3a5f]">3.</span>
                <span>Submit online or offline with prescribed fee (₹10 for central government, varies by state). BPL applicants are exempt.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2 text-[#1e3a5f]">4.</span>
                <span>Expect response within 30 days (48 hours for life and liberty matters).</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1e3a5f] mt-6 mb-3">Common RTI Use Cases</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#f5f5f0] p-4 rounded">
                <p className="text-[#2c1810] leading-snug"><strong>Environmental Clearances:</strong> Information on industrial projects, pollution data, compliance certificates</p>
              </div>
              <div className="bg-[#f5f5f0] p-4 rounded">
                <p className="text-[#2c1810] leading-snug"><strong>Public Works:</strong> Infrastructure budgets, contractor details, project timelines, quality reports</p>
              </div>
              <div className="bg-[#f5f5f0] p-4 rounded">
                <p className="text-[#2c1810] leading-snug"><strong>Welfare Schemes:</strong> Fund allocation, beneficiary lists, implementation status</p>
              </div>
              <div className="bg-[#f5f5f0] p-4 rounded">
                <p className="text-[#2c1810] leading-snug"><strong>Government Decisions:</strong> Meeting minutes, policy documents, correspondence records</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-[#1e3a5f]">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4 leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
              CM Window Process
            </h2>
            <p className="text-base text-[#2c1810] leading-snug mb-4">
              The Chief Minister's Window is a public grievance redressal portal allowing citizens to directly register complaints regarding government services, corruption, or administrative delays.
            </p>

            <h3 className="text-xl font-semibold text-[#1e3a5f] mt-6 mb-3">Filing Through CM Window</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-[#1e3a5f] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
                <div>
                  <p className="font-semibold text-[#1e3a5f]">Register Complaint</p>
                  <p className="text-[#2c1810] leading-snug">Access state CM portal, create account, submit detailed complaint with supporting documents.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#1e3a5f] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
                <div>
                  <p className="font-semibold text-[#1e3a5f]">Acknowledgment & Tracking</p>
                  <p className="text-[#2c1810] leading-snug">Receive unique complaint ID. Track status online through portal dashboard.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#1e3a5f] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</div>
                <div>
                  <p className="font-semibold text-[#1e3a5f]">Department Review</p>
                  <p className="text-[#2c1810] leading-snug">Complaint routed to concerned department for investigation and response.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#1e3a5f] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</div>
                <div>
                  <p className="font-semibold text-[#1e3a5f]">Resolution & Closure</p>
                  <p className="text-[#2c1810] leading-snug">Action taken report issued. Complainant notified of outcome and resolution.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#fff9e6] border-l-4 border-[#d4a574] p-4 mt-6">
              <p className="text-sm text-[#2c1810] leading-snug"><strong>Note:</strong> CM Window is not a substitute for legal proceedings but serves as an administrative remedy for grievances related to government functioning.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-[#1e3a5f]">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4 leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
              Escalation Hierarchy
            </h2>
            <p className="text-base text-[#2c1810] leading-snug mb-6">
              When initial remedies fail, understanding the escalation pathway ensures grievances reach appropriate authorities for resolution.
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2c5282] text-white p-5 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Level 1: Primary Authority</h3>
                <p className="text-sm leading-snug">Local PIO, District Officer, Municipal Authority, or Department Head. First point of contact for complaints.</p>
                <p className="text-xs mt-2 opacity-90">Timeline: 30 days for RTI response; 15-30 days for grievances</p>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-[#1e3a5f]"></div>
              </div>

              <div className="bg-gradient-to-r from-[#2c5282] to-[#3d6ba8] text-white p-5 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Level 2: First Appellate Authority</h3>
                <p className="text-sm leading-snug">RTI First Appellate Authority, Senior Departmental Officer, or Divisional Commissioner. Review unsatisfactory or delayed responses.</p>
                <p className="text-xs mt-2 opacity-90">Timeline: File within 30 days of primary response or 30 days beyond due date</p>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-[#1e3a5f]"></div>
              </div>

              <div className="bg-gradient-to-r from-[#3d6ba8] to-[#4e7dc4] text-white p-5 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Level 3: State/Central Information Commission</h3>
                <p className="text-sm leading-snug">Independent statutory body. Can impose penalties on erring PIOs, order disclosure, and ensure compliance with RTI Act.</p>
                <p className="text-xs mt-2 opacity-90">Timeline: File within 90 days of first appeal decision or non-response</p>
              </div>

              <div className="flex justify-center">
                <div className="w-1 h-8 bg-[#1e3a5f]"></div>
              </div>

              <div className="bg-gradient-to-r from-[#4e7dc4] to-[#5e8dd4] text-white p-5 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Level 4: High Court / Supreme Court</h3>
                <p className="text-sm leading-snug">Constitutional remedy through writ petitions. For serious violations of fundamental rights, systemic failures, or public interest matters.</p>
                <p className="text-xs mt-2 opacity-90">Consider legal counsel for writ jurisdiction and procedural requirements</p>
              </div>
            </div>

            <div className="mt-6 bg-[#f0f4f8] p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-[#1e3a5f] mb-3">Parallel Mechanisms</h3>
              <ul className="space-y-2 text-[#2c1810] text-sm leading-snug">
                <li><strong>Lokayukta:</strong> Anti-corruption ombudsman for complaints against public servants (state-level)</li>
                <li><strong>Central Vigilance Commission:</strong> Oversees anti-corruption measures in central government organizations</li>
                <li><strong>National/State Human Rights Commission:</strong> For human rights violations by public authorities</li>
                <li><strong>National Green Tribunal:</strong> Environmental law enforcement and compensation matters</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#1e3a5f] text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Cinzel, serif' }}>Need Assistance?</h3>
            <p className="leading-snug mb-6">Justiora Foundation provides guidance on RTI drafting, grievance filing, and navigating the legal system.</p>
            <a href="/contact" className="inline-block bg-white text-[#1e3a5f] px-8 py-3 rounded-lg font-semibold hover:bg-[#f5f5f0] transition-colors">
              Contact Us for Support
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
