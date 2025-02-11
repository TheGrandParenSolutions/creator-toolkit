export const languages = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "hi", label: "Hindi" },
  { value: "zh", label: "Chinese" },
];

export const transcriptFileFormats = [
  { label: "PDF File", value: "pdf" },
  { label: "TXT File", value: "txt" },
  { label: "DOC File", value: "doc" },
];

export const PREMIUM_USER_TYPE = "premium";
export const FREE_USER_TYPE = "free";

export const pricingPlans = [
  {
    title: "BASIC",
    bgColor: "bg-transparent bg-white dark:bg-zinc-800",
    textColor: "text-black",
    price: {
      monthly: { amount: "14.99", currency: "USD" },
      annual: { amount: "12.49", currency: "USD" },
      daily: { amount: "3", currency: "USD" },
    },
    originalPrice: {
      monthly: { amount: "21.99", currency: "USD" },
      annual: { amount: "17.99", currency: "USD" },
      daily: { amount: "3", currency: "USD" },
    },
    description: "Great for users starting out with their YouTube Journey.",
    billed: {
      monthly: { amount: "179.88", currency: "USD" },
      annual: { amount: "149.90", currency: "USD" },
      daily: { amount: "3", currency: "USD" },
    },
    features: [
      "Unlimited Thumbnail Ideas",
      "Up to 3 Thumbnail A/B Tests at once",
      "150 Thumbnail AI Rates/mo",
      "200 Thumbnail AI Creations/mo",
      "1 Channel",
      "Members Only Discord Group",
    ],
    buttonColor: "bg-[var(--brand-mid-yellow)] text-black",
  },
];
