import { useEffect } from 'react'
import { Navigation } from '@/components/Navigation'
import { ScrollProgress } from '@/components/ScrollProgress'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustSection } from '@/components/sections/TrustSection'
import { PainSection } from '@/components/sections/PainSection'
import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { FooterSection } from '@/components/sections/FooterSection'

const Index = () => {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    const animatedElements = document.querySelectorAll('.fade-in-up')
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      
      <main>
        <HeroSection />
        <TrustSection />
        <PainSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      
      <FooterSection />
    </div>
  )
}

export default Index;
