import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Award, Building, ShoppingCart, Cpu, HeartPulse, BadgeDollarSign, Laptop, Rocket } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import aboutImg from "@/assets/about-bpo.jpg";

const values = [
  { icon: Target, title: "Excellence", desc: "We keep the standard high in every task, conversation, and handoff." },
  { icon: Eye, title: "Transparency", desc: "You always know what is happening, what is next, and who owns it." },
  { icon: Heart, title: "People First", desc: "We build support around real people, not just process checklists." },
  { icon: Award, title: "Innovation", desc: "We use automation where it helps, but keep the experience human." },
];

const sectors = [
  { icon: Rocket, title: "SaaS Startups", desc: "Customer onboarding, support, and inbox management for product-led teams." },
  { icon: ShoppingCart, title: "D2C & E-commerce", desc: "Order support, returns handling, and customer care for growing online brands." },
  { icon: BadgeDollarSign, title: "Fintech", desc: "Back-office processing, KYC support, and operations help for financial products." },
  { icon: HeartPulse, title: "Healthcare Startups", desc: "Patient support, appointment coordination, and workflow assistance with care." },
  { icon: Laptop, title: "Agencies", desc: "Admin support, project coordination, and client communication for busy teams." },
  { icon: Building, title: "SMBs", desc: "Flexible outsourcing help for businesses that need more capacity without more headcount." },
];

const About = () => (
  <main className="pt-20">
    <section className="section-padding hero-gradient">
      <div className="container-wide text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/90 text-sm font-medium mb-6">
            <Building className="w-4 h-4" /> About Helloza Bpo Solutions
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Built for Growing Businesses
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Helloza Bpo Solutions is a startup focused on practical, reliable BPO support for modern teams. We help businesses handle customer service, back-office work, and operations with clarity, flexibility, and a personal touch.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story: Built to Move Fast and Stay Human</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Helloza Bpo Solutions started with a simple idea: smaller and growing businesses deserve outsourcing support that feels clear, responsive, and easy to work with.</p>
              <p>We keep our delivery lean and practical. That means flexible support plans, direct communication, and workflows that fit how your team already operates.</p>
              <p>Technology helps us move faster, but people still do the real work. We combine automation with hands-on support so every client gets a solution that feels personal, not generic.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <img src={aboutImg} alt="Helloza Bpo Solutions team and workflow" loading="lazy" width={1280} height={720} className="rounded-2xl w-full shadow-lg" />
          </ScrollReveal>
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5">The Principles That Guide Everything We Do</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-8 text-center h-full">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Who We Help</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">The Teams That Need BPO Support Most</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, i) => (
            <ScrollReveal key={sector.title} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-8 text-center h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <sector.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{sector.title}</h3>
                <p className="text-muted-foreground text-sm mt-3">{sector.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding hero-gradient text-center">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">Ready to Build a Better Support Operation?</h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">If you need a startup-friendly BPO partner, we can help shape the right setup for your team.</p>
          <Link to="/contact" className="btn-secondary">Contact Us Today <ArrowRight className="inline w-4 h-4 ml-2" /></Link>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default About;
