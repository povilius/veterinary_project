import { Route, Routes,  } from "react-router-dom";
import Pets from './pages/Pets'

import './App.css'
import Header from "./components/Header";
import Meds from "./pages/Meds";
import Pet from "./pages/Pet";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AddPetForm from "./pages/AddPetForm";


function App() {
  

  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pets" element={<Pets />} />
      <Route path="/meds" element={<Meds />} />
      <Route path="/pets/:id" element={<Pet />} />
      <Route path="/new" element={<AddPetForm />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
