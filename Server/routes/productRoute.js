import express from 'express';
import productController from '../controllers/productController.js';
import protect from '../middleWare/authMiddleware.js';
import { upload } from '../utils/fileUpload.js';

const router = express.Router();

router.post('/', protect, upload.single('image'), productController.createProduct);
router.patch('/:id', protect, upload.single('image'), productController.updateProduct);
router.get('/', protect, productController.getProducts);
router.get('/:id', protect, productController.getProduct);
router.delete('/:id', protect, productController.deleteProduct);


export default router;
