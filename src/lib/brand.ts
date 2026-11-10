export const BRAND = {
  name: "Formation Planet Ltd",
  short: "Formation Planet",
  tagline: "Your Global Gateway to Business Formation & Compliance",
  email: "formationplanetltd@gmail.com",
  phone: "03104905860",
  website: "www.formationplanet.co.uk",
  whatsappNumber: "923104905860",
  facebook: "https://www.facebook.com/share/189tMtkWhv/",
  instagram: "https://www.instagram.com/formationplanet.ltd",
  pinterest: "https://pin.it/I1mxsYtjD",
};

export const wa = (msg: string) =>
  `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(`Hello Formation Planet, ${msg}`)}`;
