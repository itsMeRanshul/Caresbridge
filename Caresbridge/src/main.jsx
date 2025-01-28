import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from './Layout.jsx';
import About from './Components/About.jsx';
import Home from './Components/Home.jsx';
import Contact from './Contact.jsx';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Register from './Components/Register.jsx';
import Product from './Components/Product.jsx';
import ProductDescription from './Components/ProductDes/ProductDescription.jsx';
import { ProductProvider } from './Components/Context.js/ProductContext.jsx';
import LoginPage from './Components/LoginPage.jsx';
import Profile from './Components/Profile.jsx';
import Cart from './Components/Cart.jsx';
import AdminPanel from './Components/Admin/AdminPanel.jsx';
import AddProductForm from './Components/Admin/AddProductForm.jsx';
import DeleteProductForm from './Components/Admin/DeleteProductForm.jsx';
import UpdateProductForm from './Components/Admin/UpdateProductForm.jsx';
import OrderHistoryPage from './Components/OrderHistoryPage.jsx';
import ManageOrdersPage from './Components/Admin/ManageOrdersPage.jsx';
import ProtectedRoute from './Components/Routes/ProtectedRoute.jsx';
import AdminRoute from './Components/Routes/AdminRoute.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="product" element={<Product />} />
      <Route path="product/:id" element={<ProductDescription />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<LoginPage />} />
      
      {/* Protected Routes */}
      <Route
        path="cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile/:userId"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="orderhistorypage"
        element={
          <ProtectedRoute>
            <OrderHistoryPage />
          </ProtectedRoute>
        }
      />


      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminPanel />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/addproduct"
        element={
          <AdminRoute>
            <AddProductForm />
          </AdminRoute>
        }
      />

      <Route
        path="admin/updateproduct"
        element={
          <AdminRoute>
            <UpdateProductForm />
          </AdminRoute>
        }
      />

      <Route
        path="admin/deleteproduct"
        element={
          <AdminRoute>
            <DeleteProductForm />
          </AdminRoute>
        }
      />


      <Route
        path="admin/manageorders"
        element={
          <AdminRoute>
            <ManageOrdersPage />
          </AdminRoute>
        }
      />



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
