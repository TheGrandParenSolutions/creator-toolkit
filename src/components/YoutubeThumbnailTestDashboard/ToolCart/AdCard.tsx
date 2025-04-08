import { Button } from "@mantine/core";

const AdCard = () => {
  return (
    <div
      className="relative mx-auto w-full max-w-sm rounded-[20px]  px-6 py-8 text-center text-black shadow-sm"
      style={{
        background: "var(--brand-bg-theme)",
      }}
    >
      {/* Heading */}
      <h1 className="font-primary text-xl font-bold  font-semibold">
        Free YouTube AI Thumbnail Maker
      </h1>

      {/* Description */}
      <p className="mt-4 text-sm font-medium">
        Create High-quality YouTube Thumbnails with AI. Generate dozens of
        thumbnails in less than 60 seconds.
      </p>

      {/* Button */}
      <Button
        radius="xl"
        size="md"
        variant="filled"
        className="mt-6 w-full max-w-xs bg-white font-medium text-black hover:bg-white hover:!text-[var(--brand-dark-yellow)] dark:bg-zinc-800 dark:text-white"
      >
        Create Your Thumbnail
      </Button>
    </div>
  );
};

export default AdCard;
