import Home from "./components/Home";
import Navbars from "./components/Navbars";
import OurValue from "./components/OurValue";
import NewsService from "./services/news-service";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="overflow-hidden"> 
     <Navbars />
     <Home/>
     <OurValue/> 
     <NewsService />
     <Footer/> 
    </div>
  );
}

export default App;
