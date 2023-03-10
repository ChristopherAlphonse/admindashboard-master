import "react-toastify/dist/ReactToastify.css";

import {
  AddProduct,
  Contact,
  Dashboard,
  EditProduct,
  EditProfile,
  Profile,
} from "./pages/PagesIndex";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";

import Forgot from "./pages/auth/Forgot"
import Home from "./pages/Home/Home";
import Layout from "./components/layout/Layout";
import Login from "./pages/auth/Login"
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ProductDetail from "./components/product/productDetail/ProductDetail";
import Register from "./pages/auth/Register"
import Reset from "./pages/auth/Reset"
import { SET_LOGIN } from "./redux/features/auth/authSlice";
import Sidebar from "./components/sidebar/Sidebar";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { getLoginStatus } from "./services/authService";
import { useDispatch } from "react-redux";

axios.defaults.withCredentials = true;

const App = () => {
  
  const dispatch = useDispatch();

 
  useEffect(() => {
    const loginStatus = async () => {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    };
    loginStatus();
  }, [dispatch]);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/resetpassword/:resetToken" element={<Reset />} />

        <Route
          path="/dashboard"
          element={
            <Sidebar>
              <Layout>
                <Dashboard />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/add-product"
          element={
            <Sidebar>
              <Layout>
                <AddProduct />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/product-detail/:id"
          element={
            <Sidebar>
              <Layout>
                <ProductDetail />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/edit-product/:id"
          element={
            <Sidebar>
              <Layout>
                <EditProduct />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/profile"
          element={
            <Sidebar>
              <Layout>
                <Profile />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <Sidebar>
              <Layout>
                <EditProfile />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Sidebar>
              <Layout>
                <Contact />
              </Layout>
            </Sidebar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
