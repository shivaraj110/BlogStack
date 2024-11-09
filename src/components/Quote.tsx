function Quote() {
  return (
    <div className="h-screen flex flex-col pl-8 justify-center text-white/80">
      <div className="flex justify-center">
        <div className=" max-w-[530px]">
          <div className="flex justify-center text-2xl flex-nowrap poppins-semibold mx-auto ">
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
