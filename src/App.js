import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OurValue from "./components/OurValue";
import NewsService from "./services/news-service";


function App() {
  return (
    <div className="overflow-hidden"> 
     <Navbar/> 
     <Home/>
     <OurValue/>
     <NewsService />
     <Footer/>
    </div>
  );
}

export default App;
