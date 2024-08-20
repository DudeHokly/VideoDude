import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./title";
import {
  Accessibility,
  Banana,
  Building2,
  Cable,
  Cctv,
  Cigarette,
  Dna,
  DnaOff,
  FileStack,
  FileType,
  FileVideo,
  House,
  MonitorPause,
  Music4,
  Settings,
  Shell,
  SquareCheckBig,
  SquareStack,
  UserCheck,
} from "lucide-react";
import { Subscriber } from "./subscriber";
import { GuiderComp } from "./guiderComp";

interface Props {
  className?: string;
}

export const GuiderInner: React.FC<React.PropsWithChildren<Props>> = ({
  className,
}) => {
  return (
    <div className={cn("", className)}>
      <Title text="Гайдер" size="sm" className="mb-5 font-bold" />
      <GuiderComp
        className="mt-5"
        items={[
          { guiderIcon: <House />, guiderLink: "Главная", value: "1" },
          { guiderIcon: <Shell />, guiderLink: "Shorts", value: "2" },
          { guiderIcon: <UserCheck />, guiderLink: "Подписки", value: "3" },
        ]}
      />
      <Subscriber
        title="Малой"
        className="mt-5"
        items={[
          { subIcon: <Accessibility />, subAutor: "Мой канал", value: "1" },
          { subIcon: <FileStack />, subAutor: "История", value: "2" },
          { subIcon: <SquareStack />, subAutor: "Плейлисты", value: "3" },

          { subIcon: <FileVideo />, subAutor: "Ваши видео", value: "4" },

          {
            subIcon: <MonitorPause />,
            subAutor: "Смотреть позже",
            value: "5",
          },
          { subIcon: <Cable />, subAutor: "Любитель кала", value: "6" },
        ]}
      />
      <Subscriber
        title="Сабы"
        className="mt-5"
        limitItems={11}
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
      <Subscriber
        title="Навигатор"
        className="mt-5"
        items={[
          { subIcon: <Cctv />, subAutor: "В тренде", value: "1" },
          { subIcon: <Music4 />, subAutor: "Музыка", value: "2" },
          { subIcon: <Dna />, subAutor: "Кал", value: "3" },

          { subIcon: <DnaOff />, subAutor: "Ты Шо", value: "4" },

          {
            subIcon: <FileType />,
            subAutor: "Typescript",
            value: "5",
          },
          { subIcon: <Cigarette />, subAutor: "Next JS", value: "6" },
        ]}
      />
      <GuiderComp
        className="mt-5"
        items={[
          { guiderIcon: <Settings />, guiderLink: "Настройки", value: "1" },
          { guiderIcon: <Building2 />, guiderLink: "Жалобы", value: "2" },
          { guiderIcon: <SquareCheckBig />, guiderLink: "Справка", value: "3" },
          { guiderIcon: <Banana />, guiderLink: "Каловый отзыв", value: "4" },
        ]}
      />
    </div>
  );
};
