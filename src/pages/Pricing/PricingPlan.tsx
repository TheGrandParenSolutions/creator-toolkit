import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import CTBasicButton from "@src/shared/Buttons/CTBasicButton/CTBasicButton";
import { CheckIcon } from "@src/shared/Icons/IconLib";
import React from "react";

export interface PricingPlanProps {
  planType: "basic" | "pro";
  title: string;
  description: string;
  features: (string | number | boolean | React.ReactNode)[];
  activePlan: "Annual" | "Monthly" | string;
  price: { annual: number; monthly: number };
  originalPrice: {
    annual: number;
    monthly: number;
  };
  discount: number;
  numberOfCredits: number;
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
  discount,
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
      {discount > 0 && (
        <div className="absolute right-0 top-0">
          <div className="relative">
            <div className="absolute right-0 top-0 z-10 text-nowrap rounded-bl-[2.5rem] rounded-tr-[2.35rem] bg-main-gradient px-5 py-3 text-base font-bold text-zinc-900 shadow-xl">
              {discount}% OFF
            </div>
          </div>
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
      <div className="flex items-center gap-2 text-2xl font-semibold">
        <h1 className="poppins-bold text-left text-3xl font-bold tracking-wider text-zinc-900 dark:text-zinc-200">
          {title}
        </h1>
        {planType === "pro" && (
          <span className="ml-1 rounded border border-green-600 px-1 py-0 text-xs font-semibold text-green-600">
            POPULAR
          </span>
        )}
      </div>

      {/* Plan Description */}
      <p className="text-lg text-zinc-900 dark:text-gray-300">{description}</p>

      {/* Pricing */}
      <h2 className="mb-3 flex flex-row items-end gap-3 text-left font-bold text-black dark:text-white">
        <span className="poppins-bold text-xl tracking-wider text-zinc-800 line-through dark:text-zinc-300">
          {activePlan === "Annual"
            ? `${currency}${originalPrice.annual}`
            : `${currency}${originalPrice.monthly}`}
        </span>
        <span className="poppins-bold text-2xl tracking-wider md:text-5xl">
          {activePlan === "Annual"
            ? `${currency}${price.annual}`
            : `${currency}${price.monthly}`}
        </span>
      </h2>

      <div className="flex w-full">
        {planType === "pro" ? (
          <CTAnimatedButton
            w={"100%"}
            radius={"xl"}
            label={buttonText}
            hoverLabel="You will love it"
            buttonStyles="w-60"
            onClick={() => clickHandler?.(activePlan)}
          />
        ) : (
          <CTBasicButton
            label={buttonText}
            className="mx-0 !w-full"
            onClick={() => clickHandler?.(activePlan)}
          />
        )}
      </div>

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
    </div>
  );
};

export default PricingPlan;
