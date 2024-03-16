import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";

// type CardProps = React.ComponentProps<typeof Card>;

function App() {
  return (
    <div className="container flex min-w-[275px] max-w-[1200px] flex-col items-center justify-around gap-4 pt-4">
      <Header />
      <Cards />
    </div>
  );
}

export default App;
