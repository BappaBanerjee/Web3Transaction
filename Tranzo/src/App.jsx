import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/contact";
import TranzoForm from './components/TranzoForm';
import TranzoNavbar from './components/TranzoNavbar';
import About from "./components/about";
import NotFound from "./components/notFound";
import { contract_address, contract_abi } from './contract/constants';
import { getAllTransaction } from './contract/functions'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {

  return (
    <div className="App" id="app">
      <TranzoNavbar />
      <>
        <div className="area" >
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >
      </>
      {/* <div classNameName="content">
      </div> */}

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<TranzoForm />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route  path = "*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
