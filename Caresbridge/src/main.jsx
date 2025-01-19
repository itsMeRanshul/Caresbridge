import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from './Layout.jsx';
import About from './Components/About.jsx';
import Home from './Components/Home.jsx';
import Contact from './Contact.jsx';
import User from './Components/User.jsx';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Register from './Components/Register.jsx';
import Product from './Components/Product.jsx';
import ProductDescription from './Components/ProductDes/ProductDescription.jsx';
import { ProductProvider } from './Components/Context.js/ProductContext.jsx';
import LoginPage from './Components/LoginPage.jsx';
import Profile from './Components/Profile.jsx';
import Cart from './Components/Cart.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Product/:id" element={<ProductDescription />} />
      <Route path="Cart" element={<Cart />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="Register" element={<Register />} />
      <Route path="Login" element={<LoginPage />} />
      <Route path="Profile/:userId" element={<Profile />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </StrictMode>
);
