import React, { useState, useEffect } from "react";

const ReviewMilestone = ({ milestoneData }) => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  

  useEffect(() => {
    // Simulate fetching data dynamically (e.g., from smart contract)
    if (milestoneData) {
      setDescription(milestoneData.description);
      setImage(milestoneData.image); // For now, handling just one image
    }
  }, [milestoneData]);

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

      {/* Description */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Image */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Image</h3>
        {image ? (
          <img
            src={image}
            alt="Milestone"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ) : (
          <p className="text-gray-500">No image available</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleApprove}
          className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Approve
        </button>
        <button
          onClick={handleReject}
          className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default ReviewMilestone;
