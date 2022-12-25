import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TranzoForm from './components/TranzoForm'
import { contract_address, contract_abi } from './contract/constants';
import { getAllTransaction } from './contract/functions'
import TranzoNavbar from './components/TranzoNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {

  return (
    <div className="App" id="app">
      <>
        <div class="area" >
          <ul class="circles">
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
      <div className="content">
        <TranzoNavbar />
        <TranzoForm />
      </div>

    </div>
  )
}

export default App
