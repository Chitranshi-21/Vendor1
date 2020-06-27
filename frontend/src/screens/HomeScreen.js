import React, { useEffect } from 'react';
import {  Link } from 'react-router-dom';
//import axios from 'axios';
import { useSelector, useDispatch  } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props) {

  //Hooks

  const productList = useSelector(state => state.productList);
  const { products, loading, error} = productList;
  const dispatch =  useDispatch();
  useEffect(() => {
   dispatch(listProducts());
   

    return () => {
      //
    };
  }, [])


  return (
    loading ? <div>Loading...</div> :
    error? <div>{error}</div>:
    <div>
        <ul className="products">
        {
          products.map(product =>
           <li key={product._id}>
           <div className="product">
           <Link to={'/products/' + product._id}>
             <img className="product-image" src={product.image} alt="product" />
             </Link>
             <div className="product-name">
             </div>
             <div className="product-brand">{product.brand}</div>
             <div className="product-price">{product.price} Rs.</div>
             <div className="product-rating">{product.rating} Stars {product.numReviews}</div>
           </div>
         </li>
           )
        }
      </ul>
      </div>
           )}

export default HomeScreen;
