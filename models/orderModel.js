import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },  
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: "Pending" },  
  paymentMethod: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

 let orderModel= mongoose.model("Order", OrderSchema);
 export default orderModel
