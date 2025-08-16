import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function FAQSection() {
  const faqs = [
    {
      question: "What if I don't know where to start, we are completely new?",
      answer: "We specialise in guiding brands in influencer marketing from new or highly experienced. We'll work closely with you to understand your goals, craft a clear strategy, and walk you through every step."
    },
    {
      question: "What is the typical end to end campaign timeline?",
      answer: "Most campaigns run between 4 to 6 weeks from kickoff to final reporting. This includes brief creation, influencer sourcing, content creation, campaign execution, and reporting. If you only need campaign execution, we have delivered within as little as 10 days."
    },
    {
      question: "What makes you different to other agencies or tools?",
      answer: "We combine full service campaign management with software solutions. This integrated approach lets us deliver faster, more cost effective, and data backed results."
    },
    {
      question: "How involved will I be in the campaign process?",
      answer: "You choose your level of involvement. We provide transparent updates and reports, but you can stay hands off and let us handle everything or collaborate closely on strategy and influencer approvals, whatever fits your needs."
    },
    {
      question: "What's the minimum budget required to start?",
      answer: "There's no fixed minimum budget, it all depends on the level of support you need. For example, sourcing a custom influencer list is more affordable than full end-to-end campaign management. We tailor our services to match your goals and budget, whether you're looking for a one off list or a fully managed campaign."
    }
  ]

  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about working with us
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-border rounded-lg px-6 bg-card shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}