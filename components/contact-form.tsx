"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

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
    "Manual Therapy",
    "Sports Rehabilitation",
    "Chronic Pain Management",
    "Post-Surgery Recovery",
    "Neurological Rehabilitation",
    "Pediatric Physiotherapy",
    "General Consultation",
  ]

  return (
    <Card className="glass-card-light border-gray-200/50 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900">Send Us a Message</CardTitle>
        <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
      </CardHeader>
      <CardContent className="p-6">
        {isSubmitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-gray-700 font-medium">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 border-gray-300 focus:border-green-500 focus:ring-green-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 border-gray-300 focus:border-green-500 focus:ring-green-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone" className="text-gray-700 font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 border-gray-300 focus:border-green-500 focus:ring-green-500"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <Label htmlFor="service" className="text-gray-700 font-medium">
                  Service Interested In
                </Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500 bg-white"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="message" className="text-gray-700 font-medium">
                Message *
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 border-gray-300 focus:border-green-500 focus:ring-green-500"
                placeholder="Tell us about your condition, symptoms, or any questions you have..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full text-lg font-semibold"
            >
              Send Message
              <Send className="ml-2 w-5 h-5" />
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
