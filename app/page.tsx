"use client"

import Image from "next/image"
import { ArrowRight, Phone, MapPin, Clock, CheckCircle, Award, Users, Heart, Send, HandHeart, Ear, Leaf, Syringe, Droplets, Footprints, Sparkles, Activity, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ServiceModalContent, SERVICE_CONTENT } from "@/components/services-content"
import ContactForm from "@/components/contact-form"
import React from "react"
import PracticeSlider from "@/components/practice-slider"
import HistoryTimeline from "@/components/history-timeline"
import AnimatedCounter from "@/components/animated-counter"
import { InitialsAvatar } from "@/components/ui/avatar"

export default function HomePage() {
  const [showAllServices, setShowAllServices] = React.useState(false)
  
  const toggleServices = () => {
    if (showAllServices) {
      // Wenn wir einklappen, scrollen wir sanft zur Services-Sektion zurück
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
    }
    setShowAllServices(!showAllServices)
  }
  const services = [
    {
      title: "Osteopathische Behandlung",
      description: "Ganzheitliche manuelle Therapie zur Behandlung von Funktionsstörungen und Schmerzen",
      icon: <HandHeart className="w-12 h-12 text-white" />,
      duration: "45-60 Minuten",
      benefits: ["Verbesserte Beweglichkeit", "Schmerzlinderung", "Entspannung & Regulation des Nervensystems", "Natürliche Heilung"],
    },
    {
      title: "Ohrakupunktur",
      description: "Spezialisierte Akupunkturbehandlung über die Ohrmuschel zur Schmerzlinderung und Regulation",
      icon: <Ear className="w-12 h-12 text-white" />,
      duration: "30-45 Minuten",
      benefits: ["Schnelle Schmerzlinderung", "Regulation des Nervensystems", "Stressabbau", "Ganzheitliche Wirkung"],
    },
    {
      title: "Phytotherapie",
      description: "Behandlung mit pflanzlichen Heilmitteln zur Unterstützung der natürlichen Heilungsprozesse",
      icon: <Leaf className="w-12 h-12 text-white" />,
      duration: "30-60 Minuten",
      benefits: ["Natürliche Wirkstoffe", "Geringe Nebenwirkungen", "Ganzheitliche Therapie", "Langfristige Wirkung"],
    },
    {
      title: "Infusionen und Injektionen",
      description: "Intravenöse und intramuskuläre Therapien zur gezielten Nährstoffversorgung und Behandlung",
      icon: <Syringe className="w-12 h-12 text-white" />,
      duration: "30-90 Minuten",
      benefits: ["Direkte Wirkung", "Gezielte Therapie", "Schnelle Aufnahme", "Individuelle Dosierung"],
    },
    {
      title: "Schröpfen",
      description: "Traditionelle Therapie zur Verbesserung der Durchblutung und Entgiftung des Gewebes",
      icon: <Droplets className="w-12 h-12 text-white" />,
      duration: "20-30 Minuten",
      benefits: ["Verbesserte Durchblutung", "Entgiftung", "Schmerzlinderung", "Entspannung"],
    },
    {
      title: "Fußreflexzonenmassage",
      description: "Reflexzonentherapie über die Füße zur Behandlung verschiedener Körperbereiche",
      icon: <Footprints className="w-12 h-12 text-white" />,
      duration: "45-60 Minuten",
      benefits: ["Entspannung", "Durchblutungsförderung", "Schmerzlinderung", "Ganzheitliche Wirkung"],
    },
    {
      title: "Manuelle Lymphdrainage",
      description: "Sanfte Massagetechnik zur Verbesserung des Lymphabflusses und Entstauung",
      icon: <Sparkles className="w-12 h-12 text-white" />,
      duration: "45-60 Minuten",
      benefits: ["Entstauung", "Immunstärkung", "Entgiftung", "Schmerzlinderung"],
    },
    {
      title: "Physiotherapie",
      description: "Klassische physiotherapeutische Behandlung zur Wiederherstellung der Beweglichkeit",
      icon: <Activity className="w-12 h-12 text-white" />,
      duration: "45-60 Minuten",
      benefits: ["Beweglichkeitsverbesserung", "Kräftigung", "Schmerzlinderung", "Funktionswiederherstellung"],
    },
  ]

  type HomeService = (typeof services)[number]

  const stats = [
    { number: "30+", label: "Jahre Erfahrung" },
    { number: "10K+", label: "Behandelte Patienten" },
    { number: "95%", label: "Erfolgsrate" },
    { number: "24/7", label: "Terminbuchung möglich" },
  ]



  const values = [
    {
      icon: <Image src="/green_spiral.svg" alt="Green Spiral" width={32} height={32} className="w-8 h-8 transform rotate-0" />,
      title: "Ganzheitliche Behandlung",
      description: "Jeder Behandlungsplan wird individuell auf Ihre Bedürfnisse, Ziele und Lebensweise abgestimmt.",
    },
    {
      icon: <Image src="/green_spiral.svg" alt="Green Spiral" width={32} height={32} className="w-8 h-8 transform rotate-90" />,
      title: "Exzellenz in der Praxis",
      description: "Wir halten die höchsten Standards durch kontinuierliche Weiterbildung und evidenzbasierte Behandlungen.",
    },
    {
      icon: <Image src="/green_spiral.svg" alt="Green Spiral" width={32} height={32} className="w-8 h-8 transform rotate-180" />,
      title: "Kooperativer Ansatz",
      description: "Wir arbeiten eng mit Ihrem Gesundheitsteam zusammen, um eine umfassende Versorgung zu gewährleisten.",
    },
    {
      icon: <Image src="/green_spiral.svg" alt="Green Spiral" width={32} height={32} className="w-8 h-8 transform -rotate-90" />,
      title: "Schnelle Genesung",
      description:
        "Unsere effizienten Behandlungsmethoden helfen Ihnen, so schnell und sicher wie möglich zu Ihren Aktivitäten zurückzukehren.",
    },
  ]





  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center animated-gradient overflow-hidden"
      >

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 -mt-32">
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 400 400" 
                  className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40"
                >
                  <path 
                    fill="white" 
                    d="M207.54,8.83c7.55-.28,14.14,5.29,15.44,12.64.81,52.96.14,106,.34,159,.6,9.18,11.12,14.46,18.62,8.63,4.69-3.65,4.36-9.31,4.54-14.73,1.45-43.73-1.11-88.25-.03-132.06,3.09-19.61,29.64-19.06,30.87,1.92.6,10.3-.31,20.89-.35,31.16-.13,30.18-.21,60.47.35,90.59.09,4.85-.43,10.41-.02,15.12,1.09,12.69,19.37,14.32,22.79,2.21l.02-102.14c1.08-13.67,18.21-19.7,26.99-8.98,3.31,4.04,3.14,6.71,3.2,11.54.78,62.74-.56,125.53.03,188.28-1.11,13.58-1.72,27.3-4.67,40.63-20.91,94.36-150.57,100.91-206.4,34.52-29.01-34.49-29.57-69.11-40.19-110.48-1.64-6.38-3.46-12.75-5.35-19.06-2.51-8.4-7.59-16.23-1.04-24.32s20.23-7.81,24.89,1.76c4.9,10.06,9.09,27.11,11.89,38.23,9.19,36.44,9.49,72.5,39.99,99.11,39.12,34.14,113.61,36.57,145.15-9.06,20.7-29.95,18.27-74.78-12.37-97.06-34.91-25.38-100.85-14.95-108.9,32.97-5.24,31.2,22.77,54.1,52.59,47.45,13.45-3,26.55-15.44,26.63-29.91.05-9.31-10.42-15.92-18.7-11.31-6.41,3.57-4.11,11.24-11.3,16.01-10.19,6.76-22.28-.56-24.17-11.82-2.85-16.97,12.3-29.81,27.48-33.06,34.95-7.48,63.84,15.99,56.06,52.53-11.45,53.74-88.47,60.58-121.7,23.51-17.68-19.72-18.86-41.77-18.77-66.97.23-62.5-.54-125.09.39-187.54,4.54-17.38,28.45-15.4,30.13,2.47l.02,121.41c1.69,12.57,19.41,12.47,20.53-.59V22.4c1.01-7.53,7.44-13.3,15.03-13.58Z"
                  />
                </svg>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ihr Weg zu einem
                <span className="block">schmerzfreien Leben</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Expertenteam für Osteopathie und Naturheilkunde kombiniert moderne Techniken mit persönlichen Behandlungsplänen.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Termin vereinbaren
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold bg-transparent backdrop-blur-md"
              >
                <Phone className="mr-2 w-5 h-5" />
                Jetzt anrufen
              </Button>
            </div>

            {/* Quick Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-white" />
                <span>0241 - 4464848</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-white" />
                <span>Krefelder Str. 97a, 52070 Aachen</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-white" />
                <span>Mo-Fr 8:00-18:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center glass-card-light p-4 rounded-xl">
                <AnimatedCounter 
                  value={stat.number} 
                  className="text-2xl lg:text-3xl font-bold text-pink-600 mb-2"
                  duration={2500}
                />
                <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 animated-gradient-reverse">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Expertenteam dem Sie vertrauen können</h2>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Mit über 15 Jahren Erfahrung kombiniert unser Team aus Heilpraktikerin, Osteopathin und Physiotherapeutin 
                evidenzbasierte Behandlungen mit mitfühlender Fürsorge, um Ihnen zu optimaler Gesundheit und Wohlbefinden zu verhelfen.
              </p>
              
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass-card">
                <Image
                  src="/Team-Placeholder.jpg"
                  alt="Professionelle Osteopathin bei der Arbeit mit Patient"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center glass-card-light border-gray-200/50 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-8 h-8 flex items-center justify-center">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 animated-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Umfassende Osteopathie & Naturheilkunde</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Von Schmerzlinderung bis zur Leistungssteigerung bieten wir personalisierte Versorgung, 
              die auf Ihre spezifischen Bedürfnisse und Ziele zugeschnitten ist.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, showAllServices ? services.length : 3).map((service, index) => (
              <Card
                key={index}
                className="relative group glass-card border-white/20 hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="mb-4 text-center flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{service.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4 text-center">{service.description}</p>

                  <div className="border-t border-white/20 pt-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/80">Dauer:</span>
                      <span className="text-white font-medium">{service.duration}</span>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2 text-sm">Hauptvorteile:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-xs text-white/80">
                            <CheckCircle className="w-3 h-3 text-white mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                  </div>
                </CardContent>
                {/* Bottom-right subtle action */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="ghost" className="absolute bottom-4 right-4 text-white hover:text-white hover:bg-pink-500/20">
                      Mehr
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 text-white border-gray-800 max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader className="border-b border-gray-800 pb-4">
                      <DialogTitle className="text-xl font-semibold text-pink-600">{service.title}</DialogTitle>
                      <DialogDescription className="flex items-center gap-2 text-gray-300">
                        <Clock className="w-4 h-4 text-pink-600" />
                        {SERVICE_CONTENT[service.title]?.duration || service.duration}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-6">
                      <ServiceModalContent name={service.title} variant="dark" />
                    </div>
                  </DialogContent>
                </Dialog>
              </Card>
            ))}
          </div>
          
          {/* Expand/Collapse Button */}
          {services.length > 3 && (
            <div className="text-center mt-8">
                             <Button
                 onClick={toggleServices}
                 variant="outline"
                 className="glass-card border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
               >
                {showAllServices ? (
                  <>
                    Weniger anzeigen
                    <ChevronDown className="w-4 h-4 ml-2 transform rotate-180" />
                  </>
                ) : (
                  <>
                    Alle {services.length} Dienstleistungen anzeigen
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Practice Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Unsere Praxis</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Machen Sie eine virtuelle Tour durch unsere Praxis. Unsere einladende Umgebung ist 
              darauf ausgerichtet, Ihren Heilungs- und Genesungsprozess zu unterstützen.
            </p>
          </div>

          <PracticeSlider />
        </div>
      </section>





      {/* History Section */}
      <section id="history" className="py-20 animated-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Unsere Geschichte</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Von den ersten Schritten bis heute – kleine Meilensteine,
              die unsere persönliche und sorgfältige Betreuung prägen.
            </p>
          </div>

          <HistoryTimeline />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Vereinbaren Sie Ihren Termin</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bereit, Ihren Weg zu besserer Gesundheit zu beginnen? Kontaktieren Sie uns heute, um Ihre Beratung zu vereinbaren.
            </p>
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info and Contact Form */}
            <div className="space-y-8">
              {/* Contact Information Tile */}
              <Card className="glass-card-light border-gray-200/50 shadow-xl">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Kontaktinformationen</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-600 to-pink-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">Telefon</h4>
                        <p className="text-gray-700 font-medium text-sm">0241 - 4464848</p>
                        <p className="text-xs text-gray-600">Rufen Sie uns jederzeit an</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-600 to-pink-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">Adresse</h4>
                        <p className="text-gray-700 font-medium text-sm">Krefelder Str. 97a</p>
                        <p className="text-xs text-gray-600">52070 Aachen</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-600 to-pink-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">Öffnungszeiten</h4>
                        <p className="text-gray-700 font-medium text-sm">Mo-Fr: 8:00-18:00</p>
                        <p className="text-xs text-gray-600">Sa: 9:00-15:00</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-600 to-pink-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <Send className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">E-Mail</h4>
                        <p className="text-gray-700 font-medium text-sm">melaniebretscher@netcologne.de</p>
                        <p className="text-xs text-gray-600">24h Antwortzeit</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <ContactForm />
            </div>

            {/* Right Side - Map and Additional Info */}
            <div className="space-y-8">
              {/* Interactive Google Maps */}
              <Card className="glass-card-light border-gray-200/50 shadow-xl overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <iframe
                    src="https://maps.google.com/maps?q=Krefelder+Str.+97a,+52070+Aachen,+Germany&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Praxis für Osteopathie u. Naturheilkunde - Krefelder Str. 97a, 52070 Aachen"
                    className="absolute inset-0"
                  ></iframe>
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4">
                    <div className="text-center">
                      <MapPin className="w-5 h-5 text-pink-600 mx-auto mb-2" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Praxis für Osteopathie u. Naturheilkunde</h3>
                      <p className="text-gray-700 font-medium">Krefelder Str. 97a, 52070 Aachen</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Contact */}
              <Card className="glass-card-light border-gray-200/50 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Sofortige Hilfe benötigt?</h3>
                  <p className="mb-6 text-gray-600">
                    Für dringende Angelegenheiten oder um sofort mit jemandem zu sprechen, rufen Sie uns während der Geschäftszeiten an.
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-pink-600 text-pink-600 hover:bg-pink-50 rounded-full bg-transparent"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Anrufen 0241 - 4464848
                  </Button>
                  <div className="text-center text-sm text-gray-600 mt-3">Mo-Fr: 8:00-18:00 | Sa: 9:00-15:00</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 animated-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Alles Leben ist Bewegung.</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Dort, wo Bewegung gestört ist, beginnt Krankheit
          </p>
          <p className="text-sm text-white/80 italic mb-8">
            Dr. Andrew Taylor Still
          </p>
          
        </div>
      </section>
    </div>
  )
}
