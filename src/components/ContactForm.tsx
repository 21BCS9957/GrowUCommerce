import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  monthlyRevenue: string;
  websiteUrl: string;
  budget: string;
  aboutProject: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    monthlyRevenue: "",
    websiteUrl: "",
    budget: "",
    aboutProject: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const dataToSend = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        monthlyRevenue: formData.monthlyRevenue,
        websiteUrl: formData.websiteUrl,
        budget: formData.budget,
        aboutProject: formData.aboutProject,
      };

      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      let result;
      try {
        const responseText = await response.text();
        console.log('Raw response:', responseText);
        
        if (responseText) {
          result = JSON.parse(responseText);
        } else {
          result = { success: false, error: 'Empty response' };
        }
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        result = { success: false, error: 'Invalid response format' };
      }

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", phone: "", company: "", monthlyRevenue: "", websiteUrl: "", budget: "", aboutProject: "" });
        
        // Track Facebook Pixel event
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead');
        }
      } else {
        console.error('Form submission failed:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-4">
              <span className="bg-gradient-to-r from-gray-500 via-white to-green-400 bg-clip-text text-transparent">
                Get Started Today
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="bg-card/30 backdrop-blur border border-primary/30 rounded-3xl p-8 shadow-[0_0_60px_hsl(var(--primary)/0.3)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="monthlyRevenue" className="block text-sm font-medium text-foreground mb-2">
                    Monthly Revenue *
                  </label>
                  <select
                    id="monthlyRevenue"
                    name="monthlyRevenue"
                    value={formData.monthlyRevenue}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select revenue range</option>
                    <option value="0-10k">$0 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="websiteUrl" className="block text-sm font-medium text-foreground mb-2">
                    Website/Social Media Link *
                  </label>
                  <input
                    type="url"
                    id="websiteUrl"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="https://yourwebsite.com or social media link"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                  Budget *
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Enter your budget (e.g., $5,000 or $10,000-$20,000)"
                />
              </div>

              <div>
                <label htmlFor="aboutProject" className="block text-sm font-medium text-foreground mb-2">
                  About Project
                </label>
                <textarea
                  id="aboutProject"
                  name="aboutProject"
                  value={formData.aboutProject}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Tell us about your project, goals, or any specific requirements..."
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-base px-6 py-4 h-auto group bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>

              {submitStatus === 'success' && (
                <div className="flex items-center justify-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-xl">
                  <CheckCircle className="w-5 h-5" />
                  <span>Thank you! We'll get back to you within 24 hours.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center justify-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-xl">
                  <AlertCircle className="w-5 h-5" />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;