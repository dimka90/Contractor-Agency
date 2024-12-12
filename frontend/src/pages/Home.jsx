import image1 from "../assets/image5.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="bg-[#F5F7FA]">
    <Navbar />
      <div className=" flex xl:px-32 lg:px-20 lg:py-16 lg:flex-row flex-col xl:h-screen lg:h-screen">
        <div className="self-center">
          <h1 className="text-[40px] font-medium ">
            Streamline Contract Management from Start to Finish
          </h1>
          <p className="text-[18px] text-[#505F98] w-[409px] mb-7">
            An all-in-one platform for government parastatals and contractors to
            monitor, manage, and complete projects seamlessly
          </p>
          <button className="bg-[#00644C] text-white text-[15px] py-2 px-5 rounded-sm">
            Connect Wallet
          </button>
        </div>
        <div className="self-center">
          <img src={image1} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
