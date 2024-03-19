import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className="flex h-14 w-full flex-row items-center justify-between bg-black   text-white max-sm:flex-col max-sm:justify-center max-sm:text-xs">
      <div className="footer-left ml-14 flex flex-row gap-4 max-sm:ml-0">
        <p className="">TST_001</p>
        <Separator className="h-6 bg-white max-sm:h-3" orientation="vertical" />
        <p className="">123 company address</p>
        <Separator className="h-6 bg-white max-sm:h-3" orientation="vertical" />
        <p className="">location</p>
      </div>
      <div className="footer-right mr-14 flex flex-row gap-4 max-sm:mr-0">
        <p>terms & condition</p>
        <p>FAQ</p>
      </div>
    </div>
  );
};

export default Footer;
