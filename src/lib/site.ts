import vinylImg from "@/assets/service-vinyl-tile.jpg";
import lvpImg from "@/assets/service-lvp.jpg";
import carpetImg from "@/assets/service-carpet-tile.jpg";
import coveImg from "@/assets/service-cove-base.jpg";
import retailImg from "@/assets/gallery-retail.jpg";
import healthImg from "@/assets/gallery-healthcare.jpg";
import eduImg from "@/assets/gallery-education.jpg";
import hospImg from "@/assets/gallery-hospitality.jpg";
import crewImg from "@/assets/about-crew.jpg";
import lobbyImg from "@/assets/hero-lobby.jpg";

export const business = {
  name: "Ironclad Commercial Floors",
  phone: "(604) 540-3999",
  phoneHref: "tel:+16045403999",
  email: "info@ironcladcommercialfloors.ca",
  address: "783 E 60th Ave, Vancouver, BC V5X 2A5, Canada",
  addressLines: ["783 E 60th Ave", "Vancouver, BC V5X 2A5", "Canada"],
  hours: "Open 24 Hours",
  hoursDetail: "Day, night & weekend crews available",
  gmb: "https://maps.app.goo.gl/RvWaqdfoddTgzFLZA",
  mapEmbed:
    "https://www.google.com/maps?q=783+E+60th+Ave,+Vancouver,+BC+V5X+2A5,+Canada&output=embed",
  tagline:
    "Heavy-duty commercial, institutional and industrial flooring, engineered from the subfloor up.",
};

export type ServiceSlug = "vinyl-tile" | "lvp" | "carpet-tile" | "cove-base";

export type Service = {
  slug: ServiceSlug;
  name: string;
  short: string;
  headline: string;
  image: string;
  intro: string;
  benefits: { title: string; text: string }[];
  idealFor: string[];
  process: { title: string; text: string }[];
  specs: { label: string; value: string }[];
};

