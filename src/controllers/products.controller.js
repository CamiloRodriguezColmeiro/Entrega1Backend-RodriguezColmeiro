import ProductManager from '../dao/managers/ProductManager.js';

const productManager = new ProductManager('./src/data/products.json');

export const getProducts = async (req, res) => {
  const products = await productManager.getProducts();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await productManager.getProductById(req.params.pid);
  product ? res.json(product) : res.status(404).json({ error: 'Producto no encontrado' });
};

export const createProduct = async (req, res) => {
  const newProduct = await productManager.addProduct(req.body);
  res.status(201).json(newProduct);
};

export const updateProduct = async (req, res) => {
  const updated = await productManager.updateProduct(req.params.pid, req.body);
  updated ? res.json(updated) : res.status(404).json({ error: 'Producto no encontrado' });
};

export const deleteProduct = async (req, res) => {
  await productManager.deleteProduct(req.params.pid);
  res.json({ message: 'Producto eliminado' });
};