import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Darmowe Konsultacje oraz Wyceny Projektu | Skontaktuj Się z MacAI & AInsider",
  description: "Porozmawiaj z Nami, lub Naszym inteligentnym chatbotem. Oferujemy bezpłatne konsultacje projektów AI, automatyzacji i rozwoju Full Stack. Odezwiemy się do Ciebie w ciągu 24h.",
};

const ContactPage = () => {
  return (
    <div className="pt-40 pb-20">
      <Contact />
    </div>
  );
};

export default ContactPage;