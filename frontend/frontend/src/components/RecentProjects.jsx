import { IoMdArrowDown } from "react-icons/io";

function RecentProjects() {
  return (
    <div>
      <div className="mt-10">
        <h1 className="text-[20px] font-semibold">Recent Projects</h1>
        <div className="bg-[#F4F4F4] p-3 rounded-lg">
          <table className="table-fixed font-norma w-full">
            <thead className="border-b border-gray-500">
              <tr>
                <td>Project Name</td>
                <td>End date</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Project Name</td>
                    <td>06/08/2024</td>
                    <td>Completetd</td>
                </tr>
                <tr>
                    <td>Project Name</td>
                    <td>06/08/2024</td>
                    <td>Uncompletetd</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RecentProjects;
