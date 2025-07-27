import Image from "next/image"
import { Award, Users, Clock, Heart, CheckCircle, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
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

  const credentials = [
    "American Physical Therapy Association (APTA) Members",
    "Board Certified Orthopedic Clinical Specialists",
    "Fellowship-trained Manual Therapy Specialists",
    "Certified Strength and Conditioning Specialists",
    "Continuing Education Requirements Exceeded Annually",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-cyan-50/30 to-cyan-100/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Our Practice</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dedicated to providing exceptional physiotherapy care with a personal touch. Our experienced team combines
              advanced clinical expertise with genuine compassion to help you achieve your health and wellness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To empower individuals to overcome physical limitations and achieve optimal health through personalized,
                evidence-based physiotherapy care. We believe in treating not just the symptoms, but the whole person.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Since our founding in 2008, we've helped over 2,000 patients return to active, pain-free lives. Our
                commitment to excellence and patient satisfaction has made us a trusted healthcare partner in our
                community.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Serving</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">2000+</div>
                  <div className="text-gray-600">Patients Helped</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-100 to-cyan-200">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Modern physiotherapy clinic interior"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-white to-cyan-50/30">
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
                className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
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
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-cyan-100 to-cyan-200">
                  <Image
                    src={member.image || "/placeholder.svg"}
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

      {/* Credentials */}
      <section className="py-20 bg-gradient-to-b from-white to-cyan-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Professional Credentials & Certifications
              </h2>
              <p className="text-lg text-gray-600">
                Our commitment to excellence is reflected in our extensive training and certifications.
              </p>
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {credentials.map((credential, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-600 mr-4 flex-shrink-0" />
                      <span className="text-gray-700">{credential}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Patient Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-r from-cyan-50 to-cyan-100/50 shadow-lg">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                "The team at this clinic completely transformed my recovery experience. Their personalized approach and
                genuine care helped me get back to running marathons after my knee injury. I couldn't recommend them
                more highly."
              </blockquote>
              <div className="text-gray-600">
                <p className="font-semibold">Jennifer Martinez</p>
                <p className="text-sm">Marathon Runner & Patient</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
