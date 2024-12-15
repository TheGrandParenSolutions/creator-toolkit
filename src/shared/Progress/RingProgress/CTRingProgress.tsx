import { ActionIcon, RingProgress, Text, Center, rem } from "@mantine/core";
import { CheckSolid } from "@mynaui/icons-react";

const CTRingProgress = ({ progress }: { progress: number }) => {
  return (
    <>
      {progress !== 100 && (
        <RingProgress
          sections={[{ value: progress, color: "blue" }]}
          label={
            <Text c="blue" fw={700} ta="center" size="xl">
              {progress}%
            </Text>
          }
        />
      )}

      {progress === 100 && (
        <RingProgress
          sections={[{ value: progress, color: "teal" }]}
          label={
            <Center>
              <ActionIcon color="teal" variant="light" radius="xl" size="xl">
                <CheckSolid style={{ width: rem(22), height: rem(22) }} />
              </ActionIcon>
            </Center>
          }
        />
      )}
    </>
  );
};

export default CTRingProgress;
