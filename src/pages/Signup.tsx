import { Link, useNavigate } from "react-router-dom";
import Quote from "../components/Quote";
import { useState } from "react";
import axios from "axios";
import { SignupInput } from "@shivaraj0110/medium-common";
import { backnedUrl } from "../config/url";

function Signup() {
  const [pressed, setPressed] = useState(false);
  const [signupPayload, setSignupPayload] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const nav = useNavigate();
  const signupUser = async () => {
    try {
      setPressed(true);
      const res = await axios.post(
        `${backnedUrl}/api/v1/user/signup`,
        signupPayload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.jwt) {
        nav("/blogs");
        alert("signed up!");
        localStorage.setItem("token", String(res.data.jwt));
      } else {
        alert(`${res.data.msg}`);
      }
    } catch (e) {
      alert("error while signing up!");
    }
  };

  return (
    <div className="grid grid-cols-2">
      <div className="md:col-span-1 col-span-2 ">
        <div className=" h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <div className="flex flex-col">
              <div className="text-3xl text-center poppins-bold">
                Create an account
              </div>
              <div className="text-sm poppins-semibold text-center text-gray-400">
                Already have an account ?{" "}
                <Link to={"/login"} className="underline cursor-pointer">
                  Login
                </Link>
              </div>
              <div className="poppins-medium text-left mt-[25px] mb-2">
                Username
              </div>
              <div className="flex justify-start ml-0 text-left">
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="border rounded-md p-1 pr-[155px] text-start border-gray-500"
                  onChange={(e) => {
                    setSignupPayload({
                      ...signupPayload,
                      name: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="poppins-medium text-left mt-[25px] mb-2">
                Email
              </div>
              <div className="flex justify-start ml-0  text-left">
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="border rounded-md p-1 pr-[155px] text-start border-gray-500"
                  onChange={(e) => {
                    setSignupPayload({
                      ...signupPayload,
                      email: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="poppins-medium text-left mt-[25px] mb-2">
                Password
              </div>
              <div className="flex justify-start ml-0 text-left">
                <input
                  type="password"
                  placeholder=""
                  className="border rounded-md p-1 pr-[155px] text-start border-gray-500"
                  onChange={(e) => {
                    setSignupPayload({
                      ...signupPayload,
                      password: e.target.value,
                    });
                  }}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 rounded-lg text-white poppins-semibold mt-6 p-1"
                onClick={signupUser}>
                {pressed ? "Signing up" : "Signup"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-1 invisible lg:visible">
        <Quote />
      </div>
    </div>
  );
}

export default Signup;
