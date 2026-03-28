import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import logoHello from "@/assets/logohello.png";

const Footer = () => (
  <footer className="bg-white text-foreground border-t border-border/60">
    <div className="container-wide section-padding !pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-4">
            <img
              src={logoHello}
              alt="Helloza Bpo Solutions logo"
              className="h-[64px] md:h-[76px] w-auto max-w-[260px] object-contain"
            />
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Delivering practical business process outsourcing support that helps growing teams stay organized, responsive, and ready to scale.
          </p>
          <div className="flex gap-3 mt-6">
            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors text-foreground" aria-label="Social link">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {["Customer Support", "Data Entry & Management", "IT Helpdesk", "Finance & Accounting", "HR Outsourcing", "Digital Marketing"].map(s => (
              <li key={s}><Link to="/services" className="hover:text-foreground transition-colors">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {[["About Us", "/about"], ["Industries", "/industries"], ["Careers", "/contact"], ["Blog", "/contact"], ["Privacy Policy", "/contact"]].map(([label, path]) => (
              <li key={label}><Link to={path} className="hover:text-foreground transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>123 Business District, Suite 500, New York, NY 10001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 shrink-0" />
              <span>+1 (800) 555-0199</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 shrink-0" />
              <span>info@apexbpo.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Helloza Bpo Solutions. All rights reserved.</p>
        <p>Built to support ambitious teams with flexible BPO services</p>
      </div>
    </div>
  </footer>
);

export default Footer;
