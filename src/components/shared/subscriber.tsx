"use client"; //так как использует клиенский компоненет а не серверный
import React, { useState } from "react";
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
  onChange?: (value: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const Subscriber: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  subIcon,
  limitItems,
  onChange,
  defaultValue = [],
  className,
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>(defaultValue);

  const handleSelect = (value: string) => {
    const isSelected = selectedItems.includes(value);

    let newSelectedItems;
    if (isSelected) {
      newSelectedItems = selectedItems.filter((item) => item !== value);
    } else if (selectedItems.length < limitItems) {
      newSelectedItems = [...selectedItems, value];
    } else {
      newSelectedItems = selectedItems;
    }

    setSelectedItems(newSelectedItems);
    if (onChange) {
      onChange(newSelectedItems);
    }
  };

  return (
    <div className={cn("", className)}>
      <p className="font-bold mb-3">{title}</p>
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {items.map((item) => (
          <div
            key={item.value}
            onClick={() => handleSelect(item.value)}
            className={cn(
              "flex items-center gap-2 p-2 cursor-pointer",
              selectedItems.includes(item.value) && "bg-gray-200"
            )}
          >
            {item.subIcon}
            <span>{item.subAutor}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
