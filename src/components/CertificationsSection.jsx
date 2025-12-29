import { Award, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    year: "2025",
    description:
      "Completed a hands-on data analytics job simulation focused on data cleaning, exploratory data analysis, business problem solving, and translating insights into actionable recommendations.",
  },
  {
    title: "Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    year: "2023",
    description:
      "Developed a strong foundation in Python programming, covering data types, control structures, functions, and problem-solving techniques relevant to data analytics.",
  },
  {
    title: "Robotic Process Automation (UiPath)",
    issuer: "ICT Academy",
    year: "2024",
    description:
      "Gained practical knowledge of automation fundamentals, workflow creation, and process optimization using UiPath tools.",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-10 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle mt-2">
            Professional learning and skill validation
          </p>
          <div className="mx-auto mt-3 w-10 h-1 bg-primary rounded-full" />
        </div>

        {/* Certifications List */}
        <div className="max-w-3xl mx-auto space-y-6">
          {certifications.map((cert, idx) => (
            <div
              key={cert.title}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold font-display text-foreground">
                    {cert.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mt-1">
                    <span className="font-medium">{cert.issuer}</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {cert.year}
                    </span>
                  </div>

                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
