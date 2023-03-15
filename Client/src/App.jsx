import "react-toastify/dist/ReactToastify.css";

import {
  AddProduct,
  Contact,
  Dashboard,
  EditProduct,
  EditProfile,
  Profile,
} from "../src/pages/PagesIndex";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";

import Forgot from "../src/pages/auth/Forgot"
import Home from "../src/pages/Home/Home";
import Layout from "../src/components/layout/Layout";
import Login from "../src/pages/auth/Login"
import PageNotFound from "../src/pages/PageNotFound/PageNotFound";
import ProductDetail from "../src/components/product/productDetail/ProductDetail";
import Register from "../src/pages/auth/Register"
import Reset from "../src/pages/auth/Reset"
import { SET_LOGIN } from "../src/redux/features/auth/authSlice";
import Sidebar from "../src/components/sidebar/Sidebar";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { getLoginStatus } from "../src/services/authService";
import { useDispatch } from "react-redux";

axios.defaults.withCredentials= true

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
