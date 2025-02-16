import { PricingPlanProps } from "@src/pages/Pricing/PricingPlan";

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

export const defaultPlans: PricingPlanProps[] = [
  {
    planType: "basic",
    title: "Basic",
    description: "Great for users starting out with their YouTube Journey.",
    features: [
      "Unlimited Thumbnail Ideas",
      "Up to 3 Thumbnail A/B Tests at once",
      "150 Thumbnail AI Rates/mo",
      "200 Thumbnail AI Creations/mo",
      "1 Channel",
      "Members Only Discord Group",
    ],
    activePlan: "Monthly",
    price: { annual: 179.88, monthly: 14.99, daily: 1.99, weekly: 7.99 },
    originalPrice: {
      annual: 219.99,
      monthly: 21.99,
      daily: 2.99,
      weekly: 7.99,
    },
    buttonText: "Get Started",
    currency: "$",
  },
  {
    planType: "pro",
    title: "Pro",
    description: "For professionals who need more advanced features.",
    features: [
      "Unlimited Thumbnail Ideas",
      "Up to 5 Thumbnail A/B Tests at once",
      "300 Thumbnail AI Rates/mo",
      "500 Thumbnail AI Creations/mo",
      "3 Channels",
      "Dedicated AI Assistant",
      "Priority Support",
    ],
    activePlan: "Monthly",
    price: { annual: 299.88, monthly: 24.99, daily: 3.99, weekly: 7.99 },
    originalPrice: {
      annual: 359.99,
      monthly: 34.99,
      daily: 4.99,
      weekly: 7.99,
    },
    buttonText: "Get Started",
    currency: "$",
  },
]