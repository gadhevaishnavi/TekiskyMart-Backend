import {
  createPreOrder,
  getAllPreOrders,
  getPreOrderById,
  updatePreOrderById,
  deletePreOrderById,
} from '../services/preOrderService.js';

// Controller to create a new pre-order
export const handleCreatePreOrder = async (req, res) => {
  try {
    const preOrder = await createPreOrder(req.body);
    res.status(201).json({ success: true, data: preOrder });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Controller to get all pre-orders
export const handleGetAllPreOrders = async (req, res) => {
  try {
    const preOrders = await getAllPreOrders();
    res.status(200).json({ success: true, data: preOrders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to get a single pre-order by ID
export const handleGetPreOrderById = async (req, res) => {
  try {
    const preOrder = await getPreOrderById(req.params.id);
    if (!preOrder) {
      return res.status(404).json({ success: false, message: 'Pre-order not found' });
    }
    res.status(200).json({ success: true, data: preOrder });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller to update a pre-order by ID
export const handleUpdatePreOrderById = async (req, res) => {
  try {
    const updatedPreOrder = await updatePreOrderById(req.params.id, req.body);
    if (!updatedPreOrder) {
      return res.status(404).json({ success: false, message: 'Pre-order not found' });
    }
    res.status(200).json({ success: true, data: updatedPreOrder });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Controller to delete a pre-order by ID
export const handleDeletePreOrderById = async (req, res) => {
  try {
    const deletedPreOrder = await deletePreOrderById(req.params.id);
    if (!deletedPreOrder) {
      return res.status(404).json({ success: false, message: 'Pre-order not found' });
    }
    res.status(200).json({ success: true, data: deletedPreOrder });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
