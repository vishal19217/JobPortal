import React, { useContext } from "react";
import "./index.css";
import {axiosContext} from "../../controller/AxiosProvider";
import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";
function LoginPage(props) {

  console.log("Parent: " + props.parent);


  const {updateToken,baseURL} = axiosContext();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  
  const handleFormData = (event) => {
    const { name, value } = event.target;

    setFormData((formData) => {
      return { ...formData, [name]: value };
    });
  };
  const handleSubmit = async (event) => {
    try {

      event.preventDefault();
      console.log("Inside handleSubmit");
      
      const response = await axios.post(
        baseURL + "/login",{
            username: formData["username"],
            password: formData["password"],
          }
      );
      console.log(response.data);
      if (response.status === 200) {
        updateToken(response.data);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <div className=" text-white login-pg inline-block m-auto border border-purple-950 rounded-md shadow-md">
        <div className="mb-4" id="signin">
          <h1>Sign in</h1>
        </div>
        <form className="flex flex-col gap-2" method="post" onSubmit={handleSubmit}>
          <div className="mb-4 mx-4">
            <label className="block mb-2">Username</label>
            <div className="form-input">
              <i className="fa-solid fa-user" style={{ display: "inline" }}></i>
              <input
                className="block-inline outline-none input-field"
                required
                placeholder="Username"
                name="username"
                type="text"
                onChange={handleFormData}
              ></input>
            </div>
          </div>
          <div className="mb-4 mx-4">
            <label className="block mb-2">Password</label>
            <div className="form-input">
              <i className="fa-solid fa-lock" style={{ display: "inline" }}></i>
              <input
                className="block-inline outline-none input-field"
                placeholder="Password"
                name="password"
                type="password"
                required
                onChange={handleFormData}
              ></input>
            </div>
          </div>
          <div className="mb-5 mx-4 text-center">
            <button className="btn">
              
              Login
            </button>
          </div>
        </form>
        <footer className="text-center">
          Don't have an Account ? <br />
          <Link to="/register">Sign up</Link>
        </footer>
      </div>
    </div>
  );
}

export default LoginPage;
