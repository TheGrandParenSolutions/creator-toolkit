import { Text, Box, Paper, Group } from "@mantine/core";
import { Play, Star, Flask } from "@mynaui/icons-react"; // Your actual icon library

// Define the feature data
const features = [
  {
    id: 1,
    title: "Preview Thumbnails Live",
    description:
      "Test your Thumbnail & Title live on YouTube to see if it stands out from the competition.",
    icon: <Play className="mb-4 text-4xl text-[var(--brand-dark-orange)]" />,
  },
  {
    id: 2,
    title: "Rate your Thumbnails",
    description:
      "Use our in-house AI, trained on millions of the best images to rate your thumbnail.",
    icon: <Star className="mb-4 text-4xl text-[var(--brand-dark-orange)]" />,
  },
  {
    id: 3,
    title: "A/B Test",
    description:
      "A/B test Thumbnails & Titles live for a video. Schedule hourly/daily switch outs.",
    icon: <Flask className="mb-4 text-4xl text-[var(--brand-dark-orange)]" />,
  },
];

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center justify-start px-4 pb-12 pt-10 text-black  dark:!text-white">
      {/* Section Heading */}
      <Box className="mb-8 text-center">
        <Text size="lg" component="h2" className="font-bold md:text-3xl lg:text-4xl">
          How it Works
        </Text>
      </Box>

      {/* Cards */}
      <Group className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
        {features.map(feature => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </Group>
    </div>
  );
};

// Feature Card Component (Reusable)
const FeatureCard = ({ icon, title, description }: { icon: JSX.Element; title: string; description: string }) => {
  return (
    <Paper
      radius="lg"
      className="flex w-full max-w-sm flex-col rounded-[2.5rem] items-center justify-start border border-[--brand-dark-orange] bg-[--brand-bg-light] p-6 shadow-md dark:border-2 dark:border-black dark:bg-zinc-800 dark:text-white"

    >
      {icon}
      <Text size="md" className="mb-2 font-bold md:text-lg lg:text-xl">
        {title}
      </Text>
      <Text size="sm" className="text-center text-zinc-600 dark:text-zinc-300 md:text-base lg:text-lg">
        {description}
      </Text>
    </Paper>
  );
};

export default HowItWorks;
