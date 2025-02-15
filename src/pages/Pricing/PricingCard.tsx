import { useDisclosure } from "@mantine/hooks";
import { PricingService } from "@src/Api/Modules/Pricing/PricingService";
import { LoginSignUpModal } from "@src/components/Modals/LoginSignUpModal";
import { AuthContext } from "@src/Context/Auth/AuthContext";
import PricingPlan, { PricingPlanProps } from "@src/pages/Pricing/PricingPlan";
import { FC, useContext } from "react";

export const CTPricingCard: FC<PricingPlanProps> = props => {
  // const { activePlan, price, originalPrice, description, features } = props;

  const {
    fetchAmountFromActivePlan,
    fetchOrderDetails,
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

      <PricingPlan
        {...props}
        clickHandler={activePlan => paymentHandler(activePlan)}
      />
    </>
  );
};
