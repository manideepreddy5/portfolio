import { useState, useEffect } from 'react'
import { Menu, X, Linkedin } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between relative">

        {/* LOGO */}
        <a
          href="#home"
          aria-label="GMR Home"
          className="
            flex items-center justify-center w-11 h-11 rounded-full
            bg-gradient-to-br from-primary to-primary/80
            text-primary-foreground font-semibold text-sm tracking-wider
            shadow-md ring-1 ring-primary/30
            hover:scale-105 transition-transform shrink-0
          "
        >
          GMR
        </a>

        {/* NAV ITEMS (Updated for Tablet/Desktop) */}
        {/* Changed from absolute positioning to flex to prevent overlapping */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 mx-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                relative text-sm font-medium text-muted-foreground
                hover:text-primary transition-colors
                after:absolute after:-bottom-1 after:left-0
                after:h-[2px] after:w-0 after:bg-primary
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* RIGHT SIDE ACTIONS */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          <div className="animate-in fade-in slide-in-from-top-4 duration-1000">
            <ThemeToggle />
          </div>

          <a
            href="https://www.linkedin.com/in/manideepreddygummadi/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden sm:flex items-center gap-2
              px-4 py-2 rounded-full
              border border-[#0A66C2]/40
              text-sm font-medium text-[#0A66C2]
              hover:bg-[#0A66C2] hover:text-white
              transition-all duration-300 shadow-sm
            "
          >
            <Linkedin size={16} />
            <span className="hidden xl:inline">LinkedIn</span>
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Visible on both Tablet and Mobile) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur border-t border-border">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://www.linkedin.com/in/manideepreddygummadi/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center gap-2
                px-4 py-2 rounded-full
                border border-[#0A66C2]/40
                text-sm font-medium text-[#0A66C2]
                hover:bg-[#0A66C2] hover:text-white
                transition-all duration-300
                mt-2
              "
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}