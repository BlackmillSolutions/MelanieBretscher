import Image from "next/image"
import { Star, Quote, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      condition: "Knee Injury Recovery",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "After my knee surgery, I was worried I'd never run again. The team here not only got me back on my feet but helped me return to marathon running stronger than ever. Their personalized approach and genuine care made all the difference in my recovery.",
      treatment: "Post-Surgery Recovery & Sports Rehabilitation",
      duration: "4 months",
    },
    {
      name: "Robert Chen",
      condition: "Chronic Back Pain",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "I suffered from chronic back pain for over 5 years. After just 3 months of treatment here, I'm pain-free and back to playing golf. The manual therapy techniques and exercise program they designed specifically for me were incredibly effective.",
      treatment: "Manual Therapy & Chronic Pain Management",
      duration: "3 months",
    },
    {
      name: "Sarah Thompson",
      condition: "Sports Injury",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "As a competitive tennis player, I needed specialized care for my shoulder injury. The sports rehabilitation program here was exactly what I needed. I'm back on the court and playing better than before my injury.",
      treatment: "Sports Rehabilitation",
      duration: "6 weeks",
    },
    {
      name: "Michael Rodriguez",
      condition: "Stroke Recovery",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "After my stroke, I thought I'd never regain full mobility. The neurological rehabilitation team here worked miracles. Their patience, expertise, and encouragement helped me exceed all expectations in my recovery.",
      treatment: "Neurological Rehabilitation",
      duration: "8 months",
    },
    {
      name: "Lisa Wang",
      condition: "Postural Problems",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "Years of desk work had given me terrible posture and neck pain. The ergonomic assessment and corrective exercises I learned here have completely transformed how I feel at work. No more daily headaches!",
      treatment: "Manual Therapy & Postural Correction",
      duration: "2 months",
    },
    {
      name: "David Johnson",
      condition: "Hip Replacement Recovery",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "The post-surgery rehabilitation program exceeded my expectations. I was walking without assistance much sooner than anticipated, and now I'm more active than I was before my hip problems started.",
      treatment: "Post-Surgery Recovery",
      duration: "5 months",
    },
    {
      name: "Emma Foster",
      condition: "Pediatric Development",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "My daughter's developmental delays were concerning, but the pediatric physiotherapy team here made such a difference. She's now meeting all her milestones and is a confident, active 6-year-old.",
      treatment: "Pediatric Physiotherapy",
      duration: "1 year",
    },
    {
      name: "James Wilson",
      condition: "Work-Related Injury",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "My work injury left me unable to do my job as a construction worker. The team here understood my needs and got me back to full strength. Their workplace injury expertise was exactly what I needed.",
      treatment: "Manual Therapy & Strength Training",
      duration: "4 months",
    },
  ]

  const stats = [
    { number: "98%", label: "Patient Satisfaction Rate" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "500+", label: "Five-Star Reviews" },
    { number: "2000+", label: "Success Stories" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-cyan-50/30 to-cyan-100/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Patient Success Stories</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Read real stories from our patients who have overcome pain, recovered from injuries, and returned to the
              activities they love. Their journeys inspire us every day.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-cyan-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-r from-cyan-50 to-cyan-100/50 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="flex justify-center mb-6">
                <Quote className="w-12 h-12 text-cyan-600" />
              </div>
              <blockquote className="text-2xl lg:text-3xl text-gray-700 text-center mb-8 italic leading-relaxed">
                "This clinic completely changed my life. After years of chronic pain, I finally found a team that truly
                understood my condition and provided the care I needed to get back to living fully."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-cyan-100 to-cyan-200">
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
                  <p className="font-semibold text-gray-900">Maria Gonzalez</p>
                  <p className="text-sm text-gray-600">Chronic Pain Management Patient</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-cyan-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every patient's journey is unique. Here are some of the inspiring stories from individuals who have
              achieved their health and wellness goals with our help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-cyan-100 to-cyan-200">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.condition}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
                    "{testimonial.testimonial}"
                  </blockquote>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Treatment:</span>
                      <span className="text-gray-900 font-medium">{testimonial.treatment}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="text-gray-900 font-medium">{testimonial.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear directly from our patients as they share their recovery journeys and experiences with our
              physiotherapy services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-100 to-cyan-200 relative group cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                      <div className="w-0 h-0 border-l-[12px] border-l-cyan-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 text-white p-2 rounded">
                      <p className="text-sm font-medium">Patient Recovery Story #{video}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join the thousands of patients who have transformed their lives through our personalized physiotherapy care.
            Your journey to recovery starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-cyan-600 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold"
            >
              Book Your Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold bg-transparent"
            >
              Read More Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
