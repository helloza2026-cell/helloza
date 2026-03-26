import { Link } from "react-router-dom";
import {
  Headphones, Database, Cpu, BarChart3, Users, Shield, ArrowRight,
  MessageSquare, Mail, Globe, Smartphone, TrendingUp, FileText,
  ClipboardCheck, Settings, Briefcase, Target
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Headphones,
    title: "Customer Support Outsourcing",
    desc: "Deliver exceptional customer experiences across every touchpoint. Our trained agents handle inbound and outbound calls, live chat, email support, and social media management with an average CSAT score of 96%.",
    features: ["24/7 Multi-Channel Support", "Multilingual Agents (20+ Languages)", "AI-Powered Chatbot Integration", "Quality Monitoring & Reporting"],
  },
  {
    icon: Database,
    title: "Data Entry & Management",
    desc: "Transform raw data into actionable business intelligence. Our ISO-certified data management services ensure 99.9% accuracy with rapid turnaround times for enterprises handling millions of records.",
    features: ["Data Entry & Digitization", "Data Cleansing & Validation", "Database Administration", "Document Indexing & Archiving"],
  },
  {
    icon: Cpu,
    title: "IT Helpdesk & Technical Support",
    desc: "Keep your technology infrastructure running smoothly with comprehensive Level 1-3 support. Our certified technicians resolve 85% of issues on first contact, reducing system downtime by 60%.",
    features: ["L1-L3 Technical Support", "Remote Desktop Assistance", "Network Monitoring & Alerts", "Software Installation & Updates"],
  },
  {
    icon: BarChart3,
    title: "Finance & Accounting Services",
    desc: "Streamline your financial operations with expert accounting professionals. From accounts payable to financial reporting, we help enterprises cut finance operations costs by up to 50%.",
    features: ["Accounts Payable/Receivable", "Payroll Processing", "Tax Preparation & Filing", "Financial Analysis & Reporting"],
  },
  {
    icon: Users,
    title: "Human Resources Outsourcing",
    desc: "Optimize your people operations from recruitment to retirement. Our HR BPO services reduce hiring cycles by 40% and ensure full compliance with employment regulations across jurisdictions.",
    features: ["Talent Acquisition & Screening", "Employee Onboarding", "Benefits Administration", "Compliance & Policy Management"],
  },
  {
    icon: Shield,
    title: "Quality Assurance & Compliance",
    desc: "Maintain the highest standards across all business processes. Our Six Sigma-certified QA teams conduct rigorous audits and implement continuous improvement frameworks.",
    features: ["Process Auditing", "Compliance Monitoring", "Six Sigma Implementation", "Performance Analytics"],
  },
  {
    icon: MessageSquare,
    title: "Back Office Operations",
    desc: "Free your team from repetitive administrative tasks. Our back-office solutions handle document processing, order management, and workflow automation with enterprise-grade efficiency.",
    features: ["Document Processing", "Order Management", "Claims Processing", "Workflow Automation"],
  },
  {
    icon: Target,
    title: "Digital Marketing Services",
    desc: "Amplify your brand presence with data-driven digital marketing. From SEO and content marketing to social media and PPC, our specialists deliver measurable ROI across all digital channels.",
    features: ["SEO & Content Marketing", "Social Media Management", "PPC Campaign Management", "Email Marketing Automation"],
  },
];

const process = [
  { step: "01", title: "Discovery & Analysis", desc: "We assess your current operations, identify pain points, and map optimization opportunities." },
  { step: "02", title: "Custom Solution Design", desc: "Our experts craft a tailored BPO strategy aligned with your business goals and KPIs." },
  { step: "03", title: "Seamless Onboarding", desc: "Dedicated transition team ensures smooth knowledge transfer and system integration." },
  { step: "04", title: "Continuous Optimization", desc: "Regular reviews, performance analytics, and process improvements for sustained excellence." },
];

const Services = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="section-padding hero-gradient">
      <div className="container-wide text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/90 text-sm font-medium mb-6">
            <Settings className="w-4 h-4" /> Comprehensive BPO Solutions
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Business Process Outsourcing Services That Drive Results
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed">
            From front-office customer engagement to back-office operational excellence, ApexBPO delivers end-to-end outsourcing solutions trusted by 500+ enterprises worldwide. Reduce costs, improve quality, and scale faster.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Services Grid */}
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="space-y-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={0.05}>
              <div className={`glass-card rounded-2xl p-8 md:p-10 flex flex-col lg:flex-row gap-8 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="lg:w-80 w-full">
                  <div className="bg-muted/50 rounded-xl p-6">
                    <h4 className="font-heading font-semibold text-foreground mb-4">Key Capabilities</h4>
                    <ul className="space-y-3">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <ClipboardCheck className="w-4 h-4 text-secondary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-5">
              A Proven 4-Step Outsourcing Framework
            </h2>
            <p className="text-muted-foreground text-lg">
              Our structured approach ensures a smooth transition, minimized risk, and maximum value from day one.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <ScrollReveal key={p.step} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-8 text-center h-full">
                <div className="text-5xl font-heading font-bold text-secondary/20 mb-4">{p.step}</div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding hero-gradient text-center">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Let's Build Your Custom BPO Strategy
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Every business is unique. Tell us about your challenges and we'll design a tailored outsourcing solution that delivers measurable results.
          </p>
          <Link to="/contact" className="btn-secondary">
            Request a Proposal <ArrowRight className="inline w-4 h-4 ml-2" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Services;
