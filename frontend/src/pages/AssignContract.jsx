import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useWriteContract, useWaitForTransactionReceipt, useAccount } from 'wagmi';
import { wagmiContractConfig } from '../lib/wagmiContractConfig';

function AssignContract() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isConnected } = useAccount();

  // State for single milestone
  const [milestone, setMilestone] = useState({
    description: '',
    startDate: '',
    endDate: '',
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    data: transactionData,
    writeContract,
    isLoading: isWriting,
    error,
  } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash: transactionData?.hash,
  });

  const convertToTimestamp = (date) => Math.floor(new Date(date).getTime() / 1000);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleMilestoneChange = (field, value) => {
    setMilestone((prev) => ({ ...prev, [field]: value }));
  };

  const validateMilestone = () => {
    if (!milestone.description || !milestone.startDate || !milestone.endDate) {
      toast.error('Please fill all milestone fields before submitting');
      return false;
    }
    return true;
  };

  const handleMilestoneSave = () => {
    if (!validateMilestone()) return;

   
    setMilestone({
      description: '',
      startDate: '',
      endDate: '',
    });

    toast.success('Milestone saved successfully!');
  };

  async function onSubmit(data) {
    if (!validateMilestone()) return;

    const payload = {
      description: data.description,
      budget: data.budget,
      contractorAddress: data.contractorAddress,
      startDate: convertToTimestamp(data.startDate),
      endDate: convertToTimestamp(data.endDate),
      milestone,
    };

    try {
      if (isConnected) {
        writeContract({
          ...wagmiContractConfig,
          functionName: 'createProject',
          args: [
            payload.description,
            payload.budget,
            0,
            payload.contractorAddress,
            payload.startDate,
            payload.endDate,
            [
              [
                1,
                milestone.description,
                false,
                0,
                convertToTimestamp(milestone.startDate),
                convertToTimestamp(milestone.endDate),
                '',
              ],
            ],
          ],
        });
        toast.info('Transaction submitted. Waiting for confirmation...');
      }
    } catch (error) {
      console.error('Error writing contract:', error);
      toast.error(`Failed to submit transaction: ${error.message}`);
    }

    setLoading(true);

    setTimeout(() => {
      if (Math.random() > 0.3) {
        setLoading(false);
        toast.success('Contract assigned successfully!');
        reset();
        setMilestone({
          description: '',
          startDate: '',
          endDate: '',
        });
      } else {
        setLoading(false);
        toast.error('Failed to assign contract. Please try again.');
      }
    }, 4000);
  }

  return (
    <div className="mt-4 ml-52">
      <div className="bg-white rounded-xl shadow-lg w-[500px] h-auto mb-8 p-6">
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
            {errors.contractorAddress && (
              <p className="text-red-500 text-sm">{errors.contractorAddress.message}</p>
            )}
          </div>

          {error && <div>Error: {error.shortMessage || error.message}</div>}

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
              Add Milestone
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

        {isConfirming && <div>Waiting for confirmation...</div>}
        {isConfirmed && <div>Transaction confirmed.</div>}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h3 className="text-center text-lg font-bold mb-4">Add Milestone</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Milestone Description</label>
              <input
                type="text"
                value={milestone.description}
                onChange={(e) => handleMilestoneChange('description', e.target.value)}
                placeholder="Enter milestone description"
                className="w-full p-2 border rounded"
              />
              <label className="block text-sm font-medium mb-1 mt-2">Start Date</label>
              <input
                type="date"
                value={milestone.startDate}
                onChange={(e) => handleMilestoneChange('startDate', e.target.value)}
                className="w-full p-2 border rounded"
              />
              <label className="block text-sm font-medium mb-1 mt-2">End Date</label>
              <input
                type="date"
                value={milestone.endDate}
                onChange={(e) => handleMilestoneChange('endDate', e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={handleModalToggle}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleMilestoneSave();
                  handleModalToggle();
                }}
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
}

export default AssignContract;
