import React, { useState } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import ProductDetails from "../components/Products/ProductDetails";
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
    const {name} = useParams (); 
    const {data,setData} = useState(null);
    const productName = name.replace(/~/g, " ")
  return (
    <div>
        <Header/>
        <ProductDetails/>
        <Footer/>
    </div>
  )
}

export default ProductDetailsPage