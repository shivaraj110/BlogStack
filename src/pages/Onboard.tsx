export default function Onboard() {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-bold  bg-gradient-to-r h-14 poppins-medium from-blue-500 via-blue-100 to-blue-500 text-transparent bg-clip-text mt-3 ml-64">
        BlogStack
      </h1>{" "}
      <div className=" text-xl poppins-light ml-64">
        Complete providing your informantion for enhancing your experience.
      </div>
      <div className="border w-[900px] ml-64 rounded-lg mt-5 h-[500px] ">
        <div className="">
          <div className="p-10 poppins-semibold text-2xl text-gray-600">
            About You
          </div>
          <div className="flex justify-around">
            <div className="">
              <div className=" poppins-semibold text-xl text-gray-600">
                Personal Info
              </div>
              <div className=" poppins-light text-sm">
                Provide your personal info
              </div>
            </div>
            <div className=" pr-10 ">
              <div className="w-[410px] pl-3 h-fit bg-gray-100 rounded-md">
                <div className="text-gray-500 pt-1 poppins-light">
                  Organization
                </div>
                <input
                  type="text"
                  className=" outline-none w-full text-gray-600 bg-transparent"
                />
              </div>
              <div className="flex gap-2">
                <div className="mt-5">
                  <div className="w-fit h-fit bg-gray-100 rounded-md">
                    <div className="px-5 text-sm poppins-light  text-gray-500">
                      Title*
                    </div>
                    <select
                      name="Title"
                      id="Title"
                      className="px-5 pb-1 mr-2 text-gray-700 bg-gray-100 poppins-light cursor-pointer">
                      <option value="Mr">Mr</option>
                      <option value="Ms">Ms</option>
                      <option value="Dr">Dr</option>
                      <option value="Prof">Prof</option>
                    </select>
                  </div>
                </div>
                <div className="w-[150px] pl-3 h-fit bg-gray-100 mt-5 rounded-md">
                  <div className="text-gray-500 text-sm poppins-light">
                    First Name*
                  </div>
                  <input
                    type="text"
                    className=" outline-none w-full pb-1 text-gray-600 bg-transparent"
                  />
                </div>{" "}
                <div className="w-[150px] pl-3 h-fit bg-gray-100 mt-5 rounded-md">
                  <div className="text-gray-500 text-sm poppins-light">
                    Last Name*
                  </div>
                  <input
                    type="text"
                    className=" outline-none w-full pb-1 text-gray-600 bg-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-400 mt-10 w-[81%] mx-16 h-[1px] "></div>
        </div>
      </div>
    </div>
  );
}
