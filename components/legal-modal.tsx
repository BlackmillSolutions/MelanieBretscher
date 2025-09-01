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
      <DialogContent className="bg-gray-900 text-white border-gray-800 max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader className="border-b border-gray-800 pb-4">
          <DialogTitle className="text-xl font-semibold text-white">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="py-6 text-gray-300 leading-relaxed">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  )
}
