import Marquee from "./Marquee";

const clients = [
  { name: "Shopify", logo: "/Company Logo/shopify.png" },
  { name: "Meta", logo: "/Company Logo/meta.png" },
  { name: "TikTok", logo: "/Company Logo/TikTok.png" },
  { name: "Shopify", logo: "/Company Logo/shopify.png" },
  { name: "Meta", logo: "/Company Logo/meta.png" },
  { name: "TikTok", logo: "/Company Logo/TikTok.png" },
];

const ClientMarquee = () => {
  return (
    <section className="py-4 bg-muted/30">
      <div className="container mx-auto px-6">

        
        <Marquee speed="normal" pauseOnHover={true} className="py-8">
          {clients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center justify-center mx-8 hover:scale-110 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`w-auto object-contain ${
                  client.name === 'Meta' ? 'h-32' : 'h-16'
                }`}
                loading="lazy"
                onError={(e) => {
                  console.log(`Failed to load image: ${client.logo}`);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ClientMarquee;