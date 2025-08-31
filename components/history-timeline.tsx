"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Building, Star, Zap, Heart, Trophy } from "lucide-react"

export default function HistoryTimeline() {
  const [animatedItems, setAnimatedItems] = useState<number[]>([])

  const timelineEvents = [
    {
      year: "1998",
      title: "Start der Physiotherapie-Ausbildung",
      description: "Ausbildung zur Physiotherapeutin, erste Erfahrungen in orthopädischen Fachkliniken (konservative Bandscheibenbehandlung) sowie Praxiserfahrung in Seeheim-Jugenheim, Köln und Aachen.",
      icon: <Building className="w-4 h-4 text-white" />,
    },
    {
      year: "2004",
      title: "Heilpraktikerprüfung",
      description: "Erfolgreich abgelegte Heilpraktikerprüfung, Beginn der naturheilkundlichen Ausrichtung.",
      icon: <Award className="w-4 h-4 text-white" />,
    },
    {
      year: "2005",
      title: "Praxiseröffnung in Aachen",
      description: "Eröffnung der eigenen Praxis in Aachen.",
      icon: <Building className="w-4 h-4 text-white" />,
    },
    {
      year: "2006",
      title: "Lymphdrainagentherapie",
      description: "Ausbildung zur Lymphdrainagentherapeutin.",
      icon: <Heart className="w-4 h-4 text-white" />,
    },
    {
      year: "2007",
      title: "Spezialisierungen & Fortbildungen",
      description: "Weiterbildung Ozontherapie (\"blaue Karte\") & Injektionstechniken, Fortbildung Triggerpunktbehandlung, Fortbildung Kinesiotaping.",
      icon: <Zap className="w-4 h-4 text-white" />,
    },
    {
      year: "2008-2010",
      title: "Osteopathie-Weiterbildung",
      description: "Upledger Institut: Craniosacrale Osteopathie (3 Teile), Viszerale Osteopathie (3 Teile).",
      icon: <Users className="w-4 h-4 text-white" />,
    },
    {
      year: "2012-2017",
      title: "Osteopathie-Ausbildung",
      description: "Fünfjährige Ausbildung zur Osteopathin am Institut für angewandte Osteopathie (IFAO).",
      icon: <Trophy className="w-4 h-4 text-white" />,
    },
    {
      year: "2016",
      title: "Vertiefung Injektionstechniken",
      description: "Fortbildung in Injektionstechniken.",
      icon: <Zap className="w-4 h-4 text-white" />,
    },
    {
      year: "Laufend",
      title: "Fortbildung & Messen",
      description: "Regelmäßige Teilnahme an Heilpraktikermessen und Fachfortbildungen, um auf dem neuesten Stand zu bleiben.",
      icon: <Star className="w-4 h-4 text-white" />,
    },
  ]

  useEffect(() => {
    // Animate items in sequence
    const animateItems = () => {
      timelineEvents.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedItems(prev => [...prev, index])
        }, index * 200) // 200ms delay between each item
      })
    }

    // Start animation after a short delay
    const timer = setTimeout(animateItems, 500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline Line - Hidden on mobile */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white/30 h-full rounded-full"></div>

      <div className="space-y-6">
        {timelineEvents.map((event, index) => (
          <div 
            key={index} 
            className={`relative transition-all duration-700 ease-out ${
              animatedItems.includes(index) 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Desktop Layout */}
            <div className="hidden md:flex items-center">
              {/* Left Side (odd items) */}
              {index % 2 === 0 ? (
                <>
                  <div className="w-1/2 pr-6">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:bg-white/15">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3">
                          {event.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
                          <p className="text-white/70 text-sm font-semibold">{event.year}</p>
                        </div>
                      </div>
                      <p className="text-white/90 text-sm leading-relaxed ml-11">{event.description}</p>
                    </div>
                  </div>

                  {/* Center Timeline Dot */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full border-2 border-white shadow-lg"></div>
                  </div>

                  <div className="w-1/2 pl-6"></div>
                </>
              ) : (
                <>
                  <div className="w-1/2 pr-6"></div>

                  {/* Center Timeline Dot */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full border-2 border-white shadow-lg"></div>
                  </div>

                  {/* Right Side (even items) */}
                  <div className="w-1/2 pl-6">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:bg-white/15">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3">
                          {event.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
                          <p className="text-white/70 text-sm font-semibold">{event.year}</p>
                        </div>
                      </div>
                      <p className="text-white/90 text-sm leading-relaxed ml-11">{event.description}</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="flex items-center">
                {/* Mobile icon position - centered next to tiles */}
                <div className="mr-4 flex-shrink-0">
                  <div className="relative w-10 h-10 rounded-full bg-white/20 border-2 border-green-500 flex items-center justify-center">
                    <div className="text-green-500">{event.icon}</div>
                    <div className="absolute inset-0 rounded-full animate-pulse bg-green-500/20" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                    <div className="mb-2">
                      <p className="text-white/70 text-xs font-semibold mb-1">{event.year}</p>
                      <h3 className="text-sm font-bold text-white truncate">{event.title}</h3>
                    </div>
                    <p className="text-white/90 text-xs leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
