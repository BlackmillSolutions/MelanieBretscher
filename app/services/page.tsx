import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ServiceModalContent, SERVICE_CONTENT } from "@/components/services-content"

export default function ServicesPage() {
  const services = [
    {
      title: "Osteopathische Behandlung",
      description:
        "Ganzheitliche manuelle Therapie zur Behandlung von Funktionsstörungen und Schmerzen. Die Osteopathie betrachtet den Körper als Einheit und behandelt die Ursachen von Beschwerden.",
      duration: "45-60 Minuten",
      benefits: ["Verbesserte Beweglichkeit", "Schmerzlinderung", "Entspannung & Regulation des Nervensystems", "Natürliche Heilung"],
      conditions: ["Rücken- und Nackenschmerzen", "Gelenksteifheit", "Muskelverspannungen", "Arthritis"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Ohrakupunktur",
      description:
        "Spezialisierte Akupunkturbehandlung über die Ohrmuschel zur Schmerzlinderung und Regulation des Nervensystems. Eine sanfte und effektive Therapieform.",
      duration: "30-45 Minuten",
      benefits: ["Schnelle Schmerzlinderung", "Regulation des Nervensystems", "Stressabbau", "Ganzheitliche Wirkung"],
      conditions: ["Migräne", "Chronische Schmerzen", "Stress", "Schlafstörungen"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Phytotherapie",
      description:
        "Behandlung mit pflanzlichen Heilmitteln zur Unterstützung der natürlichen Heilungsprozesse. Natürliche Wirkstoffe für eine sanfte und nachhaltige Therapie.",
      duration: "30-60 Minuten",
      benefits: ["Natürliche Wirkstoffe", "Geringe Nebenwirkungen", "Ganzheitliche Therapie", "Langfristige Wirkung"],
      conditions: ["Entzündungen", "Verdauungsprobleme", "Immunschwäche", "Hormonelle Störungen"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Infusionen und Injektionen",
      description:
        "Intravenöse und intramuskuläre Therapien zur gezielten Nährstoffversorgung und Behandlung. Direkte Aufnahme für schnelle und effektive Wirkung.",
      duration: "30-90 Minuten",
      benefits: ["Direkte Wirkung", "Gezielte Therapie", "Schnelle Aufnahme", "Individuelle Dosierung"],
      conditions: ["Vitaminmangel", "Erschöpfung", "Entzündungen", "Immunschwäche"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Schröpfen",
      description:
        "Traditionelle Therapie zur Verbesserung der Durchblutung und Entgiftung des Gewebes. Eine bewährte Methode zur Schmerzlinderung und Entspannung.",
      duration: "20-30 Minuten",
      benefits: ["Verbesserte Durchblutung", "Entgiftung", "Schmerzlinderung", "Entspannung"],
      conditions: ["Muskelverspannungen", "Rückenschmerzen", "Verdauungsprobleme", "Erkältungen"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Fußreflexzonenmassage",
      description:
        "Reflexzonentherapie über die Füße zur Behandlung verschiedener Körperbereiche. Eine entspannende und wohltuende Therapieform.",
      duration: "45-60 Minuten",
      benefits: ["Entspannung", "Durchblutungsförderung", "Schmerzlinderung", "Ganzheitliche Wirkung"],
      conditions: ["Stress", "Kopfschmerzen", "Verdauungsprobleme", "Schlafstörungen"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Manuelle Lymphdrainage",
      description:
        "Sanfte Massagetechnik zur Verbesserung des Lymphabflusses und Entstauung. Besonders wirksam bei Ödemen und zur Entgiftung.",
      duration: "45-60 Minuten",
      benefits: ["Entstauung", "Immunstärkung", "Entgiftung", "Schmerzlinderung"],
      conditions: ["Lymphödem", "Nach Operationen", "Cellulite", "Erkältungen"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Physiotherapie",
      description:
        "Klassische physiotherapeutische Behandlung zur Wiederherstellung der Beweglichkeit und Kräftigung. Individuelle Übungsprogramme für optimale Ergebnisse.",
      duration: "45-60 Minuten",
      benefits: ["Beweglichkeitsverbesserung", "Kräftigung", "Schmerzlinderung", "Funktionswiederherstellung"],
      conditions: ["Nach Verletzungen", "Gelenkprobleme", "Haltungsschäden", "Sportverletzungen"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const treatmentProcess = [
    {
      step: "01",
      title: "Erstgespräch",
      description: "Umfassende Bewertung Ihres Zustands, Krankengeschichte und Ziele.",
    },
    {
      step: "02",
      title: "Behandlungsplan",
      description: "Personalisierten Plan entwickelt basierend auf Ihren spezifischen Bedürfnissen und Zielen.",
    },
    {
      step: "03",
      title: "Aktive Behandlung",
      description: "Manuelle Therapie, Übungen und Schulung zur Behandlung Ihres Zustands.",
    },
    {
      step: "04",
      title: "Fortschrittsüberwachung",
      description: "Regelmäßige Bewertung und Plananpassungen für optimale Ergebnisse.",
    },
    {
      step: "05",
      title: "Erhaltung & Prävention",
      description: "Langfristige Strategien zur Aufrechterhaltung der Verbesserungen und Vorbeugung von Rezidiven.",
    },
  ]

  type Service = (typeof services)[number]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-teal-50/30 to-teal-100/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Umfassende Osteopathie & Naturheilkunde</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Von Schmerzlinderung bis zur Leistungssteigerung bieten wir eine vollständige Palette evidenzbasierter Behandlungen, 
              die auf Ihre einzigartigen Bedürfnisse und Ziele zugeschnitten sind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#f8b5c1] hover:bg-[#f4a6b3] text-white px-8 py-4 rounded-full">
                  Beratung vereinbaren
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
                className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-teal-100 to-teal-200">
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

                  
                </CardContent>
                {/* Bottom-right subtle action */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="ghost" className="absolute bottom-4 right-4 bg-[#f8b5c1] text-white rounded-full hover:bg-[#f4a6b3] hover:shadow-md transition-colors">
                      Mehr
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-white text-gray-800 border-gray-200 max-w-4xl max-h-[80vh] overflow-y-auto shadow-xl">
                    <DialogHeader className="border-b border-gray-300 pb-4">
                      <DialogTitle className="text-xl font-semibold text-[#f8b5c1]">{service.title}</DialogTitle>
                      <DialogDescription className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4 text-[#f8b5c1]" />
                        {SERVICE_CONTENT[service.title]?.duration || service.duration}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-6">
                      <ServiceModalContent name={service.title} variant="light" />
                    </div>
                  </DialogContent>
                </Dialog>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-gradient-to-b from-white to-teal-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Unser Behandlungsprozess</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Wir folgen einem systematischen Ansatz, um sicherzustellen, dass Sie die effektivste Behandlung 
              für Ihre spezifische Erkrankung erhalten.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {treatmentProcess.map((process, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#f8b5c1] text-white rounded-full flex items-center justify-center font-bold text-lg">
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Warum unsere Leistungen wählen?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-[#f8b5c1] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Evidenzbasierte Behandlung</h3>
                    <p className="text-gray-600">
                      Alle unsere Behandlungen basieren auf neuesten Forschungsergebnissen und bewährten klinischen Methoden.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-[#f8b5c1] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Personalisierten Versorgung</h3>
                    <p className="text-gray-600">
                      Jeder Behandlungsplan wird auf Ihre spezifischen Bedürfnisse und Ziele zugeschnitten.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-[#f8b5c1] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Flexible Terminplanung</h3>
                    <p className="text-gray-600">Wir bieten günstige Terminzeiten, die sich Ihrem vollen Terminkalender anpassen.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-teal-100 to-teal-200">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Moderne Osteopathie-Behandlungsraum"
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
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Bereit, Ihre Behandlung zu beginnen?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Lassen Sie sich nicht von Schmerzen oder Verletzungen in Ihrem Potenzial einschränken. 
            Kontaktieren Sie uns heute, um Ihre Beratung zu vereinbaren und Ihren Weg zur Genesung zu beginnen.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-[#f8b5c1] hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold"
            >
              Beratung vereinbaren
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
