import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useWriteContract,  useWaitForTransactionReceipt,useAccount,} from 'wagmi'
// import { WagmiAbi} from '../wagmiAbi' 
import { wagmiContractConfig } from '../lib/wagmiContractConfig';


 function AssignContract () {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isConnected } = useAccount()
  // const [loading, setLoading] = useState(false);
  const [milestones, setMilestones] = useState([
    { description: '', startDate: '', endDate: '' },
    { description: '', startDate: '', endDate: '' },
  ]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const {data: hash, writeContract, error  } = useWriteContract();

  const {
    data: transactionData,
    writeContract,
    isLoading: isWriting,
  error

  } = useWriteContract(

  );


   // Wait for transaction confirmation
   const { isLoading: isConfirming, isSuccess: isConfirmed } =useWaitForTransactionReceipt({
    hash: transactionData?.hash,
  });


  const [milestoneErrors, setMilestoneErrors] = useState([]);

  const convertToTimestamp = (date) => Math.floor(new Date(date).getTime() / 1000);


  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
    setMilestoneErrors([]); // Clear milestone errors when closing the modal
  };

  const handleMilestoneChange = (index, field, value) => {
    const updatedMilestones = [...milestones];
    updatedMilestones[index][field] = value;
    setMilestones(updatedMilestones);
  };

  const validateMilestones = () => {
    const errors = milestones.map((milestone) => {
      const error = {};
      if (!milestone.description) error.description = 'Milestone name is required';
      if (!milestone.startDate) error.startDate = 'Start date is required';
      if (!milestone.endDate) error.endDate = 'End date is required';
      return error;
    });
    setMilestoneErrors(errors);
    return errors.every((error) => Object.keys(error).length === 0);
  };

  
 
  
    async function onSubmit(data){
  // writeContract({data});
  if (!validateMilestones()) {
    toast.error('Please fix milestone errors before submitting');
    return;
  }

  const payload = {
    description: data.description,
    budget: data.budget,
    contractorAddress: data.contractorAddress,
    startDate: convertToTimestamp(data.startDate),
    endDate: convertToTimestamp(data.endDate),
    milestones,
  };
  console.log(payload)
  try {
  // Call the contract write function
if (isConnected) {
console.log(isConnected);
 console.log(transactionData)
  writeContract(
     {...wagmiContractConfig,
      functionName: 'createProject',
    args: [
      payload.description,
      payload.budget,
      0,
      payload.contractorAddress,
      payload.startDate,
      payload.endDate,
      milestones.map((m) => [1, m.description,false, 0, convertToTimestamp(m.startDate), convertToTimestamp(m.endDate), ' ']),
    ],
  });
  toast.info('Transaction submitted. Waiting for confirmation...');
  // reset();
  // setMilestones([
  //   { description: '', startDate: '', endDate: '' },
  //   { description: '', startDate: '', endDate: '' },
  // ]);
} }catch (error) {
  console.error('Error writing contract:', error);
  toast.error(`Failed to submit transaction: ${error.message}`);
}


  setLoading(true);
  // const result = handleWrite(data);

  setTimeout(() => {
    if (Math.random() > 0.3) {
      setLoading(false);
      toast.success('Contract assigned successfully!');
      reset();
      setMilestones([
        { description: '', startDate: '', endDate: '' },
        { description: '', startDate: '', endDate: '' },
      ]);

      // {console.log("i am data", data)}
      // {console.log("jgjjg", milestones)}
      
  
    } else {
      setLoading(false);
      toast.error('Failed to assign contract. Please try again.');
    }
  }, 4000);
};


  return (
    
      <div className=" mt-4 ml-52">
        <div className="bg-white rounded-xl shadow-lg w-[500px] h-auto mb-8  p-6 ">
          <h2 className="text-center text-xl font-bold mb-4">Assign Contract</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Description</label>
              <input
                type="text"
                {...register('description', { required: 'Description is required' })}
                placeholder="Enter contract description"
                className={`w-full p-2 border rounded ${errors.description && 'border-red-500'}`}
              />
              {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Budget</label>
              <input
                type="number"
                {...register('budget', { required: 'Budget is required', min: 1 })}
                placeholder="Enter budget"
                className={`w-full p-2 border rounded ${errors.budget && 'border-red-500'}`}
              />
              {errors.budget && <p className="text-red-500 text-sm">{errors.budget.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Contractor Address</label>
              <input
                type="text"
                {...register('contractorAddress', { required: 'Contractor address is required' })}
                placeholder="Enter contractor address"
                className={`w-full p-2 border rounded ${errors.contractorAddress && 'border-red-500'}`}
              />
              {errors.contractorAddress && <p className="text-red-500 text-sm">{errors.contractorAddress.message}</p>}
            </div>
         
           {error && (
        <div>Error: {(error).shortMessage || error.message}</div>
       
      )}
      

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Start Date</label>
              <input
                type="date"
                {...register('startDate', { required: 'Start date is required' })}
                className={`w-full p-2 border rounded ${errors.startDate && 'border-red-500'}`}
              />
              {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">End Date</label>
              <input
                type="date"
                {...register('endDate', { required: 'End date is required' })}
                className={`w-full p-2 border rounded ${errors.endDate && 'border-red-500'}`}
              />
              {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate.message}</p>}
            </div>

            <div className="mb-4">
              <button
                type="button"
                onClick={handleModalToggle}
                className="w-full bg-slate-900 text-white py-2 rounded-3xl hover:bg-slate-950"
              >
                Add Milestones
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-2 rounded-3xl hover:bg-slate-950 flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <div className="loader border-4 border-t-4 border-white rounded-full w-5 h-5 animate-spin"></div>
              ) : (
                'Assign to Contractor'
              )}
            </button>
          </form>
         {/* <ReadContract /> */}

         {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && <div>Transaction confirmed.</div>}

        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6">
              <h3 className="text-center text-lg font-bold mb-4">Add Milestones</h3>
              {milestones.map((milestone, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-sm font-medium mb-1">Milestone {index + 1}</label>
                  <input
                    type="text"
                    value={milestone.description}
                    onChange={(e) => handleMilestoneChange(index, 'description', e.target.value)}
                    placeholder={`Enter milestone ${index + 1}`}
                    className={`w-full p-2 border rounded ${milestoneErrors[index]?.name && 'border-red-500'}`}
                  />
                  {milestoneErrors[index]?.name && (
                    <p className="text-red-500 text-sm">{milestoneErrors[index].name}</p>
                  )}
                  <label className="block text-sm font-medium mb-1">Start Date</label>
                  <input
                    type="date"
                    value={milestone.startDate}
                    onChange={(e) => handleMilestoneChange(index, 'startDate', e.target.value)}
                    className={`w-full p-2 border rounded ${milestoneErrors[index]?.startDate && 'border-red-500'}`}
                  />
                  {milestoneErrors[index]?.startDate && (
                    <p className="text-red-500 text-sm">{milestoneErrors[index].startDate}</p>
                  )}
                  <label className="block text-sm font-medium mb-1">End Date</label>
                  <input
                    type="date"
                    value={milestone.endDate}
                    onChange={(e) => handleMilestoneChange(index, 'endDate', e.target.value)}
                    className={`w-full p-2 border rounded ${milestoneErrors[index]?.endDate && 'border-red-500'}`}
                  />
                  {milestoneErrors[index]?.endDate && (
                    <p className="text-red-500 text-sm">{milestoneErrors[index].endDate}</p>
                  )}
                </div>
              ))}
              <div className="flex justify-between mt-4">
                <button
                  onClick={handleModalToggle}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Close
                </button>
                <button
                  onClick={handleModalToggle}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      <ToastContainer />
      
      </div>
   
  );
};

