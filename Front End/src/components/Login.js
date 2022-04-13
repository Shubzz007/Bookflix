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

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const Forgotpassword = () => {
    navigate("/forgot-password")
  }
  const submitHandler = () => {
    if (email.length === 0) {
      toast.warning("please enter email")
    } else if (password.length === 0) {
      toast.warning("please enter password")
    } else {
      const body = {
        email,
        password
      }

      // url to make login api call

      const url = "http://localhost:8080/user/login"

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data

        if (result["status"] === "success") {
          toast.success("Welcome to the application")
          console.log("success condition")

          // get the data sent by server
          const { id, firstName, lastName } = result["data"]

          // persist the logged in user's information for future use
          sessionStorage["id"] = id
          sessionStorage["firstName"] = firstName
          sessionStorage["lastName"] = lastName
          sessionStorage["loginStatus"] = 1

          // navigate to home component
          navigate("/home")
        } else {
          toast.error("Invalid user name or password")
        }
      })
    }
  }
  return (
    <div>
      <Header></Header>
      <div
        className="row my-4 sign-in-wrapper"
        style={{ marginBottom: "60px" }}
      >
        <div
          className="col"
          style={{
            textAlign: "center",
            alignSelf: "center"
          }}
        >
          <img
            src={path}
            alt="signin"
            style={{ height: "300px", marginTop: "10%" }}
          />
        </div>

        <div className="col">
          <div className="form" style={{ marginTop: "10%" }}>
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
            Don't have an account? <Link to="/register">Register here</Link>
            <div>
              <button className="btn btn-dark" onClick={submitHandler}>
                Login
              </button>

              <button
                style={{ marginLeft: "20px" }}
                className="btn btn-dark"
                onClick={Forgotpassword}
              >
                Forgot Password
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
export default Login
