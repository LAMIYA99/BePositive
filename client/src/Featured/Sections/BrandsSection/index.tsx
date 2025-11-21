import Marquee from "react-fast-marquee";

const BrandSection = () => {
  return (
    <section className="my-[72px]">
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        <div className="flex items-center gap-7">
          <div>
            <img
              src="/Ellipse 51.png"
              alt=""
              className="w-[130px] h-[130px] object-cover"
            />
          </div>
          <div>
            <img
              src="/Ellipse 60.png"
              alt=""
              className="w-[130px] h-[130px] object-cover"
            />
          </div>
          <div>
            <img
              src="/Ellipse 61.png"
              alt=""
              className="w-[130px] h-[130px] object-cover"
            />
          </div>
          <div>
            <img
              src="/Ellipse 62.png"
              alt=""
              className="w-[130px] h-[130px] object-cover"
            />
          </div>

          <div>
            <img
              src="/Ellipse 64.png"
              alt=""
              className="w-[130px] h-[130px] object-cover"
            />
          </div>
          <div>
            <img
              src="/Ellipse 65.png"
              alt=""
              className="w-[130px] h-[130px] object-cover"
            />
          </div>
          <div>
            <img
              src="/Ellipse 61.png"
              alt=""
              className="w-[130px] h-[130px] object-cover"
            />
          </div>
          <div>
            <img
              src="/Ellipse 66.png"
              alt=""
              className="w-[130px] h-[130px] object-cover"
            />
          </div>
          <div>
            <img
              src="/Ellipse 67.png"
              alt=""
              className="w-[130px] h-[130px] object-cover"
            />
          </div>
        </div>
      </Marquee>
    </section>
  );
};

export default BrandSection;
