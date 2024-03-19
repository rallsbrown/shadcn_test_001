import { Separator } from "./components/ui/separator";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

// type CardProps = React.ComponentProps<typeof Card>;

function App() {
  return (
    <div className="mx-auto flex w-full min-w-[275px] flex-col items-center justify-around">
      <Header />
      <Hero />
      <Cards />
      <Separator className="mt-20" />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
