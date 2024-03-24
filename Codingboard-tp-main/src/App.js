import Main from "./components/Main/Main";
import Nav from "./components/NavBar/Nav";
import Technologies from "./components/Technologies/Technologies";
import Learning from "./components/Learning/Learning";
import Features from "./components/Features/Features";
import Trending from "./components/TrendingCourse/Trending";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/CopyRight/Copyrigh";

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Technologies />
      <Learning />
      <Features />
      <Trending />
      <Footer />
      <Copyright />
    </>

  )
}

export default App;
