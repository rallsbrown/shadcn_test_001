import DropDown from "./DropDown";
import { Button } from "./ui/button";

const Header = () => {
  return (
    // <div className="flex w-full flex-row items-start justify-end gap-8">
    <div className="grid w-full grid-cols-2 justify-between pt-4">
      <div className="header_left ml-14 flex w-fit flex-row max-sm:mx-5">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
          TST_001
        </h1>
      </div>
      <div className="header_right mr-14 flex w-fit flex-row gap-8 place-self-end max-sm:mx-5">
        <DropDown />
        <Button className="h-10 w-20" variant={"ghost"}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
