const Header = () => {
  return (
    <header className="max-w-[1440px] flex items-center mx-auto container">
      <div>
        <img src="/Logo.png" alt="" />
      </div>
      <nav className="max-w-[1296px] flex items-center mx-auto container ">
        <div className="flex justify-between max-w-[846px] items-center">
          <ul className="flex gap-14 text-[24px] font-inter font-semibold">
            <li>Home</li>
            <li>About me</li>
            <li>Services</li>
            <li>Blog</li>
            <li>FAQ</li>
          </ul>
          <button>Contact</button>
        </div>
      </nav>
      <div>
        <h5>sakfghgj</h5>
      </div>
    </header>
  );
};

export default Header;
