import { useState } from "react";
import { Text, Box } from "@mantine/core";
import { Helmet } from "react-helmet-async";
import HowItWorks from "@src/pages/Pricing/HowItWorks";
import CTDivider from "@src/shared/Divider/CTDivider";
import CTToggleTabs from "@src/shared/SegmentedToggle/CTToggleTabs";
import { CTPricingCard } from "@src/pages/Pricing/PricingCard";
import useRazorpayScript from "@src/Hooks/useRazorpayScript";
import { pricingPlans } from "@src/constants/constants";
import Sell from "@src/pages/Home/Sell";
const tabs = [
  {
    label: "Annual",
    component: (
      <>
        Annual Pass <br />
        (2 months free)
      </>
    ),
  },
  {
    label: "Monthly",
    component: (
      <>
        Monthly Pass <br /> (Best deals){" "}
      </>
    ),
  },
  {
    label: "Day",
    component: (
      <>
        Day Pass <br /> (Best deals){" "}
      </>
    ),
  },
  {
    label: "Week",
    component: (
      <>
        Week Pass <br /> (Best deals){" "}
      </>
    ),
  },
];

const Pricing = () => {
  useRazorpayScript();
  const [selectedTab, setSelectedTab] = useState("Monthly");

  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>Pricing | Creator Toolkit</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Explore affordable pricing plans for content creators. Get tools for YouTube thumbnail creation, AI-powered ideas, and video downloads. Choose between basic and pro plans."
        />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.creator-toolkit.com/pricing" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Affordable Pricing Plans for Creators"
        />
        <meta
          property="og:description"
          content="Discover Creator Toolkit's affordable pricing plans for creators. Access tools for YouTube thumbnails, AI-powered ideas, and video downloads. Choose the plan that fits your needs!"
        />
        <meta
          property="og:image"
          content="https://www.creator-toolkit.com/assets/pricing-page-thumbnail.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.creator-toolkit.com/pricing"
        />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Pricing | Creator Toolkit",
      "description": "Explore affordable pricing plans for content creators. Get tools for YouTube thumbnail creation, AI-powered ideas, and video downloads. Choose between basic and pro plans.",
      "url": "https://www.creator-toolkit.com/pricing",
      "image": "https://www.creator-toolkit.com/assets/pricing-page-thumbnail.jpg",
      "publisher": {
        "@type": "Organization",
        "name": "Creator Toolkit",
        "logo": "https://www.creator-toolkit.com/assets/logo.png"
      }
    }
    `}
        </script>
      </Helmet>

      <div className="flex flex-col items-center justify-start bg-light-app px-4 pb-12 pt-2 text-zinc-800 transition-all duration-300 dark:bg-dark-app-content dark:text-zinc-100">
        {/* Heading */}
        <Box id="initial-section" className="mb-10 max-w-3xl text-center">
          <Text
            size="lg"
            component="h1"
            className="mb-4 text-lg font-grifter text-black dark:text-white md:text-xl lg:text-4xl"
          >
            Grow your channel with a single tool.
          </Text>
          <Text
            size="sm"
            component="h3"
            className="text-sm text-zinc-600 dark:text-zinc-400 md:text-base lg:text-lg"
          >
            All the tools to help grow your channel from 0 to 1M+ subscribers.
          </Text>
        </Box>

        {/* Toggle with Smooth Background Slide */}
        <div className="relative mb-10 w-full max-w-xl">
          <CTToggleTabs
            tabs={tabs}
            activeTab={selectedTab}
            onToggle={e => setSelectedTab(e)}
          />
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col gap-8 md:flex-row ">
          {pricingPlans
            .filter(
              p => p.activePlan.toLowerCase() === selectedTab.toLowerCase(),
            )
            .map(plan => (
              <CTPricingCard paymentPlan={plan} />
            ))}
        </div>

        <Text size="xs" className="mt-6 text-zinc-500 dark:text-zinc-400">
          *Limits reset each day
        </Text>
        <CTDivider />
        <HowItWorks />
        <CTDivider />
        <Sell />
      </div>
    </>
  );
};

export default Pricing;
