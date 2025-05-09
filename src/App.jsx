import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "1.57rem" }}>
        <Home />
      </div>
      
      <Footer/>
    </>
  );
}

export default App;
