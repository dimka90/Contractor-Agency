// import { FaCheck } from "react-icons/fa6";

// import useContractorData from "./read";


// function Milestone() {
// const projects = useContractorData(
//   'getContractorsProject'
// );
// console.log(projects)
//   return (
//     <div>
//       <p>{projects.milestone}</p>
//       <div className="text-sm">
//         <div className="pb-3">
//           <div className="flex justify-between">
//             <div className=" ">
//               <p className="">
//                   <FaCheck  className="inline text-white bg-[#2DCE89] rounded-full text-lg p-1 mr-2"/>
//                 Finished
//               </p>
//             </div>
//             <p className="text-[10px] border border-[#2DCE89] py-1 px-3 rounded-lg text-[#666666]">
//               21-11-24
//             </p>
//           </div>
//           <div>
//             <p>Milestone name</p>
//             <p className="leading-5 text-[#666666]">
//               Description is set to handle upto 3 lines of text. Now you can add
//               long description upto 3 lines
//             </p>
//           </div>
//         </div>
//         <div className="pb-3">
//           <div className="flex justify-between">
//           <div className=" ">
//               <p className="">
//                   <FaCheck  className="inline text-white bg-blue-500 rounded-full  text-lg p-1 mr-2"/>
                
//                 In progress
//               </p>
//             </div>
//             <p className="text-[10px] border border-[#2DCE89] py-1 px-3 rounded-lg">
//               21-11-24
//             </p>
//           </div>
//           <div>
//             <p>Milestone name</p>
//             <p className="leading-5 text-[#666666]">
//               Description is set to handle upto 3 lines of text. Now you can add
//               long description upto 3 lines
//             </p>
//           </div>
//         </div>
//         <div>
//           <div className="flex justify-between">
//           <div className=" ">
//               <p className="">
//                   <FaCheck  className="inline text-white bg-gray-400 rounded-full  text-lg p-1 mr-2"/>
                
//                 Upcoming
               
//               </p>
//             </div>
//             <p className="text-[10px] border border-[#2DCE89]\ py-1 px-3 rounded-lg">
//               21-11-24
//             </p>
//           </div>
//           <div>
//             <p>Milestone name</p>
//             {/* <p>Description is set to handle upto 3 lines of text. Now you can add long description upto 3 lines</p> */}
//           </div>
//         </div>
//         <button className="text-[#01644C] text-[14px]">See all</button>
//       </div>
//     </div>
//   );
// }

// export default Milestone;


// // import { useReadContract } from "wagmi";
// // import { wagmiContractConfig } from "../lib/wagmiContractConfig";
// // import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// // function Milestone() {
// //   // Fetch projects for a contractor
// //   const { data: contractorProjects, isLoading, isError } = useReadContract({
// //     ...wagmiContractConfig,
// //     functionName: "getContractorsProject",
// //     args: ["0x1864cdF30E6B98240e4b3eF88bfF5cD5d5BdEF40"], // Replace with the contractor's Ethereum address
// //   });

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-xl font-bold mb-4">Contractor Projects</h1>
// //       {isLoading ? (
// //         <p>Loading projects...</p>
// //       ) : isError ? (
// //         <p>Error fetching projects. Please try again.</p>
// //       ) : contractorProjects && contractorProjects.length > 0 ? (
// //         contractorProjects.map((project, index) => (
// //           <div key={index} className="border p-4 mb-4 rounded shadow">
// //             <h2 className="text-lg font-semibold">
// //               Project #{project.projectId}: {project.description}
// //             </h2>
// //             <p>
// //               <strong>Budget:</strong> {project.budget} wei
// //             </p>
// //             <p>
// //               <strong>Balance:</strong> {project.currentBalance} wei
// //             </p>
// //             <p>
// //               <strong>Start Date:</strong>{" "}
// //               {new Date(Number(project.startDate) * 1000).toLocaleDateString()}
// //             </p>
// //             <p>
// //               <strong>End Date:</strong>{" "}
// //               {new Date(Number(project.endDate) * 1000).toLocaleDateString()}
// //             </p>
// //             <p>
// //               <strong>Status:</strong>{" "}
// //               {project.completed ? (
// //                 <FaCheckCircle className="inline text-green-500" />
// //               ) : (
// //                 <FaTimesCircle className="inline text-red-500" />
// //               )}
// //             </p>

