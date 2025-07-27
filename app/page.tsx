"use client"

import Image from "next/image"
import { ArrowRight, Phone, MapPin, Clock, Star, CheckCircle, Award, Users, Heart, Send, Quote, HandHeart, Ear, Leaf, Syringe, Droplets, Footprints, Sparkles, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"
import React from "react"
import PracticeSlider from "@/components/practice-slider"
import HistoryTimeline from "@/components/history-timeline"
import AnimatedCounter from "@/components/animated-counter"
import { InitialsAvatar } from "@/components/ui/avatar"

export default function HomePage() {
  const services = [
    {
      title: "Osteopathische Behandlung",
      description: "Ganzheitliche manuelle Therapie zur Behandlung von Funktionsstörungen und Schmerzen",
      icon: <HandHeart className="w-12 h-12 text-white" />,
      duration: "45-60 Minuten",
      benefits: ["Verbesserte Beweglichkeit", "Schmerzlinderung", "Ganzheitliche Behandlung", "Natürliche Heilung"],
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

  const stats = [
    { number: "15+", label: "Jahre Erfahrung" },
    { number: "2000+", label: "Behandelte Patienten" },
    { number: "95%", label: "Erfolgsrate" },
    { number: "24/7", label: "Support verfügbar" },
  ]

  const team = [
    {
      name: "Melanie Bretscher",
      role: "Heilpraktikerin, Osteopathin, Physiotherapeutin",
      credentials: "Heilpraktikerin, Osteopathin, Physiotherapeutin",
      experience: "15+ Jahre",
      specialties: ["Osteopathie", "Naturheilkunde", "Physiotherapie", "Ohrakupunktur"],
    },
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
      icon: <Image src="/green_spiral.svg" alt="Green Spiral" width={32} height={32} className="w-8 h-8 transform rotate-270" />,
      title: "Schnelle Genesung",
      description:
        "Unsere effizienten Behandlungsmethoden helfen Ihnen, so schnell und sicher wie möglich zu Ihren Aktivitäten zurückzukehren.",
    },
  ]

  const testimonials = [
    {
      name: "Maria Schmidt",
      condition: "Chronische Rückenschmerzen",
      rating: 5,
      testimonial:
        "Nach jahrelangen Rückenschmerzen hat mich die osteopathische Behandlung von Frau Bretscher endlich schmerzfrei gemacht. Ihre ganzheitliche Herangehensweise war der Schlüssel zum Erfolg.",
      treatment: "Osteopathische Behandlung & Manuelle Therapie",
    },
    {
      name: "Hans Weber",
      condition: "Migräne",
      rating: 5,
      testimonial:
        "Die Ohrakupunktur hat meine Migräneattacken deutlich reduziert. Frau Bretscher hat eine ruhige Hand und viel Erfahrung. Ich kann sie nur empfehlen.",
      treatment: "Ohrakupunktur & Phytotherapie",
    },
    {
      name: "Anna Müller",
      condition: "Lymphödem",
      rating: 5,
      testimonial:
        "Die manuelle Lymphdrainage hat mir bei meinem Lymphödem sehr geholfen. Frau Bretscher ist sehr einfühlsam und kompetent. Die Behandlung ist angenehm und wirksam.",
      treatment: "Manuelle Lymphdrainage",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center animated-gradient overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 glass-card rounded-full border border-white/30 mb-6">
                <CheckCircle className="w-4 h-4 text-white mr-2" />
                <span className="text-sm font-medium text-white">Vertraut von 2000+ Patienten</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ihr Weg zu einem
                <span className="block">schmerzfreien Leben</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Expertenteam für Osteopathie und Naturheilkunde kombiniert moderne Techniken mit persönlichen Behandlungsplänen. 
                Kehren Sie zu dem zurück, was Sie lieben - schneller und stärker als zuvor.
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
                <span>Krefelderstr. 193, 52070 Aachen</span>
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center glass-card-light p-6 rounded-2xl">
                <AnimatedCounter 
                  value={stat.number} 
                  className="text-3xl lg:text-4xl font-bold text-green-600 mb-2"
                  duration={2500}
                />
                <div className="text-gray-600 font-medium">{stat.label}</div>
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
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-white/90">Lizenzierte und zertifizierte Fachkräfte</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-white/90">Moderne Ausstattung und Einrichtungen</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-white/90">Persönliche Behandlungspläne</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass-card">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Professionelle Osteopathin bei der Arbeit mit Patient"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-6 shadow-xl border border-white/20">
                <div className="flex items-center space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-white">4.9/5 Patientenbewertung</p>
                <p className="text-xs text-white/70">Basierend auf 500+ Bewertungen</p>
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
            {services.map((service, index) => (
              <Card
                key={index}
                className="group glass-card border-white/20 hover:shadow-xl transition-all duration-300"
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Lernen Sie unser Expertenteam kennen</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unsere hochqualifizierte Heilpraktikerin bringt jahrelange Erfahrung und spezialisierte Ausbildung mit, 
              um Ihnen die bestmögliche Versorgung zu bieten.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden glass-card-light border-gray-200/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <InitialsAvatar
                    name={member.name}
                    size="xl"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">
                    {member.credentials} • {member.experience}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900">Spezialisierungen:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 animated-gradient-reverse">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Was unsere Patienten sagen</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Echte Geschichten von Patienten, die Schmerzen überwunden, sich von Verletzungen erholt und zu den Aktivitäten 
              zurückgekehrt sind, die sie lieben.
            </p>
          </div>

          {/* Featured Testimonial */}
          <Card className="max-w-4xl mx-auto glass-card border-white/20 shadow-xl mb-16">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                <Quote className="w-12 h-12 text-white" />
              </div>
              <blockquote className="text-2xl lg:text-3xl text-white mb-8 italic leading-relaxed">
                "Diese Praxis hat mein Leben komplett verändert. Nach Jahren chronischer Schmerzen habe ich endlich ein Team gefunden, 
                das meine Erkrankung wirklich verstanden und die Versorgung bereitgestellt hat, die ich brauchte, um wieder vollständig zu leben."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <InitialsAvatar
                  name="Maria Gonzalez"
                  size="lg"
                />
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="font-semibold text-white">Maria Gonzalez</p>
                  <p className="text-sm text-white/70">Patientin für chronische Schmerzbehandlung</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card border-white/20 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <InitialsAvatar
                      name={testimonial.name}
                      size="md"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-white/70">{testimonial.condition}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-white/90 mb-4 italic leading-relaxed text-sm">
                    "{testimonial.testimonial}"
                  </blockquote>

                  <div className="border-t border-white/20 pt-4">
                    <p className="text-xs text-white/70">
                      <span className="font-medium">Behandlung:</span> {testimonial.treatment}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Besuchen Sie unsere moderne Praxis</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Machen Sie eine virtuelle Tour durch unsere moderne Osteopathie-Praxis. Unsere einladende Umgebung ist 
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Unser Weg zur Exzellenz</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Von bescheidenen Anfängen bis hin zu einer führenden Osteopathie-Praxis - entdecken Sie die Meilensteine, 
              die unser Engagement für außergewöhnliche Patientenversorgung geprägt haben.
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
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">Telefon</h4>
                        <p className="text-gray-700 font-medium text-sm">0241 - 4464848</p>
                        <p className="text-xs text-gray-600">Rufen Sie uns jederzeit an</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">Adresse</h4>
                        <p className="text-gray-700 font-medium text-sm">Krefelderstr. 193</p>
                        <p className="text-xs text-gray-600">52070 Aachen</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">Öffnungszeiten</h4>
                        <p className="text-gray-700 font-medium text-sm">Mo-Fr: 8:00-18:00</p>
                        <p className="text-xs text-gray-600">Sa: 9:00-15:00</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
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
              {/* Map Placeholder */}
              <Card className="glass-card-light border-gray-200/50 shadow-xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Finden Sie uns hier</h3>
                      <p className="text-gray-600">Krefelderstr. 193</p>
                      <p className="text-gray-600">52070 Aachen</p>
                      <p className="text-gray-600">Praxis für Osteopathie u. Naturheilkunde</p>
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
                    className="w-full border-2 border-green-600 text-green-600 hover:bg-green-50 rounded-full bg-transparent"
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
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Bereit, Ihren Genesungsweg zu beginnen?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Lassen Sie sich nicht von Schmerzen zurückhalten. Vereinbaren Sie heute Ihre Beratung und machen Sie den ersten Schritt 
            zu einem gesünderen, aktiveren Lebensstil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold"
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
              0241 - 4464848
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
