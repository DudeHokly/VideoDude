import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

const categoriesDudes = [
  "Все",
  "Видеоигры",
  "Музыка",
  "Кал",
  "Ты_Шо",
  "Анимация",
  "Я_устал",
  "Сложна",
  "Typescript",
  "Next_js",
  "ShadCn",
  "Ярик",
];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {categoriesDudes.map((elem, index) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeIndex === index &&
              "bg-gray-500 shadow-md shadow-gray-200 text-primary"
          )}
          key={index}
        >
          <button>{elem}</button>
        </a>
      ))}
    </div>
  );
};
