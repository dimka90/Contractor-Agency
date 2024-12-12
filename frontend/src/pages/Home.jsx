import image1 from "../assets/image5.png";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="bg-white">
    <Navbar />
      <div className=" flex xl:px-32 lg:px-20 pt-16">
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
        <div>
          <img src={image1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
