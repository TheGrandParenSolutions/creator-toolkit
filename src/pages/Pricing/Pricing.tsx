import { useState } from "react";
import { Text, Box, Paper, Button, Group } from "@mantine/core";
import { Helmet } from "react-helmet-async";
import LifetimeAccess from "@src/pages/Pricing/LifetimeAccess";
import HowItWorks from "@src/pages/Pricing/HowItWorks";
import GrowWithUs from "@src/pages/Pricing/GrowWithUs";
import CTDivider from "@src/shared/Divider/CTDivider";
import CTToggleTabs from "@src/shared/SegmentedToggle/CTToggleTabs";
const tabs = [
  {
    label: "Annual",
    component: (
      <>
        Annual <br />
        (2 months free)
      </>
    ),
  },
  {
    label: "Monthly",
    component: (
      <>
        Monthly <br /> (Best deals){" "}
      </>
    ),
  },
];
const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

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
            className="mb-4 text-lg font-bold text-black dark:text-white md:text-xl lg:text-2xl"
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
        <div className="relative mb-10 w-full max-w-md">
          <CTToggleTabs
            tabs={tabs}
            activeTab={isAnnual ? "Annual" : "Monthly"}
            onToggle={selectedTab => setIsAnnual(selectedTab === "Annual")}
          />
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {/* Basic Plan */}
          <Paper
            radius="lg"
            className="w-full border border-[--main-yellow] bg-transparent bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-2 dark:border-black dark:bg-zinc-800 md:max-w-md md:p-6 lg:max-w-lg"
            style={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.08)",
            }}
          >
            <Text
              size="xs"
              className="dark:bg-dark-highlight mb-4 inline-block rounded-full bg-[#fff2cc] px-3 py-1 text-xs font-semibold text-black md:px-4 md:py-1 md:text-sm"
            >
              BASIC
            </Text>
            <Text
              size="lg"
              component="h2"
              className="mb-4 flex items-baseline font-bold text-black dark:text-white"
            >
              <span className="mr-2 text-xs text-zinc-600 line-through dark:text-zinc-300 md:text-sm">
                {isAnnual ? "$17.99" : "$21.99"}
              </span>
              <span className="text-4xl md:text-5xl">
                {isAnnual ? "$12.49" : "$14.99"}
              </span>
              <span className="ml-1 text-xs font-normal md:text-sm">
                / month
              </span>
            </Text>
            <Text
              size="xs"
              className="mb-3 text-xs font-bold text-zinc-700 dark:text-zinc-300 md:text-sm"
            >
              30% OFF - Limited time offer on our plans
            </Text>
            <Text
              size="xs"
              className="mb-5 text-xs text-zinc-600 dark:text-zinc-300 md:text-sm"
            >
              Great for users starting out with their YouTube Journey.{" "}
              <span className="font-bold">
                Billed yearly at {isAnnual ? "$149.90" : "$179.88"}.
              </span>
            </Text>
            <Button
              size="sm"
              radius="lg"
              className="dark:bg-dark-accent dark:hover:bg-dark-hover mb-6 w-full bg-[var(--brand-mid-yellow)] text-xs font-medium text-black hover:bg-[#ffc966] md:text-sm lg:text-base"
            >
              Get Started
            </Button>
            <Group>
              <Text
                size="xs"
                className="text-xs text-zinc-800 dark:text-zinc-300 md:text-sm"
              >
                ✓ Unlimited Thumbnail Ideas
              </Text>
              <Text
                size="xs"
                className="text-xs text-zinc-800 dark:text-zinc-300 md:text-sm"
              >
                ✓ Up to 3 Thumbnail A/B Tests at once
              </Text>
              <Text
                size="xs"
                className="text-xs text-zinc-800 dark:text-zinc-300 md:text-sm"
              >
                ✓ 150 Thumbnail AI Rates/mo
              </Text>
              <Text
                size="xs"
                className="text-xs text-zinc-800 dark:text-zinc-300 md:text-sm"
              >
                ✓ 200 Thumbnail AI Creations/mo
              </Text>
              <Text
                size="xs"
                className="text-xs text-zinc-800 dark:text-zinc-300 md:text-sm"
              >
                ✓ 1 Channel
              </Text>
              <Text
                size="xs"
                className="text-xs text-zinc-800 dark:text-zinc-300 md:text-sm"
              >
                ✓ Members Only Discord Group
              </Text>
            </Group>
          </Paper>

          {/* Pro Plan */}
          <Paper
            radius="lg"
            className="w-full border-[--main-yellow] bg-[var(--brand-mid-yellow)] p-4 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-2 dark:border-black md:max-w-md md:p-6 lg:max-w-lg"
            style={{
              border: "1px solid #ffd580",
            }}
          >
            <Text
              size="xs"
              className="mb-4 inline-block rounded-full bg-[#d98d00] px-3 py-1 text-xs font-semibold text-white md:px-4 md:py-1 md:text-sm"
            >
              PRO
            </Text>
            <Text
              size="lg"
              component="h2"
              className="mb-4 flex items-baseline font-bold text-black"
            >
              <span className="mr-2 text-xs text-zinc-600 line-through md:text-sm">
                {isAnnual ? "$32.99" : "$38.99"}
              </span>
              <span className="text-4xl md:text-5xl">
                {isAnnual ? "$22.99" : "$26.99"}
              </span>
              <span className="ml-1 text-xs font-normal md:text-sm">
                / month
              </span>
            </Text>
            <Text
              size="xs"
              className="mb-3 text-xs font-bold text-zinc-900 md:text-sm"
            >
              30% OFF - Limited time offer on our plans
            </Text>
            <Text size="xs" className="mb-5 text-xs text-zinc-800 md:text-sm">
              The go-to plan for YouTubers looking to grow without limits.{" "}
              <span className="font-bold">
                Billed yearly at {isAnnual ? "$269.99" : "$323.88"}.
              </span>
            </Text>
            <Button
              size="sm"
              radius="lg"
              className="dark:bg-dark-button dark:hover:bg-dark-hover mb-6 w-full bg-black text-xs font-medium text-white hover:bg-zinc-800 md:text-sm lg:text-base"
            >
              Get Started
            </Button>
            <Group>
              <Text size="xs" className="text-xs text-zinc-900 md:text-sm">
                ✓ Unlimited Thumbnail Ideas
              </Text>
              <Text size="xs" className="text-xs text-zinc-900 md:text-sm">
                ✓ Unlimited Title & Thumbnail A/B Tests
              </Text>
              <Text size="xs" className="text-xs text-zinc-900 md:text-sm">
                ✓ Unlimited Thumbnail AI Rater
              </Text>
              <Text size="xs" className="text-xs text-zinc-900 md:text-sm">
                ✓ Unlimited Thumbnail AI Creator
              </Text>
              <Text size="xs" className="text-xs text-zinc-900 md:text-sm">
                ✓ Unlimited Image AI Tools
              </Text>
              <Text size="xs" className="text-xs text-zinc-900 md:text-sm">
                ✓ Multiple Channels
              </Text>
              <Text size="xs" className="text-xs text-zinc-900 md:text-sm">
                ✓ Members Only Discord Group
              </Text>
            </Group>
          </Paper>
        </div>

        <Text size="xs" className="mt-6 text-zinc-500 dark:text-zinc-400">
          *Limits reset each day
        </Text>
        <CTDivider />
        <LifetimeAccess />
        <CTDivider />
        <HowItWorks />
        <CTDivider />
        <GrowWithUs />
      </div>
    </>
  );
};

export default Pricing;
