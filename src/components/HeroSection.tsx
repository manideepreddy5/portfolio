import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import profilePhoto from '@/assets/profile-photo.png'
import heroBg from '@/assets/hero-bg.jpg'

const techStack = ['Python', 'SQL', 'Power BI', 'Excel', 'EDA']

export const HeroSection = () => {
  return (
    <section
      id="home"
      // bg-cover ensures the background extends to cover the photo on mobile
      className="relative pt-28 pb-20 bg-no-repeat bg-cover lg:bg-[length:1300px_auto] transition-colors duration-500"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: 'center -65px',
      }}
    >
      {/* SOFT OVERLAY: Transparent in light mode, deeper blue-tinted navy in dark mode */}
      <div className="absolute inset-0 bg-background/60 dark:bg-slate-950/80 transition-opacity" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-sm uppercase tracking-wide text-muted-foreground dark:text-slate-400 font-semibold">
              Hello, I’m
            </p>

            <h1 className="font-display font-bold leading-tight">
              <span className="block text-4xl sm:text-5xl lg:text-[60px] text-primary">
                Manideep Reddy
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-[60px] text-foreground dark:text-white">
                Gummadi
              </span>
            </h1>

            <p className="
              text-base sm:text-lg md:text-xl
              font-medium text-foreground/80 dark:text-slate-200
              max-w-xl mx-auto lg:mx-0
              lg:whitespace-nowrap
            ">
              <span className="text-primary font-semibold">Data Analyst</span>
              <span className="mx-2 text-muted-foreground">—</span>
              Transforming data into clear, actionable insights
            </p>

            <p className="max-w-xl mx-auto lg:mx-0 text-muted-foreground dark:text-slate-400 text-base leading-relaxed">
              Computer Science graduate with strong foundations in Python, SQL,
              and data analysis. Passionate about extracting insights from raw
              data through structured analysis and effective visualization.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-sky-400 border border-transparent dark:border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <a
                  href="/portfolio/Manideep_Reddy_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View My Resume
                </a>
              </Button>

              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Let’s Connect
                </a>
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE: Added a glow to fix the blending issues in dark mode */}
          <div className="flex justify-center lg:justify-end mt-10 lg:mt-0 lg:mr-[40px] relative">
            {/* Subtle blue glow behind the photo to soften the edges in dark mode */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] opacity-0 dark:opacity-40 transition-opacity pointer-events-none" />
            
            <div className="
              relative
              w-[280px]      
              sm:w-[320px]
              xl:w-[360px]
            ">
              <img
                src={profilePhoto}
                alt="Manideep Reddy"
                className="
                  w-full h-auto object-contain
                  drop-shadow-[0_18px_36px_rgba(0,0,0,0.18)]
                  dark:drop-shadow-[0_0_20px_rgba(14,165,233,0.25)]
                  contrast-[1.02] saturate-[1.05]
                "
                style={{
                  maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}