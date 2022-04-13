import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(sessionStorage.email);
  const verifyEmail = () => {
    if (email.length === 0) {
      toast.warning("Enter Email !!");
    } else {
      const body = {
        email,
      };
      sessionStorage.setItem("email", `${email}`);
      const url = "http://localhost:8080/user/generate-otp";

      axios.post(url, body).then((response) => {
        if (response.status === 200) {
          toast.success("Otp is sent ! plz check your mail");
          navigate("/otp-verification");
        } else {
          toast.error("plz enter valid email!");
        }
      });
    }
  };
  return (
    <div>
      <div className="row">
        <div className="col"></div>
        <div className="col" style={{ marginTop: "100px" }}>
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Enter Email
              </label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-dark" onClick={verifyEmail}>
                Send Otp
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default ForgotPassword;
