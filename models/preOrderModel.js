import mongoose from 'mongoose';

const preOrderSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    mobileNumber: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/, // Validates a 10-digit mobile number
      trim: true
    },
    productName: {
      type: String,
      required: true,
      trim: true
    },
    productDetails: {
      type: String,
      trim: true
    },
    option1: {
      type: Boolean,
      required: true
    },
    option2: {
      type: Boolean,
      required: true
    }
  });

const PreOrder = mongoose.model('PreOrder', preOrderSchema);
export default PreOrder;

