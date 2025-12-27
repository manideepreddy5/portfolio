import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech in Computer Science & Engineering (IoT)',
    institution: 'ACE Engineering College',
    year: '2021 – 2025',
    grade: 'CGPA: 7.2 / 10',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya Junior College',
    year: '2019 – 2021',
    grade: '87%',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Brilliant Grammar High School',
    year: '2018 – 2019',
    grade: 'GPA: 8.7 / 10',
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="section-container">
        
        {/* SECTION HEADER (MATCHES ABOUT & SKILLS) */}
        <div className="text-center mb-8">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle mt-2">My academic journey</p>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        {/* EDUCATION CARDS */}
        <div className="max-w-3xl mx-auto space-y-6">
          {educationData.map((edu, idx) => (
            <div
              key={edu.degree}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                
                {/* ICON */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold font-display text-foreground mb-1">
                    {edu.degree}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.institution}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.year}
                    </span>
                  </div>

                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {edu.grade}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
