import DropDown from "./DropDown";
import { Button } from "./ui/button";

const Header = () => {
  return (
    // <div className="flex w-full flex-row items-start justify-end gap-8">
    <div className="grid w-full grid-cols-2 justify-between">
      <div className="header_left flex w-fit flex-row">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
          TST_001
        </h1>
      </div>
      <div className="header_right flex w-fit flex-row gap-8 place-self-end">
        <DropDown />
        <Button className="h-10 w-20">Logout</Button>
      </div>
    </div>
  );
};

export default Header;
