import { Mail, Linkedin, Github } from 'lucide-react'

export const ContactSection = () => {
  return (
    <section id="contact" className="py-10 bg-background">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="section-title">Let’s Connect</h2>
          <p className="section-subtitle mt-2">
            Open to opportunities and professional discussions
          </p>
          <div className="mx-auto mt-3 w-10 h-1 bg-primary rounded-full" />
        </div>

        {/* Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-6 sm:p-10 shadow-card hover:shadow-card-hover transition-all duration-300 text-center">
            
            {/* Email - Fixed to stay in one line/containment on mobile */}
            <div className="flex flex-row justify-center items-center gap-2 sm:gap-3 mb-8 flex-nowrap">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <a
                href="mailto:manideep2585@gmail.com"
                className="text-[13px] xs:text-sm sm:text-lg font-medium text-primary hover:underline truncate"
              >
                manideep2585@gmail.com
              </a>
            </div>

            {/* Buttons - Kept your original styles exactly */}
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/manideepreddygummadi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all text-sm sm:text-base"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                LinkedIn
              </a>

              <a
                href="https://github.com/manideepreddy5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-muted transition-all text-sm sm:text-base"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}