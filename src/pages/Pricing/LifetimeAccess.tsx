import React from "react";
import { Text,  Paper, Button, Group } from "@mantine/core";

const LifetimeAccess = () => {
  return (
    <div className="flex flex-col items-center justify-start px-4 pb-12 pt-10">
      {/* Lifetime Access Card */}
      <Paper
        radius="lg"
        className="w-full max-w-3xl bg-white p-6 md:p-8"
        style={{
          border: "1px solid var(--brand-dark-orange)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Text
          size="sm"
          className="mb-4 inline-block rounded-full bg-[#fff2cc] px-6 py-1 font-semibold text-black lg:text-sm"
        >
          LIFETIME ACCESS
        </Text>
        <Text
          size="2xl"
          component="h2"
          className="mb-4 font-bold text-black lg:text-3xl"
        >
          $349.99
        </Text>
        <Text
          size="sm"
          className="mb-6 text-gray-600 lg:text-base"
        >
          Get Lifetime access to all our current and future features – this
          includes unlimited use of all our AI products. Support us early and
          grab a bargain.
        </Text>
        <Button
          size="md"
          radius="lg"
          className="mb-8 w-full bg-[#ffd580] text-base text-black hover:bg-[#ffc966]"
        >
          Get Lifetime Access
        </Button>
        <Group className="mb-4 flex-col items-start">
          <Text size="sm" className="text-gray-800">
            ✓ Unlimited Thumbnail Previews
          </Text>
          <Text size="sm" className="text-gray-800">
            ✓ Unlimited Thumbnail Ideas
          </Text>
          <Text size="sm" className="text-gray-800">
            ✓ Unlimited Title & Thumbnail A/B Tests
          </Text>
          <Text size="sm" className="text-gray-800">
            ✓ Unlimited Thumbnail AI Rater
          </Text>
          <Text size="sm" className="text-gray-800">
            ✓ Unlimited Thumbnail AI Creator
          </Text>
          <Text size="sm" className="text-gray-800">
            ✓ Multiple Channels
          </Text>
          <Text size="sm" className="text-gray-800">
            ✓ Lifetime Member dedicated Discord Channel – have a say in where
            we take the product
          </Text>
        </Group>
        <Text
          size="xs"
          className="mt-4 text-gray-500 text-center lg:text-sm"
        >
          *There are no refunds on our lifetime deal
        </Text>
      </Paper>
    </div>
  );
};

export default LifetimeAccess;
