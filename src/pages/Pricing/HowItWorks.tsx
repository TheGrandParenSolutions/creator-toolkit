import { Text, Box, Paper, Group } from "@mantine/core";
import { Play, Star, Flask } from "@mynaui/icons-react"; // Replace with your actual icon library

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-dark-app text-black dark:!text-white justify-start px-4 pb-12 pt-10">
      {/* Section Heading */}
      <Box className="mb-8 text-center">
        <Text
          size="lg"
          component="h2"
          className="font-bold  md:text-3xl lg:text-4xl"
        >
          How it Works
        </Text>
      </Box>

      {/* Cards */}
      <Group className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
        {/* Card 1 */}
        <Paper
          radius="lg"
          className="flex flex-col items-center border border-[--main-yellow] bg-[--brand-main-bg] dark:border-2 dark:border-black justify-start w-full max-w-sm p-6 bg-white dark:bg-gray-800 dark:text-white shadow-md"
          style={{
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Play className="mb-4 text-[var(--brand-dark-orange)] text-4xl" />
          <Text
            size="md"
            className="mb-2 font-bold  md:text-lg lg:text-xl"
          >
            Preview Thumbnails Live
          </Text>
          <Text
            size="sm"
            className="text-gray-600 dark:text-gray-300 text-center md:text-base lg:text-lg"
          >
            Test your Thumbnail & Title live on YouTube to see if it stands out
            from the competition.
          </Text>
        </Paper>

        {/* Card 2 */}
        <Paper
          radius="lg"
          className="flex flex-col items-center justify-start w-full max-w-sm p-6 border border-[--main-yellow] bg-[--brand-main-bg] dark:border-2 dark:border-black bg-white dark:bg-gray-800 dark:text-white shadow-md"
          style={{
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Star className="mb-4 text-[var(--brand-dark-orange)] text-4xl" />
          <Text
            size="md"
            className="mb-2 font-bold  md:text-lg lg:text-xl"
          >
            Rate your Thumbnails
          </Text>
          <Text
            size="sm"
            className="text-gray-600 dark:text-gray-300  text-center md:text-base lg:text-lg"
          >
            Use our in-house AI, trained on millions of the best images to rate
            your thumbnail.
          </Text>
        </Paper>

        {/* Card 3 */}
        <Paper
          radius="lg"
          className="flex flex-col items-center justify-start w-full max-w-sm p-6 border border-[--main-yellow] bg-[--brand-main-bg] dark:border-2 dark:border-black bg-white dark:bg-gray-800 dark:text-white shadow-md"
          style={{
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Flask className="mb-4 text-[var(--brand-dark-orange)] text-4xl" />
          <Text
            size="md"
            className="mb-2 font-bold md:text-lg lg:text-xl"
          >
            A/B Test
          </Text>
          <Text
            size="sm"
            className="text-gray-600 dark:text-gray-300  text-center md:text-base lg:text-lg"
          >
            A/B test Thumbnails & Titles live for a video. Schedule
            hourly/daily switch outs.
          </Text>
        </Paper>
         
      </Group>
    </div>
  );
};

export default HowItWorks;
