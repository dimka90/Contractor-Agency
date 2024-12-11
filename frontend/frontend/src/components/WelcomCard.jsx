import image3 from "../assets/image3.png";

function WelcomeCard() {
  return (
    <div>
      <div className="bg-gradient-to-r  from-[#00644C] to-[#00B24E] text-white flex pt-2 px-3 rounded-lg mb-1">
        <div className="flex flex-col gap-1 mt-7">
          <p className="text-[15px] opacity-75">September 4, 2024</p>
          <p className="text-[20px] font-semibold">Welcome back, John!</p>
          <p className="text-[15px] opacity-75">Stay updated in your Contractor portal</p>
        </div>
        <div>
          <img src={image3} alt="" />
        </div>
      </div>
      <div className="bg-gradient-to-r  from-[#00644C] to-[#00B24E] text-white flex gap-10 py-2 px-3 rounded-lg">
        <div className="flex flex-col gap-1 mt-5 mb-2">
          <p className="text-[15px] opacity-75">0xdafea492d9c6733ae3d56b7ed1a...</p>
          <p className="text-[15px] font-semibold">Available Balance</p>
          <p className="text-[15px] font-semibold">200<span className="opacity-75">Eth</span></p>
        </div>
        <div className="self-end mb-4">
          <button className="bg-gradient-to-r from-[#00CA9A99] to-[#00644C99] border rounded-3xl py-2.5 px-7 text-[14px]">Withdraw</button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeCard;
