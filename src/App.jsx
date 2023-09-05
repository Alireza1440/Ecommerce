import { Route, Routes } from "react-router-dom"
import LoginModal from "./components/LoginModal"
import Navbar from "./components/Navbar"
import RegisterModal from "./components/RegisterModal"
import { ModalProvider } from "./contexts"
import Homepage from "./pages/Homepage"
import Product from "./pages/Product"

function App() {
  return (
    <ModalProvider>
      <Navbar />
      <Routes >
        <Route path="/" element={<Homepage />} />
        <Route path="product/:id" element={<Product />} />
      </Routes>
      <RegisterModal />
      <LoginModal />
    </ModalProvider>
  )
}

export default App