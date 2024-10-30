import React, { useContext } from "react";
import "./index.css";
import AxiosContext from "../../controller/AxiosProvider";
import { useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import { Link ,Navigate,useNavigate} from "react-router-dom";
function LoginPage(props) {

  console.log("Parent: " + props.parent);


  const { axiosInstance,setAuthenticatedInstance, updateAuthentication } =
    useContext(AxiosContext);

  const [formData, setFormData] = useState({ username: "", password: "" });
  let navigate  = useNavigate();

  const handleFormData = (event) => {
    const { name, value } = event.target;

    setFormData((formData) => {
      return { ...formData, [name]: value };
    });
    console.log(formData);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log("Inside handleSubmit");

      const response = await axiosInstance.post(
        "/login",{
            username: formData["username"],
            password: formData["password"],
          }
      );
      console.log(response.data);
      if (response.status === 200) {
        console.log(formData);
        setAuthenticatedInstance(formData['username'],formData['password']);
        navigate("/dashboard");
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
