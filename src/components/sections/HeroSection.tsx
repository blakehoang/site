import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'
import tiktokVideoImage from '@/assets/tiktok-tech-video.jpg'
import techWithTomProfile from '@/assets/techwithtom-profile.jpg'

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-32 border-l-4 border-r-4 border-border/20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Social & Influencer
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Marketing Agency
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Full service agency, custom software, and data insights — empowering informed decisions.
              </p>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-hero group px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl"
                size="lg"
              >
                Get Your Custom Influencer List
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <p className="text-muted-foreground text-sm max-w-md">
                Provide your criteria and let our AI powered tool deliver your perfect fit influencers
              </p>
            </div>

          </div>

          {/* Visual Proof */}
          <div className="relative lg:ml-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Smartphone Frame */}
            <div className="relative mx-auto w-64 h-[500px] bg-black rounded-[3rem] p-2 shadow-large hover-lift">
              <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
                <img 
                  src={tiktokVideoImage} 
                  alt="TikTok Food Video" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    size="icon"
                    className="h-16 w-16 rounded-full bg-white/90 hover:bg-white text-black shadow-large hover:scale-110 transition-all duration-300"
                  >
                    <Play className="h-6 w-6 ml-1" />
                  </Button>
                </div>
                
                {/* TikTok UI Elements */}
                <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm font-semibold">@techwithtom</div>
                <div className="text-xs opacity-80">This speaker is incredible! 🔊</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 right-2 sm:-right-2 lg:-right-4 bg-card border border-border rounded-lg p-3 sm:p-4 shadow-medium animate-float max-w-[160px] sm:max-w-[180px] lg:max-w-[200px]">
              <div className="text-xs sm:text-sm font-semibold text-green-600">+1.7% Conversion Rate</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">Campaign Performance</div>
            </div>
            
            <div className="absolute -bottom-4 left-2 sm:-left-2 lg:-left-4 bg-card border border-border rounded-lg p-3 sm:p-4 shadow-medium animate-float max-w-[160px] sm:max-w-[180px] lg:max-w-[200px]" style={{ animationDelay: '1s' }}>
              <div className="text-xs sm:text-sm font-semibold text-blue-600">2.3M Reach</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">Last Campaign</div>
            </div>
            
            <div className="absolute top-1/2 right-2 sm:-right-2 lg:-right-4 bg-card border border-border rounded-lg p-3 sm:p-4 shadow-medium animate-float max-w-[220px] sm:max-w-[250px] lg:max-w-[280px]" style={{ animationDelay: '2s' }}>
              <div className="flex items-center space-x-3">
                <img 
                  src={techWithTomProfile} 
                  alt="@techwithtom" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold truncate">@techwithtom</div>
                  <div className="text-xs text-muted-foreground">850K Followers</div>
                </div>
              </div>
              
              {/* Demographics Section */}
              <div className="mt-3 pt-3 border-t border-border space-y-2">
                <div className="text-xs font-medium text-muted-foreground">Demographics</div>
                
                {/* Gender Chart */}
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">Gender Split</div>
                  <div className="flex space-x-1">
                    <div className="bg-blue-500 h-2 rounded-full flex-[83]"></div>
                    <div className="bg-pink-500 h-2 rounded-full flex-[17]"></div>
                  </div>
                  <div className="text-xs text-muted-foreground">83% M • 17% F</div>
                </div>
                
                {/* Location Chart */}
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span>UK</span>
                      <span>80%</span>
                    </div>
                    <div className="bg-muted rounded-full h-1">
                      <div className="bg-green-500 h-1 rounded-full w-[80%]"></div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span>US</span>
                      <span>8%</span>
                    </div>
                    <div className="bg-muted rounded-full h-1">
                      <div className="bg-blue-500 h-1 rounded-full w-[8%]"></div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span>Others</span>
                      <span>12%</span>
                    </div>
                    <div className="bg-muted rounded-full h-1">
                      <div className="bg-purple-500 h-1 rounded-full w-[12%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}