import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+1 (800) 555-0199", sub: "Mon-Fri 8AM-8PM EST" },
  { icon: Mail, label: "Email", value: "info@helloza.co.in", sub: "Response within 2 hours" },
  { icon: MapPin, label: "Headquarters", value: "123 Business District, Suite 500", sub: "New York, NY 10001" },
  { icon: Clock, label: "Operations", value: "24/7/365", sub: "Global delivery centers" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Our team will contact you within 24 hours." });
    setForm({ name: "", email: "", company: "", phone: "", service: "", message: "" });
  };

  return (
    <main className="pt-20">
      <SEO
        title="Contact Helloza Bpo Solutions"
        description="Get in touch with Helloza Bpo Solutions for startup-friendly BPO support, outsourcing consultation, and custom operations help."
        path="/contact"
      />
      <section className="section-padding hero-gradient">
        <div className="container-wide text-center">
          <ScrollReveal>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed">
              Whether you're looking to outsource customer support, streamline back-office operations, or explore a complete BPO partnership, our team is ready to help. Get a free consultation and customized proposal within 48 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="glass-card rounded-2xl p-8 md:p-10">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Request a Free Consultation</h2>
                  <p className="text-muted-foreground mb-8">Fill out the form below and a BPO specialist will reach out within 24 hours.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Work Email *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                        <input
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                          placeholder="Company Inc."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                        <input
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Service Interested In</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                      >
                        <option value="">Select a service</option>
                        <option>Customer Support Outsourcing</option>
                        <option>Data Entry & Management</option>
                        <option>IT Helpdesk & Technical Support</option>
                        <option>Finance & Accounting</option>
                        <option>HR Outsourcing</option>
                        <option>Back Office Operations</option>
                        <option>Digital Marketing</option>
                        <option>Multiple / Custom Solution</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Tell us about your project *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all resize-none"
                        placeholder="Describe your outsourcing needs, team size, timeline..."
                      />
                    </div>
                    <button type="submit" className="btn-primary flex items-center gap-2">
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            <div className="space-y-6">
              {contactInfo.map((c, i) => (
                <ScrollReveal key={c.label} delay={i * 0.1}>
                  <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-foreground text-sm">{c.label}</div>
                      <div className="text-foreground mt-0.5">{c.value}</div>
                      <div className="text-muted-foreground text-sm mt-0.5">{c.sub}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              <ScrollReveal delay={0.4}>
                <div className="glass-card rounded-2xl p-6 bg-secondary/5">
                  <h3 className="font-heading font-semibold text-foreground mb-3">Global Offices</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>New York, USA (HQ)</li>
                    <li>London, United Kingdom</li>
                    <li>Manila, Philippines</li>
                    <li>Bangalore, India</li>
                    <li>Sydney, Australia</li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
