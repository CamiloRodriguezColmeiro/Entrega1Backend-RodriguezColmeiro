import CartManager from '../dao/managers/CartManager.js';

const cartManager = new CartManager('./src/data/carts.json');

export const createCart = async (req, res) => {
  const cart = await cartManager.createCart();
  res.status(201).json(cart);
};

export const getCartById = async (req, res) => {
  const cart = await cartManager.getCartById(req.params.cid);
  cart ? res.json(cart) : res.status(404).json({ error: 'Carrito no encontrado' });
};

export const addProductToCart = async (req, res) => {
  const updatedCart = await cartManager.addProductToCart(req.params.cid, req.params.pid);
  updatedCart ? res.json(updatedCart) : res.status(404).json({ error: 'No se pudo agregar el producto' });
};