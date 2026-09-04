import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Users,
  Zap
} from "lucide-react";

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You could integrate with an email service or backend API here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@mellitrontech.com",
      description: "Send us an email and we'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Speak directly with our team during business hours",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Tech Street, Innovation District",
      description: "San Francisco, CA 94105, United States",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM PST",
      description: "Weekend support available for urgent matters",
    },
  ];

  const reasons = [
    {
      icon: Zap,
      title: "Quick Response",
      description: "We respond to all inquiries within 24 hours",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Get advice from experienced professionals",
    },
    {
      icon: MessageCircle,
      title: "Free Consultation",
      description: "Initial project consultation is completely free",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl lg:text-5xl hacker-text glow-text">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Great Together
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team of experts 
            and let's discuss how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <Card className="p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      rows={6}
                      required
                      className="resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground py-4 glow-effect"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                  We're here to help! Reach out through any of these channels.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 glass-morphism hover:neon-border transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">{info.title}</h3>
                        <p className="text-primary font-medium">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Why Contact Us */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Why Contact Us?</h3>
                <div className="space-y-4">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <reason.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{reason.title}</h4>
                        <p className="text-sm text-muted-foreground">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Find Our Office</h2>
            <p className="text-muted-foreground">
              Located in the heart of San Francisco's Innovation District
            </p>
          </div>
          
          {/* Placeholder for Google Maps */}
          <Card className="overflow-hidden glass-morphism">
            <div className="h-96 bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="w-16 h-16 text-primary mx-auto glow-effect" />
                <div>
                  <h3 className="text-xl font-semibold">Interactive Map</h3>
                  <p className="text-muted-foreground">
                    Google Maps integration would be embedded here
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    123 Tech Street, Innovation District<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity. Mobile apps typically take 3-6 months, websites 1-3 months, and blockchain projects 4-8 months. We'll provide a detailed timeline during our consultation.",
              },
              {
                question: "Do you provide ongoing support after launch?",
                answer: "Yes! We offer comprehensive post-launch support including maintenance, updates, bug fixes, and feature enhancements. Support packages are tailored to your specific needs.",
              },
              {
                question: "What's included in the free consultation?",
                answer: "Our free consultation includes project scope discussion, technology recommendations, timeline estimation, and a detailed quote. It's a no-obligation meeting to explore how we can help.",
              },
              {
                question: "Do you work with startups or only established companies?",
                answer: "We work with clients of all sizes, from early-stage startups to large enterprises. We offer flexible pricing and payment options to accommodate different business needs.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-3">
                  <h3 className="font-semibold">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl lg:text-4xl hacker-text glow-text-blue">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/80">
            Don't wait - let's turn your vision into reality today!
          </p>
          <Button
            size="lg"
            onClick={() => onNavigate("consultation")}
            className="bg-background text-primary hover:bg-background/90 px-8 py-4 glow-effect pulse-glow"
          >
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}