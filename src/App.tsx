import "./App.css";
import DropDown from "./components/DropDown";
import Cards from "./components/Cards";

// type CardProps = React.ComponentProps<typeof Card>;

function App() {
  return (
    <>
      <div className="container flex min-w-[275px] max-w-[1200px] flex-col items-center justify-around gap-4 pt-4">
        <DropDown />
        <Cards />
      </div>
    </>
  );
}

export default App;
