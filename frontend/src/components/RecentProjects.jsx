// import { IoMdArrowDown } from "react-icons/io";
// import MilestoneForm from "./milestone";
// function RecentProjects() {
//   return (
//     <div>
//       <div className="mt-4">
//         <h1 className="text-[20px] font-semibold">Recent Projects</h1>
//         <div className="bg-[#F4F4F4] p-3 rounded-lg">
//           <table className="table-fixed font-norma w-full text-xs">
//             <thead className="border-b border-gray-500">
//               <tr>
//                 <td className="py-2">Project Name <IoMdArrowDown className="inline text-base"/></td>
//                 <td className="py-2">End date</td>
//                 <td className="py-2">Status</td>
//               </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td className="pt-3">Project Name</td>
//                     <td className="text-[#475467] pt-3 ">06/08/2024</td>
//                     <td className="text-[#475467] bg-white border rounded-sm inline mt-3">Completetd</td>
//                 </tr>
//                 <tr>
//                     <td className="pt-3">Project Name</td>
//                     <td className="text-[#475467] pt-3">06/08/2024</td>
//                     <td className="text-[#475467] bg-white border rounded-sm inline mt-9">Cancelled</td>
//                 </tr>
//             </tbody>
//           </table>
         
//         </div>
//       </div>
//     </div>
   
//   );
// }

// export default RecentProjects;

// // import { IoMdArrowDown } from "react-icons/io";
// // import useContractorData from "./read";

// // function RecentProjects() {
// //   // Fetch data from the smart contract
// //   const projectData = useContractorData("getContractorsProject");

// //   if (!projectData || projectData.length === 0) {
// //     return (
// //       <div className="flex items-center justify-center h-64">
// //         <p className="text-gray-500 text-lg">Loading recent projects...</p>
// //       </div>
// //     );
// //   }

// //   // Exclude the last project
// //   const recentProjects = projectData.slice(0, -1);

// //   // Helper to format timestamp into readable date
// //   const formatDate = (timestamp) => {
// //     const date = new Date(Number(timestamp) * 1000);
// //     return date.toLocaleDateString();
// //   };

// //   return (
// //     <div>
// //       <div className="mt-4">
// //         <h1 className="text-[20px] font-semibold text-gray-800">Recent Projects</h1>
// //         <div className="bg-[#F4F4F4] p-3 rounded-lg">
// //           <table className="table-fixed font-normal w-full text-xs">
// //             <thead className="border-b border-gray-500">
// //               <tr>
// //                 <td className="py-2 font-semibold text-gray-700">
// //                   Project Name <IoMdArrowDown className="inline text-base" />
// //                 </td>
// //                 <td className="py-2 font-semibold text-gray-700">End Date</td>
// //                 <td className="py-2 font-semibold text-gray-700">Status</td>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {recentProjects.map((project, index) => (
// //                 <tr key={index} className="border-b border-gray-300">
// //                   <td className="pt-3 text-gray-800">
// //                     {project.description || "Unnamed Project"}
// //                   </td>
// //                   <td className="text-[#475467] pt-3">
// //                     {project.mileStone && project.mileStone.length > 0
// //                       ? formatDate(project.mileStone[0].endDate)
// //                       : "No End Date"}
// //                   </td>
// //                   <td
// //                     className={`text-[#475467] py-1 px-3 rounded-sm inline-block ${
// //                       project.completed
// //                         ? "bg-green-100 text-green-600"
// //                         : "bg-red-100 text-red-600"
// //                     }`}
// //                   >
// //                     {project.completed ? "Completed" : "In Progress"}
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default RecentProjects;

import { IoMdArrowDown } from "react-icons/io";

function RecentProjects() {
  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Recent Projects</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full text-sm text-gray-600">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="py-4 px-6 text-left font-semibold text-gray-700">
                Project Name <IoMdArrowDown className="inline text-gray-500 text-base ml-1" />
              </th>
              <th className="py-4 px-6 text-left font-semibold text-gray-700">End Date</th>
              <th className="py-4 px-6 text-left font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 transition">
              <td className="py-4 px-6 font-medium text-gray-800">Project Alpha</td>
              <td className="py-4 px-6 text-gray-600">06/08/2024</td>
              <td>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                  Completed
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="py-4 px-6 font-medium text-gray-800">Project Beta</td>
              <td className="py-4 px-6 text-gray-600">06/08/2024</td>
              <td>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-red-800 bg-red-100 rounded-full">
                  Cancelled
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentProjects;
