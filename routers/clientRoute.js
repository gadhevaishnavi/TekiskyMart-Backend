import express from "express";
import {
  createEnquiryController,
  getAllEnquiriesController,
  getEnquiryByIdController,
  updateEnquiryController,
  deleteEnquiryController,
} from "../controllers/clientController.js";

const clientRoute = express.Router();

clientRoute.post("/enquiries", createEnquiryController); // Create a new enquiry
clientRoute.get("/enquiries", getAllEnquiriesController); // Get all enquiries
clientRoute.get("/enquiries/:id", getEnquiryByIdController); // Get enquiry by ID
clientRoute.put("/enquiries/:id", updateEnquiryController); // Update enquiry by ID
clientRoute.delete("/enquiries/:id", deleteEnquiryController); // Delete enquiry by ID

export default clientRoute;


