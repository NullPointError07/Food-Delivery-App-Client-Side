import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

export default App;
