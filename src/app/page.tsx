import { ScrolBar, Container, GuiderInner } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10"></Container>
      <ScrolBar />
      <Container>
        <div className="flex gap-[60px]">
          {/*Гайдер слева*/}
          <div className="w-[250px]">
            <GuiderInner />
          </div>

          {/*Блок с видосами*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              Видосы
              {/* <VideosGroups title='' items={[1, 2, 3, 4, 5]}/> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
