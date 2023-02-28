import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from '../controllers/productController.js';

import express from 'express';
import protect from '../middleWare/authMiddleware.js';
import { upload } from '../utils/fileUpload.js';

const router = express.Router();

router.post('/', protect, upload.single('image'), createProduct);
router.patch('/:id', protect, upload.single('image'), updateProduct);
router.get('/', protect, getProducts);
router.get('/:id', protect, getProduct);
router.delete('/:id', protect, deleteProduct);

export default router;
