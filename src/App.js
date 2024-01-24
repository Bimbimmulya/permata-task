import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sick from "./components/Sick";
import Step from "./components/Step";


function App() {
  return (
    <div className="overflow-hidden"> 
     <Navbar/> 
     <Home/>
     <Step/>
     <Sick/>
     <Footer/>
    </div>
  );
}

export default App;
