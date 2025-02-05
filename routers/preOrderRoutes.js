import express from 'express';
import {
  handleCreatePreOrder,
  handleGetAllPreOrders,
  handleGetPreOrderById,
  handleUpdatePreOrderById,
  handleDeletePreOrderById,
} from '../controllers/preOrderController.js';
import { authenticateToken } from '../auth/jwtToken.js'; // Authentication middleware

const preOrderRoute = express.Router();

// Protected routes with authenticateToken middleware
preOrderRoute.post('/', authenticateToken, handleCreatePreOrder); // Create a pre-order
preOrderRoute.get('/', authenticateToken, handleGetAllPreOrders); // Get all pre-orders
preOrderRoute.get('/:id', authenticateToken, handleGetPreOrderById); // Get pre-order by ID
preOrderRoute.put('/:id', authenticateToken, handleUpdatePreOrderById); // Update pre-order by ID
preOrderRoute.delete('/:id', authenticateToken, handleDeletePreOrderById); // Delete pre-order by ID

export default preOrderRoute;
