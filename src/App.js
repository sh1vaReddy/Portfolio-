import Home from "./components/Home";
import NavBar  from "./components/NavBar";
import Sociallinkcs from "./components/Sociallinkcs";
import Aboutus from "./components/Aboutus";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Protofoil from "./components/Protofoil";




function App() {
  return (
    <div>
      <NavBar/>
     <Home/>
     <Aboutus/>
     <Sociallinkcs/>
     <Experience/>
     <Protofoil/>
     <Contact/>
    </div>
  );
}

export default App;
