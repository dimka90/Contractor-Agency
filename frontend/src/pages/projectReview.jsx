import React, { useState, useEffect } from "react";
import { useReadContract,useAccount } from "wagmi";
import { wagmiContractConfig } from "../lib/wagmiContractConfig";

const ReviewMilestone = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const { address } = useAccount()
  const { data: milestoneData, error} = useReadContract({
    ...wagmiContractConfig,
    functionName: ' getsubmittedMilestone',
    args: []
  });

  

  console.log(milestoneData)

  // useEffect(() => {
  //   // `https://gateway.pinata.cloud/ipfs/${}`
  //   // Simulate fetching data dynamically (e.g., from smart contract)
  //   if (milestoneData) {
  //     setDescription(milestoneData.description);
  //     setImage(milestoneData.image); // For now, handling just one image
  //   }
  // }, [milestoneData]);

  // Placeholder handlers for Approve and Reject
  const handleApprove = () => {
    console.log("Milestone Approved");
  };

  const handleReject = () => {
    console.log("Milestone Rejected");
  };

  return (
    
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg font-sans">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-6">Review Milestone</h2>
      
      {error && error.message && error.message}
      {/* Description */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        {/* <p className="text-gray-700 leading-relaxed">{description}</p> */}
        <p className="text-gray-700 leading-relaxed">description</p> 
      </div>

      {/* Image */}
      <div className="mb-6">
        {/* <h3 className="text-lg font-semibold mb-2">Image</h3>
        {image ? (
          <img
            src={image}
            alt="Milestone"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ) : (
          <p className="text-gray-500">No image available</p>
        )} */}
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button
          // onClick={handleApprove}
          className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Approve
        </button>
        <button
          // onClick={handleReject}
          className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Reject
        </button>


      </div>
    </div>
  );
};

export default ReviewMilestone;


// import React, { useEffect, useState } from 'react';
// import { useReadContract ,useAccount} from 'wagmi';
// import { wagmiContractConfig } from "../lib/wagmiContractConfig";

// const ReviewMilestone = () => {
//   const { address } = useAccount();
//   const [submittedMilestones, setSubmittedMilestones] = useState([]);
//   const [projectsData, setProjectsData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch submitted milestones
//   const { data: milestonesData, isLoading: isMilestonesLoading } = useReadContract({
//     ...wagmiContractConfig,
//     functionName: 'getsubmittedMilestone'
//   });

//   // Fetch project details for each submitted milestone
//   useEffect(() => {
//     const fetchProjects =  () => {
//       if (milestonesData && milestonesData.length > 0) {
//         const projectPromises = milestonesData.map(async (milestone) => {
        
//           const projectData = useReadContract({
//             ...wagmiContractConfig,
//             functionName: 'getProject',
//             args: [milestone.projectId],
//           });
//           return { 
//             projectId, 
//             milestoneId: milestone.milestoneId, 
//             projectData 
//           };
//         });

//         const fetchedProjects =projectsData;
//         setProjectsData(fetchedProjects);
//       }
//       setLoading(false);
//     };

//     if (milestonesData && milestonesData.length > 0) {
//       fetchProjects();
//     }
//   }, [milestonesData]);

//   if (isMilestonesLoading || loading) return <p>Loading...</p>;

//   if (!milestonesData || milestonesData.length === 0) {
//     return <p>No milestones submitted.</p>;
//   }
// console.log("iiiiii")
//   return (
//     <div>
//       <h2>Submitted Milestones</h2>
//       <ul>
//         {projectsData.map((item, index) => (
//           <li key={index}>
//             <h3>Project ID: {item.projectId}</h3>
//             <h4>Milestone ID: {item.milestoneId}</h4>
//             <p>Project Description: {item.projectData.description}</p>
//             {item.projectData.mileStone
//               .filter((milestone) => milestone.milestoneId === item.milestoneId) // Match submitted milestone ID
//               .map((milestone, idx) => (
//                 <div key={idx}>
//                   <p>Milestone Description: {milestone.description}</p>
//                   <p>
//                     Image CID: <a href={`https://ipfs.io/ipfs/${milestone.milestoneImageCid}`} target="_blank" rel="noopener noreferrer">{milestone.milestoneImageCid}</a>
//                   </p>
//                 </div>
//               ))}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ReviewMilestone;