function Quote() {
  return (
    <div className="h-screen flex flex-col  pl-8 justify-center text-white/80">
      <div className="flex justify-center">
        <div className=" w-[530px] 2xl:w-[700px] bg-white/30 border backdrop-blur-xl p-5 rounded-xl">
          <div className="flex justify-center 2xl:text-3xl text-2xl flex-nowrap  poppins-semibold mx-auto ">
            "The customer service I recieved was exceptional. The support team
            went above and beyond to adress my concerns."
          </div>
          <div className=" text-left text-lg mt-2 poppins-semibold ">
            Jules Winnfield
          </div>
          <div className=" text-left text-sm poppins-semibold ">
            CEO | BlogStack Inc
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
