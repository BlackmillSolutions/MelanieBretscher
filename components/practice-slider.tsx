"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function PracticeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Reception & Waiting Area",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "Treatment Rooms",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "Exercise & Rehabilitation Area",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 4,
      title: "Hydrotherapy Pool",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 5,
      title: "Consultation Room",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="overflow-hidden glass-card-light border-gray-200/50 shadow-xl">
        <div className="relative aspect-[4/3] lg:aspect-[16/9]">
          <Image
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-white hover:text-gray-900 rounded-full p-3 shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-white hover:text-gray-900 rounded-full p-3 shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Image Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <h3 className="text-xl font-bold text-white">{slides[currentSlide].title}</h3>
          </div>
        </div>
      </Card>
    </div>
  )
}
