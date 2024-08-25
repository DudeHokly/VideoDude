import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Title } from "./title";

interface Props {
  id: number;
  name: string;
  channel: string;
  imgUrl: string;
  views: number;
  data: string;
  className?: string;
}

export const AnyCard: React.FC<Props> = ({
  id,
  className,
  name,
  channel,
  imgUrl,
  views,
  data,
}) => {
  return (
    <div
      className={cn(
        "group transform transition duration-500 hover:scale-105",
        className
      )}
    >
      <Link
        href={`/video/${id}`}
        className="block overflow-hidden rounded-lg shadow-lg bg-gray-800"
      >
        <div className="overflow-hidden">
          <img
            className="w-full h-[180px] object-cover transition-transform duration-500 group-hover:scale-110"
            src={imgUrl}
            alt={name}
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/video/${id}`}>
          <Title text={name} size="md" className="text-white font-bold mb-2" />
        </Link>
        <p className="text-gray-400">{channel}</p>
        <p className="text-gray-400">{views} просмотров</p>
        <p className="text-gray-400">{data}</p>
      </div>
    </div>
  );
};
