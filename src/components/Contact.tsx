import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar as CalendarIcon, MapPin, Phone, Mail, Clock } from "lucide-react";
import { format } from "date-fns";
import { de } from "date-fns/locale";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: undefined as Date | undefined,
    time: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};

    if (!formData.name) newErrors.name = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.date) newErrors.date = true;
    if (!formData.time) newErrors.time = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: undefined,
          time: "",
          message: "",
        });
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-[#222831] mb-4 font-['Poppins'] uppercase tracking-wider"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "2px" }}
          >
            Kontakt & Terminbuchung
          </h2>
          <p className="text-[#4B5563] font-['Inter'] max-w-2xl mx-auto" style={{ fontSize: "1.125rem" }}>
            Kontaktieren Sie uns oder vereinbaren Sie gleich einen Termin
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="bg-[#4CAF50] p-8 rounded-lg text-center">
                <h3
                  className="text-white mb-4 font-['Poppins']"
                  style={{ fontSize: "1.5rem", fontWeight: 700 }}
                >
                  Vielen Dank! Wir melden uns bald bei Ihnen.
                </h3>
                <p className="text-white/90 font-['Inter']">
                  Ihre Terminanfrage wurde erfolgreich übermittelt.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="font-['Inter']">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`mt-2 font-['Inter'] ${errors.name ? "border-[#E63946] border-2" : ""}`}
                    placeholder="Max Mustermann"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="font-['Inter']">
                    E-Mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`mt-2 font-['Inter'] ${errors.email ? "border-[#E63946] border-2" : ""}`}
                    placeholder="max@beispiel.de"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="font-['Inter']">
                    Telefonnummer
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 font-['Inter']"
                    placeholder="+49 123 456789"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="font-['Inter']">Datum *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={`w-full mt-2 justify-start text-left font-['Inter'] ${
                            errors.date ? "border-[#E63946] border-2" : ""
                          }`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.date ? format(formData.date, "PPP", { locale: de }) : "Datum wählen"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.date}
                          onSelect={(date) => setFormData({ ...formData, date })}
                          initialFocus
                          locale={de}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label className="font-['Inter']">Uhrzeit *</Label>
                    <Select value={formData.time} onValueChange={(time) => setFormData({ ...formData, time })}>
                      <SelectTrigger
                        className={`mt-2 font-['Inter'] ${errors.time ? "border-[#E63946] border-2" : ""}`}
                      >
                        <SelectValue placeholder="Uhrzeit" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot} Uhr
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="font-['Inter']">
                    Nachricht
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 font-['Inter'] min-h-[120px]"
                    placeholder="Beschreiben Sie Ihr Projekt..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full hover:bg-[#222831] hover:text-white transition-all"
                  style={{
                    backgroundColor: "#FFC300",
                    color: "#222831",
                    borderRadius: "10px",
                    padding: "1.5rem",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    letterSpacing: "1px",
                  }}
                >
                  TERMIN SENDEN
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-[#F5F5F5] p-8 rounded-lg">
              <h3
                className="text-[#222831] mb-6 font-['Poppins']"
                style={{ fontSize: "1.5rem", fontWeight: 700 }}
              >
                Kontaktinformationen
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#FFC300" }}>
                    <MapPin className="w-6 h-6 text-[#222831]" />
                  </div>
                  <div>
                    <h4 className="text-[#222831] font-['Poppins'] mb-1" style={{ fontWeight: 600 }}>
                      Adresse
                    </h4>
                    <p className="text-[#4B5563] font-['Inter']">
                      Musterstraße 123
                      <br />
                      10115 Berlin
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#FFC300" }}>
                    <Phone className="w-6 h-6 text-[#222831]" />
                  </div>
                  <div>
                    <h4 className="text-[#222831] font-['Poppins'] mb-1" style={{ fontWeight: 600 }}>
                      Telefon
                    </h4>
                    <a href="tel:+4930123456789" className="text-[#4B5563] hover:text-[#FFC300] font-['Inter']">
                      +49 30 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#FFC300" }}>
                    <Mail className="w-6 h-6 text-[#222831]" />
                  </div>
                  <div>
                    <h4 className="text-[#222831] font-['Poppins'] mb-1" style={{ fontWeight: 600 }}>
                      E-Mail
                    </h4>
                    <a href="mailto:info@klinger-bau.de" className="text-[#4B5563] hover:text-[#FFC300] font-['Inter']">
                      info@klinger-bau.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#FFC300" }}>
                    <Clock className="w-6 h-6 text-[#222831]" />
                  </div>
                  <div>
                    <h4 className="text-[#222831] font-['Poppins'] mb-1" style={{ fontWeight: 600 }}>
                      Öffnungszeiten
                    </h4>
                    <p className="text-[#4B5563] font-['Inter']">
                      Mo - Fr: 08:00 - 18:00 Uhr
                      <br />
                      Sa: Nach Vereinbarung
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.7089447516877!2d13.384893!3d52.531677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburger%20Tor!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
