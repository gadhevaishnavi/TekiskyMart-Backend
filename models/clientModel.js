import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[0-9]{10}$/.test(v); // Validates a 10-digit mobile number
      },
      message: "Invalid mobile number format",
    },
  },
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1, // Ensures at least 1 item is ordered
  },
  description: {
    type: String,
    trim: true,
    default: "", // Optional field
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Client = mongoose.model('enquiry', enquirySchema);
export default Client;
