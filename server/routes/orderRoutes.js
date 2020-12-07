import express from 'express';
import {
  addOrderItems,
  getOrderById,
  markOrderAsPaid,
  markOrderAsDispatched,
  getMyOrders,
  getOrders,
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, markOrderAsPaid);
router.route('/:id/dispatch').put(protect, admin, markOrderAsDispatched);

export default router;
