import { Button } from "@mantine/core";
import { CheckIcon } from "@src/shared/Icons/IconLib";
import React from "react";

export interface PricingPlanProps {
  planType: "basic" | "pro";
  title: string;
  description: string;
  features: (string | number | boolean | React.ReactNode)[];
  activePlan: "Annual" | "Monthly" | "Daily" | "Weekly" | string;
  price: { annual: number; monthly: number; daily: number; weekly: number };
  originalPrice: {
    annual: number;
    monthly: number;
    daily: number;
    weekly: number;
  };
  buttonText: string;
  currency: string;
  clickHandler?: (activePlan: string) => void;
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
  currency,
}) => {
  const isPro = planType === "pro";

  return (
    <div
      className={`relative flex max-w-[500px] flex-col items-start justify-around gap-4 rounded-[2.5rem] border p-6 shadow-md ${
        isPro
          ? "border-[--brand-dark-orange] bg-[--brand-bg-light] dark:bg-zinc-800"
          : "border-zinc-200 dark:border-2 dark:border-black dark:bg-zinc-800"
      }`}
    >
      {isPro && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[--darkest-orange] px-4 py-2 text-xs text-white md:text-base">
          MOST POPULAR
        </div>
      )}

      {/* Image/Icon */}
      <div className="flex justify-start">
        <img
          src={
            planType === "basic"
              ? "https://zpswddtctfbohaspxfsw.supabase.co/storage/v1/object/public/assets//tool-basic-pricing-plan.jpg"
              : "https://zpswddtctfbohaspxfsw.supabase.co/storage/v1/object/public/assets//tool-garage-pro-plan.jpg"
          }
          alt={`${planType}__${activePlan}`}
          className="h-32 w-32 rounded-full object-cover antialiased "
        />
      </div>

      {/* Plan Name */}
      <h1 className="font-grifter text-left text-3xl font-bold tracking-wider text-zinc-900 dark:text-zinc-200">
        {title}
      </h1>

      {/* Plan Description */}
      <p className="text-lg text-zinc-900 dark:text-gray-300">{description}</p>

      {/* Pricing */}
      <h2 className="mb-3 flex flex-row items-end gap-3 text-left font-bold text-black dark:text-white">
        <span className="font-grifter text-xl tracking-wider text-zinc-800 line-through dark:text-zinc-300">
          {activePlan === "Annual"
            ? `${currency}${originalPrice.annual}`
            : activePlan === "Monthly"
            ? `${currency}${originalPrice.monthly}`
            : activePlan === "Weekly"
            ? `${currency}${originalPrice.weekly}`
            : `${currency}${originalPrice.daily}`}
        </span>
        <span className="font-grifter text-2xl tracking-wider md:text-5xl">
          {activePlan === "Annual"
            ? `${currency}${price.annual}`
            : activePlan === "Monthly"
            ? `${currency}${price.monthly}`
            : activePlan === "Weekly"
            ? `${currency}${price.weekly}`
            : `${currency}${price.daily}`}
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
          onClick={() => clickHandler?.(activePlan)}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PricingPlan;
