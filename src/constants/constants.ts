import { PricingPlanProps } from "@src/pages/Pricing/PricingPlan";

export const APP_NAME = "Creosea"

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
    price: { annual: 132.64, monthly: 13.84},
    originalPrice: {
      annual: 166.09,
      monthly: 0
    },
    buttonText: "Get Started",
    currency: "$",
    discount: 0,
    numberOfCredits: 300
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
    price: { annual: 299.88, monthly: 27.68},
    originalPrice: {
      annual: 359.99,
      monthly: 36.91
    },
    buttonText: "Get Started",
    currency: "$",
    discount: 25,
    numberOfCredits: 800
  },
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
    activePlan: "Annual",
    price: { annual: 132.64, monthly: 13.84},
    originalPrice: {
      annual: 166.09,
      monthly: 0
    },
    buttonText: "Get Started",
    currency: "$",
    discount: 20,
    numberOfCredits: 3600
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
    activePlan: "Annual",
    price: { annual: 265.74, monthly: 24.99},
    originalPrice: {
      annual: 332.17,
      monthly: 34.99
    },
    buttonText: "Get Started",
    currency: "$",
    discount: 20,
    numberOfCredits: 9600
  },
]

export const MANDATORY_CT_PROMO_TEXT = "Powered by Creator Toolkit";