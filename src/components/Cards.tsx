import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Ratings } from "./ui/rating";

const Cards = () => {
  const testCard = "abc";
  const images = [
    { url: "1.jpeg" },
    { url: "2.jpeg" },
    { url: "3.png" },
    { url: "4.png" },
  ];
  return (
    <>
      <div className="flex w-full max-w-[1560px] flex-row flex-wrap items-center justify-between gap-6 px-20 max-lg:justify-center max-sm:gap-0 max-sm:px-0">
        <div className="flex w-full flex-col items-start max-sm:items-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Recent Activty
          </h1>
          <h3 className="scroll-m-20 pb-14 pt-8 text-2xl font-thin tracking-tight">
            Subline Descriptive Text
          </h3>
        </div>
        {testCard.split("").map((card) => (
          <Card
            key={card}
            className="h-[375px] w-full min-w-[260px] max-w-[350px] bg-gray-100 max-sm:max-w-full"
          >
            {/* <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription> Card description</CardDescription>
        </CardHeader> */}
            <CardContent className="p-0">
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="h-40 w-full p-0">
                        <img src={`../public/images/${img.url}`} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-1.5 h-6 w-6" />
                <CarouselNext className="right-1.5 h-6 w-6" />
                <CarouselDots
                  className="pb-[6px]"
                  dotClassName="opacity-70 mx-2 w-5 h-1 bg-white hover:bg-white hover:opacity-90 hover:scale-125"
                  dotCurrentClassName="opacity-100 bg-white"
                />
              </Carousel>
            </CardContent>
            <CardHeader className="pb-3 pt-3">
              <CardTitle>Card Title</CardTitle>
              <Ratings rating={3.5} />
              <CardDescription>card desctipton</CardDescription>
            </CardHeader>
            {/* <CardContent>
          <p>card content 2</p>
        </CardContent> */}
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Cards;
