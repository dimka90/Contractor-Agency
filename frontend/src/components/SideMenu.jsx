import profileImage from "../assets/Bitmap.png";
import { MdSpaceDashboard } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";

import { Link } from "react-router-dom";
// import 

function SideMenu() {
  return (
    <div className="text-white h-screen flex flex-col justify-between p-[20px]">
      <div>
        <div>
          <span className="bg-[#DC3434] lg:text-[13px] font-semibold lg:px-2 lg:py-0.5 rounded-full absolute left-20 ">
            4
          </span>
          <img src={profileImage} alt="" className="rounded-lg" />
        </div>
        <div>
          <h2 className="lg:text-[30px] font-semibold font-poppins">Samantha</h2>
          <p className="lg:text-[17px] opacity-60 mb-7">samantha@email.com</p>
        </div>

        <div>
          <ul className="lg:text-base flex flex-col lg:gap-[35px]">
            <li className="font-semibold"><MdSpaceDashboard  className="inline text-white text-xl mr-3"/><Link to="/dashboard">Dashboard</Link></li>
            {/* <li className=""><MdSpaceDashboard  className="inline text-white text-xl mr-3"/><Link to="/assign-contract">Assign Contract</Link></li> */}
            <li><MdPayments  className="inline text-xl text-white mr-3"/><Link to="/payment"> Payment History</Link></li>
            <li><GrProjects className="inline text-xl text-white mr-3"/> <Link to="/projects">My Projects</Link></li>
            <li><BiSolidMessageSquareDetail className="inline text-xl text-white mr-3"/>Notifications</li>
          </ul>
        </div>
      </div>

      <div>
        <button><IoIosLogOut className="inline text-2xl mr-3" />Logout</button>
      </div>
    </div>
  );
}

export default SideMenu;
