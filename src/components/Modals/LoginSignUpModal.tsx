import { Modal } from "@mantine/core";
import { LoginSignUpComponent } from "@src/components/Authentication/LoginSignUpComponent";
import ForgotPassword from "@src/pages/LoginSignup/ForgotPassword";
import { useState } from "react";

export const LoginSignUpModal = ({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) => {
  const [isForgotPassword, setIsForgotPassword] = useState<boolean>();
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
        classNames={{
          content: "bg-transparent",
        }}
        className="w-100 min-w-3xl max-w-5xl"
        transitionProps={{
          transition: "fade",
          duration: 300,
          timingFunction: "linear",
        }}
      >
        {isForgotPassword ? (
          <ForgotPassword onBack={() => setIsForgotPassword(false)} />
        ) : (
          <LoginSignUpComponent
            modalFlow={true}
            closeModal={close}
            onForgotPassword={() => setIsForgotPassword(true)}
          />
        )}
      </Modal>
    </>
  );
};
