import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card";

const Categories = () => {
  const categoryNames = [
    "craft fair",
    "zine fest",
    "art book fair",
    "number 4",
    "number 5",
    "number 6",
  ];
  return (
    <div className="flex w-full max-w-[1560px] flex-col flex-wrap items-start px-20 max-sm:items-center max-sm:px-0">
      <h1 className="mb-12 mt-16 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Categories
      </h1>
      <div className="mb-40 flex w-full flex-row flex-wrap justify-between gap-8 max-sm:gap-0 max-[510px]:justify-center">
        {categoryNames.map((cat, i) => (
          <Card
            className="flex h-40 w-40 flex-col items-center justify-center bg-gray-300 max-sm:h-20 max-sm:w-full"
            key={i}
          >
            <CardContent>
              <p>{cat}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Categories;
