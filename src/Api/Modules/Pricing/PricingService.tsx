import { post } from "@src/Api/Core/HttpClient";
import { pricingPlans } from "@src/constants/constants";
import { IUser } from "@src/types/AuthenticationTypes";
import {
  CreateOrderRequest,
  CreateOrderResponse,
  PaymentVerificationRequest,
} from "@src/types/PricingTypes";
import { showToast } from "@src/utils/Theme";

export const PricingService = () => {

  const fetchAmountFromActivePlan = (plan: string | undefined) => {
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
    } else if (plan == "daily"){
      return activePricingPlan.billed.daily.amount;
    } else {
      return activePricingPlan.billed.weekly.amount;
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

  return {
    pricingPlans,
    getOptions,
    verifyPayment,
    generatePrice,
    fetchAmountFromActivePlan,
    fetchOrderDetails,
  };
};
