import Client from '../models/clientModel.js';

// Create a new enquiry
const createEnquiry = async (enquiryData) => {
  try {
    const enquiry = new Client(enquiryData);
    return await enquiry.save();
  } catch (error) {
    throw new Error(`Error creating enquiry: ${error.message}`);
  }
};

// Retrieve all enquiries
const getAllEnquiries = async () => {
  try {
    return await Client.find();
  } catch (error) {
    throw new Error(`Error retrieving enquiries: ${error.message}`);
  }
};

// Retrieve a single enquiry by ID
const getEnquiryById = async (id) => {
  try {
    return await Client.findById(id);
  } catch (error) {
    throw new Error(`Error retrieving enquiry: ${error.message}`);
  }
};

// Update an enquiry by ID
const updateEnquiry = async (id, updatedData) => {
  try {
    return await Client.findByIdAndUpdate(id, updatedData, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation rules are applied
    });
  } catch (error) {
    throw new Error(`Error updating enquiry: ${error.message}`);
  }
};

// Delete an enquiry by ID
const deleteEnquiry = async (id) => {
  try {
    return await Client.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`Error deleting enquiry: ${error.message}`);
  }
};

export {
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateEnquiry,
  deleteEnquiry,
};
