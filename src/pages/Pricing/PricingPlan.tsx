import { Button } from "@mantine/core";
import { CheckIcon } from "@src/shared/Icons/IconLib";
import React from "react";

export interface PricingPlanProps {
  planType: "basic" | "pro";
  title: string;
  description: string;
  features: (string | number | boolean | React.ReactNode)[];
  activePlan: "Annual" | "Monthly" | "Daily" | string;
  price: { annual: number; monthly: number; daily: number };
  originalPrice: { annual: number; monthly: number; daily: number };
  buttonText: string;
  currency: string;
  clickHandler: (activePlan: string) => void;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  planType,
  title,
  description,
  features,
  activePlan,
  price,
  originalPrice,
  buttonText,
  clickHandler,
  currency
}) => {
  const isPro = planType === "pro";

  return (
    <div
      className={`relative flex max-w-[500px] flex-col items-start rounded-[2.5rem] gap-4 border p-6 shadow-md ${
        isPro
          ? "border-[--brand-dark-orange] bg-[--brand-bg-light] dark:bg-zinc-800"
          : "border-zinc-200 dark:border-2 dark:border-black dark:bg-zinc-800"
      }`}
    >
      {isPro && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-[--darkest-orange] px-4 py-2 text-base text-white">
          MOST POPULAR
        </div>
      )}

      {/* Image/Icon */}
      <div className="flex justify-start">
        <img
          src="https://cdn.prod.website-files.com/63431a04e3265ccced472f2f/66bfb01f5273754f46951839_Base-Camp_Textured.png"
          alt="Plan Icon"
          className="h-32 w-32 rounded-full"
        />
      </div>

      {/* Plan Name */}
      <h1 className="text-left text-3xl font-bold text-zinc-900 dark:text-zinc-200">
        {title}
      </h1>

      {/* Plan Description */}
      <p className="text-lg text-zinc-900 dark:text-gray-300">{description}</p>

      {/* Pricing */}
      <h2 className="mb-3 flex flex-row items-end gap-3 text-left font-bold text-black dark:text-white">
        <span className="text-xl text-zinc-800 line-through dark:text-zinc-300">
          {activePlan === "Annual"
            ? `${currency} ${originalPrice.annual}`
            : activePlan === "Monthly"
            ? `${currency} ${originalPrice.monthly}`
            : `${currency} ${originalPrice.daily}`}
        </span>
        <span className="text-2xl md:text-4xl">
          {activePlan === "Annual"
            ? `${currency} ${price.annual}`
            : activePlan === "Monthly"
            ? `${currency} ${price.monthly}`
            : `${currency} ${price.daily}`}
        </span>
      </h2>

      {/* Features List */}
      <div className="mb-6 w-full">
        <ul className="space-y-3 text-left">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-sm font-medium text-zinc-800 dark:text-zinc-200"
            >
              <span className="text-[--brand-dark-orange]">
                <CheckIcon />
              </span>
              <span className="text-xl">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Get Started Button */}
      <div className="w-full">
        <Button
       size="lg"
              radius="xl"
          className={`w-full   text-lg font-semibold ${
            isPro
              ? "bg-zinc-800 text-white hover:bg-zinc-900 dark:bg-main-gradient dark:text-zinc-900"
              : "bg-[--main-yellow] text-zinc-900 hover:bg-[--main-yellow] dark:bg-zinc-900 dark:text-zinc-200"
          }`}

          onClick={() => clickHandler(activePlan)}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PricingPlan;
