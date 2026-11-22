// ---------- Types ----------
export type Product = {
  id: string; name: string; price: number; compareAt?: number; stock: number;
  status: "active" | "draft" | "archived"; type: string; vendor: string;
  tags: string[]; img: string; sku: string; sold: number; channels: number; desc: string;
};
export type Customer = {
  id: string; name: string; email: string; city: string; country: string;
  orders: number; spent: number; subscribed: boolean; tags: string[]; joined: string; phone: string;
};
export type Order = {
  id: string; number: number; customerId: string; date: string;
  payment: "paid" | "pending" | "refunded" | "authorized";
  fulfillment: "fulfilled" | "unfulfilled" | "partial";
  channel: string; delivery: string; items: { productId: string; qty: number }[];
  total: number; tags: string[];
};

const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&crop=entropy&q=80&w=480&h=480`;

// ---------- Products ----------
export const products: Product[] = [
  { id: "p1", name: "Premium Red Pepper Spice – Bold & Aromatic Ground Chili Powder", price: 8.2, stock: 100, status: "active", type: "Spices", vendor: "Saffron & Salt", tags: ["Spices", "best-seller"], img: u("1615485500834-bc10199bc727"), sku: "SP-CHL-001", sold: 412, channels: 3, desc: "Add a burst of heat and flavor to your dishes with our Premium Red Pepper Spice. Made from carefully selected dried red chilies, finely ground to preserve natural aroma, color, and spiciness." },
  { id: "p2", name: "Organic Turmeric Powder – Golden Milk Blend", price: 11.5, stock: 64, status: "active", type: "Spices", vendor: "Saffron & Salt", tags: ["Spices", "organic", "best-seller"], img: u("1698943510650-9232c98a5328"), sku: "SP-TUR-014", sold: 358, channels: 3, desc: "Stone-ground turmeric with a touch of black pepper for better absorption. Perfect for golden milk, curries and marinades." },
  { id: "p3", name: "Ceylon Cinnamon Sticks – True Cinnamon, 100g", price: 9.9, stock: 212, status: "active", type: "Spices", vendor: "Lanka Harvest", tags: ["Spices", "baking"], img: u("1587131782738-de30ea91a542"), sku: "SP-CIN-031", sold: 297, channels: 3, desc: "Delicate, sweet and slightly citrusy quills hand-rolled in Sri Lanka." },
  { id: "p4", name: "Saigon Cinnamon Bark – Bold & Sweet, 80g", price: 7.5, stock: 8, status: "active", type: "Spices", vendor: "Lanka Harvest", tags: ["Spices"], img: u("1587411767714-d355c1f847ea"), sku: "SP-CIN-032", sold: 143, channels: 2, desc: "Intense, spicy-sweet bark for mulled drinks, rice dishes and desserts." },
  { id: "p5", name: "Premium Saffron Threads – Grade A, 1g", price: 24, compareAt: 29, stock: 36, status: "active", type: "Spices", vendor: "Persian Gold", tags: ["Spices", "premium", "best-seller"], img: u("1680977080019-7a922ccfb3f2"), sku: "SP-SAF-002", sold: 188, channels: 3, desc: "Hand-picked crimson threads with deep aroma. A pinch transforms paella, risotto and desserts." },
  { id: "p6", name: "Whole Star Anise & Clove Mix – Mulling Blend", price: 6.8, stock: 0, status: "active", type: "Spices", vendor: "Saffron & Salt", tags: ["Spices", "seasonal"], img: u("1615485290671-1782f96bb302"), sku: "SP-MIX-045", sold: 96, channels: 2, desc: "A warm winter blend for mulled wine, chai and braises." },
  { id: "p7", name: "Premium Dried Thyme Leaves – Aromatic Mediterranean Herb", price: 5.9, stock: 140, status: "active", type: "Herbs", vendor: "Provence Farms", tags: ["Herbs", "best-seller"], img: u("1600246444216-467a4c83c331"), sku: "HB-THY-007", sold: 221, channels: 3, desc: "Fragrant thyme leaves, air-dried to lock in oils. Great with roasted vegetables and meats." },
  { id: "p8", name: "Garden Herb Bundle – Hand-tied & Air-dried", price: 6.4, stock: 52, status: "draft", type: "Herbs", vendor: "Provence Farms", tags: ["Herbs"], img: u("1652209648293-d9713bc95b93"), sku: "HB-BND-012", sold: 0, channels: 0, desc: "A hand-tied bundle of rosemary, sage and thyme." },
  { id: "p9", name: "Aged Pu-erh Loose Leaf Tea – Earthy & Smooth, 150g", price: 18, stock: 44, status: "active", type: "Tea", vendor: "Yunnan Collective", tags: ["Tea", "premium"], img: u("1628153792464-21bffac488d4"), sku: "TE-PUE-003", sold: 112, channels: 3, desc: "Fermented dark tea with a rich, earthy character. Gets better with each infusion." },
  { id: "p10", name: "Assam Black Tea – Malty Breakfast Blend, 200g", price: 12.5, stock: 6, status: "active", type: "Tea", vendor: "Assam Estates", tags: ["Tea"], img: u("1759523710626-199a2da96085"), sku: "TE-ASS-018", sold: 174, channels: 3, desc: "Bold, malty and brisk. Brilliant with milk." },
  { id: "p11", name: "Wild Forest Honey – Raw & Unfiltered, 350g", price: 14, stock: 78, status: "active", type: "Pantry", vendor: "Hill Apiary", tags: ["Pantry", "raw"], img: u("1641878067318-1d1f79a77785"), sku: "PN-HNY-021", sold: 205, channels: 3, desc: "Collected from wild hives in the forest foothills. Never heated, never blended." },
  { id: "p12", name: "Cold-pressed Extra Virgin Olive Oil – 500ml", price: 19.5, stock: 29, status: "active", type: "Pantry", vendor: "Olivar Estate", tags: ["Pantry", "premium"], img: u("1707830637536-5a935085586c"), sku: "PN-OIL-009", sold: 133, channels: 3, desc: "Grassy, peppery single-estate oil, cold-pressed within hours of harvest." },
  { id: "p13", name: "Turmeric Latte Mix – Ready to Whisk, 250g", price: 13, stock: 91, status: "archived", type: "Spices", vendor: "Saffron & Salt", tags: ["Spices", "organic"], img: u("1697006172255-39bac9c28ee3"), sku: "SP-LAT-050", sold: 61, channels: 0, desc: "Discontinued blend. Replaced by Golden Milk Blend." },
  { id: "p14", name: "Spiced Olive Oil Gift Set – Trio", price: 42, stock: 18, status: "active", type: "Gift sets", vendor: "Saffron & Salt", tags: ["Gift sets", "seasonal"], img: u("1682335926245-2a6d54e07029"), sku: "GS-OIL-100", sold: 54, channels: 2, desc: "Three infused oils in a keepsake box." },
];

export const collections = [
  { id: "best-seller-spices", title: "Best Seller Spices", products: ["p1", "p7"], conditions: ["Product tag is equal to Spices", "Product tag is equal to best-seller"], img: products[0].img },
  { id: "teas-infusions", title: "Teas & Infusions", products: ["p9", "p10"], conditions: ["Product type is equal to Tea"], img: products[8].img },
  { id: "pantry-staples", title: "Pantry Staples", products: ["p11", "p12"], conditions: ["Product type is equal to Pantry"], img: products[10].img },
  { id: "gift-sets", title: "Holiday Gift Sets", products: ["p14", "p5"], conditions: ["Product tag is equal to seasonal"], img: products[13].img },
  { id: "home-page", title: "Home page", products: ["p5", "p2"], conditions: [], img: "" },
];

// ---------- Customers ----------
export const customers: Customer[] = [
  { id: "c1", name: "Sam Lee", email: "sam.lee@example.com", city: "Menlo Park CA", country: "United States", orders: 6, spent: 790, subscribed: true, tags: ["VIP"], joined: "2025-12-02", phone: "+1 650 555 0132" },
  { id: "c2", name: "John Smith", email: "john.smith@example.com", city: "New York NY", country: "United States", orders: 4, spent: 228.2, subscribed: true, tags: [], joined: "2026-01-19", phone: "+1 212 555 0188" },
  { id: "c3", name: "Charlotte Wilson", email: "charlotte.w@example.com", city: "Dublin", country: "Ireland", orders: 1, spent: 9, subscribed: false, tags: [], joined: "2026-10-30", phone: "+353 1 555 0192" },
  { id: "c4", name: "Aye Chan", email: "aye.chan@example.com", city: "Yangon", country: "Myanmar", orders: 9, spent: 642.5, subscribed: true, tags: ["VIP", "wholesale"], joined: "2025-08-14", phone: "+95 9 123 456 789" },
  { id: "c5", name: "Maria Garcia", email: "maria.garcia@example.com", city: "Madrid", country: "Spain", orders: 5, spent: 301.4, subscribed: true, tags: [], joined: "2026-02-08", phone: "+34 91 555 01 22" },
  { id: "c6", name: "Liam O'Connor", email: "liam.oconnor@example.com", city: "Cork", country: "Ireland", orders: 2, spent: 63.8, subscribed: false, tags: [], joined: "2026-08-21", phone: "+353 21 555 0170" },
  { id: "c7", name: "Yuki Tanaka", email: "yuki.tanaka@example.com", city: "Osaka", country: "Japan", orders: 7, spent: 512, subscribed: true, tags: ["VIP"], joined: "2025-11-05", phone: "+81 6 5555 0123" },
  { id: "c8", name: "Priya Nair", email: "priya.nair@example.com", city: "Bengaluru", country: "India", orders: 3, spent: 118.9, subscribed: true, tags: [], joined: "2026-05-17", phone: "+91 80 5555 0144" },
  { id: "c9", name: "Omar Haddad", email: "omar.haddad@example.com", city: "Amman", country: "Jordan", orders: 2, spent: 96, subscribed: false, tags: [], joined: "2026-09-02", phone: "+962 6 555 0166" },
  { id: "c10", name: "Elena Petrova", email: "elena.petrova@example.com", city: "Berlin", country: "Germany", orders: 4, spent: 187.5, subscribed: true, tags: [], joined: "2026-03-26", phone: "+49 30 5555 0177" },
  { id: "c11", name: "Noah Becker", email: "noah.becker@example.com", city: "Toronto ON", country: "Canada", orders: 1, spent: 24, subscribed: false, tags: [], joined: "2026-11-09", phone: "+1 416 555 0103" },
  { id: "c12", name: "Zara Khan", email: "zara.khan@example.com", city: "London", country: "United Kingdom", orders: 8, spent: 455.1, subscribed: true, tags: ["VIP"], joined: "2025-09-12", phone: "+44 20 5555 0190" },
  { id: "c13", name: "Lucas Silva", email: "lucas.silva@example.com", city: "São Paulo", country: "Brazil", orders: 2, spent: 71, subscribed: true, tags: [], joined: "2026-07-14", phone: "+55 11 5555 0120" },
  { id: "c14", name: "Hannah Müller", email: "hannah.mueller@example.com", city: "Munich", country: "Germany", orders: 3, spent: 142.3, subscribed: true, tags: [], joined: "2026-04-03", phone: "+49 89 5555 0188" },
  { id: "c15", name: "Kwame Mensah", email: "kwame.mensah@example.com", city: "Accra", country: "Ghana", orders: 1, spent: 18, subscribed: false, tags: [], joined: "2026-11-15", phone: "+233 30 555 0140" },
  { id: "c16", name: "Sofia Rossi", email: "sofia.rossi@example.com", city: "Milan", country: "Italy", orders: 5, spent: 266.7, subscribed: true, tags: [], joined: "2026-01-30", phone: "+39 02 5555 0111" },
  { id: "c17", name: "Ethan Park", email: "ethan.park@example.com", city: "Seoul", country: "South Korea", orders: 3, spent: 134, subscribed: false, tags: [], joined: "2026-06-11", phone: "+82 2 555 0199" },
  { id: "c18", name: "Amara Okafor", email: "amara.okafor@example.com", city: "Lagos", country: "Nigeria", orders: 2, spent: 88.5, subscribed: true, tags: [], joined: "2026-09-27", phone: "+234 1 555 0155" },
  { id: "c19", name: "Daniel Cruz", email: "daniel.cruz@example.com", city: "Austin TX", country: "United States", orders: 4, spent: 209.6, subscribed: true, tags: ["wholesale"], joined: "2026-02-22", phone: "+1 512 555 0171" },
  { id: "c20", name: "Mei Lin", email: "mei.lin@example.com", city: "Singapore", country: "Singapore", orders: 6, spent: 377, subscribed: true, tags: ["VIP"], joined: "2025-10-19", phone: "+65 6555 0123" },
];

// ---------- Orders (deterministic) ----------
let seed = 11;
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const pick = <T,>(a: T[]) => a[Math.floor(rnd() * a.length)];
const pay: Order["payment"][] = ["paid", "paid", "paid", "paid", "pending", "authorized", "refunded"];
const ful: Order["fulfillment"][] = ["fulfilled", "fulfilled", "fulfilled", "unfulfilled", "partial"];
const deliveries = ["Standard shipping", "Express shipping", "Free shipping", "Local pickup"];

export const orders: Order[] = Array.from({ length: 28 }, (_, i) => {
  const n = 1028 - i;
  const items = Array.from({ length: 1 + Math.floor(rnd() * 3) }, () => ({ productId: pick(products.filter((p) => p.status !== "archived")).id, qty: 1 + Math.floor(rnd() * 3) }));
  const sub = items.reduce((s, it) => s + products.find((p) => p.id === it.productId)!.price * it.qty, 0);
  const day = Math.min(29, Math.floor(i * 1.05));
  const d = new Date(Date.UTC(2026, 10, 22 - day));
  const payment = i < 4 ? (i === 1 ? "pending" : "paid") : pick(pay);
  return {
    id: String(n), number: n, customerId: pick(customers).id, date: d.toISOString().slice(0, 10),
    payment, fulfillment: i < 4 ? "unfulfilled" : payment === "refunded" ? "fulfilled" : pick(ful),
    channel: rnd() > 0.2 ? "Online Store" : "Point of Sale", delivery: pick(deliveries),
    items, total: Math.round((sub + (sub > 40 ? 0 : 4.5)) * 100) / 100, tags: rnd() > 0.8 ? ["gift"] : [],
  };
});

// ---------- Analytics ----------
const wave = (base: number, amp: number, phase: number) => Array.from({ length: 30 }, (_, i) => Math.round(base + amp * Math.sin(i / 3.2 + phase) + (i / 29) * amp * 0.9 + rnd() * amp * 0.5));
export const salesSeries = wave(60, 34, 0).map((v) => v * 3);
export const sessionsSeries = wave(90, 30, 1.2);
export const ordersSeries = wave(5, 3, 0.6);

export const channelsList = [
  { name: "Direct", icon: "store", type: "direct", sessions: 3140, sales: 5214.4, orders: 96, cost: null, roas: null, cpa: null, ctr: null, color: "#0ea5e9" },
  { name: "Organic search", icon: "search", type: "organic", sessions: 2218, sales: 3902.8, orders: 71, cost: null, roas: null, cpa: null, ctr: null, color: "#7c3aed" },
  { name: "Instagram", icon: "star", type: "paid social", sessions: 1485, sales: 2860.0, orders: 49, cost: 640, roas: 4.47, cpa: 13.06, ctr: 1.8, color: "#ec4899" },
  { name: "Email", icon: "mail", type: "email", sessions: 1022, sales: 3118.5, orders: 58, cost: 120, roas: 25.99, cpa: 2.07, ctr: 4.9, color: "#10b981" },
  { name: "Facebook", icon: "bell", type: "paid social", sessions: 788, sales: 1244.2, orders: 24, cost: 410, roas: 3.03, cpa: 17.08, ctr: 1.2, color: "#2563eb" },
  { name: "Referral", icon: "tag", type: "referral", sessions: 411, sales: 702.9, orders: 13, cost: null, roas: null, cpa: null, ctr: null, color: "#f59e0b" },
];

export const campaigns = [
  { id: "cmp1", name: "Black Friday Early Access", channel: "Email", status: "Active", sessions: 1022, sales: 3118.5, orders: 58, spend: 120, created: "2026-11-10" },
  { id: "cmp2", name: "Holiday Gift Guide", channel: "Instagram", status: "Active", sessions: 884, sales: 1790, orders: 31, spend: 320, created: "2026-11-05" },
  { id: "cmp3", name: "Winter Warmers – Chai & Mulling Spices", channel: "Facebook", status: "Active", sessions: 788, sales: 1244.2, orders: 24, spend: 410, created: "2026-10-28" },
  { id: "cmp4", name: "Win-back: lapsed customers", channel: "Email", status: "Scheduled", sessions: 0, sales: 0, orders: 0, spend: 0, created: "2026-11-18" },
  { id: "cmp5", name: "Autumn Harvest Launch", channel: "Instagram", status: "Ended", sessions: 1210, sales: 2410.7, orders: 44, spend: 320, created: "2026-09-20" },
  { id: "cmp6", name: "Tea Lovers Weekend", channel: "TikTok", status: "Ended", sessions: 402, sales: 388.5, orders: 9, spend: 150, created: "2026-09-02" },
];

export const segments = [
  { id: "s1", name: "Customers who have purchased at least once", pct: 85, created: "2026-06-30", query: "FROM customers\nSHOW customer_name, note, email_subscription_status, location, orders, amount_spent\nWHERE number_of_orders >= 1" },
  { id: "s2", name: "Email subscribers", pct: 70, created: "2026-06-30", query: "FROM customers\nSHOW customer_name, email_subscription_status, location, orders, amount_spent\nWHERE email_subscription_status = 'SUBSCRIBED'" },
  { id: "s3", name: "Customers who have purchased more than once", pct: 70, created: "2026-06-30", query: "FROM customers\nSHOW customer_name, location, orders, amount_spent\nWHERE number_of_orders > 1" },
  { id: "s4", name: "Abandoned checkouts in the last 30 days", pct: 5, created: "2026-06-30", query: "FROM customers\nSHOW customer_name, email_subscription_status, location, orders\nWHERE has_abandoned_checkout = true" },
  { id: "s5", name: "High-value customers (spent over $400)", pct: 25, created: "2026-09-12", query: "FROM customers\nSHOW customer_name, location, orders, amount_spent\nWHERE amount_spent > 400" },
  { id: "s6", name: "Customers who haven't purchased", pct: 0, created: "2026-06-30", query: "FROM customers\nSHOW customer_name, email_subscription_status, location\nWHERE number_of_orders = 0" },
];

// ---------- Helpers ----------
export const getProduct = (id: string) => products.find((p) => p.id === id) ?? products[0];
export const getOrder = (id: string) => orders.find((o) => o.id === id) ?? orders[0];
export const getCustomer = (id: string) => customers.find((c) => c.id === id) ?? customers[0];
export const getCollection = (id: string) => collections.find((c) => c.id === id) ?? collections[0];
export const getSegment = (id: string) => segments.find((s) => s.id === id) ?? segments[0];
