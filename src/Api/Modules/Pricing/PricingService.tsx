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
    } else if (planType == "daily") {
      return originalPrice.daily;
    } else {
      return originalPrice.weekly;
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

  const verifyPayment = async (paymentResponse: PaymentVerificationRequest) => {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        paymentResponse;
      const response = await post("/payment/verify-payment", {
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        signature: razorpay_signature,
      });

      showToast("success", "Verification Successful", response.message);
      window.location.reload();
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
        console.log("Payment Successful!", response);
        await verifyPayment(response);
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
    const currencyCode = await getUserCurrencyByLoc(); // "INR" or "USD"
    const currency = currencyCode === "INR" ? "₹" : "$";

    const exchangeRateUSDToINR = currencyCode === "INR" ? 85 : 1;

    setPricingPlans(
      defaultPlans.map(plan => ({
        ...plan,
        currency,
        price: {
          annual:
            currencyCode === "INR"
              ? Number((plan.price.annual * exchangeRateUSDToINR).toFixed(2))
              : plan.price.annual,
          monthly:
            currencyCode === "INR"
              ? Number((plan.price.monthly * exchangeRateUSDToINR).toFixed(2))
              : plan.price.monthly,
          daily:
            currencyCode === "INR"
              ? Number((plan.price.daily * exchangeRateUSDToINR).toFixed(2))
              : plan.price.daily,
          weekly:
            currencyCode === "INR"
              ? Number((plan.price.weekly * exchangeRateUSDToINR).toFixed(2))
              : plan.price.weekly,
        },
        originalPrice: {
          annual:
            currencyCode === "INR"
              ? Number(
                  (plan.originalPrice.annual * exchangeRateUSDToINR).toFixed(2),
                )
              : plan.originalPrice.annual,
          monthly:
            currencyCode === "INR"
              ? Number(
                  (plan.originalPrice.monthly * exchangeRateUSDToINR).toFixed(
                    2,
                  ),
                )
              : plan.originalPrice.monthly,
          daily:
            currencyCode === "INR"
              ? Number(
                  (plan.originalPrice.daily * exchangeRateUSDToINR).toFixed(2),
                )
              : plan.originalPrice.daily,
          weekly:
            currencyCode === "INR"
              ? Number(
                  (plan.originalPrice.weekly * exchangeRateUSDToINR).toFixed(2),
                )
              : plan.originalPrice.weekly,
        },
      })),
    );
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
