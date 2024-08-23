import { ScrolBar, Container, GuiderInner, AnyCard } from "@/components/shared";

export default function Home() {
  // Пример массива данных с видео
  const videos = [
    {
      id: 0,
      name: "Чувак решил залить в себя 10л егермейстера, сможет ли он?",
      channel: "Весёлый канал",
      imgUrl: "/imgs/video1.jpg",
      views: 100,
      data: "01.01.2000",
    },
    {
      id: 1,
      name: "Как правельно заварваривать?",
      channel: "Кулинарный гуру",
      imgUrl: "/imgs/video1.jpg",
      views: 2000,
      data: "15.05.2021",
    },
    // Добавьте больше видео по необходимости
  ];

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
              {videos.map((video) => (
                <AnyCard
                  key={video.id}
                  id={video.id}
                  name={video.name}
                  channel={video.channel}
                  imgUrl={video.imgUrl}
                  views={video.views}
                  data={video.data}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