// //             <h3 className="mt-4 text-md font-semibold">Milestones</h3>
// //             {project.mileStone && project.mileStone.length > 0 ? (
// //               <ul className="list-disc pl-5">
// //                 {project.mileStone.map((milestone, i) => (
// //                   <li key={milestone.milestoneId} className="mb-2">
// //                     <p>
// //                       <strong>Description:</strong> {milestone.description}
// //                     </p>
// //                     <p>
// //                       <strong>Payment:</strong> {milestone.paymentAmount} wei
// //                     </p>
// //                     <p>
// //                       <strong>Due Date:</strong>{" "}
// //                       {new Date(Number(milestone.dueDate) * 1000).toLocaleDateString()}
// //                     </p>
// //                     <p>
// //                       <strong>Status:</strong>{" "}
// //                       {milestone.completed ? (
// //                         <FaCheckCircle className="inline text-green-500" />
// //                       ) : (
// //                         <FaTimesCircle className="inline text-red-500" />
// //                       )}
// //                     </p>
// //                   </li>
// //                 ))}
// //               </ul>
// //             ) : (
// //               <p>No milestones for this project.</p>
// //             )}
// //           </div>
// //         ))
// //       ) : (
// //         <p>No projects found for this contractor.</p>
// //       )}
// //     </div>
// //   );
// // }

// // export default Milestone;

// import { FaCheck } from "react-icons/fa6";
// import useContractorData from "./read";

// function Milestone() {
//   // Fetch data from the contract
//   const projects = useContractorData("getContractorsProject", [
//     "0x1864cdF30E6B98240e4b3eF88bfF5cD5d5BdEF40",
//   ]);

//   // Log the projects to verify correct data
//   console.log("Projects:", projects);

//   if (!projects || projects.length === 0) {
//     return <p>Loading milestones...</p>;
//   }

//   return (
//     <div>
//       {projects.map((project, projectIndex) => (
//         <div key={projectIndex} className="pb-5">
//           <h2 className="text-lg font-bold">{project.description}</h2>
//           <p>Budget: {project.budget.toString()} ETH</p>
//           <p>Current Balance: {project.currentBalance.toString()} ETH</p>
//           <div className="text-sm">
//             {project.mileStone?.length > 0 ? (
//               project.mileStone.map((milestone, milestoneIndex) => (
//                 <div key={milestoneIndex} className="pb-3">
//                   <div className="flex justify-between">
//                     <div>
//                       <p>
//                         <FaCheck
//                           className={`inline text-white ${
//                             milestone.completed
//                               ? "bg-[#2DCE89]"
//                               : "bg-gray-400"
//                           } rounded-full text-lg p-1 mr-2`}
//                         />
//                         {milestone.completed ? "Completed" : "Incomplete"}
//                       </p>
//                     </div>
//                     <p className="text-[10px] border border-[#2DCE89] py-1 px-3 rounded-lg text-[#666666]">
//                       Due:{" "}
//                       {new Date(Number(milestone.dueDate) * 1000).toLocaleDateString()}
//                     </p>
//                   </div>
//                   <div>
//                     <p>Milestone ID: {milestone.milestoneId}</p>
//                     <p className="leading-5 text-[#666666]">
//                       {milestone.description}
//                     </p>
//                     <p>Payment Amount: {milestone.paymentAmount} ETH</p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No milestones found for this project.</p>
//             )}
//           </div>
//         </div>
//       ))}
//       <button className="text-[#01644C] text-[14px]">See all</button>
//     </div>
//   );
// }

// export default Milestone;


// import { FaCheck } from "react-icons/fa6";
// import useContractorData from "./read";

// function Milestone() {
//   // Fetch data from the contract
//   const projects = useContractorData("getContractorsProject");

//   // Log the projects to verify correct data
//   console.log("Projects:", projects);

//   if (!projects || projects.length === 0) {
//     return <p>Loading milestones...</p>;
//   }

//   // Get the last project from the array
//   const lastProject = projects[projects.length - 1];

