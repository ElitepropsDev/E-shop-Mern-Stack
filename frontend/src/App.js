import React, { useEffect } from 'react';
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {LoginPage, SignupPage, ActivationPage, HomePage, 
  ProductsPage, BestSellingPage, EventsPage, FAQPage,
  ProductDetailsPage } from "./Routes.js";
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from './redux/store.js';
import { loadUser } from './redux/actions/user.js';
import { useSelector } from 'react-redux';
// import { RxCross1 } from "react-icons/rx";

const App = () => {
  const { loading } = useSelector((state) => state.user);

  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  
  
  return (
    <>
    {
      loading ? (
        null
      ) : (
        <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path="/sign-up" element={<SignupPage />} />
      <Route path="/activation/:token" element={<ActivationPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/best-selling" element={<BestSellingPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/faq" element={<FAQPage />} />

    </Routes>
    <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
      )
    }
    </>
    
  );
};

export default App