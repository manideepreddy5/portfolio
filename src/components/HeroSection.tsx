import { Button } from '@/components/ui/button';
import { Download, Mail, Linkedin, Github, Twitter } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png'; // MUST be transparent PNG
import heroBg from '@/assets/hero-bg.jpg';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/manideep-reddy', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/manideep', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const techStack = ['Python', 'SQL', 'Power BI', 'Excel'];

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* DATA VISUAL BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* READABILITY OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/75 to-background/40" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div
            className="space-y-6 animate-slide-in-left"
            style={{ animationDelay: '0.2s' }}
          >
            <p className="text-muted-foreground text-lg">Hello, I'm</p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display">
              <span className="text-primary">Manideep</span>
              <br />
              <span className="text-foreground">Reddy</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/80 font-medium">
              Entry-Level Data Analyst | B.Tech CSE (IoT)
            </p>

            <p className="text-muted-foreground max-w-lg leading-relaxed">
              Motivated Computer Science Engineering graduate with strong skills in
              Python, SQL, EDA, and Data Visualization. Seeking to contribute to
              data-driven business decisions.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="lg">
                <Download className="w-5 h-5" />
                Download Resume
              </Button>

              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </a>
              </Button>
            </div>

            {/* SOCIAL + TECH */}
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}

              <span className="text-muted-foreground ml-2">|</span>

              <div className="flex gap-2 flex-wrap">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE – TRANSPARENT, NO CONTAINER */}
          <div
            className="flex justify-center lg:justify-end animate-slide-in-right"
            style={{ animationDelay: '0.4s' }}
          >
            <img
              src={profilePhoto}
              alt="Manideep Reddy - Data Analyst"
              className="w-72 md:w-96 h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
