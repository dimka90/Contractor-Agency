import { FaCheck } from "react-icons/fa6";

function Milestone() {
  return (
    <div>
      <p>Milestones</p>
      <div className="text-sm">
        <div className="pb-3">
          <div className="flex justify-between">
            <div className=" ">
              <p className="">
                  <FaCheck  className="inline text-white bg-[#2DCE89] rounded-full text-lg p-1 mr-2"/>
                
                Finished
              </p>
            </div>
            <p className="text-[10px] border border-[#2DCE89] py-1 px-3 rounded-lg text-[#666666]">
              21-11-24
            </p>
          </div>
          <div>
            <p>Milestone name</p>
            <p className="leading-5 text-[#666666]">
              Description is set to handle upto 3 lines of text. Now you can add
              long description upto 3 lines
            </p>
          </div>
        </div>
        <div className="pb-3">
          <div className="flex justify-between">
          <div className=" ">
              <p className="">
                  <FaCheck  className="inline text-white bg-blue-500 rounded-full  text-lg p-1 mr-2"/>
                
                In progress
              </p>
            </div>
            <p className="text-[10px] border border-[#2DCE89] py-1 px-3 rounded-lg">
              21-11-24
            </p>
          </div>
          <div>
            <p>Milestone name</p>
            <p className="leading-5 text-[#666666]">
              Description is set to handle upto 3 lines of text. Now you can add
              long description upto 3 lines
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
          <div className=" ">
              <p className="">
                  <FaCheck  className="inline text-white bg-gray-400 rounded-full  text-lg p-1 mr-2"/>
                
                Upcoming
              </p>
            </div>
            <p className="text-[10px] border border-[#2DCE89]\ py-1 px-3 rounded-lg">
              21-11-24
            </p>
          </div>
          <div>
            <p>Milestone name</p>
            {/* <p>Description is set to handle upto 3 lines of text. Now you can add long description upto 3 lines</p> */}
          </div>
        </div>
        <button className="text-[#01644C] text-[14px]">See all</button>
      </div>
    </div>
  );
}

export default Milestone;
