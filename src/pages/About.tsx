import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Target, Eye, Heart, Award, Users, Globe, Building } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import aboutImg from "@/assets/about-bpo.jpg";

const values = [
  { icon: Target, title: "Excellence", desc: "We pursue the highest standards in every process, every interaction, and every deliverable." },
  { icon: Eye, title: "Transparency", desc: "Open communication, honest reporting, and full visibility into your outsourced operations." },
  { icon: Heart, title: "People First", desc: "Investing in our team's growth directly translates to superior service for our clients." },
  { icon: Award, title: "Innovation", desc: "Continuously integrating AI, automation, and emerging technologies to stay ahead." },
];

const timeline = [
  { year: "2009", event: "Founded in New York with a 50-seat customer support center" },
  { year: "2012", event: "Expanded to 500+ agents; launched IT helpdesk and data services" },
  { year: "2015", event: "Opened offices in London and Manila; achieved ISO 27001 certification" },
  { year: "2018", event: "Surpassed 5,000 employees; launched AI-powered automation platform" },
  { year: "2021", event: "Reached 10,000+ team members across 12 global delivery centers" },
  { year: "2024", event: "Serving 500+ enterprise clients in 30+ countries with 15,000+ professionals" },
];

const leadership = [
  { name: "Michael Chen", role: "Chief Executive Officer", bio: "20+ years leading global BPO operations for Fortune 500 companies." },
  { name: "Sarah Williams", role: "Chief Operations Officer", bio: "Six Sigma Black Belt with expertise in process optimization and delivery excellence." },
  { name: "David Patel", role: "Chief Technology Officer", bio: "Former tech lead at major cloud platforms, driving AI and automation innovation." },
  { name: "Lisa Thompson", role: "VP Client Success", bio: "15+ years building lasting client partnerships with 99.7% retention rate." },
];

const About = () => (
  <main className="pt-20">
    <section className="section-padding hero-gradient">
      <div className="container-wide text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/90 text-sm font-medium mb-6">
            <Building className="w-4 h-4" /> About ApexBPO
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            15+ Years of Business Process Excellence
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Since 2009, ApexBPO has grown from a small customer support center into a global BPO leader with 15,000+ professionals serving enterprises across 30+ countries. Our mission: empower businesses to achieve more by handling their operations with precision and care.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story: From Startup to Global BPO Leader</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>ApexBPO was founded with a simple but powerful belief: businesses deserve outsourcing partners that treat their operations as their own. Starting with just 50 customer support agents in New York, we built our reputation on reliability, quality, and a genuine commitment to our clients' success.</p>
              <p>Today, we operate 12 state-of-the-art delivery centers across North America, Europe, and Asia-Pacific. Our team of 15,000+ skilled professionals handles everything from customer engagement and IT support to finance operations and digital marketing — processing over 50 million transactions every month.</p>
              <p>What hasn't changed is our founding philosophy: technology enables, but people deliver. Every solution we build combines cutting-edge AI and automation with deeply trained human expertise to deliver outcomes that matter.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <img src={aboutImg} alt="ApexBPO global network and digital transformation" loading="lazy" width={1280} height={720} className="rounded-2xl w-full shadow-lg" />
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Values */}
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

    {/* Timeline */}
    <section className="section-padding bg-background">
      <div className="container-wide max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">Milestones That Define Us</h2>
          </div>
        </ScrollReveal>
        <div className="space-y-0">
          {timeline.map((t, i) => (
            <ScrollReveal key={t.year} delay={i * 0.08}>
              <div className="flex gap-6 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-heading font-bold text-sm shrink-0">
                    {t.year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-4">
                  <div className="font-heading font-bold text-foreground">{t.year}</div>
                  <p className="text-muted-foreground text-sm mt-1">{t.event}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Leadership Team</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">Led by Industry Veterans</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((l, i) => (
            <ScrollReveal key={l.name} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-8 text-center h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{l.name}</h3>
                <div className="text-secondary text-sm font-medium mt-1">{l.role}</div>
                <p className="text-muted-foreground text-sm mt-3">{l.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding hero-gradient text-center">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">Join 500+ Companies That Trust ApexBPO</h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">Experience the difference that 15+ years of BPO excellence makes for your business.</p>
          <Link to="/contact" className="btn-secondary">Contact Us Today <ArrowRight className="inline w-4 h-4 ml-2" /></Link>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default About;
