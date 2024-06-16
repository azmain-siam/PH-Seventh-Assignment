// import bannerImage from "../../assets/Photos/Banner.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="hero lg:h-[550px] rounded-[32px]  bg-no-repeat bg-cover background">
        <div className="hero-content flex-col lg:flex-row-reverse justify-center lg:justify-between gap-8 lg:gap-36 p-8">
          <div className="text-center">
            <h1 className="mb-5 text-2xl lg:text-5xl font-bold lg:w-[890px] mx-auto leading-tight text-white">
              Discover an exceptional cooking <br /> class tailored for you!
            </h1>
            <p className="mb-5 max-w-[900px] text-sm md:text-base text-[#ffffffcc]">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="flex flex-row justify-center gap-2 md:gap-3">
              <button className="px-2 py-3 md:px-7 bg-[#0BE58A] hover:bg-[#34a073] border-2 border-[#0BE58A] hover:border-[#34a073] text-sm md:text-xl duration-300 rounded-full font-bold text-black max-w-fit">
                Explore Now
              </button>
              <button className="bg-transparent hover:bg-white hover:text-black py-3 md:py-4 px-4 md:px-7 border-2 border-white hover:border-white text-sm md:text-xl duration-300 rounded-full font-bold text-white outline-none max-w-fit">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
