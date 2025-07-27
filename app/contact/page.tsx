"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

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
      title: "Phone",
      details: "(555) 123-4567",
      subtitle: "Call us anytime",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@physioclinic.com",
      subtitle: "We'll respond within 24 hours",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "123 Health Street, Downtown Medical Center",
      subtitle: "Suite 200, Medical Plaza",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: "Mon-Fri: 8AM-7PM, Sat: 9AM-3PM",
      subtitle: "Closed Sundays",
    },
  ]

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-green-100/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Book Your Appointment</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to start your journey to better health? Get in touch with us today to schedule your consultation or
              ask any questions about our services.
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
                className="text-center border-0 bg-gradient-to-b from-white to-green-50/30 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4 text-green-600">{info.icon}</div>
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
      <section className="py-20 bg-gradient-to-b from-white to-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
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

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Find Us Here</h3>
                      <p className="text-gray-600">123 Health Street</p>
                      <p className="text-gray-600">Downtown Medical Center</p>
                      <p className="text-gray-600">Suite 200, Medical Plaza</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Contact */}
              <Card className="border-0 bg-gradient-to-r from-green-600 to-green-700 text-white shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Need Immediate Assistance?</h3>
                  <p className="mb-6 text-green-100">
                    For urgent matters or to speak with someone right away, give us a call during business hours.
                  </p>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-2 border-white text-white hover:bg-white hover:text-green-600 rounded-full bg-transparent"
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      Call (555) 123-4567
                    </Button>
                    <div className="text-center text-sm text-green-100">Mon-Fri: 8AM-7PM | Sat: 9AM-3PM</div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Info */}
              <Card className="border-0 bg-red-50 border-red-200 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">Medical Emergency?</h3>
                  <p className="text-red-700 text-sm mb-4">
                    If you're experiencing a medical emergency, please call 911 or go to your nearest emergency room
                    immediately.
                  </p>
                  <p className="text-red-600 text-xs">
                    This clinic provides physiotherapy services and is not equipped to handle medical emergencies.
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Quick answers to common questions about appointments and our services.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Do I need a referral?</h3>
                  <p className="text-gray-600">
                    No referral is required for most of our services. However, some insurance plans may require a
                    physician's referral for coverage. We recommend checking with your insurance provider.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What should I bring to my first appointment?
                  </h3>
                  <p className="text-gray-600">
                    Please bring a valid ID, insurance card, any relevant medical records or imaging results, a list of
                    current medications, and comfortable clothing that allows easy movement.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">How long is each session?</h3>
                  <p className="text-gray-600">
                    Session lengths vary depending on the type of treatment, typically ranging from 45-90 minutes. Your
                    therapist will discuss the expected duration during your initial consultation.
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
