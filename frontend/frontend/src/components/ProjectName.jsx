import { FaCheck } from "react-icons/fa6";


function ProjectName() {
  return (
    <div className="mt-4">
      <h1 className="text-[20px] font-semibold">Project Name</h1>
      <div className="bg-[#F4F4F4] p-3 rounded-lg">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <span className="text-white bg-blue-500 rounded-full p-1"><FaCheck /></span>
            <p className="text-[14px] text-black">In Progress</p>
          </div>
          <div className="flex gap-2">
            <p className="text-[10px] self-center">Milstone close date</p>
            <p className="text-[10px] border border-gray-600 py-1 px-3 rounded-lg">21-11-24</p>
          </div>
        </div>
        <p className="text-[14px] leading-6 max-w-[478px]">
          Description is set to handle upto 3 lines of text. Now you can add
          long description upto 3 lines Sorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
        <button className="bg-gradient-to-r from-[#00CA9A99] to-[#00644C99] rounded-3xl py-2.5 px-7 text-[14px] text-white">
          Complete Milestone
        </button>
      </div>
    </div>
  );
}

export default ProjectName;
