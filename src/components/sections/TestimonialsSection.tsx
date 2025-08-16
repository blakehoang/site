import { Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import testimonialPhoto1 from '@/assets/testimonial-photo-1.jpg'
import testimonialPhoto2 from '@/assets/testimonial-photo-2.jpg'
import testimonialPhoto3 from '@/assets/testimonial-photo-3.jpg'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Marketing Director",
      company: "UK-based supplement brand",
      content: "Foursocial completely transformed our approach to influencer marketing. Their data-driven strategy gave us insights we never had before.",
      photo: testimonialPhoto1
    },
    {
      name: "Marcus Thompson",
      role: "Brand Manager",
      company: "US ADs marketing agency", 
      content: "The speed and quality of their influencer sourcing is unmatched. Within 48 hours we had perfect-fit creators ready to work.",
      photo: testimonialPhoto2
    },
    {
      name: "Aisha Williams",
      role: "CEO",
      company: "Tech startup",
      content: "They didn't just run campaigns - they taught us the space and helped us build internal capabilities while scaling our presence 10x.",
      photo: testimonialPhoto3
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Brands Trust Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="relative">
                    <Quote className="h-6 w-6 text-muted-foreground/30 absolute -top-1 -left-1" />
                    <p className="text-muted-foreground leading-relaxed pl-8 text-sm">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  <div className="border-t border-border pt-3">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={testimonial.photo} 
                        alt={testimonial.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-sm">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                        <div className="text-xs text-muted-foreground italic">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}