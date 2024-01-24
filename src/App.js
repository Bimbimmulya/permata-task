import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import OurValue from "./components/OurValue";


function App() {
  return (
    <div className="overflow-hidden"> 
     <Navbar/> 
     <Home/>
     <OurValue/>
     <Blog/>
     <Footer/>
    </div>
  );
}

export default App;
