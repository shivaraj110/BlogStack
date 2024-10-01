function Quote() {
  return (
    <div className="bg-blue-200 h-screen flex flex-col pl-8 justify-center ">
      <div className="flex justify-center">
        <div className=" max-w-[530px]">
          <div className="flex justify-center text-2xl flex-nowrap poppins-semibold mx-auto text-gray-700">
            "The customer service I recieved was exceptional. The support team
            went above and beyond to adress my concerns."
          </div>
          <div className=" text-left text-lg mt-2 poppins-semibold text-gray-700 ">
            Jules Winnfield
          </div>
          <div className=" text-left text-sm text-gray-500 poppins-semibold ">
            CEO | Acme Inc
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
