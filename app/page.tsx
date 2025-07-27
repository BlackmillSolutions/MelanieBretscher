"use client"

import Image from "next/image"
import { ArrowRight, Phone, MapPin, Clock, Star, CheckCircle, Award, Users, Heart, Send, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"
import React from "react"
import PracticeSlider from "@/components/practice-slider"
import HistoryTimeline from "@/components/history-timeline"

export default function HomePage() {
  const services = [
    {
      title: "Manual Therapy",
      description: "Hands-on treatment techniques to restore mobility and reduce pain",
      icon: "🤲",
      duration: "45-60 minutes",
      benefits: ["Improved joint mobility", "Reduced muscle tension", "Pain relief", "Enhanced circulation"],
    },
    {
      title: "Sports Rehabilitation",
      description: "Specialized recovery programs for athletes and active individuals",
      icon: "🏃‍♂️",
      duration: "60-90 minutes",
      benefits: ["Faster injury recovery", "Performance enhancement", "Injury prevention", "Sport-specific training"],
    },
    {
      title: "Chronic Pain Management",
      description: "Comprehensive approaches to long-term pain relief and management",
      icon: "💪",
      duration: "60 minutes",
      benefits: ["Pain reduction", "Improved function", "Better sleep quality", "Enhanced quality of life"],
    },
    {
      title: "Post-Surgery Recovery",
      description: "Guided rehabilitation following surgical procedures",
      icon: "🏥",
      duration: "45-75 minutes",
      benefits: ["Faster healing", "Reduced complications", "Restored function", "Scar tissue management"],
    },
    {
      title: "Neurological Rehabilitation",
      description: "Specialized treatment for neurological conditions",
      icon: "🧠",
      duration: "60-90 minutes",
      benefits: ["Improved balance", "Enhanced coordination", "Increased strength", "Better mobility"],
    },
    {
      title: "Pediatric Physiotherapy",
      description: "Specialized care for children and adolescents",
      icon: "👶",
      duration: "45-60 minutes",
      benefits: ["Improved development", "Enhanced motor skills", "Better posture", "Increased confidence"],
    },
  ]

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "2000+", label: "Patients Treated" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" },
  ]

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Physiotherapist & Clinic Director",
      credentials: "DPT, OCS, FAAOMPT",
      experience: "15+ years",
      specialties: ["Manual Therapy", "Sports Medicine", "Orthopedic Rehabilitation"],
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Dr. Michael Chen",
      role: "Senior Physiotherapist",
      credentials: "DPT, SCS, CSCS",
      experience: "12+ years",
      specialties: ["Sports Rehabilitation", "Strength Training", "Movement Analysis"],
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Physiotherapist",
      credentials: "DPT, NCS",
      experience: "8+ years",
      specialties: ["Neurological Rehabilitation", "Balance Training", "Chronic Pain"],
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-cyan-600" />,
      title: "Patient-Centered Care",
      description: "Every treatment plan is tailored to your unique needs, goals, and lifestyle.",
    },
    {
      icon: <Award className="w-8 h-8 text-cyan-600" />,
      title: "Excellence in Practice",
      description: "We maintain the highest standards through continuous education and evidence-based treatments.",
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-600" />,
      title: "Collaborative Approach",
      description: "We work closely with your healthcare team to ensure comprehensive care.",
    },
    {
      icon: <Clock className="w-8 h-8 text-cyan-600" />,
      title: "Timely Recovery",
      description:
        "Our efficient treatment methods help you return to your activities as quickly and safely as possible.",
    },
  ]

  const testimonials = [
    {
      name: "Jennifer Martinez",
      condition: "Knee Injury Recovery",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "After my knee surgery, I was worried I'd never run again. The team here not only got me back on my feet but helped me return to marathon running stronger than ever.",
      treatment: "Post-Surgery Recovery & Sports Rehabilitation",
    },
    {
      name: "Robert Chen",
      condition: "Chronic Back Pain",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "I suffered from chronic back pain for over 5 years. After just 3 months of treatment here, I'm pain-free and back to playing golf.",
      treatment: "Manual Therapy & Chronic Pain Management",
    },
    {
      name: "Sarah Thompson",
      condition: "Sports Injury",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "As a competitive tennis player, I needed specialized care for my shoulder injury. I'm back on the court and playing better than before.",
      treatment: "Sports Rehabilitation",
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
                <span className="text-sm font-medium text-white">Trusted by 2000+ patients</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Your Journey to
                <span className="block">Pain-Free Living</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Expert physiotherapy care combining advanced techniques with personalized treatment plans. Get back to
                doing what you love, faster and stronger than before.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold bg-transparent backdrop-blur-md"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </Button>
            </div>

            {/* Quick Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-white" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-white" />
                <span>Downtown Medical Center</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-white" />
                <span>Mon-Fri 8AM-7PM</span>
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
                <div className="text-3xl lg:text-4xl font-bold text-cyan-600 mb-2">{stat.number}</div>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Expert Care You Can Trust</h2>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                With over 15 years of experience, our team of certified physiotherapists combines evidence-based
                treatments with compassionate care to help you achieve optimal health and wellness.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-white/90">Licensed and certified professionals</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-white/90">State-of-the-art equipment and facilities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  <span className="text-white/90">Personalized treatment plans</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass-card">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Professional physiotherapist working with patient"
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
                <p className="text-sm font-semibold text-white">4.9/5 Patient Rating</p>
                <p className="text-xs text-white/70">Based on 500+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and ensure you receive the highest quality care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center glass-card-light border-gray-200/50 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center">
                      {React.cloneElement(value.icon, { className: "w-8 h-8 text-white" })}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Comprehensive Physiotherapy Services</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              From injury recovery to performance enhancement, we provide personalized care tailored to your specific
              needs and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group glass-card border-white/20 hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{service.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4 text-center">{service.description}</p>

                  <div className="border-t border-white/20 pt-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/80">Duration:</span>
                      <span className="text-white font-medium">{service.duration}</span>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2 text-sm">Key Benefits:</h4>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our highly qualified physiotherapists bring years of experience and specialized training to provide you
              with the best possible care.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden glass-card-light border-gray-200/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-cyan-100 to-cyan-200">
                  <Image
                    src={
                      member.image ||
                      "/placeholder.svg?height=400&width=400&query=professional physiotherapist portrait" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg"
                    }
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-cyan-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">
                    {member.credentials} • {member.experience}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">What Our Patients Say</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Real stories from patients who have overcome pain, recovered from injuries, and returned to the activities
              they love.
            </p>
          </div>

          {/* Featured Testimonial */}
          <Card className="max-w-4xl mx-auto glass-card border-white/20 shadow-xl mb-16">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                <Quote className="w-12 h-12 text-white" />
              </div>
              <blockquote className="text-2xl lg:text-3xl text-white mb-8 italic leading-relaxed">
                "This clinic completely changed my life. After years of chronic pain, I finally found a team that truly
                understood my condition and provided the care I needed to get back to living fully."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-white/20 to-white/10">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Featured patient"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="font-semibold text-white">Maria Gonzalez</p>
                  <p className="text-sm text-white/70">Chronic Pain Management Patient</p>
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
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-white/20 to-white/10">
                      <Image
                        src={testimonial.image || "/placeholder.svg?height=48&width=48&query=patient portrait"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
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
                      <span className="font-medium">Treatment:</span> {testimonial.treatment}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Tour Our Modern Facility</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a virtual tour of our state-of-the-art physiotherapy clinic. Our modern, welcoming environment is
              designed to support your healing and recovery journey.
            </p>
          </div>

          <PracticeSlider />
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-20 animated-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Journey of Excellence</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              From humble beginnings to becoming a leading physiotherapy practice, discover the milestones that have
              shaped our commitment to exceptional patient care.
            </p>
          </div>

          <HistoryTimeline />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Book Your Appointment</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your journey to better health? Get in touch with us today to schedule your consultation.
            </p>
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info and Contact Form */}
            <div className="space-y-8">
              {/* Contact Information Tile */}
              <Card className="glass-card-light border-gray-200/50 shadow-xl">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">Phone</h4>
                        <p className="text-gray-700 font-medium text-sm">(555) 123-4567</p>
                        <p className="text-xs text-gray-600">Call us anytime</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">Location</h4>
                        <p className="text-gray-700 font-medium text-sm">123 Health Street</p>
                        <p className="text-xs text-gray-600">Downtown Medical Center</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">Hours</h4>
                        <p className="text-gray-700 font-medium text-sm">Mon-Fri: 8AM-7PM</p>
                        <p className="text-xs text-gray-600">Sat: 9AM-3PM</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Send className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">Email</h4>
                        <p className="text-gray-700 font-medium text-sm">info@physioclinic.com</p>
                        <p className="text-xs text-gray-600">24 hour response</p>
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
                <div className="aspect-[4/3] bg-gradient-to-br from-cyan-100 to-cyan-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Find Us Here</h3>
                      <p className="text-gray-600">123 Health Street</p>
                      <p className="text-gray-600">Downtown Medical Center</p>
                      <p className="text-gray-600">Suite 200, Medical Plaza</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Contact */}
              <Card className="glass-card-light border-gray-200/50 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Need Immediate Assistance?</h3>
                  <p className="mb-6 text-gray-600">
                    For urgent matters or to speak with someone right away, give us a call during business hours.
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 rounded-full bg-transparent"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Call (555) 123-4567
                  </Button>
                  <div className="text-center text-sm text-gray-600 mt-3">Mon-Fri: 8AM-7PM | Sat: 9AM-3PM</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 animated-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Start Your Recovery Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't let pain hold you back. Book your consultation today and take the first step towards a healthier, more
            active lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book Appointment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold bg-transparent backdrop-blur-md"
            >
              <Phone className="mr-2 w-5 h-5" />
              (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
