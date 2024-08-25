import React from "react";
import { cn } from "@/lib/utils";
import { Categories } from "./catigories";
import { SortComp } from "./sort-comp";
import { Container } from "./conteiner";

interface Props {
  className?: string;
}

export const ScrolBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-grayBg py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="mt-10">
        <Categories />
        <SortComp />
      </Container>
    </div>
  );
};
