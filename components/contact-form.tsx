"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
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
    <Card className="glass-card-light border-gray-200/50 shadow-xl">
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
  )
}
