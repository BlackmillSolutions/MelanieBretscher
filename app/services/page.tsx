import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Users, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  const services = [
    {
      title: "Manual Therapy",
      description:
        "Hands-on treatment techniques including joint mobilization, soft tissue massage, and myofascial release to restore mobility and reduce pain.",
      duration: "45-60 minutes",
      benefits: ["Improved joint mobility", "Reduced muscle tension", "Pain relief", "Enhanced circulation"],
      conditions: ["Back and neck pain", "Joint stiffness", "Muscle strains", "Arthritis"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Sports Rehabilitation",
      description:
        "Specialized programs designed for athletes and active individuals to recover from sports injuries and enhance performance.",
      duration: "60-90 minutes",
      benefits: ["Faster injury recovery", "Performance enhancement", "Injury prevention", "Sport-specific training"],
      conditions: ["ACL injuries", "Shoulder impingement", "Tennis elbow", "Ankle sprains"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Chronic Pain Management",
      description:
        "Comprehensive approach to managing long-term pain conditions through education, exercise, and therapeutic interventions.",
      duration: "60 minutes",
      benefits: ["Pain reduction", "Improved function", "Better sleep quality", "Enhanced quality of life"],
      conditions: ["Fibromyalgia", "Chronic back pain", "Arthritis", "Neuropathic pain"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Post-Surgery Recovery",
      description:
        "Guided rehabilitation following surgical procedures to restore function, strength, and mobility safely and effectively.",
      duration: "45-75 minutes",
      benefits: ["Faster healing", "Reduced complications", "Restored function", "Scar tissue management"],
      conditions: ["Joint replacement", "Rotator cuff repair", "Spinal surgery", "Fracture repair"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Neurological Rehabilitation",
      description:
        "Specialized treatment for individuals with neurological conditions to improve movement, balance, and functional independence.",
      duration: "60-90 minutes",
      benefits: ["Improved balance", "Enhanced coordination", "Increased strength", "Better mobility"],
      conditions: ["Stroke recovery", "Parkinson's disease", "Multiple sclerosis", "Spinal cord injury"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Pediatric Physiotherapy",
      description:
        "Specialized care for children and adolescents with developmental, orthopedic, or neurological conditions.",
      duration: "45-60 minutes",
      benefits: ["Improved development", "Enhanced motor skills", "Better posture", "Increased confidence"],
      conditions: ["Developmental delays", "Cerebral palsy", "Sports injuries", "Postural problems"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const treatmentProcess = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "Comprehensive evaluation of your condition, medical history, and goals.",
    },
    {
      step: "02",
      title: "Treatment Plan",
      description: "Personalized plan developed based on your specific needs and objectives.",
    },
    {
      step: "03",
      title: "Active Treatment",
      description: "Hands-on therapy, exercises, and education to address your condition.",
    },
    {
      step: "04",
      title: "Progress Monitoring",
      description: "Regular assessment and plan adjustments to ensure optimal outcomes.",
    },
    {
      step: "05",
      title: "Maintenance & Prevention",
      description: "Long-term strategies to maintain improvements and prevent re-injury.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-green-100/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Comprehensive Physiotherapy Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              From injury recovery to performance enhancement, we offer a full range of evidence-based treatments
              tailored to your unique needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full">
                  Book Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Treats Conditions:</h4>
                      <ul className="space-y-2">
                        {service.conditions.map((condition, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                            {condition}
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

      {/* Treatment Process */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Treatment Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure you receive the most effective treatment for your specific
              condition.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {treatmentProcess.map((process, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {process.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Evidence-Based Treatment</h3>
                    <p className="text-gray-600">
                      All our treatments are based on the latest research and proven clinical methods.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Personalized Care</h3>
                    <p className="text-gray-600">
                      Every treatment plan is customized to your specific needs and goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-600">We offer convenient appointment times to fit your busy schedule.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-green-200">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Modern physiotherapy treatment room"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Begin Your Treatment?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Don't let pain or injury limit your potential. Contact us today to schedule your consultation and start your
            journey to recovery.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
