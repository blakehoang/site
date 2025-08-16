import { AlertTriangle, Clock, TrendingDown, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function PainSection() {
  const painPoints = [
    {
      icon: TrendingDown,
      frustration: "High costs just to access influencer platforms or agencies",
      solution: "Our mission is to make influencer marketing accessible to businesses of all sizes, empowering you to leverage social media as an effective marketing channel"
    },
    {
      icon: Clock,
      frustration: "High manual time spent sourcing and vetting influencers",
      solution: "In-house AI powered influencer search tool software allowing us to identify high impact creators faster and more efficiently"
    },
    {
      icon: AlertTriangle,
      frustration: "Ineffective social and influencer marketing spend due to lack of experience",
      solution: "Data backed strategy powered by in-house analytics tools that guide every decision to maximise ROI"
    },
    {
      icon: Users,
      frustration: "No time or experience to run influencer campaigns in-house",
      solution: "End to end campaign management so you can outsource execution while staying in control"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            What's Broken with Most
            <span className="block text-red-500">Influencer Marketing Agencies</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-red-500 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-lg flex-shrink-0">
                      <point.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-red-600">
                        {point.frustration}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Our Solution</h4>
                        <p className="text-green-700 dark:text-green-300 leading-relaxed">
                          {point.solution}
                        </p>
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