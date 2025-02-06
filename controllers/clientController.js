import {
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateEnquiry,
  deleteEnquiry,
} from "../services/clientService.js";

// Controller to create a new enquiry
export const createEnquiryController = async (req, res) => {
  try {
    const enquiryData = req.body;
    const newEnquiry = await createEnquiry(enquiryData);
    res.status(201).json({ message: "Enquiry created successfully", data: newEnquiry });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get all enquiries
export const getAllEnquiriesController = async (req, res) => {
  try {
    const enquiries = await getAllEnquiries();
    res.status(200).json({ message: "Enquiries retrieved successfully", data: enquiries });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get a single enquiry by ID
export const getEnquiryByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const enquiry = await getEnquiryById(id);
    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }
    res.status(200).json({ message: "Enquiry retrieved successfully", data: enquiry });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to update an enquiry by ID
export const updateEnquiryController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedEnquiry = await updateEnquiry(id, updatedData);
    if (!updatedEnquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }
    res.status(200).json({ message: "Enquiry updated successfully", data: updatedEnquiry });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to delete an enquiry by ID
export const deleteEnquiryController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEnquiry = await deleteEnquiry(id);
    if (!deletedEnquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }
    res.status(200).json({ message: "Enquiry deleted successfully", data: deletedEnquiry });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
