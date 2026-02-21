export default function About() {
  return (
    <div className="min-h-screen bg-[#e8dcc8]">
      <div className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <img
              src="/4211aacc-bfba-443a-89dd-d3676d5e55ec.jpg"
              alt="Justiora Foundation"
              className="h-32 w-32 mx-auto rounded-full object-cover mb-6"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-[#2c1810] mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
              About Justiora Foundation
            </h1>
          </div>

          <div className="bg-[#f5eee0] rounded-lg shadow-2xl p-8 md:p-12 border border-[#c4b498]">
            <div className="space-y-6 text-[#2c1810] leading-relaxed">
              <p className="text-lg">
                Justiora Foundation is a purpose-driven organization dedicated to strengthening justice at the grassroots by working across three critical pillars: Environmental Justice, Legal Awareness, and Public Accountability. The Foundation believes that sustainable development, democratic governance, and social equity are only possible when citizens are informed, empowered, and able to hold institutions accountable.
              </p>

              <p className="text-lg">
                In the area of <strong>Environmental Justice</strong>, Justiora Foundation works to protect the rights of communities affected by environmental degradation, pollution, unsafe development practices, and climate-related impacts. The organization advocates for fair enforcement of environmental laws, promotes responsible use of natural resources, and supports community-led action to ensure that environmental burdens do not fall disproportionately on vulnerable and marginalized groups.
              </p>

              <p className="text-lg">
                Through <strong>Legal Awareness</strong>, the Foundation focuses on demystifying the law and making legal knowledge accessible to the public. By conducting awareness programs, workshops, and outreach initiatives, Justiora Foundation educates citizens about their constitutional rights, environmental laws, and available legal remedies. The goal is to reduce the gap between legal frameworks and real-world access to justice, enabling individuals and communities to make informed decisions and assert their rights confidently.
              </p>

              <p className="text-lg">
                The third pillar, <strong>Public Accountability</strong>, centers on promoting transparency, ethical governance, and responsible decision-making. Justiora Foundation encourages civic participation, monitors public institutions, and supports mechanisms that hold authorities accountable to the law and the public interest. By fostering a culture of accountability, the Foundation aims to strengthen democratic processes and build trust between citizens and institutions.
              </p>

              <p className="text-lg">
                Guided by the belief that justice is a shared responsibility, Justiora Foundation works at the intersection of law, environment, and society to create long-term, systemic change. Its efforts are rooted in inclusivity, integrity, and impact—striving to ensure that justice is not limited to legal texts, but is actively experienced in the lives of people and the protection of the environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
