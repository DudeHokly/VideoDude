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
    <div className={cn("grid grid-cols-3 gap-4", className)}>
      <Link href={`/video/${id}`} className="col-span-1">
        <div className="flex justify-center p-4 bg-gray-800 rounded-lg">
          <img
            className="w-full h-[180px] object-cover rounded-lg"
            src={imgUrl}
            alt={name}
          />
        </div>
      </Link>
      <div className="col-span-2 flex flex-col justify-between">
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
