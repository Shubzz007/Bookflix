import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import axios from "axios";
const OtpVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPassword = () => {
    if (otp.length === 0) {
      toast.warning("Plz enter Otp !! ");
    } else if (password.length === 0) {
      toast.warning("Plz Enter Password");
    } else if (password !== confirmPassword) {
      toast.error("password doesn't matched 1!");
    } else {
      const email = sessionStorage.getItem("email");
      console.log(email);
      const body = {
        email,
        password,
        otp,
      };

      const url = "http://localhost:8080/user/validate-otp";
      axios.put(url, body).then((response) => {
        if (response.status === 200) {
          toast.success("Password updated !!");
          navigate("/login");
        } else {
          toast.error("Invalid Otp ");
        }
      });
    }
  };
  return (
    <div className="form">
      <div className="row">
        <div className="col"></div>
        <div className="col" style={{ marginTop: "100px" }}>
          <div className="mb-3">
            <label htmlFor="" className="label-control">
              Enter Otp
            </label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="label-control">
              new Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="label-control">
              confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-dark" onClick={resetPassword}>
              submit
            </button>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default OtpVerification;
