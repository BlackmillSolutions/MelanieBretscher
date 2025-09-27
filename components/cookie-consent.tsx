"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { cn } from "../lib/utils";

type ConsentPreferences = {
  v: number;
  consentedAt: string;
  analytics: boolean;
  marketing: boolean;
};

const CONSENT_COOKIE_NAME = "cookie_consent";
const CONSENT_VERSION = 1;
const CONSENT_EXPIRES_DAYS = 180; // ~6 months

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()!.split(";").shift() || null;
  return null;
}

function setCookie(name: string, value: string, days: number) {
  if (typeof document === "undefined") return;
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Lax`;
}

function parsePreferences(raw: string | null): ConsentPreferences | null {
  if (!raw) return null;
  try {
    const obj = JSON.parse(decodeURIComponent(raw)) as ConsentPreferences;
    if (typeof obj.v !== "number") return null;
    return obj;
  } catch {
    return null;
  }
}

export function CookieConsentBanner(): React.ReactElement | null {
  const [isVisible, setIsVisible] = React.useState(false);
  const [analytics, setAnalytics] = React.useState(false);
  const [marketing, setMarketing] = React.useState(false);

  React.useEffect(() => {
    const existing = parsePreferences(getCookie(CONSENT_COOKIE_NAME));
    if (!existing || existing.v !== CONSENT_VERSION) {
      setIsVisible(true);
      return;
    }
    // Already consented for current version; hide banner
    setIsVisible(false);
  }, []);

  function saveConsent(next: { analytics: boolean; marketing: boolean }) {
    const payload: ConsentPreferences = {
      v: CONSENT_VERSION,
      consentedAt: new Date().toISOString(),
      analytics: next.analytics,
      marketing: next.marketing,
    };
    setCookie(
      CONSENT_COOKIE_NAME,
      encodeURIComponent(JSON.stringify(payload)),
      CONSENT_EXPIRES_DAYS
    );
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50",
        "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        "border-t"
      )}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Hinweis"
    >
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <p className="text-sm leading-6 text-foreground">
              Wir verwenden Cookies, um unsere Website zu verbessern. Essenzielle Cookies sind
              erforderlich, optionale Cookies (z. B. für Analyse und Marketing) helfen uns, die
              Nutzung zu verstehen. Weitere Informationen finden Sie in unserer
              {" "}
              <Link href="/legal/privacy" className="underline underline-offset-4">
                Datenschutzerklärung
              </Link>
              .
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <Switch id="analytics" checked={analytics} onCheckedChange={setAnalytics} />
                <label htmlFor="analytics" className="text-sm text-muted-foreground">
                  Analyse-Cookies
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Switch id="marketing" checked={marketing} onCheckedChange={setMarketing} />
                <label htmlFor="marketing" className="text-sm text-muted-foreground">
                  Marketing-Cookies
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
            <Button
              variant="outline"
              onClick={() => {
                setAnalytics(false);
                setMarketing(false);
                saveConsent({ analytics: false, marketing: false });
              }}
            >
              Alle ablehnen
            </Button>
            <Button variant="secondary" onClick={() => saveConsent({ analytics, marketing })}>
              Auswahl speichern
            </Button>
            <Button
              className="bg-pink-600 text-white hover:bg-pink-700"
              onClick={() => {
                setAnalytics(true);
                setMarketing(true);
                saveConsent({ analytics: true, marketing: true });
              }}
            >
              Alle akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieConsentBanner;


