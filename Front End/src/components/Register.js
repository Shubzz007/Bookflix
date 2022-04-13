import { Link } from "react-router-dom"
import path from "../assets/signup1.svg"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"
import { useState } from "react"
import axios from "axios"
import "./register.css"
import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Register = () => {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const submitHandler = () => {
    if (firstName.length === 0) {
      toast.warning("Enter firstname !")
    } else if (lastName.length === 0) {
      toast.warning("Enter LastName !")
    } else if (email.length === 0) {
      toast.warning("Enter email !")
    } else if (password.length === 0) {
      toast.warning("Enter password !")
    } else if (confirmPassword.length === 0) {
      toast.warning("Enter confirm password !")
    } else if (confirmPassword !== password) {
      toast.warning("Password Doesn't matched !")
    } else {
      const body = {
        firstName,
        lastName,
        email,
        password
      }
      const url = "http://localhost:8080/user/signup"
      axios.post(url, body).then((response) => {
        if (response.status === 200) {
          toast.success("Signed Up Successfully :) ")
          navigate("/login")
        }
      })
    }
  }
  return (
    <div>
      <Header></Header>
      <div className="row my-4 sign-up-wrapper">
        <div
          className="col"
          style={{
            textAlign: "center",
            alignSelf: "center"
          }}
        >
          <img src={path} alt="signup" style={{ height: "300px" }} />
        </div>

        <div className="col">
          <div className="form" style={{ marginTop: "10%" }}>
            <div className="mb-3">
              <label htmlFor="FirstName" className="label-control">
                FirstName
              </label>
              <input
                type="text"
                id="FirstName"
                className="form-control"
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="LastName" className="label-control">
                LastName
              </label>
              <input
                type="text"
                id="LastName"
                className="form-control"
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="label-control">
                Email
              </label>
              <input
                type="email"
                id="Email"
                className="form-control"
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="label-control">
                Password
              </label>
              <input
                type="password"
                id="Password"
                className="form-control"
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ConfirmPassword" className="label-control">
                Confirm Password
              </label>
              <input
                type="password"
                id="ConfirmPassword"
                className="form-control"
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
              />
            </div>
            Already have account ? <Link to="/login">signin here</Link>
            <div>
              <button className="btn btn-dark" onClick={submitHandler}>
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Register
