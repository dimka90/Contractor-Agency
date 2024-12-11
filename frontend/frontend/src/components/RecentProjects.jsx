import { IoMdArrowDown } from "react-icons/io";

function RecentProjects() {
  return (
    <div>
      <div className="mt-4">
        <h1 className="text-[20px] font-semibold">Recent Projects</h1>
        <div className="bg-[#F4F4F4] p-3 rounded-lg">
          <table className="table-fixed font-norma w-full text-xs">
            <thead className="border-b border-gray-500">
              <tr>
                <td className="py-2">Project Name <IoMdArrowDown className="inline text-base"/></td>
                <td className="py-2">End date</td>
                <td className="py-2">Status</td>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="pt-3">Project Name</td>
                    <td className="text-[#475467] pt-3 ">06/08/2024</td>
                    <td className="text-[#475467] bg-white border rounded-sm inline mt-3">Completetd</td>
                </tr>
                <tr>
                    <td className="pt-3">Project Name</td>
                    <td className="text-[#475467] pt-3">06/08/2024</td>
                    <td className="text-[#475467] bg-white border rounded-sm inline mt-9">Cancelled</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RecentProjects;
