import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Headphones, BarChart3, Shield, Users, Globe, Clock, ArrowRight,
  CheckCircle2, TrendingUp, Award, PhoneCall, Database, Cpu, Zap
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import heroBpo from "@/assets/hero-bpo.jpg";

const stats = [
  { value: "500+", label: "Global Clients", icon: Globe },
  { value: "15K+", label: "Skilled Professionals", icon: Users },
  { value: "99.7%", label: "Client Retention", icon: TrendingUp },
  { value: "30+", label: "Countries Served", icon: Award },
];

const services = [
  { icon: Headphones, title: "Customer Support", desc: "24/7 multi-channel customer support services including voice, email, chat, and social media management that boost customer satisfaction scores by up to 40%." },
  { icon: Database, title: "Data Management", desc: "End-to-end data entry, processing, cleansing, and analytics services ensuring 99.9% accuracy with ISO-certified data handling protocols." },
  { icon: Cpu, title: "IT Helpdesk", desc: "Comprehensive Level 1-3 technical support with rapid response times, reducing downtime by 60% and improving end-user productivity." },
  { icon: BarChart3, title: "Finance & Accounting", desc: "Accounts payable/receivable, bookkeeping, payroll processing, and financial reporting that cut operational costs by up to 50%." },
  { icon: Users, title: "HR Outsourcing", desc: "Recruitment, onboarding, benefits administration, and compliance management services that streamline your human capital operations." },
  { icon: Shield, title: "Quality Assurance", desc: "Rigorous QA testing, process auditing, and compliance monitoring with Six Sigma methodologies ensuring world-class service delivery." },
];

const whyChoose = [
  "ISO 27001 & SOC 2 certified security protocols",
  "24/7/365 operations across multiple time zones",
  "Scalable teams from 5 to 5,000+ agents",
  "AI-powered automation and analytics",
  "Dedicated account managers for every client",
  "Average 45% cost reduction for clients",
];

const testimonials = [
  { name: "Sarah Mitchell", role: "COO, TechVista Inc.", text: "ApexBPO transformed our customer service operations. Response times dropped by 65% and CSAT scores hit an all-time high of 96%." },
  { name: "James Rodriguez", role: "CFO, GlobalRetail Corp", text: "Outsourcing our finance operations to ApexBPO saved us $2.3M annually while improving accuracy and compliance across the board." },
  { name: "Emily Chen", role: "VP Operations, MedFlow Health", text: "Their HIPAA-compliant processes and dedicated healthcare team gave us the confidence to outsource critical patient support functions." },
];

const Index = () => (
  <>
    {/* SEO-optimized meta handled by index.html */}
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBpo} alt="Professional BPO team delivering customer support services" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-85" />
        </div>
        <div className="relative container-wide px-4 md:px-8 pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground/90 text-sm font-medium mb-6">
                <Zap className="w-4 h-4" /> Trusted by Fortune 500 Companies
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6"
            >
              Elevate Your Business with{" "}
              <span className="text-teal-light">World-Class BPO Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10 leading-relaxed"
            >
              From customer support to finance and IT operations, ApexBPO delivers scalable outsourcing solutions that reduce costs by up to 50% while enhancing service quality across 30+ countries.
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
        </div>

        {/* Floating stats on hero */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-8 left-4 right-4 md:left-8 md:right-8"
        >
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-primary-foreground/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-primary-foreground/10 text-center">
                  <stat.icon className="w-6 h-6 text-teal-light mx-auto mb-2" />
                  <div className="stat-number text-primary-foreground text-3xl md:text-4xl">{stat.value}</div>
                  <div className="text-primary-foreground/70 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background" id="services">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Core Services</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5">
                Comprehensive BPO Solutions for Modern Enterprises
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We offer a complete range of business process outsourcing services designed to optimize your operations, reduce overhead costs, and empower your team to focus on strategic growth initiatives.
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

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Choose ApexBPO</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                The Trusted Partner for Business Process Excellence
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                With over 15 years of experience, ApexBPO has established itself as a global leader in business process outsourcing. Our combination of cutting-edge technology, highly trained professionals, and proven methodologies delivers measurable results for enterprises of every size.
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
                About Our Company <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "15+", label: "Years of Excellence", color: "bg-primary" },
                  { num: "50M+", label: "Transactions Processed Monthly", color: "bg-secondary" },
                  { num: "98%", label: "First Call Resolution Rate", color: "bg-secondary" },
                  { num: "45%", label: "Average Cost Savings", color: "bg-primary" },
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

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Client Testimonials</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5">
                Trusted by Industry Leaders Worldwide
              </h2>
              <p className="text-muted-foreground text-lg">
                Discover how businesses across healthcare, finance, retail, and technology sectors have achieved remarkable results through our BPO partnership.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="glass-card rounded-2xl p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed flex-1 mb-6">"{t.text}"</p>
                  <div>
                    <div className="font-heading font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container-wide text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Business Operations?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
              Join 500+ enterprises that have achieved operational excellence with ApexBPO. Get a customized outsourcing strategy tailored to your unique business needs — completely free.
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
