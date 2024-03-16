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

const Cards = () => {
  const testCard = "abcdefghijkl";
  const images = [
    { url: "1.jpeg" },
    { url: "2.jpeg" },
    { url: "3.png" },
    { url: "4.png" },
  ];
  return (
    <div className="flex flex-row flex-wrap justify-between gap-4">
      {testCard.split("").map((card) => (
        <Card key={card} className="h-[300px] min-w-[260px]  bg-slate-200">
          {/* <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription> Card description</CardDescription>
        </CardHeader> */}
          <CardContent className="p-0">
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {images.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="h-40 p-0">
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
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription> Card description</CardDescription>
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
  );
};

export default Cards;
