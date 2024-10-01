import { Link, useNavigate } from "react-router-dom";
import Quote from "../components/Quote";
import { SigninInput } from "@shivaraj0110/medium-common";
import { useState } from "react";
import axios from "axios";
function Login() {
  const [pressed, setPressed] = useState(false);
  const [signinPayload, setSigninPayload] = useState<SigninInput>({
    name: "",
    email: "",
    password: "",
  });
  const nav = useNavigate();
  const loginUser = async () => {
    try {
      setPressed(true);
      const res = await axios.post(
        "https://backend.shivarajchandaragi9.workers.dev/api/v1/user/signin",
        signinPayload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.jwt) {
        nav("/blogs");
        alert("logged in!");
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
                Login to your account
              </div>
              <div className="text-sm poppins-semibold text-center text-gray-400">
                Don't have an account ?{" "}
                <Link to={"/signup"} className="underline cursor-pointer">
                  Signup
                </Link>
              </div>
              <div className="poppins-medium text-left mt-[25px] mb-2">
                Email
              </div>
              <div className="flex justify-start ml-0  text-left">
                <input
                  onChange={(e) => {
                    setSigninPayload({
                      ...signinPayload,
                      email: e.target.value,
                    });
                  }}
                  type="email"
                  placeholder="example@gmail.com"
                  className="border rounded-md p-1 pr-[155px] text-start border-gray-500"
                />
              </div>
              <div className="poppins-medium text-left mt-[25px] mb-2">
                Password
              </div>
              <div className="flex justify-start ml-0 text-left">
                <input
                  onChange={(e) => {
                    setSigninPayload({
                      ...signinPayload,
                      password: e.target.value,
                    });
                  }}
                  type="password"
                  placeholder=""
                  className="border rounded-md p-1 pr-[155px] text-start border-gray-500"
                />
              </div>
              <button
                onClick={loginUser}
                className="bg-blue-500 rounded-lg text-white poppins-semibold mt-6 p-1">
                {pressed ? "Logging in " : "Login"}
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

export default Login;
