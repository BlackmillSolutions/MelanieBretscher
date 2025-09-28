"use client"

import LegalModal from "./legal-modal"

export function PrivacyContent() {
  return (
    <LegalModal
      title="Datenschutzerklärung"
      trigger={
        <span className="text-sm text-gray-400 hover:text-pink-600 transition-colors cursor-pointer">
          Datenschutz
        </span>
      }
    >
      <div className="space-y-6">
        <section>
          <h3 className="text-md font-medium text-pink-600 mb-2">Allgemeine Hinweise</h3>
          <p className="mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
            wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
            werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text 
            aufgeführten Datenschutzerklärung.
          </p>
        </section>

        <section>
          <h3 className="text-md font-medium text-pink-600 mb-2">Datenerfassung auf dieser Website</h3>
          <p className="mb-4">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten können Sie dem 
            Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
          </p>
        </section>

        <section>
          <h3 className="text-md font-medium text-pink-600 mb-2">Wie erfassen wir Ihre Daten?</h3>
          <p className="mb-4">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten 
            handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung 
            beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. 
            Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </p>
        </section>

        <section>
          <h3 className="text-md font-medium text-pink-600 mb-2">Wofür nutzen wir Ihre Daten?</h3>
          <p className="mb-4">
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
            Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>
        </section>

        <section>
          <h3 className="text-md font-medium text-pink-600 mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
          <p className="mb-4">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
            gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
            oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, 
            können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, 
            unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </p>
        </section>
      </div>
    </LegalModal>
  )
}

export function TermsContent() {
  return (
    <LegalModal
      title="Nutzungsbedingungen"
      trigger={
        <span className="text-sm text-gray-400 hover:text-pink-600 transition-colors cursor-pointer">
          Nutzungsbedingungen
        </span>
      }
    >
      <div className="space-y-6">
        <section>
          <h3 className="text-md font-medium text-pink-600 mb-2">1. Allgemeine Bestimmungen</h3>
          <p className="mb-4">
            Diese Nutzungsbedingungen gelten für die Nutzung der Website der Praxis für Osteopathie und Naturheilkunde 
            von Melanie Bretscher. Durch die Nutzung dieser Website erklären Sie sich mit diesen Bedingungen einverstanden.
          </p>
        </section>

        <section>
          <h3 className="text-md font-medium text-pink-600 mb-2">2. Zweck der Website</h3>
          <p className="mb-4">
            Diese Website dient ausschließlich der Information über unsere Praxis und unsere Leistungen. 
            Sie stellt keine medizinische Beratung dar und kann einen Besuch in unserer Praxis nicht ersetzen.
          </p>
        </section>

        <section>
          <h3 className="text-md font-medium text-pink-600 mb-2">3. Haftungsausschluss</h3>
          <p className="mb-4">
            Wir übernehmen keine Garantie für die Richtigkeit, Vollständigkeit oder Aktualität der bereitgestellten 
            Informationen. Die Nutzung der Website erfolgt auf eigene Gefahr des Nutzers.
          </p>
        </section>

        <section>
          <h3 className="text-md font-medium text-pink-600 mb-2">4. Urheberrecht</h3>
          <p className="mb-4">
            Alle Inhalte dieser Website sind urheberrechtlich geschützt. Die Vervielfältigung, Verbreitung oder 
            öffentliche Zugänglichmachung ist ohne unsere ausdrückliche Zustimmung nicht gestattet.
          </p>
        </section>

        <section>
          <h3 className="text-md font-medium text-pink-600 mb-2">5. Änderungen</h3>
          <p className="mb-4">
            Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. 
            Änderungen werden auf dieser Seite veröffentlicht.
          </p>
        </section>
      </div>
    </LegalModal>
  )
}

