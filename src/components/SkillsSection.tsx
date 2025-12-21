import { Code, BarChart3, Brain, Globe, Users, Award } from 'lucide-react';

const skillCategories = [
  {
    title: 'Technical Skills',
    icon: Code,
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'SQL', icon: '🗄️' },
      { name: 'B.Tech CSE (IoT)', icon: '🎓' },
      { name: 'ACE Engineering College', icon: '🏛️' },
      { name: '2021 - 2025', icon: '📅' },
    ],
  },
  {
    title: 'Training & Certifications',
    icon: Award,
    skills: [
      { name: 'Data Analytics - Deloitte', icon: '📊' },
      { name: 'Python - Cisco Academy', icon: '🐍' },
      { name: 'RPA - UiPath', icon: '🤖' },
    ],
  },
  {
    title: 'Tools',
    icon: BarChart3,
    skills: [
      { name: 'Power BI', icon: '📈' },
      { name: 'Tableau', icon: '📉' },
      { name: 'Excel (Advanced)', icon: '📊' },
      { name: 'NumPy & Pandas', icon: '🔢' },
      { name: 'Matplotlib & Seaborn', icon: '🎨' },
    ],
  },
];

const additionalSkills = [
  { category: 'AI/ML', items: ['Machine Learning', 'Generative AI', 'Scikit-learn'] },
  { category: 'Web', items: ['HTML5', 'CSS3', 'Flask'] },
  { category: 'Soft Skills', items: ['Analytical Thinking', 'Problem Solving', 'Time Management', 'Adaptability'] },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle mt-2">Technologies and tools I work with</p>
        </div>

        {/* Main Skill Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-display text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors cursor-default"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-foreground font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalSkills.map((group, idx) => (
            <div
              key={group.category}
              className="bg-card rounded-xl p-5 shadow-card animate-fade-in"
              style={{ animationDelay: `${(idx + 3) * 0.1}s` }}
            >
              <h4 className="font-semibold text-primary mb-3 font-display">{group.category}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
