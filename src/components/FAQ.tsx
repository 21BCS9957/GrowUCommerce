import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "We offer comprehensive digital marketing services including Search Engine Optimization (SEO), Website Design & Development, and Paid Advertising management. We also provide one-time SEO and website setup services for businesses looking for a quick start."
  },
  {
    id: 2,
    question: "What are your pricing structures?",
    answer: "Our pricing is flexible and varies based on the specific services you select, your sales and traffic objectives, target demographics (location), and industry requirements."
  },
  {
    id: 3,
    question: "How long does it take to see results?",
    answer: "It is a long-term strategy that typically shows initial results within 3 months. However, significant improvement in rankings and traffic can take 6-12 months depending on your industry competition, website condition, and content quality."
  },
  {
    id: 4,
    question: "Do you offer one-time services or only monthly packages?",
    answer: "We offer both options. Our one-time SEO setup and website development services are perfect for businesses that need a foundation without long-term commitments. We also provide ongoing monthly packages for businesses looking for continuous optimization and growth."
  },
  {
    id: 5,
    question: "How do you measure the success of your digital marketing campaigns?",
    answer: "We track key performance indicators (KPIs) specific to your business goals, including organic traffic growth, keyword rankings, conversion rates, return on ad spend (ROAS), and overall revenue impact. We provide regular, transparent reporting so you can see exactly how our efforts are performing."
  },
  {
    id: 6,
    question: "Do you specialize in any particular industries?",
    answer: "While we work with businesses across various sectors in the United States, we have particular expertise in e-commerce, local service businesses, B2B companies, and professional services. Our strategies are always customized to the specific needs and competitive landscape of your industry."
  }
];

const FAQItem = ({ 
  faq, 
  isOpen, 
  onToggle 
}: { 
  faq: typeof faqs[0]; 
  isOpen: boolean; 
  onToggle: () => void; 
}) => {
  return (
    <div className="border border-border/50 rounded-2xl overflow-hidden bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-card/50 transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold text-foreground pr-4">
          {faq.question}
        </h3>
        <ChevronDown 
          className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 pb-5">
          <p className="text-muted-foreground leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/3 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">
            <span className="bg-gradient-to-r from-gray-500 via-white to-green-400 bg-clip-text text-transparent">
              Got Questions? We've Got Answers
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about working with us and our services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <FAQItem
                faq={faq}
                isOpen={openItems.includes(faq.id)}
                onToggle={() => toggleItem(faq.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;