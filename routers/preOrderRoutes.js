import express from 'express';
import {
  handleCreatePreOrder,
  handleGetAllPreOrders,
  handleGetPreOrderById,
  handleUpdatePreOrderById,
  handleDeletePreOrderById,
} from '../controllers/preOrderController.js';
// import { authenticateToken } from '../auth/jwtToken.js'; // Authentication middleware

const preOrderRoute = express.Router();

// Protected routes with authenticateToken middleware
preOrderRoute.post('/',  handleCreatePreOrder); // Create a pre-order
preOrderRoute.get('/', handleGetAllPreOrders); // Get all pre-orders
preOrderRoute.get('/:id', handleGetPreOrderById); // Get pre-order by ID
preOrderRoute.put('/:id',  handleUpdatePreOrderById); // Update pre-order by ID
preOrderRoute.delete('/:id',  handleDeletePreOrderById); // Delete pre-order by ID

export default preOrderRoute;
