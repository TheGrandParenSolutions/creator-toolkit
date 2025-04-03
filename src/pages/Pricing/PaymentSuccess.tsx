import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Confetti from "react-confetti";
import { CTCheckIcon } from "@src/utils/HtmlUtil";
import { AuthContext } from "@src/Context/Auth/AuthContext";

const PaymentSuccess = () => {
  const { user, checkAuth } = useContext(AuthContext);
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const amount = searchParams.get("amount");
  const currency = searchParams.get("currency");
  const paymentTime = searchParams.get("paymentTime");

  const paymentMethod = "Bank transfer";

  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    checkAuth();
    const timer = setTimeout(() => setShowConfetti(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="my-16 flex h-screen flex-col items-center px-4">
      {showConfetti && <Confetti numberOfPieces={300} />}

      {/* Success Receipt Card */}
      <div className="w-full max-w-md rounded-[2.5rem] border-2 border-gray-200  p-6 text-left shadow-md dark:border-black dark:bg-zinc-800">
        {/* Success Icon */}
        <div className="flex justify-center">
          <CTCheckIcon className="h-12 w-12 text-green-500" />
        </div>

        {/* Success Message */}
        <h1 className="poppins-bold mt-4 text-center text-2xl text-gray-900 dark:text-gray-100">
          Payment success!
        </h1>

        <hr className="my-4 border-gray-200 dark:border-black" />

        {/* Payment Details Section */}
        <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex justify-between">
            <p className="font-medium">Ref number</p>
            <p className="font-semibold text-gray-900 dark:text-white">
              {orderId}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium">Payment time</p>
            <p className="font-semibold text-gray-900 dark:text-white">
              {paymentTime}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium">Payment method</p>
            <p className="font-semibold text-gray-900 dark:text-white">
              {paymentMethod}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium">User ame</p>
            <p className="font-semibold text-gray-900 dark:text-white">
              {user?.userName}
            </p>
          </div>
          <hr className="my-4 border-gray-200 dark:border-black" />

          <div className="flex justify-between">
            <p className="font-medium">Amount</p>
            <p className="font-semibold text-gray-900 dark:text-white">
              {currency} {amount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
