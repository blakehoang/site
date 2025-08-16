import { CheckCircle, Target, TrendingUp, Users, BarChart3, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function BenefitsSection() {
  const benefits = [
    {
      icon: Users,
      title: "Full Campaign Management",
      description: "From influencer sourcing to reporting, we run the entire campaign so you can focus on growth."
    },
    {
      icon: TrendingUp,
      title: "Cost Effective Influencer Sourcing",
      description: "Get curated, criteria matched creators without the inflated platform fees."
    },
    {
      icon: BarChart3,
      title: "Data Driven Strategy",
      description: "Every decision backed by real campaign data, no guesswork, just impact."
    },
    {
      icon: Zap,
      title: "Ready to Use Creators",
      description: "Tap into our network of pre-vetted creators who are ready to deliver."
    },
    {
      icon: Target,
      title: "Clear KPIs",
      description: "Know exactly what success looks like before we launch, no vague metrics."
    },
    {
      icon: CheckCircle,
      title: "Actionable Analytics & Reporting",
      description: "Track performance with reports that help you scale smarter each time."
    }
  ]

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Foursocial
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine full-service campaign management with cutting-edge software solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 fade-in-up bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="space-y-4">
                  <div className="bg-gradient-primary p-4 rounded-2xl w-16 h-16 mx-auto flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-xl">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}