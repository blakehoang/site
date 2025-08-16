import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle } from 'lucide-react'

export function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="contact" className="py-24 bg-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            Let's Make Influencer Marketing
            <span className="block">Work for You</span>
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Whether you need one creator or a full campaign, we'll build a custom solution.
          </p>
          
          <div className="flex justify-center pt-8">
            <Button 
              size="lg"
              className="btn-hero group px-8 py-4 text-lg font-semibold shadow-soft"
              onClick={scrollToContact}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat Now!
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}