import { ScrolBar, Container, GuiderInner, AnyCard } from "@/components/shared";

export default function Home() {
  // Массив с видео
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
    {
      id: 2,
      name: "Что происходит?",
      channel: "Кулинарный гуру",
      imgUrl: "/imgs/video1.jpg",
      views: 2000,
      data: "15.05.2021",
    },
    {
      id: 3,
      name: "Как какать?",
      channel: "Кулинарный гуру",
      imgUrl: "/imgs/video1.jpg",
      views: 2000,
      data: "15.05.2021",
    },
    {
      id: 4,
      name: "Сейчас или вообще?",
      channel: "Кулинарный гуру",
      imgUrl: "/imgs/video1.jpg",
      views: 2000,
      data: "15.05.2021",
    },
    {
      id: 5,
      name: "Что если?",
      channel: "Кулинарный гуру",
      imgUrl: "/imgs/video1.jpg",
      views: 2000,
      data: "15.05.2021",
    },

    {
      id: 6,
      name: "Ты русс?",
      channel: "Кулинарный гуру",
      imgUrl: "/imgs/video1.jpg",
      views: 2000,
      data: "15.05.2021",
    },

    {
      id: 7,
      name: "Остался в детдоме ночью выживу?",
      channel: "Кулинарный гуру",
      imgUrl: "/imgs/video1.jpg",
      views: 2000,
      data: "15.05.2021",
    },

    {
      id: 8,
      name: "Ношу штаны подтсяну их?",
      channel: "Кулинарный гуру",
      imgUrl: "/imgs/video1.jpg",
      views: 2000,
      data: "15.05.2021",
    },

    {
      id: 9,
      name: "Как стать тупым за 0сек?",
      channel: "Кулинарный гуру",
      imgUrl: "/imgs/video1.jpg",
      views: 2000,
      data: "15.05.2021",
    },

    {
      id: 10,
      name: "Режу воздух 7 часов?",
      channel: "Кулинарный гуру",
      imgUrl: "/imgs/video1.jpg",
      views: 2000,
      data: "15.05.2021",
    },

    {
      id: 11,
      name: "Не ем всю жизнь умру?",
      channel: "Кулинарный гуру",
      imgUrl: "/imgs/video1.jpg",
      views: 2000,
      data: "15.05.2021",
    },

    {
      id: 12,
      name: "Перестал разговаривать заговорю?",
      channel: "Кулинарный гуру",
      imgUrl: "/imgs/video1.jpg",
      views: 2000,
      data: "15.05.2021",
    },

    {
      id: 13,
      name: "Пытаюсь выбить ботинок с ноги 5 часов осилю?",
      channel: "Кулинарный гуру",
      imgUrl: "/imgs/video1.jpg",
      views: 2000,
      data: "15.05.2021",
    },

    {
      id: 14,
      name: "Видео больше не будет?",
      channel: "Кулинарный гуру",
      imgUrl: "/imgs/video1.jpg",
      views: 2000,
      data: "15.05.2021",
    },

    // Можно добавить больше видео по необходимости
  ];

  return (
    <>
      <Container className="mt-10"></Container>
      <ScrolBar />
      <Container>
        <div className="flex gap-[60px]">
          {/* Гайдер слева */}
          <div className="w-[250px]">
            <GuiderInner />
          </div>

          {/* Блок с видео */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <AnyCard
                  key={video.id}
                  id={video.id}
                  name={video.name}
                  channel={video.channel}
                  imgUrl={video.imgUrl}
                  views={video.views}
                  data={video.data}
                  className="video-card"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
