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
    <div className="flex items-center justify-center gap-4 py-8">
      {clients.slice(0, 3).map((client, index) => (
        <div
          key={`${client.name}-${index}`}
          className="flex items-center justify-center hover:scale-110 transition-all duration-300"
        >
          <img
            src={client.logo}
            alt={client.name}
            className={`w-auto object-contain ${client.name === 'Meta' ? 'h-40' : 'h-24'
              }`}
            loading="lazy"
            onError={(e) => {
              console.log(`Failed to load image: ${client.logo}`);
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ClientMarquee; 
