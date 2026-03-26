import { Link } from "react-router-dom";
import {
  ArrowRight, Building2, ShoppingCart, Heart, Landmark, Plane,
  GraduationCap, Factory, Wifi, CheckCircle2
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const industries = [
  {
    icon: Landmark,
    title: "Banking & Financial Services",
    desc: "Regulatory-compliant BPO solutions for banks, insurance companies, and fintech firms. We handle loan processing, claims management, KYC verification, and financial reporting with SOC 2-certified security.",
    stats: "120+ financial clients | $3.2B transactions processed annually",
    benefits: ["PCI-DSS & SOX Compliant", "Fraud Detection Support", "Regulatory Reporting", "Loan & Mortgage Processing"],
  },
  {
    icon: Heart,
    title: "Healthcare & Life Sciences",
    desc: "HIPAA-compliant healthcare BPO services including medical billing, claims processing, patient scheduling, and clinical data management. Supporting hospitals, insurers, and pharma companies with precision.",
    stats: "80+ healthcare partners | 15M+ claims processed yearly",
    benefits: ["HIPAA Compliant Operations", "Medical Billing & Coding", "Patient Support Services", "Clinical Data Management"],
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-Commerce",
    desc: "Scalable customer support, order management, and digital marketing services for retail brands. Our omnichannel solutions handle peak season surges with 99.9% order accuracy.",
    stats: "200+ retail brands | 10M+ orders managed annually",
    benefits: ["Omnichannel Customer Support", "Order & Returns Management", "Catalog Management", "Seasonal Scaling"],
  },
  {
    icon: Building2,
    title: "Technology & SaaS",
    desc: "Technical support, SaaS onboarding, and customer success operations for technology companies. Our certified agents resolve complex issues faster, improving NPS scores by an average of 25 points.",
    stats: "150+ tech clients | 95% first-contact resolution",
    benefits: ["L1-L3 Technical Support", "SaaS Customer Onboarding", "Product Documentation", "User Research & Feedback"],
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    desc: "24/7 reservation management, guest services, and loyalty program support for airlines, hotels, and travel platforms. Multilingual agents across 20+ languages ensure global coverage.",
    stats: "50+ hospitality brands | 5M+ bookings handled yearly",
    benefits: ["Reservation Management", "Guest Experience Support", "Loyalty Program Admin", "Multilingual Services"],
  },
  {
    icon: GraduationCap,
    title: "Education & EdTech",
    desc: "Student enrollment support, learning management administration, and educational content moderation services for universities and EdTech platforms worldwide.",
    stats: "40+ education partners | 2M+ students supported",
    benefits: ["Enrollment Processing", "LMS Administration", "Student Help Desk", "Content Moderation"],
  },
  {
    icon: Factory,
    title: "Manufacturing & Logistics",
    desc: "Supply chain coordination, vendor management, and logistics support that streamline operations for manufacturing enterprises. Real-time tracking and reporting capabilities.",
    stats: "60+ manufacturing clients | 30% efficiency improvement",
    benefits: ["Supply Chain Coordination", "Vendor Management", "Logistics Support", "Inventory Tracking"],
  },
  {
    icon: Wifi,
    title: "Telecommunications",
    desc: "Subscriber management, technical troubleshooting, and billing support for telecom providers. Our specialized teams handle high-volume environments with consistent quality.",
    stats: "30+ telecom providers | 20M+ subscriber interactions",
    benefits: ["Subscriber Management", "Technical Troubleshooting", "Billing & Collections", "Network Operations Support"],
  },
];

const Industries = () => (
  <main className="pt-20">
    <section className="section-padding hero-gradient">
      <div className="container-wide text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/90 text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" /> Industry Expertise
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            BPO Solutions Tailored to Your Industry
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Deep domain expertise across 8+ industries. Our specialized teams understand your regulatory requirements, competitive challenges, and operational nuances to deliver solutions that create real business impact.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="space-y-8">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.title} delay={0.05}>
              <div className="glass-card rounded-2xl p-8 md:p-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <ind.icon className="w-7 h-7 text-secondary" />
                      </div>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{ind.title}</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{ind.desc}</p>
                    <p className="text-sm font-medium text-secondary mb-6">{ind.stats}</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all">
                      Discuss Your Needs <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="lg:w-72">
                    <div className="bg-muted/50 rounded-xl p-6">
                      <h4 className="font-heading font-semibold text-foreground mb-4">Capabilities</h4>
                      <ul className="space-y-3">
                        {ind.benefits.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding hero-gradient text-center">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">Don't See Your Industry?</h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">Our flexible BPO framework adapts to any industry. Contact us to discuss your specific requirements.</p>
          <Link to="/contact" className="btn-secondary">Talk to an Expert <ArrowRight className="inline w-4 h-4 ml-2" /></Link>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Industries;
