"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, MapPin, Clock } from "lucide-react"
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
          {/* Mobile: auto-rotating slider */}
          <div className="sm:hidden">
            <Carousel className="w-full max-w-xs mx-auto" opts={{ loop: true }} setApi={setTopBarCarouselApi}>
              <CarouselContent>
                <CarouselItem>
                  <div className="flex items-center justify-center gap-2 py-1">
                    <Phone className="w-4 h-4" />
                    <span>0241 - 4464848</span>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex items-center justify-center gap-2 py-1">
                    <MapPin className="w-4 h-4" />
                    <span>Krefelderstr. 193, 52070 Aachen</span>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex items-center justify-center gap-2 py-1">
                    <Clock className="w-4 h-4" />
                    <span>Mo-Fr: 8:00-18:00 | Sa: 9:00-15:00</span>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>

          {/* Desktop/Tablet: static layout */}
          <div className="hidden sm:flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>0241 - 4464848</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Krefelderstr. 193, 52070 Aachen</span>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <span>Mo-Fr: 8:00-18:00 | Sa: 9:00-15:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4 relative justify-center lg:justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/Logo-400.png" 
                alt="Praxis für Osteopathie u. Naturheilkunde Logo" 
                className="w-10 h-10 object-contain"
              />
              <div className="leading-tight">
                <div className="text-xl font-bold text-gray-900 whitespace-nowrap">Melanie Bretscher</div>
                <div className="text-xs text-gray-600 whitespace-nowrap">Osteopathie & Naturheilkunde</div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-colors duration-200 text-sm ${
                    activeSection === item.href ? "text-green-600" : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                Termin vereinbaren
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 py-4">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left font-medium transition-colors duration-200 ${
                      activeSection === item.href ? "text-green-600" : "text-gray-700 hover:text-green-600"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <Button
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 rounded-full mt-4 shadow-lg"
                  onClick={() => scrollToSection("contact")}
                >
                  Termin vereinbaren
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
