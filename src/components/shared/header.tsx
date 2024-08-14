import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./conteiner";
import { Button } from "../ui/button";

interface Props {
  className?: string; //не обязательное св-во
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("", className)}>
      <Container className="flex items-center justify-between py-8">
        <div>
          <Button>Click</Button>
        </div>
        {/* //SearchInput -- разработать как компонент */}
        <div>
          <img />
        </div>
      </Container>
    </header>
  );
};
