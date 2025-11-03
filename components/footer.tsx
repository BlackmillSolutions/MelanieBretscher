"use client"

import { Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { PrivacyContent, TermsContent, ImpressumContent, PatientRightsContent } from "@/components/legal-content"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { SERVICE_CONTENT, ServiceModalContent } from "@/components/services-content"

export default function Footer() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    services1: false,
    services2: false,
    contact: false
  })

  const services1 = [
    "Osteopathische Behandlung",
    "Physiotherapie",
    "Manuelle Lymphdrainage",
    "Fußreflexzonenmassage",
  ]

  const services2 = [
    "Ohrakupunktur",
    "Phytotherapie",
    "Infusionen und Injektionen",
    "Schröpfen",
  ]

  

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <footer className="bg-white text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info - Always visible */}
          <div className="space-y-6 text-center md:text-left">
            <div className="flex items-center space-x-3 justify-center md:justify-start">
            <img 
                src="/Logo.svg" 
                alt="Praxis für Osteopathie u. Naturheilkunde Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <div className="text-xl font-bold">Melanie Bretscher</div>
                <div className="text-sm text-gray-600">Osteopathie | Naturheilkunde | Physiotherapie</div>
              </div>
            </div>

            
          </div>

          {/* Services Block 1 */}
          <div>
            {/* Mobile Collapsible */}
            <div className="md:hidden">
              <Collapsible 
                open={openSections.services1} 
                onOpenChange={() => toggleSection('services1')}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold mb-6">
                  <img 
                    src="/green_spiral.svg" 
                    alt="Logo" 
                    className="w-4 h-4 object-contain brightness-0 invert"
                  />
                                     <span className="flex-1 text-center">Manuelle Therapien</span>
                  {openSections.services1 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="space-y-3 text-center">
                    {services1.map((service, index) => (
                      <li key={index}>
                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="text-gray-700 hover:text-[#f8b5c1] transition-colors text-sm w-full">
                              {service}
                            </button>
                          </DialogTrigger>
                          <DialogContent className="bg-white text-gray-800 border-gray-200 max-w-4xl max-h-[80vh] overflow-y-auto shadow-xl">
                            <DialogHeader className="border-b border-gray-300 pb-4">
                              <DialogTitle className="text-xl font-semibold text-[#f8b5c1]">{service}</DialogTitle>
                              <DialogDescription className="flex items-center gap-2 text-gray-700">
                                <Clock className="w-4 h-4 text-[#f8b5c1]" />
                                {SERVICE_CONTENT[service]?.duration}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="py-6">
                              <ServiceModalContent name={service} variant="light" />
                            </div>
                          </DialogContent>
                        </Dialog>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Desktop Always Visible */}
            <div className="hidden md:block">
                             <h3 className="text-lg font-semibold mb-6">Manuelle Therapien</h3>
              <ul className="space-y-3">
                {services1.map((service, index) => (
                  <li key={index}>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="text-gray-700 hover:text-[#f8b5c1] transition-colors text-sm text-left">
                          {service}
                        </button>
                      </DialogTrigger>
                      <DialogContent className="bg-white text-gray-800 border-gray-200 max-w-4xl max-h-[80vh] overflow-y-auto shadow-xl">
                        <DialogHeader className="border-b border-gray-300 pb-4">
                          <DialogTitle className="text-xl font-semibold text-[#f8b5c1]">{service}</DialogTitle>
                          <DialogDescription className="flex items-center gap-2 text-gray-700">
                            <Clock className="w-4 h-4 text-[#f8b5c1]" />
                            {SERVICE_CONTENT[service]?.duration}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-6">
                          <ServiceModalContent name={service} variant="light" />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services Block 2 */}
          <div>
            {/* Mobile Collapsible */}
            <div className="md:hidden">
              <Collapsible 
                open={openSections.services2} 
                onOpenChange={() => toggleSection('services2')}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold mb-6">
                  <img 
                    src="/green_spiral.svg" 
                    alt="Logo" 
                    className="w-4 h-4 object-contain brightness-0 invert"
                  />
                                     <span className="flex-1 text-center">Naturheilkunde & Akupunktur</span>
                  {openSections.services2 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="space-y-3 text-center">
                    {services2.map((service, index) => (
                      <li key={index}>
                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="text-gray-700 hover:text-[#f8b5c1] transition-colors text-sm w-full">
                              {service}
                            </button>
                          </DialogTrigger>
                          <DialogContent className="bg-white text-gray-800 border-gray-200 max-w-4xl max-h-[80vh] overflow-y-auto shadow-xl">
                            <DialogHeader className="border-b border-gray-300 pb-4">
                              <DialogTitle className="text-xl font-semibold text-[#f8b5c1]">{service}</DialogTitle>
                              <DialogDescription className="flex items-center gap-2 text-gray-700">
                                <Clock className="w-4 h-4 text-[#f8b5c1]" />
                                {SERVICE_CONTENT[service]?.duration}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="py-6">
                              <ServiceModalContent name={service} variant="light" />
                            </div>
                          </DialogContent>
                        </Dialog>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Desktop Always Visible */}
            <div className="hidden md:block">
                             <h3 className="text-lg font-semibold mb-6">Naturheilkunde & Akupunktur</h3>
              <ul className="space-y-3">
                {services2.map((service, index) => (
                  <li key={index}>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="text-gray-700 hover:text-[#f8b5c1] transition-colors text-sm text-left">
                          {service}
                        </button>
                      </DialogTrigger>
                      <DialogContent className="bg-white text-gray-800 border-gray-200 max-w-4xl max-h-[80vh] overflow-y-auto shadow-xl">
                        <DialogHeader className="border-b border-gray-300 pb-4">
                          <DialogTitle className="text-xl font-semibold text-[#f8b5c1]">{service}</DialogTitle>
                          <DialogDescription className="flex items-center gap-2 text-gray-700">
                            <Clock className="w-4 h-4 text-[#f8b5c1]" />
                            {SERVICE_CONTENT[service]?.duration}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-6">
                          <ServiceModalContent name={service} variant="light" />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            {/* Mobile Collapsible */}
            <div className="md:hidden">
              <Collapsible 
                open={openSections.contact} 
                onOpenChange={() => toggleSection('contact')}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold mb-6">
                  <img 
                    src="/green_spiral.svg" 
                    alt="Logo" 
                    className="w-4 h-5 object-contain brightness-0 invert"
                  />
                  <span className="flex-1 text-center">Kontaktinformationen</span>
                  {openSections.contact ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="space-y-4 text-center">
                    <div className="flex items-start space-x-3 justify-center">
                      <MapPin className="w-5 h-5 text-[#f8b5c1] mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-gray-700">
                      <p>Krefelder Str. 79a</p>
                        <p>52070 Aachen</p>
                        <p>Praxis für Osteopathie u. Naturheilkunde</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 justify-center">
                      <Phone className="w-5 h-5 text-[#f8b5c1] flex-shrink-0" />
                      <span className="text-sm text-gray-700">0241 - 4464848</span>
                    </div>
                    <div className="flex items-center space-x-3 justify-center">
                      <Mail className="w-5 h-5 text-[#f8b5c1] flex-shrink-0" />
                      <span className="text-sm text-gray-700">melaniebretscher@netcologne.de</span>
                    </div>
                    <div className="flex items-start space-x-3 justify-center">
                      <Clock className="w-5 h-5 text-[#f8b5c1] mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-gray-700">
                        <p>Mo–Fr: Termine nach Vereinbarung</p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Desktop Always Visible */}
            <div className="hidden md:block">
              <h3 className="text-lg font-semibold mb-6">Kontaktinformationen</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#f8b5c1] mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-700">
                    <p>Krefelder Str. 79a</p>
                    <p>52070 Aachen</p>
                    <p>Praxis für Osteopathie u. Naturheilkunde</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#f8b5c1] flex-shrink-0" />
                  <span className="text-sm text-gray-700">0241 - 4464848</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#f8b5c1] flex-shrink-0" />
                  <span className="text-sm text-gray-700">melaniebretscher@netcologne.de</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#f8b5c1] mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-700">
                    <p>Mo–Fr: Termine nach Vereinbarung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600 text-center md:text-left">© 2024 Melanie Bretscher. Alle Rechte vorbehalten.</div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <PrivacyContent />
              <TermsContent />
              <ImpressumContent />
              <PatientRightsContent />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
