import { Code, BarChart3, PieChart, Database } from 'lucide-react';

const skillGroups = [
  {
    title: 'Programming & Data',
    icon: Code,
    skills: ['Python', 'SQL'],
  },
  {
    title: 'Data Analysis',
    icon: BarChart3,
    skills: [
      'Data Cleaning & Preparation',
      'Exploratory Data Analysis (EDA)',
      'Descriptive Statistics',
      'Hypothesis Testing',
    ],
  },
  {
    title: 'Visualization & BI',
    icon: PieChart,
    skills: [
      'Power BI',
      'Tableau',
      'Excel Dashboards',
      'Data Storytelling',
    ],
  },
  {
    title: 'Databases & Tools',
    icon: Database,
    skills: [
      'MySQL',
      'Relational Databases',
      'Git & GitHub',
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-background">
      <div className="section-container">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="section-title">Skills</h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Technologies and analytical capabilities I work with
          </p>

          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
                bg-card
                border border-border
                rounded-2xl
                p-6
                shadow-sm
                hover:shadow-md
                transition-all
                min-h-[300px]
                flex flex-col
              "
            >
              {/* CARD HEADER — FIXED */}
              <div className="h-[72px] flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <group.icon className="w-5 h-5 text-primary" />
                </div>

                <h3 className="text-[15px] font-semibold text-foreground whitespace-nowrap">
                  {group.title}
                </h3>
              </div>

              {/* CONTENT — PUSHED LEFT */}
              <ul className="ml-1 space-y-2 text-sm text-muted-foreground leading-relaxed">
                {group.skills.map((skill) => (
                  <li key={skill} className="whitespace-nowrap">
                    • {skill}
                  </li>
                ))}
              </ul>

              <div className="flex-grow" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
