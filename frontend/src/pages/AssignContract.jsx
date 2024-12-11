import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AssignContract = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [milestones, setMilestones] = useState([
    { name: '', startDate: '', endDate: '' },
    { name: '', startDate: '', endDate: '' },
  ]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [milestoneErrors, setMilestoneErrors] = useState([]);

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
      if (!milestone.name) error.name = 'Milestone name is required';
      if (!milestone.startDate) error.startDate = 'Start date is required';
      if (!milestone.endDate) error.endDate = 'End date is required';
      return error;
    });
    setMilestoneErrors(errors);
    return errors.every((error) => Object.keys(error).length === 0);
  };

  const onSubmit = (data) => {
    if (!validateMilestones()) {
      toast.error('Please fix milestone errors before submitting');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (Math.random() > 0.3) {
        setLoading(false);
        toast.success('Contract assigned successfully!');
        reset();
        setMilestones([
          { name: '', startDate: '', endDate: '' },
          { name: '', startDate: '', endDate: '' },
        ]);
      } else {
        setLoading(false);
        toast.error('Failed to assign contract. Please try again.');
      }
    }, 4000);
  };

  return (
    
      <div className="">
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
                className="w-full bg-green-500 text-white py-2 rounded-3xl hover:bg-green-600"
              >
                Add Milestones
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-3xl hover:bg-green-600 flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <div className="loader border-4 border-t-4 border-white rounded-full w-5 h-5 animate-spin"></div>
              ) : (
                'Assign to Contractor'
              )}
            </button>
          </form>
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
                    value={milestone.name}
                    onChange={(e) => handleMilestoneChange(index, 'name', e.target.value)}
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
