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
    <div className="grid grid-cols-2 bg-gradient-to-tr from-blue-800 to-blue-400">
      <div className="md:col-span-1 col-span-2">
        <div className=" h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <div className="flex flex-col">
              <div className="text-3xl 2xl:text-[45px] text-center text-white/80 poppins-bold">
                Create an account
              </div>
              <div className="text-sm 2xl:text-xl mt-1 poppins-semibold text-center text-white/70">
                Already have an account ?{" "}
                <Link to={"/login"} className="underline cursor-pointer">
                  Login
                </Link>
              </div>
              <div className="poppins-medium text-left mt-[25px] mb-2 text-white/70">
                Username
              </div>
              <div className="flex justify-start ml-0 text-left">
                <input
                  type="text"
                  placeholder="Enter your username"
                  className=" p-1 pr-[155px] text-start outline-none w-full bg-transparent border-b"
                  onChange={(e) => {
                    setSignupPayload({
                      ...signupPayload,
                      name: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="poppins-medium text-left mt-[25px] mb-2 text-white/70">
                Email
              </div>
              <div className="flex justify-start ml-0  text-left">
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className=" p-1 pr-[155px] text-start outline-none w-full bg-transparent border-b"
                  onChange={(e) => {
                    setSignupPayload({
                      ...signupPayload,
                      email: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="poppins-medium text-left mt-[25px] mb-2 text-white/70">
                Password
              </div>
              <div className="flex justify-start ml-0 text-left">
                <input
                  type="password"
                  placeholder=""
                  className=" p-1 pr-[155px] outline-none text-start w-full bg-transparent border-b"
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
                className="bg-blue-500 rounded-lg text-white poppins-semibold mt-6 2xl:mt-10 p-1"
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
