"use client"

import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  const services = [
    "Osteopathische Behandlung",
    "Ohrakupunktur",
    "Phytotherapie",
    "Infusionen und Injektionen",
    "Schröpfen",
    "Fußreflexzonenmassage",
    "Manuelle Lymphdrainage",
    "Physiotherapie",
  ]

  const quickLinks = [
    { name: "Über uns", href: "about" },
    { name: "Unsere Leistungen", href: "services" },
    { name: "Unser Team", href: "team" },
    { name: "Patientengeschichten", href: "testimonials" },
    { name: "Kontakt", href: "contact" },
  ]

  const legalLinks = [
    { name: "Datenschutz", href: "/privacy" },
    { name: "Nutzungsbedingungen", href: "/terms" },
    { name: "Impressum", href: "/impressum" },
    { name: "Patientenrechte", href: "/patient-rights" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/Logo-400.png" 
                alt="Praxis für Osteopathie u. Naturheilkunde Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <div className="text-xl font-bold">Melanie Bretscher</div>
                <div className="text-sm text-gray-400">Osteopathie & Naturheilkunde</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Gewidmet der Bereitstellung außergewöhnlicher osteopathischer und naturheilkundlicher Versorgung 
              mit personalisierten Behandlungsplänen, um Ihnen zu optimaler Gesundheit und Wohlbefinden zu verhelfen.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Unsere Leistungen</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Schnelllinks</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontaktinformationen</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Krefelderstr. 193</p>
                  <p>52070 Aachen</p>
                  <p>Praxis für Osteopathie u. Naturheilkunde</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">0241 - 4464848</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">melaniebretscher@netcologne.de</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Mo-Fr: 8:00-18:00</p>
                  <p>Samstag: 9:00-15:00</p>
                  <p>Sonntag: Geschlossen</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">© 2024 Melanie Bretscher. Alle Rechte vorbehalten.</div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
