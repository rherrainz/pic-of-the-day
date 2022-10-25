import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/home';
import About from './components/about';
import Header from './components/header';
import Footer from "./components/footer";
import PictureODD from "./components/pictureODD";

function App() {
  return (
    <div className="App container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="picture" element={<PictureODD />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
