import { useDisclosure } from "@mantine/hooks";
import { PricingService } from "@src/Api/Modules/Pricing/PricingService";
import { LoginSignUpModal } from "@src/components/Modals/LoginSignUpModal";
import { AuthContext } from "@src/Context/Auth/AuthContext";
import PricingPlan, { PricingPlanProps } from "@src/pages/Pricing/PricingPlan";
import { FC, useContext, useEffect, useState } from "react";

export const CTPricingCard: FC<{ paymentPlan: PricingPlanProps }> = props => {
  const { paymentPlan } = props;
  const { fetchAmountFromActivePlan, fetchOrderDetails, getOptions } =
    PricingService();
  const [shouldTriggerPayment, setShouldTriggerPayment] =
    useState<boolean>(false);

  const authContext = useContext(AuthContext);
  const { user, isAuthenticated } = authContext;

  const [opened, { close, open }] = useDisclosure(false);

  const paymentHandler = async (paymentPlan: PricingPlanProps) => {
    if (isAuthenticated && user) {
      const planAmount = fetchAmountFromActivePlan(paymentPlan);
      const amount = Number(planAmount);
      const orderDetails = await fetchOrderDetails({ amount });

      if (!orderDetails) return;
      const options = getOptions(orderDetails, paymentPlan.activePlan, user);

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } else {
      open();
    }
  };

  const closeModal = async () => {
    close();
    setShouldTriggerPayment(true);
  };

  useEffect(() => {
    if (shouldTriggerPayment && isAuthenticated && user) {
      setShouldTriggerPayment(false);
      paymentHandler(paymentPlan);
    }
  }, [isAuthenticated, user, shouldTriggerPayment]);

  return (
    <>
      <LoginSignUpModal opened={opened} close={closeModal} />

      <PricingPlan
        {...paymentPlan}
        clickHandler={() => paymentHandler(paymentPlan)}
      />
    </>
  );
};
