import { Modal } from "@mantine/core";
import { LoginSignUpComponent } from "@src/components/Authentication/LoginSignUpComponent";

export const LoginSignUpModal = ({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) => {
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
        {/* Modal content */}
        <LoginSignUpComponent />
      </Modal>
    </>
  );
};