export function ImpressumContent() {
  return (
    <LegalModal
      title="Impressum"
      trigger={
        <span className="text-sm text-gray-400 hover:text-pink-600 transition-colors cursor-pointer">
          Impressum
        </span>
      }
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Angaben gemäß § 5 TMG</h2>
          <div className="space-y-2">
            <p><strong className="text-white">Melanie Bretscher</strong></p>
            <p>Praxis für Osteopathie und Naturheilkunde</p>
            <p>Krefelder Str. 97a</p>
            <p>52070 Aachen</p>
          </div>
        </section>

        <section>
          <h3 className="text-md font-medium text-pink-600 mb-2">Kontakt</h3>
          <div className="space-y-2">
            <p>Telefon: 0241 - 4464848</p>
            <p>E-Mail: melaniebretscher@netcologne.de</p>
          </div>
        </section>

        <section>
          <h3 className="text-md font-medium text-pink-600 mb-2">Berufsbezeichnung und berufsrechtliche Regelungen</h3>
          <div className="space-y-2">
            <p><strong className="text-white">Berufsbezeichnung:</strong> Heilpraktikerin</p>
            <p><strong className="text-white">Zuständige Kammer:</strong> Gesundheitsamt Aachen</p>
            <p><strong className="text-white">Verliehen durch:</strong> Deutschland</p>
          </div>
        </section>

        <section>
          <h3 className="text-md font-medium text-pink-600 mb-2">Umsatzsteuer-ID</h3>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: [USt-IdNr.]</p>
        </section>

        <section>
          <h3 className="text-md font-medium text-pink-600 mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
          <p>Melanie Bretscher<br />
          Krefelder Str. 97a<br />
          52070 Aachen</p>
        </section>
      </div>
    </LegalModal>
  )
}

export function PatientRightsContent() {
  return (
    <LegalModal
      title="Patientenrechte"
      trigger={
        <span className="text-sm text-gray-400 hover:text-pink-600 transition-colors cursor-pointer">
          Patientenrechte
        </span>
      }
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Ihre Rechte als Patient</h2>
          <p className="mb-4">
            Als Patient haben Sie bestimmte Rechte, die wir respektieren und fördern. 
            Hier finden Sie eine Übersicht über Ihre wichtigsten Patientenrechte.
          </p>
        </section>

        <section>
          <h3 className="text-md font-medium text-pink-600 mb-2">1. Recht auf Information</h3>
          <p className="mb-4">
            Sie haben das Recht, umfassend über Ihre Erkrankung, die vorgeschlagene Behandlung, 
            mögliche Risiken und Alternativen informiert zu werden. Wir nehmen uns Zeit für Ihre Fragen.
          </p>
        </section>

        <section>
          <h3 className="text-md font-medium text-pink-600 mb-2">2. Recht auf Selbstbestimmung</h3>
          <p className="mb-4">
            Sie entscheiden selbst, welche Behandlungen Sie wünschen. Jede Behandlung erfolgt nur 
            mit Ihrer ausdrücklichen Einwilligung nach ausführlicher Aufklärung.
          </p>
        </section>

        <section>
          <h3 className="text-md font-medium text-pink-600 mb-2">3. Schweigepflicht</h3>
          <p className="mb-4">
            Alle Informationen, die Sie uns anvertrauen, unterliegen der ärztlichen Schweigepflicht. 
            Diese gilt auch für alle Mitarbeiter unserer Praxis.
          </p>
        </section>

        <section>
          <h3 className="text-md font-medium text-pink-600 mb-2">4. Recht auf Einsicht in die Patientenakte</h3>
          <p className="mb-4">
            Sie haben das Recht, Ihre Patientenakte einzusehen und Kopien zu erhalten. 
            Sprechen Sie uns gerne darauf an.
          </p>
        </section>

        <section>
          <h3 className="text-md font-medium text-pink-600 mb-2">5. Recht auf eine zweite Meinung</h3>
          <p className="mb-4">
            Sie haben das Recht, sich eine zweite Meinung einzuholen. Wir unterstützen Sie dabei 
            und stellen Ihnen gerne alle relevanten Unterlagen zur Verfügung.
          </p>
        </section>

        <section>
          <h3 className="text-md font-medium text-pink-600 mb-2">6. Beschwerderecht</h3>
          <p className="mb-4">
            Falls Sie mit der Behandlung nicht zufrieden sind, haben Sie das Recht, sich zu beschweren. 
            Wir nehmen jede Beschwerde ernst und bemühen uns um eine zufriedenstellende Lösung.
          </p>
        </section>
      </div>
    </LegalModal>
  )
}
