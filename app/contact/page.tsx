"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      details: "0241 - 4464848",
      subtitle: "Rufen Sie uns jederzeit an",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-Mail",
      details: "melaniebretscher@netcologne.de",
      subtitle: "Wir antworten innerhalb von 24 Stunden",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      details: "Krefelder Str. 79a, 52070 Aachen",
      subtitle: "Praxis für Osteopathie u. Naturheilkunde",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Öffnungszeiten",
      details: "Mo-Dr: 8:00-18:00 | Fr-Sa: Termine nach Vereinbarung",
      subtitle: "Sonntags geschlossen",
    },
  ]

  const services = [
    "Osteopathische Behandlung",
    "Ohrakupunktur",
    "Phytotherapie",
    "Infusionen und Injektionen",
    "Schröpfen",
    "Fußreflexzonenmassage",
    "Manuelle Lymphdrainage",
    "Physiotherapie",
    "Allgemeine Beratung",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-teal-50/30 to-teal-100/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Vereinbaren Sie Ihren Termin</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Bereit, Ihren Weg zu besserer Gesundheit zu beginnen? Kontaktieren Sie uns heute, um Ihre Beratung zu vereinbaren oder 
              Fragen zu unseren Leistungen zu stellen.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center border-0 bg-gradient-to-b from-white to-teal-50/30 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4 text-[#f8b5c1]">{info.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-700 font-medium mb-1">{info.details}</p>
                  <p className="text-sm text-gray-600">{info.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gradient-to-b from-white to-teal-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Senden Sie uns eine Nachricht</CardTitle>
                <p className="text-gray-600">Füllen Sie das Formular unten aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
              </CardHeader>
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-[#f8b5c1] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Nachricht gesendet!</h3>
                    <p className="text-gray-600">Vielen Dank für Ihre Kontaktaufnahme. Wir melden uns bald bei Ihnen.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 font-medium">
                          Vollständiger Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1 border-gray-300 focus:border-[#f8b5c1] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="Ihr vollständiger Name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-700 font-medium">
                          E-Mail-Adresse *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 border-gray-300 focus:border-[#f8b5c1] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="ihre.email@beispiel.de"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 font-medium">
                          Telefonnummer
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1 border-gray-300 focus:border-[#f8b5c1] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                          placeholder="0241 - 4464848"
                        />
                      </div>
                      <div>
                        <Label htmlFor="service" className="text-gray-700 font-medium">
                          Interessierte Leistung
                        </Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            setFormData({ ...formData, service: value })
                          }
                        >
                          <SelectTrigger
                            id="service"
                            className="mt-1 w-full border border-gray-300 rounded-md focus:border-[#f8b5c1] focus:ring-0 focus-visible:ring-0 focus:ring-offset-0 focus-visible:ring-offset-0"
                          >
                            <SelectValue placeholder="Leistung auswählen" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            {services.map((service, index) => (
                              <SelectItem
                                key={index}
                                value={service}
                                className="hover:bg-[#f8b5c1]/10 focus:bg-[#f8b5c1]/20 focus:text-[#f4a6b3] data-[highlighted]:bg-[#f8b5c1]/20 data-[highlighted]:text-[#f4a6b3] data-[state=checked]:bg-[#f8b5c1]/20 data-[state=checked]:text-[#f4a6b3]"
                              >
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-700 font-medium">
                        Nachricht *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 border-gray-300 focus:border-[#f8b5c1] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Erzählen Sie uns von Ihrem Zustand, Symptomen oder Fragen, die Sie haben..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#f8b5c1] hover:bg-[#f4a6b3] text-white py-3 rounded-full text-lg font-semibold"
                    >
                      Nachricht senden
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Interactive Google Maps */}
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <iframe
                    src="https://maps.google.com/maps?q=Krefelder+Str.+79a,+52070+Aachen,+Germany&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Praxis für Osteopathie u. Naturheilkunde - Krefelder Str. 79a, 52070 Aachen"
                    className="absolute inset-0"
                  ></iframe>
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4">
                    <div className="text-center">
                      <MapPin className="w-5 h-5 text-[#f8b5c1] mx-auto mb-2" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Praxis für Osteopathie u. Naturheilkunde</h3>
                      <p className="text-gray-700 font-medium">Krefelder Str. 79a, 52070 Aachen</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Contact */}
              <Card className="border-0 bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Sofortige Hilfe benötigt?</h3>
                  <p className="mb-6 text-teal-100">
                    Für dringende Angelegenheiten oder um sofort mit jemandem zu sprechen, rufen Sie uns während der Geschäftszeiten an.
                  </p>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-2 border-white text-white hover:bg-white hover:text-[#f8b5c1] rounded-full bg-transparent"
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      Anrufen 0241 - 4464848
                    </Button>
                    <div className="text-center text-sm text-teal-100">Mo-Dr: 8:00-18:00 | Fr-Sa: Termine nach Vereinbarung</div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Info */}
              <Card className="border-0 bg-red-50 border-red-200 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">Medizinischer Notfall?</h3>
                  <p className="text-red-700 text-sm mb-4">
                    Wenn Sie einen medizinischen Notfall erleben, rufen Sie bitte 112 an oder gehen Sie sofort in die nächste Notaufnahme.
                  </p>
                  <p className="text-red-600 text-xs">
                    Diese Praxis bietet osteopathische und naturheilkundliche Leistungen und ist nicht für medizinische Notfälle ausgerüstet.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Häufig gestellte Fragen</h2>
              <p className="text-lg text-gray-600">
                Schnelle Antworten auf häufige Fragen zu Terminen und unseren Leistungen.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Benötige ich eine Überweisung?</h3>
                  <p className="text-gray-600">
                    Für die meisten unserer Leistungen ist keine Überweisung erforderlich. Einige Krankenversicherungen 
                    können jedoch eine ärztliche Überweisung für die Kostenübernahme verlangen. Wir empfehlen, 
                    sich bei Ihrer Krankenversicherung zu erkundigen.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Was sollte ich zu meinem ersten Termin mitbringen?
                  </h3>
                  <p className="text-gray-600">
                    Bitte bringen Sie einen gültigen Ausweis, Krankenversicherungskarte, relevante medizinische Unterlagen 
                    oder Bildgebungsergebnisse, eine Liste Ihrer aktuellen Medikamente und bequeme Kleidung mit, 
                    die einfache Bewegungen ermöglicht.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Wie lange dauert jede Sitzung?</h3>
                  <p className="text-gray-600">
                    Die Sitzungslänge variiert je nach Art der Behandlung, typischerweise zwischen 30-90 Minuten. 
                    Ihr Therapeut bespricht die erwartete Dauer während Ihrer ersten Beratung.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
