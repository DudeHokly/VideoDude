"use client";
import { cn } from "@/lib/utils";

interface Item {
  subIcon: React.ReactNode;
  subAutor: string;
  value: string;
}

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  subIcon: string;
  limitItems: number;
  defaultValue?: string[];
  className?: string;
}

export const Subscriber: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  subIcon,
  limitItems,
  className,
}) => {
  return (
    <div className={cn("", className)}>
      <p className="font-bold mb-3">{title}</p>
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {items.map((item) => (
          <div
            key={item.value}
            className={cn("flex items-center gap-2 p-2 cursor-pointer")}
          >
            {item.subIcon}
            <span>{item.subAutor}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
