import {
  ArrowLeft,
  Code,
  GraduationCap,
  LucideGroup,
  Microscope,
  Pen,
  PenBoxIcon,
} from "lucide-react";
import { useState } from "react";
import { useUsername } from "../hooks/useUsername";

export default function Onboard() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const username = useUsername();
  const [step, setStep] = useState(1);
  const [designation, setDesignation] = useState("");
  const [uvalue, setUvalue] = useState("");
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
              step >= 2 ? "bg-blue-500" : "bg-transparent"
            } transi `}></div>
          <div
            className={` p-2 px-3 text-gray-600 transi backdrop-blur-sm ${
              step === 2 ? "bg-white/75" : "bg-white/50"
            } rounded-xl border size-fit poppins  `}>
            Professional Information
          </div>{" "}
          <div
            className={`w-[2px] h-[60px] mx-auto  ${
              step >= 3 ? "bg-blue-500" : "bg-transparent"
            } transi `}></div>
          <div
            className={` p-2 px-[60px] text-gray-600 transi backdrop-blur-sm ${
              step === 3 ? "bg-white/75" : "bg-white/50"
            } rounded-xl border size-fit poppins  `}>
            Profile Setup
          </div>
        </div>
        <div className="p-10">
          {step >= 2 ? (
            <div>
              <ArrowLeft
                className="text-gray-600 cursor-pointer"
                onClick={() => {
                  setStep(step - 1);
                }}
              />
            </div>
          ) : null}
          {step === 1 ? (
            <div>
              <div className="py-2">
                <label className="text-gray-600" htmlFor="">
                  <div className="font-semibold">First Name</div>
                  <input
                    value={fname}
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
                    value={lname}
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
                      value={"Mr"}
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
          ) : step === 2 ? (
            <div className="">
              <div className="text-gray-600 font-semibold p-2">
                Choose your Profession
              </div>
              <div className="flex gap-4">
                <div
                  className={` ${
                    designation === "Student" ? "bg-slate-100 " : "bg-white/80 "
                  } flex justify-center shadow-xl gap-3  flex-col py-5 w-fit px-10 rounded-lg border cursor-pointer text-blue-500`}
                  onClick={() => {
                    setDesignation("Student");
                  }}>
                  <GraduationCap className="mx-auto" />
                  <p className="">Student</p>
                </div>
                <div
                  className={` ${
                    designation === "Developer" ? "bg-slate-100" : "bg-white/80"
                  } flex justify-center shadow-xl  gap-3 flex-col py-5 w-fit px-[30px] rounded-lg border cursor-pointer text-blue-500`}
                  onClick={() => {
                    setDesignation("Developer");
                  }}>
                  <Code className="mx-auto" />
                  <p className="">Developer</p>
                </div>
              </div>{" "}
              <div className="flex gap-4 pt-5">
                <div
                  onClick={() => {
                    setDesignation("Researcher");
                  }}
                  className={` ${
                    designation === "Researcher"
                      ? "bg-slate-100"
                      : "bg-white/80"
                  } flex justify-center shadow-xl  gap-3  flex-col py-5 w-fit px-[25px] rounded-lg border cursor-pointer text-blue-500`}>
                  <Microscope className="mx-auto" />
                  <p className="">Researcher</p>
                </div>
                <div
                  className={` ${
                    designation === "Other" ? "bg-slate-100" : "bg-white/80"
                  } flex justify-center shadow-xl gap-3 flex-col py-5 w-fit px-[50px] rounded-lg border cursor-pointer text-blue-500`}
                  onClick={() => {
                    setDesignation("Other");
                  }}>
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
          ) : (
            <div>
              <div className="flex flex-col ml-[125px] ">
                <div className="size-20 cursor-pointer bg-blue-500 rounded-full text-white/80 flex flex-col justify-center text-center font-semibold text-xl">
                  {username[0]}
                </div>
                <PenBoxIcon className="size-5 ml-8 text-transparent  hover:text-white/85 cursor-pointer -translate-y-6" />
              </div>
              <div className="flex">
                <input
                  onChange={(e) => {
                    setUvalue(e.target.value);
                  }}
                  type="text"
                  className="outline-none w-[125px] mx-auto bg-transparent text-center p-1 text-gray-700 font-semibold translate-x-16"
                  value={uvalue === "" ? username : uvalue}
                  contentEditable
                />
                <div className="text-gray-400 text-sm ml-10 mt-[6px]">
                  (editable)
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
