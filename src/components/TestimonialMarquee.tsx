import Marquee from "./Marquee";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "E-commerce Store Owner",
    text: "GrowUCommerce transformed our Shopify store. Sales increased by 300% in just 3 months!",
    rating: 5
  },
  {
    name: "Mike Chen",
    company: "Digital Marketing Agency",
    text: "Their Meta ads expertise is unmatched. Best ROI we've ever achieved.",
    rating: 5
  },
  {
    name: "Satyam Tripathi",
    company: "AI Startup",
    text: "GrowUCommerce's AI-driven strategies helped us achieve 400% growth in user engagement.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    company: "Fashion Brand",
    text: "The creative team delivered stunning content that perfectly captured our brand.",
    rating: 5
  },
  {
    name: "David Thompson",
    company: "Tech Startup",
    text: "Full funnel approach helped us scale from 0 to 6 figures in revenue.",
    rating: 5
  },
  {
    name: "Lisa Wang",
    company: "Beauty Brand",
    text: "TikTok ads campaign exceeded all expectations. Highly recommend!",
    rating: 5
  }
];

const TestimonialMarquee = () => {
  return (
    <section className="py-4 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            <span className="bg-gradient-to-r from-gray-500 via-white to-green-400 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h3>
          <p className="text-muted-foreground">Real results from real businesses</p>
        </div>

        <Marquee speed="slow" pauseOnHover={true} className="py-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="mx-6 p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300 w-96 flex-shrink-0"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed whitespace-normal break-words">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TestimonialMarquee;