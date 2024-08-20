import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./title";
import { Accessibility } from "lucide-react";
import { Subscriber } from "./subscriber";

interface Props {
  className?: string;
}

export const GuiderInner: React.FC<React.PropsWithChildren<Props>> = ({
  className,
}) => {
  return (
    <div className={cn("", className)}>
      <Title text="Гайдер" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <Accessibility />
        <a>Главная</a>
      </div>
      <Subscriber
        title="Сабы"
        className="mt-5"
        limit={11}
        defaultItems={[
          { subIcon: <Accessibility />, subAutor: "Жопич", value: "1" },
          { subIcon: <Accessibility />, subAutor: "Кваха", value: "2" },
          { subIcon: <Accessibility />, subAutor: "Папаня", value: "3" },

          { subIcon: <Accessibility />, subAutor: "Челыч", value: "4" },

          { subIcon: <Accessibility />, subAutor: "Отсталыч", value: "5" },
          { subIcon: <Accessibility />, subAutor: "Чурка", value: "6" },

          { subIcon: <Accessibility />, subAutor: "Папа", value: "7" },
          { subIcon: <Accessibility />, subAutor: "Мама", value: "8" },

          { subIcon: <Accessibility />, subAutor: "Анскилыч", value: "9" },
          { subIcon: <Accessibility />, subAutor: "Казуалыч", value: "10" },
          { subIcon: <Accessibility />, subAutor: "Ш - man", value: "11" },
          { subIcon: <Accessibility />, subAutor: "Домашнее", value: "12" },

          { subIcon: <Accessibility />, subAutor: "задание", value: "13" },
          { subIcon: <Accessibility />, subAutor: "Бегит", value: "14" },
        ]}
        items={[
          { subIcon: <Accessibility />, subAutor: "Жопич", value: "1" },
          { subIcon: <Accessibility />, subAutor: "Кваха", value: "2" },
          { subIcon: <Accessibility />, subAutor: "Папаня", value: "3" },

          { subIcon: <Accessibility />, subAutor: "Челыч", value: "4" },

          { subIcon: <Accessibility />, subAutor: "Отсталыч", value: "5" },
          { subIcon: <Accessibility />, subAutor: "Чурка", value: "6" },

          { subIcon: <Accessibility />, subAutor: "Папа", value: "7" },
          { subIcon: <Accessibility />, subAutor: "Мама", value: "8" },

          { subIcon: <Accessibility />, subAutor: "Анскилыч", value: "9" },
          { subIcon: <Accessibility />, subAutor: "Казуалыч", value: "10" },
          { subIcon: <Accessibility />, subAutor: "Ш - man", value: "11" },
          { subIcon: <Accessibility />, subAutor: "Домашнее", value: "12" },

          { subIcon: <Accessibility />, subAutor: "задание", value: "13" },
          { subIcon: <Accessibility />, subAutor: "Бегит", value: "14" },
        ]}
      />
    </div>
  );
};