//   return (
//     <div>
//       <h2 className="text-lg font-bold">{lastProject.description}</h2>
//       <p>Budget: {lastProject.budget.toString()} ETH</p>
//       <p>Current Balance: {lastProject.currentBalance.toString()} ETH</p>
//       <div className="text-sm">
//         {lastProject.mileStone?.length > 0 ? (
//           lastProject.mileStone.map((milestone, milestoneIndex) => (
//             <div key={milestoneIndex} className="pb-3">
//               <div className="flex justify-between">
//                 <div>
//                   <p>
//                     <FaCheck
//                       className={`inline text-white ${
//                         milestone.completed
//                           ? "bg-[#2DCE89]"
//                           : "bg-gray-400"
//                       } rounded-full text-lg p-1 mr-2`}
//                     />
//                     {milestone.completed ? "Completed" : "Incomplete"}
//                   </p>
//                 </div>
//                 <p className="text-[10px] border border-[#2DCE89] py-1 px-3 rounded-lg text-[#666666]">
//                   Due:{" "}
//                   {new Date(Number(milestone.dueDate) * 1000).toLocaleDateString()}
//                 </p>
//               </div>
//               <div>
//                 <p>Milestone ID: {milestone.milestoneId}</p>
//                 <p className="leading-5 text-[#666666]">
//                   {milestone.description}
//                 </p>
//                 <p>Payment Amount: {milestone.paymentAmount.toString()} ETH</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No milestones found for this project.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Milestone;


// import { FaCheckCircle, FaClock, FaRegCircle } from "react-icons/fa6";
// import {FaCheckCircle, FaClock, FaRegCircle } from "react-icons/fa6";
import { FaCheckCircle, FaClock, FaRegCircle } from "react-icons/fa";


import useContractorData from "./read";

function Milestone() {
  const projects = useContractorData("getContractorsProject");

  if (!projects || projects.length === 0) {
    console.log(projects)
    return <p className="text-gray-500 text-center">Loading milestones...</p>;
  }

 
  // Fetch the last project from the array
  const lastProject = projects[projects.length - 1];

  const statusIcons = {
    completed: <FaCheckCircle className="text-green-500 text-xl" />,
    inProgress: <FaClock className="text-blue-500 text-xl" />,
    upcoming: <FaRegCircle className="text-gray-400 text-xl" />,
  };

  // Determine milestone status dynamically
  const getStatus = (milestone) => {
    if (milestone.completed) return "completed";
    const now = Math.floor(Date.now() / 1000);
    return milestone.dueDate > now ? "inProgress" : "upcoming";
  };

  return (
    <div className="p-8 bg-gray-50 rounded-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        MileStones
      </h2>

      {/* Render milestones dynamically */}
      <div className="space-y-4">
        {lastProject.mileStone?.map((milestone, index) => {
          const status = getStatus(milestone);

          return (
            <div
              key={index}
              className="flex items-start justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <div className="flex items-start gap-3">
                {statusIcons[status]}
                <div>
                  {/* Milestone Status */}
                  <p
                    className={`font-semibold text-lg ${
                      status === "completed"
                        ? "text-green-600"
                        : status === "inProgress"
                        ? "text-blue-600"
                        : "text-gray-500"
                    }`}
                  >
                    {status === "completed"
                      ? "Finished"
                      : status === "inProgress"
                      ? "In Progress"
                      : "Upcoming"}
                  </p>

                  {/* Milestone Name */}
                  <p className="text-sm font-medium text-gray-800">
                    {milestone.description || "No milestone name"}
                  </p>

                  {/* Milestone Description */}
                  <p className="text-xs text-gray-500 mt-1">
                    Payment Amount:{" "}
                    <span className="font-semibold text-gray-700">
                      {milestone.paymentAmount} ETH
                    </span>
                  </p>
                </div>
              </div>

              {/* Due Date */}
              <div>
                <span
                  className={`inline-block text-xs px-3 py-1 rounded-full ${
                    status === "completed"
                      ? "bg-green-100 text-green-600"
                      : status === "inProgress"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {new Date(Number(milestone.dueDate)* 1000).toLocaleDateString()}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* See all milestones link */}
      <div className="mt-4 text-right">
        <a
          href="#"
          className="text-blue-600 font-medium hover:underline hover:text-blue-700"
        >
          See all milestones
        </a>
      </div>
    </div>
  );
}

export default Milestone;
