import { Mail } from 'lucide-react'

export function FooterSection() {

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/5b99bf3c-91a1-45ac-b087-93527af7a347.png" 
              alt="Foursocial" 
              className="h-24 w-auto"
            />
            <p className="text-muted-foreground leading-relaxed text-xs">
              Full service agency, custom software, and data insights — empowering informed decisions.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Services</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-foreground transition-colors">Campaign Management</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Influencer Sourcing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Analytics & Reporting</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Strategy Consulting</a></li>
            </ul>
          </div>


          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Contact</h3>
            <div className="space-y-3">
              <a 
                href="mailto:info@foursocial.uk" 
                className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>info@foursocial.uk</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2025 Foursocial. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}