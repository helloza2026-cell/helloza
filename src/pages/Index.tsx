import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Headphones,
  BarChart3,
  Shield,
  Users,
  Globe,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Award,
  PhoneCall,
  Database,
  Cpu,
  Zap,
  ShoppingCart,
  HeartPulse,
  BadgeDollarSign,
  Laptop,
  Rocket,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import heroBpo from "@/assets/hero-bpo.jpg";

const stats = [
  { value: "Fast", label: "Response times", icon: TrendingUp },
  { value: "Flexible", label: "Support model", icon: Users },
  { value: "24/7", label: "Coverage", icon: Award },
  { value: "Lean", label: "Delivery setup", icon: Shield },
];

const services = [
  { icon: Headphones, title: "Customer Support", desc: "24/7 multi-channel customer support services including voice, email, chat, and social media management that boost customer satisfaction scores." },
  { icon: Database, title: "Data Management", desc: "End-to-end data entry, processing, cleansing, and analytics services ensuring accurate handling with clear workflows." },
  { icon: Cpu, title: "IT Helpdesk", desc: "Comprehensive Level 1-3 technical support with rapid response times, reducing downtime and improving end-user productivity." },
  { icon: BarChart3, title: "Finance & Accounting", desc: "Accounts payable/receivable, bookkeeping, payroll processing, and financial reporting that simplify operations." },
  { icon: Users, title: "HR Outsourcing", desc: "Recruitment, onboarding, benefits administration, and compliance management services that streamline your people operations." },
  { icon: Shield, title: "Quality Assurance", desc: "Rigorous QA testing, process auditing, and compliance monitoring with a focus on consistent delivery." },
];

const whyChoose = [
  "Practical security and process controls",
  "Flexible support that adapts as you grow",
  "Scalable teams without unnecessary overhead",
  "Automation where it actually helps",
  "Direct communication and clear ownership",
  "Startup-friendly delivery and pricing mindset",
];

const sectors = [
  { icon: Rocket, title: "SaaS Startups", desc: "Onboarding, first-line support, and helpdesk coverage for product-led teams." },
  { icon: ShoppingCart, title: "D2C Brands", desc: "Order support, refunds, and customer communication for fast-moving ecommerce teams." },
  { icon: BadgeDollarSign, title: "Fintech", desc: "KYC support, document handling, and back-office workflows for financial products." },
  { icon: HeartPulse, title: "Healthcare", desc: "Appointment support, patient coordination, and admin assistance for healthcare teams." },
  { icon: Laptop, title: "Agencies", desc: "Client communication, admin tasks, and project coordination for creative agencies." },
  { icon: Globe, title: "Remote SMBs", desc: "Flexible operational support for distributed teams that need structure and speed." },
];

const Index = () => (
  <>
    <SEO
      title="Startup BPO Services"
      description="Helloza Bpo Solutions provides startup-friendly BPO services for SaaS, D2C, fintech, healthcare, agencies, and SMBs."
      path="/"
    />
    <main>
      <section className="relative isolate overflow-hidden pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="absolute inset-0">
          <img
            src={heroBpo}
            alt="Professional BPO team delivering customer support services"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/45" />
          <div className="absolute inset-0 hero-gradient opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(52,211,153,0.2),transparent_32%)]" />
        </div>
        <div className="relative container-wide px-4 md:px-8">
          <div className="max-w-3xl pt-6 md:pt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground/90 text-sm font-medium mb-6">
                <Zap className="w-4 h-4" /> Built for growing teams
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-[1.05] tracking-tight mb-6 max-w-3xl"
            >
              Practical BPO Support for{" "}
              <span className="text-teal-light">Growing Teams</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mb-10 leading-relaxed"
            >
              Helloza Bpo Solutions helps modern businesses handle customer support, operations, and back-office work with clear communication, flexible setup, and a startup-friendly approach.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="btn-secondary">
                Get a Free Consultation <ArrowRight className="inline w-4 h-4 ml-2" />
              </Link>
              <Link to="/services" className="btn-outline-hero">
                Explore Services
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-14 md:mt-20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl p-5 md:p-7 text-center text-primary-foreground backdrop-blur-xl bg-white/10 border border-white/15 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <stat.icon className="w-6 h-6 text-teal-light mx-auto mb-3" />
                  <div className="stat-number text-3xl md:text-4xl">{stat.value}</div>
                  <div className="text-primary-foreground/75 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background" id="services">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Core Services</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5">
                Flexible BPO Services for Modern Businesses
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We offer a practical range of business process outsourcing services designed to reduce busywork, improve response times, and help your team stay focused on growth.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 h-full group">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1 text-secondary font-medium text-sm mt-4 hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
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
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Where BPO Helps Most</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5">
                Teams That Benefit From Outsourcing Early
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We work best with teams that need more capacity, more consistency, and a partner that can adapt as the business evolves.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, i) => (
              <ScrollReveal key={sector.title} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-7 h-full">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                    <sector.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{sector.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{sector.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Choose Helloza</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Built for a Startup-First Operation
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Helloza Bpo Solutions keeps things lean, responsive, and practical. We focus on clear ownership, fast handoffs, and support that grows with your business instead of slowing it down.
              </p>
              <ul className="space-y-4">
                {whyChoose.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary inline-flex items-center gap-2 mt-8">
                About Helloza <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "Fast", label: "Response cycles", color: "bg-primary" },
                  { num: "Lean", label: "Operating model", color: "bg-secondary" },
                  { num: "Simple", label: "Communication", color: "bg-secondary" },
                  { num: "Flexible", label: "Scaling options", color: "bg-primary" },
                ].map((item, i) => (
                  <div key={i} className={`${item.color} text-primary-foreground rounded-2xl p-6 flex flex-col justify-center items-center text-center`}>
                    <div className="stat-number text-3xl md:text-4xl">{item.num}</div>
                    <div className="text-sm mt-2 opacity-80">{item.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding hero-gradient">
        <div className="container-wide text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Build a Better Support Setup?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
              If you want a startup-minded team that can grow with you, let&apos;s talk about the right outsourcing setup for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-secondary">
                <PhoneCall className="inline w-4 h-4 mr-2" /> Schedule a Call
              </Link>
              <Link to="/services" className="btn-outline-hero">
                View All Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  </>
);

export default Index;
