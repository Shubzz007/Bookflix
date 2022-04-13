import "./App.css"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

import Register from "./components/Register"
import Login from "./components/Login"
import ProductCategory from "./components/ProductCategory"
import Cart from "./components/Cart"
import Aboutus from "./components/Aboutus"
import Faqs from "./components/Faqs"
import TermsAndConditions from "./components/TermsAndConditions"
import ForgotPassword from "./components/ForgotPassword"
import OtpVerification from "./components/OtpVerification"
import CartNew from "./components/CartNew"

function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/productCategory" element={<ProductCategory />} />

          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/cartNew" element={<CartNew />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
