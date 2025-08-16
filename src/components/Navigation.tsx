import { useState, useEffect } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border shadow-soft transition-all duration-300">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/5b99bf3c-91a1-45ac-b087-93527af7a347.png" 
              alt="4FOUR SOCIAL" 
              className="h-24 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-black dark:text-white hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-black dark:text-white hover:text-foreground transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-black dark:text-white hover:text-foreground transition-colors"
            >
              FAQ
            </button>
            <ThemeToggle />
            <Button 
              onClick={() => scrollToSection('contact')}
              className="btn-hero"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('services')} 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
              >
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-hero w-full mt-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}