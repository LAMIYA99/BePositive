const Header = () => {
  return (
    <header className="container max-w-[1440px]  flex items-center justify-between mx-auto py-10">
      <div>
        <img
          src="/Logo.png"
          alt=""
          className="w-[72px] h-[72px] object-contain"
        />
      </div>
      <nav className=" w-[846px] flex items-center justify-between ">
        <ul className="flex gap-14 text-[24px] font-inter font-semibold">
          <li className="flex items-center justify-center border-b-[3px] border-b-transparent hover:border-b-[#E5D037] duration-300 cursor-pointer">
            Home
          </li>
          <li className="flex items-center justify-center border-b-[3px] border-b-transparent hover:border-b-[#E5D037] duration-300 cursor-pointer">
            About me
          </li>
          <li className="flex items-center justify-center border-b-[3px] border-b-transparent hover:border-b-[#E5D037] duration-300 cursor-pointer">
            Services
          </li>
          <li className="flex items-center justify-center border-b-[3px] border-b-transparent hover:border-b-[#E5D037] duration-300 cursor-pointer">
            Blog
          </li>
          <li className="flex items-center justify-center border-b-[3px] border-b-transparent hover:border-b-[#E5D037] duration-300 cursor-pointer">
            FAQ
          </li>
        </ul>
        <button className="px-3 py-2 bg-[#0707B0] text-white w-[150px] h-12 rounded-[50px] text-[16px] font-inter leading-6 font-normal">
          Contact
        </button>
      </nav>
      <div>
        <ul className="flex items-center gap-3 w-[97px] justify-center">
          <li className="text-[24px] font-inter font-medium leading-[34px] text-black">
            Az
          </li>
          <li>
            <img
              src="/Aze.png"
              alt=""
              className="w-[42px] h-[42px] object-contain"
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
