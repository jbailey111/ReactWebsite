import "./App.css";
import Hero from "./Components/Hero/Hero";
import SplitBox from "./Components/SplitBox/SplitBox";
import Header from "./Components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SplitBox />
      <SplitBox swap={true} />
    </div>
  );
}

export default App;
