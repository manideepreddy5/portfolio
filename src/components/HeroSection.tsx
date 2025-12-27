import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import profilePhoto from '@/assets/profile-photo.jpg'
import heroBg from '@/assets/hero-bg.jpg'

const techStack = ['Python', 'SQL', 'Power BI', 'Excel', 'EDA']

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* LIGHT READABILITY OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/30 to-background/15" />

      <div className="relative z-10 w-full">
        <div
          className="
            section-container
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            items-center
          "
        >

          {/* LEFT CONTENT */}
          <div className="space-y-5 text-center lg:text-left">

            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              Hello, I’m
            </p>

            <h1 className="font-display font-bold leading-tight">
              <span className="block text-4xl sm:text-5xl lg:text-[64px] text-primary">
                Manideep
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-[64px] text-foreground">
                Reddy
              </span>
            </h1>

            {/* TAGLINE – ONE LINE ON DESKTOP, WRAPS ON MOBILE */}
            <p
              className="
                text-base sm:text-lg md:text-xl
                font-medium text-foreground/80
                max-w-xl mx-auto lg:mx-0
                lg:whitespace-nowrap
              "
            >
              <span className="text-primary font-semibold">Data Analyst</span>
              <span className="mx-2 text-muted-foreground">—</span>
              Transforming data into clear, actionable insights
            </p>

            {/* DESCRIPTION */}
            <p className="max-w-xl mx-auto lg:mx-0 text-muted-foreground text-base leading-relaxed">
              Computer Science graduate with strong foundations in Python, SQL,
              and data analysis. Passionate about extracting insights from raw
              data through structured analysis and effective visualization.
            </p>

            {/* SKILLS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <a
                  href="/mywebsite5/Manideep_Reddy_Resume.pdf"
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

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="
                relative
                w-[220px]
                sm:w-[260px]
                md:w-[300px]
                lg:w-[310px]
                xl:w-[370px]
              "
            >
              <img
                src={profilePhoto}
                alt="Manideep Reddy"
                className="
                  w-full h-auto object-contain
                  drop-shadow-[0_18px_36px_rgba(0,0,0,0.18)]
                  contrast-[1.02] saturate-[1.05]

                  /* Fade ONLY on desktop */
                  lg:[mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]
                  lg:[-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]
                "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}