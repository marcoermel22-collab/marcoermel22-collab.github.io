export function Impressum() {
  return (
    <section id="impressum" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-[#222831] mb-8 font-['Poppins'] uppercase tracking-wider"
          style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "2px" }}
        >
          Impressum
        </h2>

        <div className="space-y-8 font-['Inter']">
          <div>
            <h3 className="text-[#222831] mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>
              Angaben gemäß § 5 TMG
            </h3>
            <p className="text-[#4B5563]" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              Klinger Baumanagement GmbH
              <br />
              Musterstraße 123
              <br />
              10115 Berlin
            </p>
          </div>

          <div>
            <h3 className="text-[#222831] mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>
              Vertreten durch
            </h3>
            <p className="text-[#4B5563]" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              Geschäftsführer: Michael Klinger
            </p>
          </div>

          <div>
            <h3 className="text-[#222831] mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>
              Kontakt
            </h3>
            <p className="text-[#4B5563]" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              Telefon: +49 30 123 456 789
              <br />
              E-Mail: info@klinger-bau.de
            </p>
          </div>

          <div>
            <h3 className="text-[#222831] mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>
              Registereintrag
            </h3>
            <p className="text-[#4B5563]" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              Eintragung im Handelsregister
              <br />
              Registergericht: Amtsgericht Berlin-Charlottenburg
              <br />
              Registernummer: HRB 123456 B
            </p>
          </div>

          <div>
            <h3 className="text-[#222831] mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>
              Umsatzsteuer-ID
            </h3>
            <p className="text-[#4B5563]" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
              <br />
              DE123456789
            </p>
          </div>

          <div>
            <h3 className="text-[#222831] mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h3>
            <p className="text-[#4B5563]" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              Michael Klinger
              <br />
              Musterstraße 123
              <br />
              10115 Berlin
            </p>
          </div>

          <div>
            <h3 className="text-[#222831] mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>
              Haftungsausschluss
            </h3>
            <p className="text-[#4B5563] mb-4" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              <strong>Haftung für Inhalte:</strong> Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr
              übernehmen.
            </p>
            <p className="text-[#4B5563]" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              <strong>Haftung für Links:</strong> Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
