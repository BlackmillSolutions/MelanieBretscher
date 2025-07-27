import Image from "next/image"
import { Star, Quote, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Maria Schmidt",
      condition: "Chronische Rückenschmerzen",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "Nach jahrelangen Rückenschmerzen hat mich die osteopathische Behandlung von Frau Bretscher endlich schmerzfrei gemacht. Ihre ganzheitliche Herangehensweise war der Schlüssel zum Erfolg. Ich kann wieder schmerzfrei schlafen und meinen Alltag genießen.",
      treatment: "Osteopathische Behandlung & Manuelle Therapie",
      duration: "4 Monate",
    },
    {
      name: "Hans Weber",
      condition: "Migräne",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "Die Ohrakupunktur hat meine Migräneattacken deutlich reduziert. Frau Bretscher hat eine ruhige Hand und viel Erfahrung. Die Behandlung ist angenehm und die Wirkung hält lange an. Ich kann sie nur empfehlen.",
      treatment: "Ohrakupunktur & Phytotherapie",
      duration: "3 Monate",
    },
    {
      name: "Anna Müller",
      condition: "Lymphödem",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "Die manuelle Lymphdrainage hat mir bei meinem Lymphödem sehr geholfen. Frau Bretscher ist sehr einfühlsam und kompetent. Die Behandlung ist angenehm und wirksam. Meine Beine fühlen sich viel leichter an.",
      treatment: "Manuelle Lymphdrainage",
      duration: "6 Wochen",
    },
    {
      name: "Michael Rodriguez",
      condition: "Stress und Schlafstörungen",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "Die Kombination aus Phytotherapie und Fußreflexzonenmassage hat meine Schlafstörungen und Stresssymptome deutlich verbessert. Frau Bretscher nimmt sich viel Zeit und erklärt alles sehr verständlich.",
      treatment: "Phytotherapie & Fußreflexzonenmassage",
      duration: "2 Monate",
    },
    {
      name: "Lisa Wang",
      condition: "Verdauungsprobleme",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "Die Schröpftherapie und Phytotherapie haben meine Verdauungsprobleme komplett gelöst. Frau Bretscher hat eine natürliche und sanfte Herangehensweise. Ich fühle mich viel besser und energiegeladener.",
      treatment: "Schröpfen & Phytotherapie",
      duration: "1 Monat",
    },
    {
      name: "David Johnson",
      condition: "Erschöpfung und Vitaminmangel",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "Die Infusionstherapie hat mir bei meiner Erschöpfung und meinem Vitaminmangel sehr geholfen. Frau Bretscher ist sehr professionell und die Behandlung war angenehm. Ich fühle mich wieder voller Energie.",
      treatment: "Infusionen und Injektionen",
      duration: "3 Wochen",
    },
    {
      name: "Emma Foster",
      condition: "Sportverletzung",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "Nach meiner Sportverletzung hat die Kombination aus Physiotherapie und Osteopathie mir geholfen, schnell wieder fit zu werden. Frau Bretscher ist sehr kompetent und motivierend.",
      treatment: "Physiotherapie & Osteopathie",
      duration: "3 Monate",
    },
    {
      name: "James Wilson",
      condition: "Chronische Schmerzen",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "Die ganzheitliche Behandlung mit verschiedenen naturheilkundlichen Methoden hat meine chronischen Schmerzen deutlich reduziert. Frau Bretscher ist sehr einfühlsam und findet immer die richtige Therapie.",
      treatment: "Ganzheitliche Naturheilkunde",
      duration: "6 Monate",
    },
  ]

  const stats = [
    { number: "98%", label: "Patientenzufriedenheit" },
    { number: "4.9/5", label: "Durchschnittliche Bewertung" },
    { number: "500+", label: "Fünf-Sterne-Bewertungen" },
    { number: "2000+", label: "Erfolgsgeschichten" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-green-100/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Patientenerfolgsgeschichten</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Lesen Sie echte Geschichten von unseren Patienten, die Schmerzen überwunden, sich von Verletzungen erholt 
              und zu den Aktivitäten zurückgekehrt sind, die sie lieben. Ihre Wege inspirieren uns jeden Tag.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
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
          <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-r from-green-50 to-green-100/50 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="flex justify-center mb-6">
                <Quote className="w-12 h-12 text-green-600" />
              </div>
              <blockquote className="text-2xl lg:text-3xl text-gray-700 text-center mb-8 italic leading-relaxed">
                "Diese Praxis hat mein Leben komplett verändert. Nach Jahren chronischer Schmerzen habe ich endlich ein Team gefunden, 
                das meine Erkrankung wirklich verstanden und die Versorgung bereitgestellt hat, die ich brauchte, um wieder vollständig zu leben."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-green-100 to-green-200">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Hervorgehobener Patient"
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
                  <p className="text-sm text-gray-600">Patientin für chronische Schmerzbehandlung</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Was unsere Patienten sagen</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jeder Patientenweg ist einzigartig. Hier sind einige der inspirierenden Geschichten von Menschen, 
              die ihre Gesundheits- und Wellnessziele mit unserer Hilfe erreicht haben.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-green-100 to-green-200">
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
                      <span className="text-gray-600">Behandlung:</span>
                      <span className="text-gray-900 font-medium">{testimonial.treatment}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Dauer:</span>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Video-Bewertungen</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hören Sie direkt von unseren Patienten, während sie ihre Genesungswege und Erfahrungen mit unseren 
              osteopathischen und naturheilkundlichen Leistungen teilen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 relative group cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                      <div className="w-0 h-0 border-l-[12px] border-l-green-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 text-white p-2 rounded">
                      <p className="text-sm font-medium">Patientengenesungsgeschichte #{video}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Bereit, Ihre Erfolgsgeschichte zu schreiben?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Schließen Sie sich den Tausenden von Patienten an, die ihr Leben durch unsere personalisierte osteopathische 
            und naturheilkundliche Versorgung verändert haben. Ihr Weg zur Genesung beginnt hier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold"
            >
              Ihre Beratung vereinbaren
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold bg-transparent"
            >
              Weitere Geschichten lesen
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
