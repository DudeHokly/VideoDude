import { Categories, Container, SortComp } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Categories />
        <SortComp />
      </Container>
    </>
  );
}
