import { Search, Settings, Zap, TestTube, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const onboardingSteps = [
  {
    step: 1,
    icon: Search,
    title: "QUICK AUDIT & FUNNEL BLUEPRINT",
    description: "We dive deep into your dashboards, numbers, and campaigns to understand what's broken and why. Then we design a custom funnel strategy that fits your brand like a glove.",
    color: "from-primary/20 to-primary/5"
  },
  {
    step: 2,
    icon: Settings,
    title: "SMART SYSTEMS THAT STAY FOREVER",
    description: "We set up AI-powered workflows and automations that capture leads, retarget users, and boost sales on autopilot. And the best part? These systems stay with you forever, even if we don't. You own the engine, not just the ride.",
    color: "from-secondary/20 to-secondary/5"
  },
  {
    step: 3,
    icon: Zap,
    title: "FULL-FUNNEL EXECUTION",
    description: "Now the real action begins — we redesign and optimize your website (CRO), ads (Meta), content (socials), and every touchpoint to align with your new growth system.",
    color: "from-primary/20 to-primary/5"
  },
  {
    step: 4,
    icon: TestTube,
    title: "MULTI-ANGLE TESTING",
    description: "We run rapid experiments using different angles, hooks, and creatives to find what clicks with your audience. This phase is built to find winners, fast.",
    color: "from-secondary/20 to-secondary/5"
  },
  {
    step: 5,
    icon: TrendingUp,
    title: "SCALING THE WINNERS",
    description: "Once the winning combo hits, we press the gas — scaling aggressively while maintaining profitability across platforms.",
    color: "from-primary/20 to-primary/5"
  }
];

const OnboardingProcess = () => {
  return (
    <>
      {/* Header Section */}
      <section className="py-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

        {/* Decorative elements */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
                Onboarding Process
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold">
              <span className="bg-gradient-to-r from-gray-500 via-white to-green-400 bg-clip-text text-transparent">
                What If We Onboard You?
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Here's exactly what happens when you join our growth program — from audit to scale.
            </p>
          </div>
        </div>
      </section>

      {/* Stacking Cards Section */}
      <section id="onboarding-process" className="relative">
        <div className="max-w-4xl mx-auto px-6">
          {onboardingSteps.map((step, index) => (
            <div
              key={step.step}
              className="sticky group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] hover:-translate-y-2 mb-6"
              style={{
                top: `${80}px`,
                zIndex: 50 + index,
                marginBottom: index === onboardingSteps.length - 1 ? '120px' : '24px'
              }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 space-y-4">
                {/* Step Number & Icon & Title Row */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    {/* Step Number */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold z-10">
                      {step.step}
                    </div>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
                      <step.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">
                        STEP – {step.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </section>
    </>
  );
};

export default OnboardingProcess;