export default AssignContract;

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useWriteContract, useWaitForTransactionReceipt, useAccount } from "wagmi";
// import { wagmiContractConfig } from "../lib/wagmiContractConfig";

// function AssignContract() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const { isConnected } = useAccount();
//   const [milestones, setMilestones] = useState([
//     { description: "", startDate: "", endDate: "" },
//     { description: "", startDate: "", endDate: "" },
//   ]);

//   const { register, handleSubmit, reset, formState: { errors } } = useForm();
//   const { data: transactionData, writeContract, error } = useWriteContract();
//   const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash: transactionData?.hash });
//   const [milestoneErrors, setMilestoneErrors] = useState([]);

//   const convertToTimestamp = (date) => Math.floor(new Date(date).getTime() / 1000);

//   const handleModalToggle = () => setIsModalOpen(!isModalOpen);

//   const handleMilestoneChange = (index, field, value) => {
//     const updatedMilestones = [...milestones];
//     updatedMilestones[index][field] = value;
//     setMilestones(updatedMilestones);
//   };

//   const validateMilestones = () => {
//     const errors = milestones.map((milestone) => ({
//       description: !milestone.description && "Milestone name is required",
//       startDate: !milestone.startDate && "Start date is required",
//       endDate: !milestone.endDate && "End date is required",
//     }));
//     setMilestoneErrors(errors);
//     return errors.every((error) => Object.values(error).every((val) => !val));
//   };

