import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
