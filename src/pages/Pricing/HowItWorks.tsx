import { Text, Box, Paper, Group } from "@mantine/core";
import { Play, Star, Flask } from "@mynaui/icons-react"; // Replace with your actual icon library

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-white px-4 pb-12 pt-10 text-black dark:bg-dark-app dark:!text-white">
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
          className="flex w-full max-w-sm flex-col items-center justify-start border border-[--main-yellow] bg-transparent bg-white p-6 shadow-md dark:border-2 dark:border-black dark:bg-zinc-800 dark:text-white"
          style={{
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Play className="mb-4 text-4xl text-[var(--brand-dark-orange)]" />
          <Text size="md" className="mb-2 font-bold  md:text-lg lg:text-xl">
            Preview Thumbnails Live
          </Text>
          <Text
            size="sm"
            className="text-center text-zinc-600 dark:text-zinc-300 md:text-base lg:text-lg"
          >
            Test your Thumbnail & Title live on YouTube to see if it stands out
            from the competition.
          </Text>
        </Paper>

        {/* Card 2 */}
        <Paper
          radius="lg"
          className="flex w-full max-w-sm flex-col items-center justify-start border border-[--main-yellow] bg-transparent bg-white p-6 shadow-md dark:border-2 dark:border-black dark:bg-zinc-800 dark:text-white"
          style={{
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Star className="mb-4 text-4xl text-[var(--brand-dark-orange)]" />
          <Text size="md" className="mb-2 font-bold  md:text-lg lg:text-xl">
            Rate your Thumbnails
          </Text>
          <Text
            size="sm"
            className="text-center text-zinc-600  dark:text-zinc-300 md:text-base lg:text-lg"
          >
            Use our in-house AI, trained on millions of the best images to rate
            your thumbnail.
          </Text>
        </Paper>

        {/* Card 3 */}
        <Paper
          radius="lg"
          className="flex w-full max-w-sm flex-col items-center justify-start border border-[--main-yellow] bg-transparent bg-white p-6 shadow-md dark:border-2 dark:border-black dark:bg-zinc-800 dark:text-white"
          style={{
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Flask className="mb-4 text-4xl text-[var(--brand-dark-orange)]" />
          <Text size="md" className="mb-2 font-bold md:text-lg lg:text-xl">
            A/B Test
          </Text>
          <Text
            size="sm"
            className="text-center text-zinc-600  dark:text-zinc-300 md:text-base lg:text-lg"
          >
            A/B test Thumbnails & Titles live for a video. Schedule hourly/daily
            switch outs.
          </Text>
        </Paper>
      </Group>
    </div>
  );
};

export default HowItWorks;
