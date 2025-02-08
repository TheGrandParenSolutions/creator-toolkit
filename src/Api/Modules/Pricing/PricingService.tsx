import { post } from "@src/Api/Core/HttpClient";
import { IUser } from "@src/types/AuthenticationTypes";
import {
  CreateOrderRequest,
  CreateOrderResponse,
  PaymentVerificationRequest,
} from "@src/types/PricingTypes";
import { showToast } from "@src/utils/Theme";

export const pricingPlans = [
  {
    title: "BASIC",
    bgColor: "bg-transparent bg-white dark:bg-gray-800",
    textColor: "text-black",
    price: {
      monthly: { amount: "14.99", currency: "USD" },
      annual: { amount: "12.49", currency: "USD" },
      daily: { amount: "3", currency: "USD" },
    },
    originalPrice: {
      monthly: { amount: "21.99", currency: "USD" },
      annual: { amount: "17.99", currency: "USD" },
      daily: { amount: "3", currency: "USD" },
    },
    description: "Great for users starting out with their YouTube Journey.",
    billed: {
      monthly: { amount: "179.88", currency: "USD" },
      annual: { amount: "149.90", currency: "USD" },
      daily: { amount: "3", currency: "USD" },
    },
    features: [
      "Unlimited Thumbnail Ideas",
      "Up to 3 Thumbnail A/B Tests at once",
      "150 Thumbnail AI Rates/mo",
      "200 Thumbnail AI Creations/mo",
      "1 Channel",
      "Members Only Discord Group",
    ],
    buttonColor: "bg-[var(--brand-mid-yellow)] text-black",
  },
];

export const fetchAmountFromActivePlan = (plan: string | undefined) => {
  const activePricingPlan = pricingPlans[0]; // Assuming only one plan exists, otherwise modify accordingly
  if (!activePricingPlan.price) {
    console.error("Invalid active plan type or missing price");
    return null;
  }
  plan = plan?.toLocaleLowerCase();
  if (plan == "monthly") {
    return activePricingPlan.billed.monthly.amount;
  } else if (plan == "annual") {
    return activePricingPlan.billed.annual.amount;
  } else {
    return activePricingPlan.billed.daily.amount;
  }
};

export const fetchOrderDetails = async (
  request: CreateOrderRequest,
): Promise<CreateOrderResponse> => {
  try {
    const response = await post("/payment/create-order", request);
    return response;
  } catch (error) {
    throw new Error("An error occurred while creating order id." + error);
  }
};

export const generatePrice = ({
  amount,
  currency,
}: {
  amount: string;
  currency: string;
}) => {
  return `${amount}${currency}`;
};

export const verifyPayment = async (
  paymentResponse: PaymentVerificationRequest,
) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      paymentResponse;
    const response = await post("/payment/verify-payment", {
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      signature: razorpay_signature,
    });
    showToast("success", "Verification Successful", response.message);
  } catch (error) {
    showToast(
      "error",
      "Verification failed",
      "Sorry!! your payment could not be verified!!",
    );
    console.error(error);
  }
};

export const getOptions = (
  orderDetails: CreateOrderResponse,
  plan: string | undefined,
  user: IUser,
) => {
  const options = {
    key: orderDetails.key, // Razorpay Key ID
    amount: orderDetails.amount, // Amount in paise
    currency: orderDetails.currency,
    name: "Creator Toolkit",
    description: "Plan purchased: " + { plan },
    order_id: orderDetails.orderId,
    handler: async function (response: any) {
      console.log("Payment Successful!", response);
      await verifyPayment(response);
    },
    prefill: {
      name: user.username,
      email: user.email,
    },
    theme: {
      color: "#3399cc",
    },
  };

  return options;
};
