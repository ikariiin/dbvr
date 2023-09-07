import ExperimentsIllust from "@/assets/Experiments.svg";
import { Button } from "@/components/button";
import { Icon } from "@/components/icon";
import { Typography } from "@/components/typography";

export function Instructions() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <img alt="Experiments" className="w-1/4" src={ExperimentsIllust} />
      <Typography className="mb-3" variant="h1">
        Select a connection or create a new connection to view
      </Typography>
      <Button>
        <span className="text-xl">
          <Icon name="add" />
        </span>{" "}
        Create New Connection
      </Button>
    </main>
  );
}
