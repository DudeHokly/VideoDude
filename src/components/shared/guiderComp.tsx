import React from "react";
import { cn } from "@/lib/utils";

interface Item {
  guiderIcon: React.ReactNode;
  guiderLink: string;
  value: string;
}

interface Props {
  items: Item[];
  className?: string;
}

export const GuiderComp: React.FC<Props> = ({ items, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar",
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.value}
          className="flex items-center gap-2 p-2 cursor-pointer"
        >
          {item.guiderIcon}
          <span>{item.guiderLink}</span>
        </div>
      ))}
    </div>
  );
};