export const services: Service[] = [
  {
    slug: "vinyl-tile",
    name: "Vinyl Tile",
    short:
      "Resilient VCT and solid vinyl tile laid to tight tolerances for corridors, classrooms and clinics that never stop moving.",
    headline: "Resilient vinyl tile built for relentless foot traffic",
    image: vinylImg,
    intro:
      "Vinyl tile is the backbone of busy public buildings. We level, prime and lay every tile on a properly prepared substrate so seams stay tight, patterns stay true and the floor polishes up year after year — whether it's a school wing, a hospital hallway or a big-box back-of-house.",
    benefits: [
      { title: "Long service life", text: "Dense, through-colour tiles that hide wear and stand up to rolling carts and constant footfall." },
      { title: "Easy to maintain", text: "Strip-and-refinish friendly surfaces that keep a showroom shine with routine janitorial care." },
      { title: "Custom patterns", text: "Wayfinding bands, checkerboards and logo inlays cut and set with precision." },
      { title: "Budget-smart", text: "One of the lowest lifecycle costs of any commercial hard surface." },
    ],
    idealFor: ["Schools & universities", "Hospitals & clinics", "Retail back-of-house", "Government buildings", "Corridors & lobbies"],
    process: [
      { title: "Substrate survey", text: "Moisture, pH and flatness testing before a single box is opened." },
      { title: "Surface preparation", text: "Grinding, patching and self-levelling to achieve a flat, sound base." },
      { title: "Layout & install", text: "Centre-line layout, approved adhesive and rolled tiles for full transfer." },
      { title: "Finish & handover", text: "Initial clean, protective finish coats and a walk-through sign-off." },
    ],
    specs: [
      { label: "Formats", value: "12\" × 12\" VCT, 18\" & 24\" solid vinyl" },
      { label: "Typical thickness", value: "1/8\" (3.2 mm)" },
      { label: "Install window", value: "Evenings, weekends or phased shifts" },
      { label: "Pairs well with", value: "Rubber or vinyl cove base" },
    ],
  },
  {
    slug: "lvp",
    name: "LVP",
    short:
      "Luxury vinyl plank with the warmth of wood or stone and the toughness of a commercial wear layer — quiet, waterproof and refined.",
    headline: "Luxury vinyl plank with real-wood presence and commercial muscle",
    image: lvpImg,
    intro:
      "Luxury vinyl plank delivers the high-end look tenants and guests expect, without the upkeep of natural hardwood. We specify the right wear layer for your traffic, mitigate slab moisture where needed and install glue-down or click systems with clean transitions throughout.",
    benefits: [
      { title: "Premium aesthetics", text: "Realistic oak, walnut and stone visuals with embossed-in-register textures." },
      { title: "Waterproof core", text: "Handles spills, mopping and humid Vancouver seasons without swelling." },
      { title: "Acoustic comfort", text: "Optional acoustic underlays cut impact noise in multi-storey buildings." },
      { title: "Fast turnover", text: "Floors go back into service quickly — ideal for tenant improvements." },
    ],
    idealFor: ["Corporate offices", "Restaurants & hospitality", "Retail showrooms", "Multi-family amenity spaces", "Senior living"],
    process: [
      { title: "Moisture mitigation", text: "Slab RH testing and vapour-control systems where readings demand it." },
      { title: "Level & prepare", text: "Flat substrate within manufacturer tolerance for a seamless finish." },
      { title: "Precision install", text: "Staggered joints, scribed edges and clean transitions at every doorway." },
      { title: "Detail & protect", text: "Trims, base and floor protection until your opening day." },
    ],
    specs: [
      { label: "Wear layer", value: "20 – 40 mil commercial grade" },
      { label: "Install method", value: "Glue-down, loose-lay or click-lock" },
      { label: "Patterns", value: "Straight, herringbone, chevron" },
      { label: "Pairs well with", value: "Coordinated cove base & trims" },
    ],
  },
  {
    slug: "carpet-tile",
    name: "Carpet Tile",
    short:
      "Modular carpet tile for offices, libraries and boardrooms — designed for comfort, acoustics and effortless single-tile replacement.",
    headline: "Modular carpet tile for workplaces that need comfort and calm",
    image: carpetImg,
    intro:
      "Carpet tile brings softness, sound control and design freedom to workspaces. We lay ashlar, quarter-turn, brick and monolithic patterns with releasable or full-spread adhesive, so a damaged tile can be swapped in minutes instead of replacing a whole room.",
    benefits: [
      { title: "Sound absorption", text: "Noticeably quieter open-plan offices, classrooms and meeting rooms." },
      { title: "Swap a single tile", text: "Stains or damage? Replace one tile, not the entire floor." },
      { title: "Design freedom", text: "Mix colours and textures to zone spaces and reflect your brand." },
      { title: "Overnight installs", text: "Furniture lifts and phased installs keep your team working." },
    ],
    idealFor: ["Office towers", "Libraries & study commons", "Boardrooms", "Call centres", "Education facilities"],
    process: [
      { title: "Plan & zone", text: "Pattern mapping, colour zoning and furniture-lift scheduling." },
      { title: "Prepare", text: "Remove old flooring, patch and smooth the substrate." },
      { title: "Install", text: "Laid to direction arrows with the specified adhesive system." },
      { title: "Clean & reset", text: "Vacuum, inspect and return furniture to place." },
    ],
    specs: [
      { label: "Formats", value: "24\" × 24\", 9\" × 36\", 18\" × 36\" planks" },
      { label: "Backing", value: "Hard-back or cushion-back" },
      { label: "Adhesive", value: "Releasable tackifier or full-spread" },
      { label: "Pairs well with", value: "Rubber cove base & LVP transitions" },
    ],
  },
  {
    slug: "cove-base",
    name: "Cove Base",
    short:
      "Rubber and vinyl wall base that seals the floor-to-wall joint, protects drywall and gives every room a crisp, finished edge.",
    headline: "Cove base that seals, protects and finishes every edge",
    image: coveImg,
    intro:
      "The detail that makes a floor look finished. Our cove base installations are scribed tight to the floor, wrapped cleanly around inside and outside corners and bonded to last — protecting walls from mop water, vacuums and cart strikes in every type of facility.",
    benefits: [
      { title: "Wall protection", text: "Absorbs bumps from carts, chairs and cleaning equipment." },
      { title: "Hygienic seal", text: "Closes the floor-wall gap where dirt and moisture collect." },
      { title: "Sharp corners", text: "Hand-formed inside and outside corners — no gaps, no lifting." },
      { title: "Colour coordinated", text: "Matched or contrasted to your floor and wall palette." },
    ],
    idealFor: ["Healthcare facilities", "Schools", "Offices", "Retail stores", "Industrial break rooms"],
    process: [
      { title: "Measure & select", text: "Profile height, toe style and colour chosen to suit the space." },
      { title: "Prep walls", text: "Clean, dry, sound wall surfaces for full adhesive contact." },
      { title: "Form & install", text: "Heat-formed corners and continuous runs with minimal seams." },
      { title: "Final detail", text: "Clean adhesive lines and inspect every joint." },
    ],
    specs: [
      { label: "Heights", value: "2.5\", 4\" and 6\" profiles" },
      { label: "Materials", value: "Thermoset rubber, thermoplastic & vinyl" },
      { label: "Toe styles", value: "Cove (toe) or straight (toeless)" },
      { label: "Pairs well with", value: "Every resilient & carpet floor" },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const areas = [
  { name: "Vancouver", note: "Head office on E 60th Ave — downtown towers, Mount Pleasant studios and South Van industrial." },
  { name: "Burnaby", note: "Metrotown retail, Brentwood offices and the Lake City business parks." },
  { name: "Surrey", note: "City Centre institutions, Newton warehouses and Campbell Heights logistics." },
  { name: "Richmond", note: "Airport-area distribution, Bridgeport retail and No. 3 Road commercial." },
  { name: "Coquitlam", note: "Tri-Cities schools, medical buildings and Lougheed corridor retail." },
  { name: "New Westminster", note: "Heritage conversions, Columbia Street storefronts and civic facilities." },
  { name: "North Vancouver", note: "Lonsdale offices, Shipyards hospitality and marine-industrial sites." },
  { name: "Delta", note: "Tilbury and Annacis Island industrial, plus Ladner and Tsawwassen retail." },
];

export const reviews = [
  { name: "Priya Sandhu", role: "Facilities Manager, Healthcare Group", text: "They phased the vinyl tile in our clinic overnight so we never closed a single exam room. Corners and cove base are flawless.", rating: 5 },
  { name: "Tom Lefebvre", role: "General Contractor, Burnaby", text: "Ironclad is our go-to flooring sub. Slab moisture was a problem on our last job — they caught it early and solved it before we lost a day.", rating: 5 },
  { name: "Grace Wong", role: "Office Lead, Tech Studio", text: "6,000 sq ft of carpet tile installed over a weekend. Monday morning the team walked into a brand-new, quiet office.", rating: 5 },
  { name: "Daniel Okafor", role: "Owner, Restaurant Group", text: "Our herringbone LVP looks like real walnut and survives a full dinner service every night. Clean crew, clear quote.", rating: 5 },
  { name: "Melissa Hart", role: "Property Manager, Strata", text: "Responsive, on time and tidy. The amenity room and hallways look premium now — residents keep commenting on it.", rating: 5 },
  { name: "Ravi Bains", role: "Operations, Distribution Centre", text: "They handled our office and break-room floors around a 24-hour warehouse schedule without a single disruption.", rating: 5 },
];

export const faqs = [
  { q: "Do you work after hours or on weekends?", a: "Yes. Our crews run day, night and weekend shifts so your business, school or clinic can stay open while we work." },
  { q: "Which flooring is best for my facility?", a: "It depends on traffic, maintenance budget, acoustics and look. We walk your space, review how it is used and recommend vinyl tile, LVP, carpet tile or a combination — with cove base to finish." },
  { q: "Do you prepare the subfloor?", a: "Always. Moisture testing, grinding, patching and self-levelling are part of every proposal, because a floor is only as good as what is underneath it." },
  { q: "How quickly can you start?", a: "Most site visits are booked within a few days. Start dates depend on material lead times and your schedule — we will give you a clear timeline with your quote." },
  { q: "Which areas do you serve?", a: "We are based in Vancouver and serve Burnaby, Surrey, Richmond, Coquitlam, New Westminster, North Vancouver, Delta and projects across Canada." },
  { q: "Are estimates free?", a: "Yes. On-site measurements and written estimates are free, with no obligation." },
];

export const whyChoose = [
  { icon: "ShieldCheck", title: "Fully licensed & insured", text: "Commercial liability and WorkSafeBC coverage on every crew, every site." },
  { icon: "Clock", title: "Around-the-clock scheduling", text: "Night, weekend and phased installs that keep your doors open." },
  { icon: "Layers", title: "Subfloor-first approach", text: "We test, grind and level before we lay — so floors stay flat and bonded." },
  { icon: "Ruler", title: "Precision craftsmanship", text: "Tight seams, true patterns and hand-formed corners you can see." },
  { icon: "BadgeDollarSign", title: "Clear, honest quotes", text: "Itemized pricing with no surprises once the work begins." },
  { icon: "Sparkles", title: "Spotless handover", text: "We clean up, protect your new floor and walk the site with you." },
];

export const stats = [
  { value: 24, suffix: "/7", label: "Crew availability" },
  { value: 4, suffix: "", label: "Specialized systems" },
  { value: 8, suffix: "+", label: "Lower Mainland cities" },
  { value: 100, suffix: "%", label: "Prepared subfloors" },
];

export type GalleryItem = { src: string; title: string; category: string; tall?: boolean };

export const gallery: GalleryItem[] = [
  { src: vinylImg, title: "Institutional corridor — patterned VCT", category: "Vinyl Tile" },
  { src: retailImg, title: "Boutique retail — stone-look LVP", category: "LVP", tall: true },
  { src: carpetImg, title: "Executive boardroom — quarter-turn carpet tile", category: "Carpet Tile" },
  { src: healthImg, title: "Medical clinic — vinyl with wayfinding band", category: "Vinyl Tile" },
  { src: eduImg, title: "Study commons — emerald carpet tile", category: "Carpet Tile", tall: true },
  { src: lvpImg, title: "Open-plan office — oak LVP", category: "LVP" },
  { src: coveImg, title: "Rubber cove base detailing", category: "Cove Base" },
  { src: hospImg, title: "Restaurant lounge — herringbone LVP", category: "LVP" },
  { src: crewImg, title: "Crew on site — plank installation", category: "LVP" },
  { src: lobbyImg, title: "Lobby finish — luxury surface concept", category: "Vinyl Tile" },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
] as const;
