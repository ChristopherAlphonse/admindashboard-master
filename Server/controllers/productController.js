import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';
import { v2 as cloudinary } from 'cloudinary';
import { fileSizeFormatter } from '../utils/fileUpload.js';

// Create Product
const createProduct = asyncHandler(async (req, res) => {
  const { name, sku, category, quantity, price, description } = req.body;

  // Validation
  if (!name || !category || !quantity || !price || !description) {
    res.status(400).json({ error: 'Please fill in all fields' });
    return;
  }

  // Handle Image upload
  let fileData = {};
  if (req.file) {
    // Save image to cloudinary
    let uploadedFile;
    try {
      uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: 'Invent App',
        resource_type: 'image',
      });
    } catch (error) {
      res.status(500).json({ error: 'Image could not be uploaded' });
      return;
    }

    fileData = {
      fileName: req.file.originalname,
      filePath: uploadedFile.secure_url,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2),
    };
  }

  // Create Product
  const product = await Product.create({
    user: req.user.id,
    name,
    sku,
    category,
    quantity,
    price,
    description,
    image: fileData,
  });

  res.status(201).json(product);
});

// Get all Products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ user: req.user.id }).sort('-createdAt');
  res.status(200).json(products);
});

// Get single product
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  // if product doesn't exist
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }
  // Match product to its user
  if (product.user.toString() !== req.user.id) {
    res.status(401).json({ error: 'User not authorized' });
    return;
  }
  res.status(200).json(product);
});

// Delete Product
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  // if product doesn't exist
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }
  // Match product to its user
  if (product.user.toString() !== req.user.id) {
    res.status(401).json({ error: 'User not authorized' });
    return;
  }
  await product.remove();
  res.status(200).json({ message: 'Product deleted.' });
});

// Update Product
const updateProduct = asyncHandler(async (req, res) => {
  const { name, category, quantity, price, description } = req.body;
  const { id } = req.params;

  const product = await Product.findById(id);

  // if product doesn't exist
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }

  // Update product
  product.name = name || product.name;
  product.category = category || product.category;
  product.quantity = quantity || product.quantity;
  product.price = price || product.price;
  product.description = description || product.description;

  if (req.file) {
    // Save image to cloudinary
    let uploadedFile;
    try {
      uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        folder: 'Invent App',
        resource_type: 'image',
      });
    } catch (error) {
      res.status(500).json({ error: 'Image could not be uploaded' });
      return;
    }

    product.image = {
      fileName: req.file.originalname,
      filePath: uploadedFile.secure_url,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2),
    };
  }

  await product.save();

  res.status(200).json(product);
});



export default {createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,}
