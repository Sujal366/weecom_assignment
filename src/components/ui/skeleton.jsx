import { cn } from "../../lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md", className)}
      style={{ borderColor: "rgb(226, 232, 240)" }}
      {...props}
    />
  );
}

export { Skeleton };
