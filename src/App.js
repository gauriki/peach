import Pairs from "./components/Trendingpairs";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  return (
    <div className="bg-[#0E1D2E] text-center">
      <Header />
      <Main />
      <Pairs />
      <Footer />
    </div>
  );
}

export default App;
