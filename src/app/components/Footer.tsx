import { motion } from "motion/react";
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Services", path: "services" },
    { name: "Products", path: "products" },
    { name: "Portfolio", path: "portfolio" },
    { name: "Contact", path: "contact" },
  ];

  const services = [
    "Flutter Apps",
    "Websites", 
    "Node.js Development",
    "Blockchain Solutions",
    "AI Integration",
    "SEO Services",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Github, href: "#", name: "GitHub" },
  ];

  return (
    <footer className="glass-morphism border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text hacker-text">
              mellitron tech
            </h3>
            <p className="text-muted-foreground">
              Your trusted partner in tech excellence, turning ideas into reality with cutting-edge solutions and innovative technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"
                  aria-label={social.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-300"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-primary">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li 
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-muted-foreground text-sm">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-primary">Contact Info</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <motion.p 
                whileHover={{ scale: 1.02 }}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                hello@mellitrontech.com
              </motion.p>
              <motion.p 
                whileHover={{ scale: 1.02 }}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                +1 (555) 123-4567
              </motion.p>
              <motion.p className="hover:text-primary transition-colors cursor-pointer">
                123 Innovation Street<br />
                Tech District<br />
                San Francisco, CA 94105
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-8 pt-8 border-t border-border/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 mellitron tech. All Rights Reserved. Transforming ideas into innovation.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <motion.a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
              >
                Support
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}