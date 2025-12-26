import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import profilePhoto from '@/assets/profile-photo.jpg'
import heroBg from '@/assets/hero-bg.jpg'

const techStack = ['Python', 'SQL', 'Power BI', 'Excel', 'EDA']

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-24"
    >call 
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* READABILITY OVERLAY */}
         <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/75 to-background/45" />



      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="animate-slide-in-left space-y-5">

            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              Hello, I’m
            </p>

            <h1 className="font-display font-bold leading-tight">
              <span className="text-5xl md:text-6xl lg:text-[64px] text-primary">
                Manideep
              </span>
              <br />
              <span className="text-5xl md:text-6xl lg:text-[64px] text-foreground">
                Reddy
              </span>
            </h1>

            {/* TAGLINE – STRICT 1 LINE */}
            <p className="text-lg md:text-xl font-medium text-foreground/80 whitespace-nowrap">
              <span className="text-primary font-semibold">Data Analyst</span>
              <span className="mx-2 text-muted-foreground">—</span>
              Transforming data into clear, actionable insights
            </p>

            {/* DESCRIPTION – EXACTLY 3 LINES */}
            <p
              className="max-w-xl text-muted-foreground text-base leading-relaxed"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              Computer Science graduate with strong foundations in Python, SQL,
              and data analysis. Passionate about extracting insights from raw
              data through structured analysis and effective visualization.
            </p>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-3 pt-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA BUTTONS */}
            <div className="flex gap-4 pt-4">
              <Button variant="hero" size="lg">
                View My Resume
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
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
           <div className="relative w-[420px] md:w-[480px] lg:w-[540px] -mt-8 translate-x-14 scale-125">


            <img
              src={profilePhoto}
              alt="Manideep Reddy"
              className="w-full h-auto object-contain
              drop-shadow-[0_25px_45px_rgba(0,0,0,0.25)]
              contrast-[1.02] saturate-[1.05]
              [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]
              [-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
            />

             </div>
          </div>

        </div>
      </div>
    </section>
  )
}