import { ExternalLink, Github, Cpu, Database, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Secure Haven – IoT Gated Community System',
    description:
      'Engineered an end-to-end IoT system for security and automation, integrating DHT11 and RFID sensors for real-time data collection. Designed a user-friendly dashboard to visualize analytics and alerts.',
    tags: ['IoT', 'Python', 'Real-time Analytics', 'Dashboard'],
    icon: Cpu,
    highlights: [
      'Real-time sensor data collection',
      'Pattern identification in energy usage',
      'Published research in IJSRET (2025)',
    ],
  },
];

const currentActivities = [
  {
    title: 'Learning & Practice',
    description:
      'Engaging with public datasets on Kaggle and real problems. Building projects to strengthen my analytical skills mindset.',
    icon: Database,
  },
  {
    title: 'Open Source & Community',
    description:
      'Contributing to data science projects and participating in data analytics competitions and weekly knowledge sharing.',
    icon: BarChart,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle mt-2">Notable work and achievements</p>
        </div>

        {/* Main Project */}
        <div className="max-w-4xl mx-auto mb-16">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
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

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  <Github className="w-4 h-4" />
                  View Code
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* What I'm Doing Now */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold font-display text-foreground">What I'm Doing Now</h3>
          <p className="text-muted-foreground mt-1">Stay focused, keep learning</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {currentActivities.map((activity, idx) => (
            <div
              key={activity.title}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <activity.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold font-display text-foreground">{activity.title}</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
