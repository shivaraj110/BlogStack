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
            className={` p-2 px-3 text-gray-600 backdrop-blur-sm ${
              step === 1 ? "bg-white/75" : "bg-white/50"
            } rounded-xl border size-fit transi  `}>
            Personal Information
          </div>
          <div
            className={`w-[2px] h-[60px]  ${
              step === 2 ? "bg-blue-500" : "bg-transparent"
            } transi translate-x-24 `}></div>
          <div
            className={` p-2 px-[40px] text-gray-600 transi backdrop-blur-sm ${
              step === 2 ? "bg-white/75" : "bg-white/50"
            } rounded-xl border size-fit poppins  `}>
            Personilization
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
                    className="outline-none border-b-2 bg-transparent "
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
                    className="outline-none border-b-2 bg-transparent "
                  />
                </label>{" "}
                <div className="py-5">
                  <label className="text-gray-600" htmlFor="">
                    <div className="font-semibold">Designation</div>
                    <input
                      type="text"
                      className="outline-none placeholder:text-sm border-b-2 bg-transparent "
                      placeholder="eg- Developer,Proffessor"
                    />
                  </label>
                </div>
                <div className="flex justify-end pt-[100px]">
                  <button
                    onClick={() => {
                      setStep(step + 1);
                    }}
                    className="bg-blue-400 w-[125px] p-1 translate-x-[70px] text-gray-700 rounded-lg">
                    {" "}
                    Next
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>step 2</div>
          )}
        </div>
      </div>
    </div>
  );
}
