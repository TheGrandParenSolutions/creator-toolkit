import { post } from "@src/Api/Core/HttpClient";
import { getUserCurrencyByLoc } from "@src/Api/Modules/GeoLocation/GeoLocationService";
import { defaultPlans } from "@src/constants/constants";
import { PricingPlanProps } from "@src/pages/Pricing/PricingPlan";
import { IUser } from "@src/types/AuthenticationTypes";
import {
  CreateOrderRequest,
  CreateOrderResponse,
  PaymentVerificationRequest,
} from "@src/types/PricingTypes";
import { showToast } from "@src/utils/Theme";
import { useEffect, useState } from "react";

export const PricingService = () => {
  const [pricingPlans, setPricingPlans] =
    useState<PricingPlanProps[]>(defaultPlans);
  const fetchAmountFromActivePlan = (plan: PricingPlanProps | undefined) => {
    const originalPrice = plan?.price;

    if (!plan || !originalPrice) {
      console.error("Invalid active plan type or missing price");
      return null;
    }

    const planType = plan.activePlan?.toLocaleLowerCase();

    if (planType == "monthly") {
      return originalPrice?.monthly;
    } else if (planType == "annual") {
      return originalPrice.annual;
    }
  };

  const fetchOrderDetails = async (
    request: CreateOrderRequest,
  ): Promise<CreateOrderResponse> => {
    try {
      const response = await post("/payment/create-order", request);
      return response;
    } catch (error) {
      throw new Error("An error occurred while creating order id." + error);
    }
  };

  const generatePrice = ({
    amount,
    currency,
  }: {
    amount: string;
    currency: string;
  }) => {
    return `${amount}${currency}`;
  };

  const verifyPayment = async (
    paymentResponse: PaymentVerificationRequest,
    order: CreateOrderResponse,
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
      const paymentTime = new Date(
        new Date().toLocaleString("en-US", {
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }),
      ).toLocaleString();
      const currencyCode = order.currency === "INR" ? "₹" : "$";
      window.location.href = `/payment-success?orderId=${razorpay_order_id}&amount=${order.amount}&currency=${currencyCode}&paymentTime=${paymentTime}`;
    } catch (error) {
      showToast(
        "error",
        "Verification failed",
        "Sorry!! your payment could not be verified!!",
      );
      console.error(error);
    }
  };

  const getOptions = (
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
        await verifyPayment(response, orderDetails);
      },
      prefill: {
        name: user.userName,
        email: user.email,
      },
      theme: {
        color: "#3399cc",
      },
    };

    return options;
  };

  const generatePlans = async () => {
    const currencyCode = await getUserCurrencyByLoc();
    const currency = currencyCode === "INR" ? "₹" : "$";
    const exchangeRate = currencyCode === "INR" ? 85 : 1;

    const convertPrice = (price: number) => Math.round(price * exchangeRate);

    const convertedPlans = defaultPlans.map(plan => ({
      ...plan,
      currency,
      price: {
        annual: convertPrice(plan.price.annual),
        monthly: convertPrice(plan.price.monthly)
      },
      originalPrice: {
        annual: convertPrice(plan.originalPrice.annual),
        monthly: convertPrice(plan.originalPrice.monthly)
      },
    }));

    setPricingPlans(convertedPlans);
  };

  useEffect(() => {
    generatePlans();
  }, []);

  return {
    pricingPlans,
    getOptions,
    verifyPayment,
    generatePrice,
    fetchAmountFromActivePlan,
    fetchOrderDetails,
  };
};
