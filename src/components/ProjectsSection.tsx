import { Cpu } from 'lucide-react'

const projects = [
  {
    title: 'Secure Haven – IoT Gated Community Management System',
    description:
      'Designed and implemented an IoT-based gated community management system to enhance security, energy efficiency, and operational monitoring. The system integrates smart sensors and RFID-based access control to collect real-time environmental and usage data, which is analyzed and visualized through dashboards for informed decision-making.',
    tags: ['IoT', 'Python', 'Data Analytics', 'Dashboards', 'Real-Time Monitoring'],
    icon: Cpu,
    highlights: [
      'Real-time sensor data collection and monitoring',
      'Energy usage analysis and pattern identification',
      'Research published in IJSRET (2025)',
    ],
  },
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle mt-2">
            Notable work and academic contributions
          </p>
          <div className="mx-auto mt-3 w-10 h-1 bg-primary rounded-full" />
        </div>

        {/* Project Card */}
        <div className="max-w-4xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Title Row */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Major Project
                  </span>
                  <h3 className="text-2xl font-bold font-display text-foreground">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-2 text-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
