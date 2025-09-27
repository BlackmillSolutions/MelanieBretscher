"use client"

import React from "react"

type Section = {
  heading: string
  body: string
}

export type ServiceContent = {
  title: string
  sections: Section[]
  duration?: string
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "Osteopathische Behandlung": {
    title: "Osteopathische Behandlung",
    duration: "45–60 Minuten",
    sections: [
      {
        heading: "Beschreibung",
        body:
          "Manuelle Therapieform zur Behandlung von Funktionsstörungen im Körper; Ursprung in der amerikanischen Medizin, basiert auf dem Zusammenspiel von Muskeln, Faszien, Organen und Nerven.",
      },
      {
        heading: "Wann sinnvoll",
        body:
          "Bei Rücken-, Nacken- und Gelenkschmerzen, Bewegungseinschränkungen, Verspannungen, funktionellen Beschwerden.",
      },
      { heading: "Behandlungsablauf", body: "Untersuchung und gezielte manuelle Techniken; Behandlung in bequemer Kleidung; sanfte Mobilisation. Dauer: 45–60 Minuten." },
      {
        heading: "Nicht geeignet bei",
        body: "Akute Verletzungen, Infektionen, schwere strukturelle Schäden. Ggf. ärztliche Abklärung empfohlen.",
      },
    ],
  },
  "Ganzheitliche manuelle Therapie": {
    title: "Ganzheitliche manuelle Therapie",
    duration: "45–60 Minuten",
    sections: [
      {
        heading: "Beschreibung",
        body:
          "Individuell angepasste, manuelle Techniken zur Lösung von Blockaden und zur Körperbalance; verbindet Schulmedizin mit ganzheitlichen Ansätzen.",
      },
      {
        heading: "Wann sinnvoll",
        body: "Muskuläre Verspannungen, Fehlhaltungen, Bewegungseinschränkungen, chronische Schmerzen.",
      },
      { heading: "Behandlungsablauf", body: "Sanfte Mobilisation, Dehnungen, myofasziale Techniken. In bequemer Kleidung. Dauer: 45–60 Minuten." },
      {
        heading: "Nicht geeignet bei",
        body: "Frische Verletzungen, akute Entzündungen, Osteoporose (je nach Technik).",
      },
    ],
  },
  Ohrakupunktur: {
    title: "Ohrakupunktur",
    duration: "30–45 Minuten",
    sections: [
      {
        heading: "Beschreibung",
        body:
          "Akupunktur über Reflexpunkte an der Ohrmuschel; basiert auf der traditionellen chinesischen Medizin (TCM) und modernen neurophysiologischen Erkenntnissen.",
      },
      {
        heading: "Wann sinnvoll",
        body:
          "Akute und chronische Schmerzen, Stress, Schlafstörungen, innere Unruhe, unterstützend bei Sucht oder Gewichtsregulation.",
      },
      { heading: "Behandlungsablauf", body: "Setzen feiner Nadeln oder Pflaster ins Ohr; meist 20–30 Minuten Ruhezeit. Dauer: 30–45 Minuten." },
      { heading: "Nicht geeignet bei", body: "Entzündungen am Ohr, Blutverdünnung, Angst vor Nadeln." },
    ],
  },
  Phytotherapie: {
    title: "Phytotherapie",
    duration: "30–60 Minuten",
    sections: [
      {
        heading: "Beschreibung",
        body:
          "Behandlung mit pflanzlichen Arzneien (Tees, Tinkturen, Kapseln); basiert auf traditioneller Heilpflanzenkunde und moderner Forschung.",
      },
      {
        heading: "Wann sinnvoll",
        body:
          "Verdauungsprobleme, Schlafstörungen, hormonelle Beschwerden, Infekte, Erschöpfung, Hautprobleme.",
      },
      { heading: "Behandlungsablauf", body: "Individuelle Beratung, Rezeptur-Empfehlung. Dauer: 30–60 Minuten. Einnahme zuhause." },
      {
        heading: "Nicht geeignet bei",
        body:
          "Bei Allergien gegen bestimmte Pflanzen, Schwangerschaft (je nach Mittel), Wechselwirkungen mit Medikamenten.",
      },
    ],
  },
  "Infusionen und Injektionen": {
    title: "Infusionen & Injektionen",
    duration: "30–90 Minuten",
    sections: [
      {
        heading: "Beschreibung",
        body:
          "Gezielte Versorgung mit Nährstoffen, Vitaminen oder Medikamenten per Vene oder Muskel; schnelle Wirkung.",
      },
      {
        heading: "Wann sinnvoll",
        body:
          "Erschöpfung, Immunschwäche, chronischer Stress, Nährstoffmangel (z. B. Vitamin-B12, Eisen, Mikronährstoffe).",
      },
      { heading: "Behandlungsablauf", body: "Kurzes Vorgespräch, Verabreichung der Infusion/Injektion. Entspanntes Sitzen oder Liegen. Dauer: 30–90 Minuten." },
      {
        heading: "Nicht geeignet bei",
        body:
          "Bei Infekt, Allergie gegen Inhaltsstoffe oder Herz-Kreislauf-Erkrankungen (je nach Mischung).",
      },
    ],
  },
  Schröpfen: {
    title: "Schröpfen",
    duration: "20–30 Minuten",
    sections: [
      {
        heading: "Beschreibung",
        body:
          "Traditionelle Methode zur Anregung von Durchblutung und Lymphfluss durch Unterdruck auf der Haut.",
      },
      { heading: "Wann sinnvoll", body: "Verspannungen, Rückenschmerzen, Muskelschmerzen, Durchblutungsstörungen." },
      {
        heading: "Behandlungsablauf",
        body:
          "Aufsetzen von Schröpfgläsern (mit oder ohne Massage). Kurze Reizphase mit möglicher Hautrötung. Dauer: 20–30 Minuten.",
      },
      { heading: "Nicht geeignet bei", body: "Offene Wunden, Hauterkrankungen, Blutverdünnung, akute Entzündungen." },
    ],
  },
  Fußreflexzonenmassage: {
    title: "Fußreflexzonenmassage",
    duration: "45–60 Minuten",
    sections: [
      {
        heading: "Beschreibung",
        body:
          "Massage bestimmter Fußbereiche zur Reflexbehandlung innerer Organe und Systeme; basiert auf der Zonenlehre.",
      },
      {
        heading: "Wann sinnvoll",
        body:
          "Stress, Verdauungsbeschwerden, Kopfschmerzen, hormonelle Dysbalancen, allgemeine Regulation.",
      },
      { heading: "Behandlungsablauf", body: "Massage im Liegen oder Sitzen; gezielter Druck auf Reflexzonen. Dauer: 45–60 Minuten." },
      { heading: "Nicht geeignet bei", body: "Offene Stellen am Fuß, Fieber, akute Infekte, Thrombose." },
    ],
  },
  "Manuelle Lymphdrainage": {
    title: "Manuelle Lymphdrainage",
    duration: "45–60 Minuten",
    sections: [
      {
        heading: "Beschreibung",
        body: "Sanfte Massagetechnik zur Förderung des Lymphabflusses und Reduktion von Schwellungen.",
      },
      {
        heading: "Wann sinnvoll",
        body:
          "Lymphödeme, Schwellungen nach OP oder Verletzung, chronische Entzündungen, schwaches Immunsystem.",
      },
      { heading: "Behandlungsablauf", body: "Sanfte, rhythmische Griffe. Behandelt wird in bequemer Kleidung. Dauer: 45–60 Minuten." },
      {
        heading: "Nicht geeignet bei",
        body: "Akute Infekte, Herzinsuffizienz, unbehandelte Tumorerkrankungen.",
      },
    ],
  },
  Physiotherapie: {
    title: "Physiotherapie",
    duration: "45–60 Minuten",
    sections: [
      {
        heading: "Beschreibung",
        body:
          "Medizinische Bewegungstherapie zur Wiederherstellung von Beweglichkeit, Kraft und Funktion.",
      },
      {
        heading: "Wann sinnvoll",
        body:
          "Nach Verletzungen, Operationen, bei Rückenschmerzen, Haltungsschwächen, Arthrose, neurologischen Beschwerden.",
      },
      {
        heading: "Behandlungsablauf",
        body:
          "Individuelles Übungsprogramm, manuelle Techniken, ggf. Geräteeinsatz. Dauer: 45–60 Minuten.",
      },
      {
        heading: "Nicht geeignet bei",
        body: "Akute starke Schmerzen ohne Diagnose, Fieber, entzündliche Prozesse.",
      },
    ],
  },
}

export function ServiceModalContent({ name }: { name: string }) {
  const content = SERVICE_CONTENT[name]
  if (!content) return null
  return (
    <div className="space-y-6">
      {content.sections.map((section, idx) => (
        <div key={idx}>
          <h4 className="font-semibold text-gray-900 mb-1">{section.heading}</h4>
          <p className="text-gray-700 leading-relaxed text-sm">{section.body}</p>
        </div>
      ))}
    </div>
  )
}


