import PreOrder from '../models/preOrderModel.js';
 // Create a new pre-order

export const createPreOrder = async (preOrderData) => {
  try {
    const preOrder = new PreOrder(preOrderData);
    return await preOrder.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

 // Get all pre-orders
 
export const getAllPreOrders = async () => {
  try {
    return await PreOrder.find();
  } catch (error) {
    throw new Error(error.message);
  }
};

 // Get a pre-order by ID
export const getPreOrderById = async (id) => {
  try {
    return await PreOrder.findById(id);
  } catch (error) {
    throw new Error(error.message);
  }
};
 // Update a pre-order by ID
export const updatePreOrderById = async (id, updateData) => {
  try {
    return await PreOrder.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
  } catch (error) {
    throw new Error(error.message);
  }
};

//Delete a pre-order by ID
export const deletePreOrderById = async (id) => {
  try {
    return await PreOrder.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error.message);
  }
};
