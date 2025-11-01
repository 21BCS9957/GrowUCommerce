import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Animated glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.2)_0%,transparent_70%)] animate-glow" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 p-6 sm:p-12 rounded-3xl bg-card/30 backdrop-blur border border-primary/30 shadow-[0_0_60px_hsl(var(--primary)/0.3)]">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-medium leading-tight text-center">
              Ready to Scale Your
              <br />
              <span className="bg-gradient-to-r from-gray-500 via-white to-green-400 bg-clip-text text-transparent">
                D2C Brand?
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center">
              Unlock your brand's full potential with data-driven growth strategies designed to maximize ROI, boost conversions, and enhance customer retention. From advanced analytics and performance marketing to conversion optimization and personalized brand experiences — we help you transform your D2C business into a scalable, high-performing growth engine.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              variant="hero"
              size="default"
              className="text-base px-6 py-4 h-auto group"
              onClick={() => window.open('https://calendly.com/kushalxarora/bookfreeconsulting?month=2025-10', '_blank')}
            >
              <Calendar className="mr-2" />
              Schedule Strategic Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              No commitment required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-100" />
              30-minute session
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-200" />
              Custom strategy included
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
