import { Mail, Linkedin, Github } from 'lucide-react'

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="section-title">Let’s Connect</h2>
          <p className="section-subtitle mt-2">
            Open to opportunities and professional discussions
          </p>
          <div className="mx-auto mt-3 w-10 h-1 bg-primary rounded-full" />
        </div>

        {/* Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-10 shadow-card hover:shadow-card-hover transition-all duration-300 text-center">
            
            {/* Email */}
            <div className="flex justify-center items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <a
                href="mailto:manideep2585@gmail.com"
                className="text-lg font-medium text-primary hover:underline break-all"
              >
                manideep2585@gmail.com
              </a>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/manideepreddygummadi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>

              <a
                href="https://github.com/manideepreddy5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-muted transition-all"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
