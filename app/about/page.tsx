import Image from "next/image"
import { Award, Users, Clock, Heart, CheckCircle, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedCounter from "@/components/animated-counter"

export default function AboutPage() {
  const team = [
    {
      name: "Melanie Bretscher",
      role: "Heilpraktikerin, Osteopathin, Physiotherapeutin",
      credentials: "Heilpraktikerin, Osteopathin, Physiotherapeutin",
      experience: "15+ Jahre",
      specialties: ["Osteopathie", "Naturheilkunde", "Physiotherapie", "Ohrakupunktur"],
      image: "/placeholder.svg?height=400&width=400",
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
      icon: <Image src="/green_spiral.svg" alt="Green Spiral" width={32} height={32} className="w-8 h-8 transform -rotate-90" />,
      title: "Schnelle Genesung",
      description:
        "Unsere effizienten Behandlungsmethoden helfen Ihnen, so schnell und sicher wie möglich zu Ihren Aktivitäten zurückzukehren.",
    },
  ]

  const PRIMARY_VALUE_TITLE = "Ganzheitliche Behandlung"

  const credentials = [
    "Heilpraktikerin mit umfassender Ausbildung",
    "Osteopathin mit spezialisierter Weiterbildung",
    "Physiotherapeutin mit langjähriger Erfahrung",
    "Zertifizierte Ohrakupunktur-Therapeutin",
    "Kontinuierliche Weiterbildung in Naturheilkunde",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-green-100/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Über unsere Praxis</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Unser erfahrenes Team kombiniert fortschrittliche klinische Expertise mit echter Mitfühlung, 
              um Ihnen zu helfen, Ihre Gesundheits- und Wellnessziele zu erreichen.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Unsere Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Menschen zu befähigen, körperliche Einschränkungen zu überwinden und optimale Gesundheit durch personalisierte, 
                evidenzbasierte osteopathische und naturheilkundliche Versorgung zu erreichen. 
                Wir glauben daran, nicht nur die Symptome, sondern den ganzen Menschen zu behandeln.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Seit unserer Gründung haben wir über 2.000 Patienten geholfen, zu einem aktiven, schmerzfreien Leben zurückzukehren. 
                Unser Engagement für Exzellenz und Patientenzufriedenheit hat uns zu einem vertrauenswürdigen 
                Gesundheitspartner in unserer Gemeinde gemacht.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <AnimatedCounter 
                    value="30+" 
                    className="text-3xl font-bold text-pink-600 mb-2"
                    duration={2500}
                  />
                  <div className="text-gray-600">Jahre im Dienst</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter 
                    value="10K+" 
                    className="text-3xl font-bold text-pink-600 mb-2"
                    duration={2500}
                  />
                  <div className="text-gray-600">Patienten geholfen</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-green-200">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Moderne Osteopathie-Praxis Innenraum"
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
      <section className="py-20 bg-gradient-to-b from-white to-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">


          {/* Mobile-only: show primary value as text (no card) */}
          <div className="md:hidden">
            {values
              .filter((v) => v.title === PRIMARY_VALUE_TITLE)
              .map((v) => (
                <div key={v.title} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-pink-600 mx-auto mb-3 flex items-center justify-center">
                    <Image src="/green_spiral.svg" alt="Green Spiral" width={24} height={24} className="w-6 h-6 brightness-0 invert" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{v.description}</p>
                </div>
              ))}
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-8 h-8 flex items-center justify-center">
                      {value.icon}
                    </div>
                  </div>
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
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200">
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
                  <p className="text-pink-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">
                    {member.credentials} • {member.experience}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-900">Spezialisierungen:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="px-3 py-1 bg-pink-50 text-pink-600 text-xs rounded-full">
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
      <section className="py-20 bg-gradient-to-b from-white to-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Professionelle Qualifikationen & Zertifizierungen
              </h2>
              <p className="text-lg text-gray-600">
                Unser Engagement für Exzellenz spiegelt sich in unserer umfassenden Ausbildung und Zertifizierung wider.
              </p>
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {credentials.map((credential, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-4 flex-shrink-0" />
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
          <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-r from-green-50 to-green-100/50 shadow-lg">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                "Das Team in dieser Praxis hat mein Genesungserlebnis komplett verändert. Ihr personalisierter Ansatz und 
                echte Fürsorge haben mir geholfen, nach meiner Knieverletzung wieder Marathon zu laufen. 
                Ich kann sie nur wärmstens empfehlen."
              </blockquote>
              <div className="text-gray-600">
                <p className="font-semibold">Jennifer Martinez</p>
                <p className="text-sm">Marathonläuferin & Patientin</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
