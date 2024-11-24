import React, { useState } from "react";
import { Text, Box, Paper, Button, Group, Divider } from "@mantine/core";
import LifetimeAccess from "@src/pages/Pricing/LifetimeAccess";
import HowItWorks from "@src/pages/Pricing/HowItWorks";
import GrowWithUs from "@src/pages/Pricing/GrowWithUs";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="flex flex-col items-center justify-start px-4 pb-12 pt-10 transition-all">
      {/* Heading */}
      <Box id="initial-section" className="mb-10 max-w-3xl text-center">
        <Text
          size="lg"
          component="h1"
          className="mb-4 font-bold text-black md:text-2xl lg:text-3xl"
        >
          Grow your channel with a single tool.
        </Text>
        <Text size="sm" className="text-gray-600 md:text-sm lg:text-base">
          All the tools to help grow your channel from 0 to 1M+ subscribers.
        </Text>
      </Box>

      {/* Toggle with Smooth Background Slide */}
      <div className="relative mb-10 flex w-full max-w-md justify-center rounded-full border-[1px] border-solid border-[var(--brand-dark-orange)] bg-white px-1 py-1">
        {/* Active Background */}
        <div
          className={`absolute left-0 top-0 h-full w-1/2 rounded-full bg-[#ffd580] transition-transform duration-300 ${
            isAnnual ? "translate-x-0" : "translate-x-full"
          }`}
        ></div>

        {/* Buttons */}
        <button
          onClick={() => setIsAnnual(true)}
          className={`relative z-10 w-1/2 py-1.5 text-center font-semibold transition-all text-sm md:text-base lg:text-base ${
            isAnnual ? "text-black" : "text-gray-600"
          }`}
        >
          Annual (2 months free)
        </button>
        <button
          onClick={() => setIsAnnual(false)}
          className={`relative z-10 w-1/2 py-1.5 text-center font-semibold transition-all text-sm md:text-base lg:text-base ${
            !isAnnual ? "text-black" : "text-gray-600"
          }`}
        >
          Monthly
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Basic Plan */}
        <Paper
          radius="lg"
          className="w-full max-w-sm bg-white p-4 md:p-6"
          style={{
            border: "1px solid var(--brand-dark-orange)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Text
            size="xs"
            className="mb-4 inline-block rounded-full bg-[#fff2cc] px-4 py-1 font-semibold text-black"
          >
            BASIC
          </Text>
          <Text
            size="lg"
            component="h2"
            className="mb-4 flex items-baseline font-bold text-black"
          >
            <span className="mr-2 text-sm line-through">
              {isAnnual ? "$17.99" : "$21.99"}
            </span>
            {isAnnual ? "$12.49" : "$14.99"}
            <span className="ml-1 text-xs font-normal">/ month</span>
          </Text>
          <Text size="xs" className="mb-3 font-bold text-gray-700">
            30% OFF - Limited time offer on our plans
          </Text>
          <Text size="xs" className="mb-5 text-gray-600">
            Great for users starting out with their YouTube Journey.{" "}
            <span className="font-bold">
              Billed yearly at {isAnnual ? "$149.90" : "$179.88"}.
            </span>
          </Text>
          <Button
            size="sm"
            radius="lg"
            className="mb-6 w-full bg-[#ffd580] text-sm text-black hover:bg-[#ffc966]"
          >
            Get Started
          </Button>
          <Group direction="column" spacing="xs">
            <Text size="xs" className="text-gray-800">
              ✓ Unlimited Thumbnail Ideas
            </Text>
            <Text size="xs" className="text-gray-800">
              ✓ Up to 3 Thumbnail A/B Tests at once
            </Text>
            <Text size="xs" className="text-gray-800">
              ✓ 150 Thumbnail AI Rates/mo
            </Text>
            <Text size="xs" className="text-gray-800">
              ✓ 200 Thumbnail AI Creations/mo
            </Text>
            <Text size="xs" className="text-gray-800">
              ✓ 1 Channel
            </Text>
            <Text size="xs" className="text-gray-800">
              ✓ Members Only Discord Group
            </Text>
          </Group>
        </Paper>

        {/* Pro Plan */}
        <Paper
          radius="lg"
          className="w-full max-w-sm bg-[#ffd580] p-4 md:p-6"
          style={{
            border: "1px solid #ffd580",
          }}
        >
          <Text
            size="xs"
            className="mb-4 inline-block rounded-full bg-[#d98d00] px-4 py-1 font-semibold text-white"
          >
            PRO
          </Text>
          <Text
            size="lg"
            component="h2"
            className="mb-4 flex items-baseline font-bold text-black"
          >
            <span className="mr-2 text-sm text-gray-600 line-through">
              {isAnnual ? "$32.99" : "$38.99"}
            </span>
            {isAnnual ? "$22.99" : "$26.99"}
            <span className="ml-1 text-xs font-normal">/ month</span>
          </Text>
          <Text size="xs" className="mb-3 font-bold text-gray-900">
            30% OFF - Limited time offer on our plans
          </Text>
          <Text size="xs" className="mb-5 text-gray-800">
            The go-to plan for YouTubers looking to grow without limits.{" "}
            <span className="font-bold">
              Billed yearly at {isAnnual ? "$269.99" : "$323.88"}.
            </span>
          </Text>
          <Button
            size="sm"
            radius="lg"
            className="mb-6 w-full bg-black text-sm text-white hover:bg-gray-800"
          >
            Get Started
          </Button>
          <Group direction="column" spacing="xs">
            <Text size="xs" className="text-gray-900">
              ✓ Unlimited Thumbnail Ideas
            </Text>
            <Text size="xs" className="text-gray-900">
              ✓ Unlimited Title & Thumbnail A/B Tests
            </Text>
            <Text size="xs" className="text-gray-900">
              ✓ Unlimited Thumbnail AI Rater
            </Text>
            <Text size="xs" className="text-gray-900">
              ✓ Unlimited Thumbnail AI Creator
            </Text>
            <Text size="xs" className="text-gray-900">
              ✓ Unlimited Image AI Tools
            </Text>
            <Text size="xs" className="text-gray-900">
              ✓ Multiple Channels
            </Text>
            <Text size="xs" className="text-gray-900">
              ✓ Members Only Discord Group
            </Text>
          </Group>
        </Paper>
      </div>

      <Text size="xs" className="mt-6 text-gray-500">
        *Limits reset each day
      </Text>
      <Divider className="mt-4 w-full text-black" />
      <LifetimeAccess />
      <HowItWorks />
      <Divider className="mt-4 w-full text-black" />
      <GrowWithUs />
    </div>
  );
};

export default Pricing;
