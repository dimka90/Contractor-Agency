import profileImage from "../assets/Bitmap.png";
// import { Link } from "react-router-dom";

function SideMenu() {
  return (
    <div className="text-white min-h-screen flex flex-col justify-between p-[28px]">
      <div>
        <div>
          <span className="bg-[#DC3434] lg:text-[13px] font-semibold lg:px-2 lg:py-0.5 rounded-full absolute left-20 top-5">
            4
          </span>
          <img src={profileImage} alt="" className="rounded-lg" />
        </div>
        <div>
          <h2 className="lg:text-[30px] font-semibold font-poppins">Samantha</h2>
          <p className="lg:text-[17px] opacity-60 mb-7">samantha@email.com</p>
        </div>

        <div>
          <ul className="lg:text-base flex flex-col lg:gap-[40px]">
            <li className="font-semibold">Dashboard</li>
            <li>Payment History</li>
            <li>My Projects</li>
            <li>Notifications</li>
          </ul>
        </div>
      </div>

      <div>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default SideMenu;
