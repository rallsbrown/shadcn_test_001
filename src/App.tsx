import "./App.css";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "@/components/ui/dropdown-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import { Container, containerVariants } from "@/components/ui/container";

// type CardProps = React.ComponentProps<typeof Card>;

function App() {
  const testCard = "abcdefghijkl";
  const images = [
    { url: "1.jpeg" },
    { url: "2.jpeg" },
    { url: "3.png" },
    { url: "4.png" },
  ];

  return (
    <>
      <div className="container flex min-w-[275px] max-w-[1200px] flex-col items-center justify-around gap-4 pt-4">
        <div className="flex w-full flex-row items-start justify-start">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="w-[300px]" variant="outline">
                Open
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Keyboard shortcuts
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem disabled>API</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
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
      </div>
      {/* <div className="flex h-[700px] w-[1100px] flex-row flex-wrap justify-around"> */}
    </>

    // <Container className="flex h-[800px] flex-col items-center justify-around">
    //   <div className="flex w-[1100px] flex-row items-start justify-start">
    //     <DropdownMenu>
    //       <DropdownMenuTrigger asChild>
    //         <Button className="w-[300px]" variant="outline">
    //           Open
    //         </Button>
    //       </DropdownMenuTrigger>
    //       <DropdownMenuContent className="w-56">
    //         <DropdownMenuLabel>My Account</DropdownMenuLabel>
    //         <DropdownMenuSeparator />
    //         <DropdownMenuGroup>
    //           <DropdownMenuItem>
    //             Profile
    //             <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    //           </DropdownMenuItem>
    //           <DropdownMenuItem>
    //             Billing
    //             <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
    //           </DropdownMenuItem>
    //           <DropdownMenuItem>
    //             Settings
    //             <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
    //           </DropdownMenuItem>
    //           <DropdownMenuItem>
    //             Keyboard shortcuts
    //             <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
    //           </DropdownMenuItem>
    //         </DropdownMenuGroup>
    //         <DropdownMenuSeparator />
    //         <DropdownMenuGroup>
    //           <DropdownMenuItem>Team</DropdownMenuItem>
    //           <DropdownMenuSub>
    //             <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
    //             <DropdownMenuPortal>
    //               <DropdownMenuSubContent>
    //                 <DropdownMenuItem>Email</DropdownMenuItem>
    //                 <DropdownMenuItem>Message</DropdownMenuItem>
    //                 <DropdownMenuSeparator />
    //                 <DropdownMenuItem>More...</DropdownMenuItem>
    //               </DropdownMenuSubContent>
    //             </DropdownMenuPortal>
    //           </DropdownMenuSub>
    //           <DropdownMenuItem>
    //             New Team
    //             <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
    //           </DropdownMenuItem>
    //         </DropdownMenuGroup>
    //         <DropdownMenuSeparator />
    //         <DropdownMenuItem>GitHub</DropdownMenuItem>
    //         <DropdownMenuItem>Support</DropdownMenuItem>
    //         <DropdownMenuItem disabled>API</DropdownMenuItem>
    //         <DropdownMenuSeparator />
    //         <DropdownMenuItem>
    //           Log out
    //           <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    //         </DropdownMenuItem>
    //       </DropdownMenuContent>
    //     </DropdownMenu>
    //   </div>
    //   <div className="flex h-[700px] w-[1100px] flex-row flex-wrap justify-around">
    //     {testCard.split("").map((card) => (
    //       <Card key={card} className="h-[200px] w-[350px] bg-slate-200">
    //         <CardHeader>
    //           <CardTitle>Card Title</CardTitle>
    //           <CardDescription> Card description</CardDescription>
    //         </CardHeader>
    //         <CardContent>
    //           <p>Card Content</p>
    //         </CardContent>
    //         <CardFooter>
    //           <p>Card Footer</p>
    //         </CardFooter>
    //       </Card>
    //     ))}
    //   </div>
    // </Container>
  );
}

export default App;
