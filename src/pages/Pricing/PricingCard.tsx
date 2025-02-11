import { Paper, Button, Text, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PricingService } from "@src/Api/Modules/Pricing/PricingService";
import { LoginSignUpModal } from "@src/components/Modals/LoginSignUpModal";
import { AuthContext } from "@src/Context/Auth/AuthContext";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
  FC,
  useContext,
} from "react";

interface PricingPlan {
  title: string; // Title of the pricing plan, e.g., "BASIC", "PRO"
  bgColor: string; // Background color class for the card
  textColor: string; // Text color class for the card
  activePlan?: string; // Optional: Indicates if the plan is annual
  price: {
    monthly: { amount: string; currency: string };
    annual: { amount: string; currency: string };
    daily: { amount: string; currency: string };
  };
  originalPrice: {
    monthly: { amount: string; currency: string }; // Original monthly price (before discount)
    annual: { amount: string; currency: string }; // Original yearly price (before discount)
    daily: { amount: string; currency: string }; // Original daily price (before discount)
  };
  description: string; // Description of the plan
  billed: {
    monthly: { amount: string; currency: string }; // Total billed amount for monthly subscription
    annual: { amount: string; currency: string }; // Total billed amount for yearly subscription.
    daily: { amount: string; currency: string };
  };
  features: string[]; // Array of features included in the plan
  buttonColor: string; // Button color class
}

export const CTPricingCard: FC<PricingPlan> = props => {
  const {
    title,
    bgColor,
    textColor,
    activePlan,
    price,
    originalPrice,
    description,
    billed,
    features,
    buttonColor,
  } = props;
  
  const {
    fetchAmountFromActivePlan,
    fetchOrderDetails,
    generatePrice,
    getOptions,
  } = PricingService();

  const { isAuthenticated, user } = useContext(AuthContext);
  const [opened, { close, open }] = useDisclosure(false);

  const paymentHandler = async (plan: string | undefined) => {
    if (isAuthenticated && user) {
      const planAmount = fetchAmountFromActivePlan(plan);
      const amount = Number(planAmount);
      const orderDetails = await fetchOrderDetails({ amount });

      if (!orderDetails) return;
      const options = getOptions(orderDetails, plan, user);

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } else {
      open();
    }
  };

  return (
    <>
      <LoginSignUpModal opened={opened} close={close} />

      <Paper
        radius="lg"
        className={`w-full p-4 shadow-sm transition-shadow duration-300 hover:shadow-md md:max-w-md md:p-6 lg:max-w-lg ${bgColor}`}
        style={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.08)",
          border: `1px solid var(--main-yellow)`,
        }}
      >
        <Text
          size="xs"
          className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${textColor} md:px-4 md:py-1 md:text-sm`}
        >
          {title}
        </Text>
        <Text
          size="lg"
          component="h2"
          className="mb-4 flex items-baseline font-bold text-black dark:text-white"
        >
          <span className="mr-2 text-xs text-gray-600 line-through dark:text-gray-300 md:text-sm">
            {activePlan == "Annual"
              ? generatePrice(originalPrice.annual)
              : activePlan == "Monthly"
              ? generatePrice(originalPrice.monthly)
              : generatePrice(originalPrice.daily)}
          </span>
          <span className="text-4xl md:text-5xl">
            {activePlan == "Annual"
              ? generatePrice(price.annual)
              : activePlan == "Monthly"
              ? generatePrice(price.monthly)
              : generatePrice(price.daily)}
          </span>
          <span className="ml-1 text-xs font-normal md:text-sm">/ month</span>
        </Text>
        <Text
          size="xs"
          className="mb-3 text-xs font-bold text-gray-700 dark:text-gray-300 md:text-sm"
        >
          30% OFF - Limited time offer on our plans
        </Text>
        <Text
          size="xs"
          className="mb-5 text-xs text-gray-600 dark:text-gray-300 md:text-sm"
        >
          {description}{" "}
          <span className="font-bold">
            Billed yearly at{" "}
            {activePlan == "Annual"
              ? generatePrice(billed.annual)
              : activePlan == "Monthly"
              ? generatePrice(billed.monthly)
              : generatePrice(billed.daily)}
            .
          </span>
        </Text>
        <Button
          size="sm"
          radius="lg"
          className={`mb-6 w-full text-xs font-medium hover:opacity-90 md:text-sm lg:text-base ${buttonColor}`}
          onClick={() => paymentHandler(activePlan)}
        >
          Get Started
        </Button>
        <Group>
          {features.map(
            (
              feature:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | null
                | undefined,
              index: Key | null | undefined,
            ) => (
              <Text
                key={index}
                size="xs"
                className="text-xs text-gray-800 dark:text-gray-300 md:text-sm"
              >
                ✓ {feature}
              </Text>
            ),
          )}
        </Group>
      </Paper>
    </>
  );
};
