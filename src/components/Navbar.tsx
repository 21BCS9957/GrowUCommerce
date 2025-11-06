import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-6 py-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/GUC logo.png"
              alt="GUC Logo"
              className="h-16 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
          </div>

          <Button
            variant="outline"
            size="default"
            className="px-6 py-2"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
