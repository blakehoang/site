import { useEffect, useRef } from 'react'

export function TrustSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Brand logos with their image paths
  const brands = [
    { name: 'Monzo', logo: '/lovable-uploads/fe53f00d-66b1-4f8c-8c40-8b2973cec992.png' },
    { name: 'Boohoo', logo: '/lovable-uploads/53278c1c-fca3-4808-8a02-008aa39891b6.png' },
    { name: 'Burger King', logo: '/lovable-uploads/4654a4ae-5f51-42cc-8579-27b6fe88281f.png' },
    { name: 'Cetaphil', logo: '/lovable-uploads/0fb94806-3cc0-4e44-abc6-396fe847d067.png' },
    { name: 'Hello Fresh', logo: '/lovable-uploads/a6e35132-d60b-4566-9dff-850e6ae72c7e.png' },
    { name: 'L\'Oréal', logo: '/lovable-uploads/740177cd-c674-40c0-b28b-4df79c965c0e.png' },
    { name: 'LG', logo: '/lovable-uploads/e8490f8d-0249-4fe4-9924-591224b5d784.png' },
    { name: 'Tim Hortons', logo: '/lovable-uploads/b9517a60-bde0-43fd-b862-5614182f61f2.png' }
  ]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollStep = 1
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth

    const autoScroll = () => {
      scrollAmount += scrollStep
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0
      }
      scrollContainer.scrollLeft = scrollAmount
    }

    const interval = setInterval(autoScroll, 40)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-12">
          <p className="text-lg text-muted-foreground font-medium">
            Trusted by 100+ businesses & agencies worldwide
          </p>
          
          <div className="w-[70%] mx-auto overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex space-x-12 overflow-x-auto scrollbar-hide"
              style={{ scrollBehavior: 'smooth' }}
            >
              {[...brands, ...brands].map((brand, index) => (
                <div 
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 text-center opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="h-12 flex items-center justify-center min-w-[120px] px-4">
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}