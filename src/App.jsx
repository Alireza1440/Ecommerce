import { Route, Routes } from "react-router-dom"
import LoginModal from "./components/LoginModal"
import Navbar from "./components/Navbar"
import RegisterModal from "./components/RegisterModal"
import { ModalProvider } from "./contexts/modalContext"
import Homepage from "./pages/Homepage"
import Product from "./pages/Product"
import { CurrentUserProvider } from "./contexts/userContext"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    try {
      if (typeof localStorage !== "undefined") return
    } catch (e) {
      return alert('لطفا از تنظیمات مرورگر، اجازه استفاده از کوکی ها را بدهید')
    }
  }, [])

  useEffect(() => {
    if (!localStorage.getItem('allUsers')) {
      fetch('./users.json').then(u => u.json()).then((u) => {
        localStorage.setItem('allUsers', JSON.stringify(u))
      })
    }
    return () => localStorage.removeItem('allUsers')
  }, [])
  return (
    <CurrentUserProvider>
      <ModalProvider>
        <Navbar />
        <Routes >
          <Route path="/" element={<Homepage />} />
          <Route path="product/:id" element={<Product />} />
        </Routes>
        <RegisterModal />
        <LoginModal />
      </ModalProvider>
    </CurrentUserProvider>
  )
}

export default App