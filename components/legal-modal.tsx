"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface LegalModalProps {
  title: string
  children: React.ReactNode
  trigger: React.ReactNode
}

export default function LegalModal({ title, children, trigger }: LegalModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="bg-white text-gray-800 border-gray-200 max-w-4xl max-h-[80vh] overflow-y-auto shadow-xl">
        <DialogHeader className="border-b border-gray-300 pb-4">
          <DialogTitle className="text-xl font-semibold text-gray-900">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="py-6 text-gray-700 leading-relaxed">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  )
}
