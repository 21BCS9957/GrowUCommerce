import Marquee from "./Marquee";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    company: "Organic Food Startup",
    text: "GrowUCommerce helped us reach health-conscious customers across India. Our online sales grew by 400%!",
    rating: 5
  },
  {
    name: "Arjun Patel",
    company: "Fitness Equipment Brand",
    text: "Their targeted campaigns brought us quality leads. We scaled from local to pan-India in 6 months.",
    rating: 5
  },
  {
    name: "Kavya Reddy",
    company: "Handmade Jewelry Business",
    text: "Social media strategy transformed our artisan brand. Revenue increased by 250% through Instagram ads.",
    rating: 5
  },
  {
    name: "Rohit Gupta",
    company: "EdTech Startup",
    text: "Their funnel optimization helped us acquire 10,000+ students. Best investment for our growth.",
    rating: 5
  },
  {
    name: "Sneha Agarwal",
    company: "Sustainable Fashion Brand",
    text: "Creative content and influencer partnerships drove massive brand awareness. Sales doubled in 4 months.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    company: "Home Decor Startup",
    text: "Meta and Google ads expertise helped us reach interior design enthusiasts. ROI exceeded expectations!",
    rating: 5
  },
  {
    name: "Ananya Joshi",
    company: "Beauty & Skincare Brand",
    text: "TikTok campaigns went viral and brought us thousands of new customers. Amazing results!",
    rating: 5
  },
  {
    name: "Karan Mehta",
    company: "Food Delivery Service",
    text: "Local SEO and social media marketing helped us dominate our city. Orders increased by 300%.",
    rating: 5
  }
];

const TestimonialMarquee = () => {
  return (
    <section className="py-2 bg-gradient-to-r from-primary/5 to-secondary/5">
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