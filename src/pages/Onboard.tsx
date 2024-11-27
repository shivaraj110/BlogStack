import {
  ArrowLeft,
  Code,
  GraduationCap,
  Group,
  GroupIcon,
  LucideGroup,
  Microscope,
} from "lucide-react";
import { useState } from "react";

export default function Onboard() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [step, setStep] = useState(1);
  const [designation, setDesignation] = useState("");
  return (
    <div className="flex flex-col ">
      <div className=" flex px-28 bg-blue-200  ">
        <img
          src="../../public/logo.png"
          alt="logo"
          className=" h-[80px]  mt-2 "
        />
      </div>
      <div className="bg-blue-200 w-screen">
        <div className="flex flex-col w-96 mx-auto text-center pt-5 pb-48 text-gray-600">
          <h3 className="text-3xl font-semibold">Welcome to BlogStack!</h3>
          <p className="text-xl">
            Enhance your experience for blogging around with fun! Start by
            filling out the info we need.
          </p>
        </div>
      </div>
      <div className="bg-white/75 backdrop-blur-sm w-[700px] rounded-xl -translate-y-36 h-96 mx-auto flex ">
        <div className="bg-blue-400 backdrop-blur-sm p-10 rounded-l-lg">
          <div
            className={` p-2 px-[25px] text-gray-600 backdrop-blur-sm ${
              step === 1 ? "bg-white/75" : "bg-white/50"
            } rounded-xl border size-fit transi  `}>
            Personal Information
          </div>
          <div
            className={`w-[2px] h-[60px] mx-auto  ${
              step === 2 ? "bg-blue-500" : "bg-transparent"
            } transi `}></div>
          <div
            className={` p-2 px-3 text-gray-600 transi backdrop-blur-sm ${
              step === 2 ? "bg-white/75" : "bg-white/50"
            } rounded-xl border size-fit poppins  `}>
            Professional Information
          </div>
        </div>
        <div className="p-10">
          {step == 1 ? (
            <div>
              <div className="py-2">
                <label className="text-gray-600" htmlFor="">
                  <div className="font-semibold">First Name</div>
                  <input
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                    type="text"
                    className="outline-none border-b bg-transparent "
                  />
                </label>{" "}
              </div>
              <div className="py-5">
                <label className="text-gray-600" htmlFor="">
                  <div className="font-semibold">Last Name</div>
                  <input
                    onChange={(e) => {
                      setLname(e.target.value);
                    }}
                    type="text"
                    className="outline-none border-b bg-transparent "
                  />
                </label>{" "}
                <div className="py-5">
                  <label className="text-gray-600" htmlFor="">
                    <div className="font-semibold">Title</div>
                    <select
                      name="title"
                      id=""
                      className="w-[300px] text-gray-500 font-semibold rounded-lg p-1 mt-2">
                      <option value="Dr">Dr</option>
                      <option value="Mr">Mr</option>
                      <option value="Ms">Ms</option>
                    </select>
                  </label>
                </div>
                <div className="flex justify-end pt-[90px]">
                  <button
                    onClick={() => {
                      setStep(step + 1);
                    }}
                    className="bg-blue-400 w-[125px] p-1 translate-x-[45px] text-gray-700 rounded-lg">
                    {" "}
                    Next
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="">
              {step > 1 ? (
                <div>
                  <ArrowLeft
                    className="text-gray-600 cursor-pointer"
                    onClick={() => {
                      setStep(step - 1);
                    }}
                  />
                </div>
              ) : null}
              <div className="text-gray-600 font-semibold p-2">
                Choose your Profession
              </div>
              <div className="flex gap-4">
                <div className="bg-white/80 flex justify-center shadow-xl gap-3  flex-col py-5 w-fit px-10 rounded-lg border cursor-pointer text-blue-500">
                  <GraduationCap className="mx-auto" />
                  <p className="">Student</p>
                </div>
                <div className="bg-white/80 flex justify-center shadow-xl  gap-3 flex-col py-5 w-fit px-[30px] rounded-lg border cursor-pointer text-blue-500">
                  <Code className="mx-auto" />
                  <p className="">Developer</p>
                </div>
              </div>{" "}
              <div className="flex gap-4 pt-5">
                <div className="bg-white/80 flex justify-center shadow-xl  gap-3  flex-col py-5 w-fit px-[25px] rounded-lg border cursor-pointer text-blue-500">
                  <Microscope className="mx-auto" />
                  <p className="">Researcher</p>
                </div>
                <div className="bg-white/80 flex justify-center shadow-xl gap-3 flex-col py-5 w-fit px-[50px] rounded-lg border cursor-pointer text-blue-500">
                  <LucideGroup className="mx-auto" />
                  <p className="">Other</p>
                </div>
              </div>
              <div className=" flex justify-end pt-[40.5px]">
                <button
                  onClick={() => {
                    setStep(step + 1);
                  }}
                  className="bg-blue-400 w-[125px] p-1 translate-x-[41px] text-gray-700 rounded-lg">
                  {" "}
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