//   const onSubmit = async (data) => {
//     if (!validateMilestones()) {
//       toast.error("Please fix milestone errors before submitting");
//       return;
//     }
//     const payload = {
//       ...data,
//       startDate: convertToTimestamp(data.startDate),
//       endDate: convertToTimestamp(data.endDate),
//       milestones,
//     };
//     console.log(payload);
//     setLoading(true);
//     toast.info("Processing...");
//     setTimeout(() => {
//       setLoading(false);
//       toast.success("Contract assigned successfully!");
//       reset();
//       setMilestones([{ description: "", startDate: "", endDate: "" }]);
//     }, 3000);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
//         <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">Assign Contract</h2>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* Input Fields */}
//           {["description", "budget", "contractorAddress"].map((field) => (
//             <div key={field} className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 capitalize">
//                 {field.replace("Address", " Address")}
//               </label>
//               <input
//                 type={field === "budget" ? "number" : "text"}
//                 {...register(field, { required: `${field} is required` })}
//                 placeholder={`Enter ${field}`}
//                 className={`w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-slate-400 focus:outline-none ${
//                   errors[field] && "border-red-500"
//                 }`}
//               />
//               {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field].message}</p>}
//             </div>
//           ))}

//           {/* Dates */}
//           {["startDate", "endDate"].map((field) => (
//             <div key={field} className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 capitalize">{field.replace("Date", " Date")}</label>
//               <input
//                 type="date"
//                 {...register(field, { required: `${field} is required` })}
//                 className={`w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-slate-400 focus:outline-none ${
//                   errors[field] && "border-red-500"
//                 }`}
//               />
//               {errors[field] && <p className="text-red-500 text-xs mt-1">{errors[field].message}</p>}
//             </div>
//           ))}

//           {/* Add Milestones Button */}
//           <button
//             type="button"
//             onClick={handleModalToggle}
//             className="w-full text-white bg-slate-700 hover:bg-slate-900 py-2 rounded-lg transition-all duration-200"
//           >
//             Add Milestones
//           </button>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg mt-4 flex items-center justify-center transition-all duration-200"
//             disabled={loading}
//           >
//             {loading ? <div className="loader animate-spin w-5 h-5 border-4 border-white border-t-transparent rounded-full"></div> : "Assign to Contractor"}
//           </button>
//         </form>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg animate-scale-in">
//             <h3 className="text-lg font-semibold mb-4 text-center">Add Milestones</h3>
//             {milestones.map((milestone, index) => (
//               <div key={index} className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Milestone {index + 1}
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Milestone name"
//                   value={milestone.description}
//                   onChange={(e) => handleMilestoneChange(index, "description", e.target.value)}
//                   className="w-full p-2 border rounded-lg mt-1"
//                 />
//                 <input
//                   type="date"
//                   value={milestone.startDate}
//                   onChange={(e) => handleMilestoneChange(index, "startDate", e.target.value)}
//                   className="w-full p-2 mt-2 border rounded-lg"
//                 />
//                 <input
//                   type="date"
//                   value={milestone.endDate}
//                   onChange={(e) => handleMilestoneChange(index, "endDate", e.target.value)}
//                   className="w-full p-2 mt-2 border rounded-lg"
//                 />
//               </div>
//             ))}
//             <div className="flex justify-between mt-4">
//               <button
//                 onClick={handleModalToggle}
//                 className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded-lg"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AssignContract;




