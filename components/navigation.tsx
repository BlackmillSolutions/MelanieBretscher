"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, MapPin, Clock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [topBarCarouselApi, setTopBarCarouselApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Update active section based on scroll position
      const sections = ["home", "about", "services", "gallery", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-rotate the top bar contact carousel on mobile
  useEffect(() => {
    if (!topBarCarouselApi) return
    const id = setInterval(() => topBarCarouselApi.scrollNext(), 3000)
    return () => clearInterval(id)
  }, [topBarCarouselApi])

  const navigation = [
    { name: "Über uns", href: "about" },
    { name: "Leistungen", href: "services" },
    { name: "Die Praxis", href: "gallery" },
    { name: "Kontakt", href: "contact" },
  ]

  const CONTACT = {
    phone: "0241 - 4464848",
    email: "melaniebretscher@netcologne.de",
    address: "Krefelder Str. 79a, 52070 Aachen",
    hoursShort: "Mo-Dr: 8:00-18:00 | Fr-Sa: Termine nach Vereinbarung",
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="animated-gradient text-white py-2 text-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel className="w-full max-w-xl mx-auto" opts={{ loop: true }} setApi={setTopBarCarouselApi}>
            <CarouselContent>
              <CarouselItem>
                <div className="flex items-center justify-center gap-2 py-1">
                  <Phone className="w-4 h-4" />
                  <span>{CONTACT.phone}</span>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex items-center justify-center gap-2 py-1">
                  <MapPin className="w-4 h-4" />
                  <span>{CONTACT.address}</span>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4 relative justify-center md:justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/Logo.svg" 
                alt="Praxis für Osteopathie u. Naturheilkunde Logo" 
                className="w-10 h-10 object-contain"
              />
              <div className="leading-tight text-left">
                <div className="text-xl font-bold text-gray-900 whitespace-nowrap text-left">Melanie Bretscher</div>
                <div className="text-xs text-gray-600 whitespace-nowrap text-left">Osteopathie | Naturheilkunde | Physiotherapie</div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-colors duration-200 text-sm ${
                    activeSection === item.href ? "text-[#f8b5c1]" : "text-gray-700 hover:text-[#f8b5c1]"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button
                className="bg-gradient-to-r from-[#f8b5c1] to-[#f4a6b3] hover:from-[#f8b5c1] hover:to-[#f4a6b3] text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                Termin vereinbaren
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-[#f8b5c1] transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 py-4 text-center">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-center font-medium transition-colors duration-200 ${
                      activeSection === item.href ? "text-[#f8b5c1]" : "text-gray-700 hover:text-[#f8b5c1]"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <Button
                  className="w-full bg-gradient-to-r from-[#f8b5c1] to-[#f4a6b3] hover:from-[#f8b5c1] hover:to-[#f4a6b3] text-white py-3 rounded-full mt-4 shadow-lg"
                  onClick={() => scrollToSection("contact")}
                >
                  Termin vereinbaren
                </Button>

                <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5 text-[#f8b5c1]" />
                    <a href={`tel:${CONTACT.phone.replace(/\s|-/g, "")}`} className="text-gray-800 hover:text-[#f8b5c1]">
                      {CONTACT.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5 text-[#f8b5c1]" />
                    <a href={`mailto:${CONTACT.email}`} className="text-gray-800 hover:text-[#f8b5c1]">
                      {CONTACT.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5 text-[#f8b5c1]" />
                    <span className="text-gray-800">{CONTACT.address}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-5 h-5 text-[#f8b5c1]" />
                    <span className="text-gray-800">{CONTACT.hoursShort}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
