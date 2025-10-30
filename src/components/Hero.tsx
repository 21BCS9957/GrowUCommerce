import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, DollarSign, Users } from "lucide-react";
import StatsCard from "./StatsCard";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ backgroundImage: 'url(/hero-green-bg.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 bg-background/20" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center max-w-5xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-tight bg-gradient-to-r from-gray-500 via-white to-green-400 bg-clip-text text-transparent" style={{ fontFamily: 'Manrope, sans-serif' }}>
          D2C Growth Engines
            <br />
            Built for Scale
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">

          </p>

          <div className="flex justify-center items-center pt-4">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6 h-auto group"
              onClick={() => window.open('https://calendly.com/kushalxarora/bookfreeconsulting?month=2025-10', '_blank')}
            >
              Book Free Strategy Session
              <ArrowRight className="ml-2 rocket-arrow-icon transition-all duration-300" />
            </Button>
          </div>



          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-5xl mx-auto">
            <StatsCard
              stat="5.8X"
              description="Average in ROAS
for Brands"
              icon={TrendingUp}
            />
            <StatsCard
              stat="$10M+"
              description="Tracked revenue for business"
              icon={DollarSign}
            />
            <StatsCard
              stat="150+"
              description="Brands Scaled from scratch"
              icon={Users}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
