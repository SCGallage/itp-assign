import React from 'react'
import  { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import {useHistory} from 'react-router-dom';

import './item-page.css'

const ItemPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);
  const history = useHistory();
  const handleviewProduct = (productToView) => {
    //navigate to view product page
    history.push({
      pathname:`/item-discription/${productToView._id}`,
      state: {productToView}
    });
  }

  return (
    <div className="item-page-container">
      <Helmet>
        <title>Sapre Parts</title>
      </Helmet>
      <div className="item-page-item-page">
        <img
          alt="Rectangle22092"
          src="/playground_assets/rectangle22092-ka1-200h.png"
          className="item-page-rectangle2"
        />
        <img
          alt="PNGLogoimage12092"
          src="/playground_assets/pnglogoimage12092-6imh-200h.png"
          className="item-page-pn-logoimage1"
        />
        <img
          alt="Rectangle14button2092"
          src="/playground_assets/rectangle14button2092-6us-200h.png"
          className="item-page-rectangle14button"
        />
        <span className="item-page-text">
          <span>Log Out</span>
        </span>
        <img
          alt="mdiaccount2092"
          src="/playground_assets/mdiaccount2092-jh7j.svg"
          className="item-page-mdiaccount"
        />
        <img
          alt="Rectangle62093"
          src="/playground_assets/rectangle62093-l7pq-200h.png"
          className="item-page-rectangle6"
        />
        <span className="item-page-text02">
          <span>Search here</span>
        </span>
        <img
          alt="icons8search2412093"
          src="/playground_assets/icons8search2412093-bxkr-200h.png"
          className="item-page-icons8search241"
        />
        <img
          alt="Rectangle152093"
          src="/playground_assets/rectangle152093-8pp7i-200h.png"
          className="item-page-rectangle15"
        />
        <span className="item-page-text04">
          <span>Items</span>
        </span>
        <span className="item-page-text06">
          <span>Home</span>
        </span>
        <span className="item-page-text08">
          <span>About Us</span>
        </span>
        <span className="item-page-text10">
          <span>Contact Us</span>
        </span>
        <span className="item-page-text12">
          <span>Supply Items</span>
        </span>
        <span className="item-page-text14">
          <span>Rent a vehicle</span>
        </span>
        <img
          alt="Rectangle162094"
          src="/playground_assets/rectangle162094-q93b-1500w.png"
          className="item-page-rectangle16"
        />
        <span className="item-page-text16">
          <span>Terms and Conditions</span>
        </span>
        <img
          alt="PNGLogoimage22094"
          src="/playground_assets/pnglogoimage22094-q6uf-200h.png"
          className="item-page-pn-logoimage2"
        />
        <div className="item-page-carbonlogofacebook"></div>
        <img
          alt="Vector2094"
          src="/playground_assets/vector2094-znc8.svg"
          className="item-page-vector"
        />
        <img
          alt="uilinstagramalt2094"
          src="/playground_assets/uilinstagramalt2094-qq0j.svg"
          className="item-page-uilinstagramalt"
        />
        <img
          alt="bxlgmail2094"
          src="/playground_assets/bxlgmail2094-o216.svg"
          className="item-page-bxlgmail"
        />
        <span className="item-page-text18">
          <span>
            Contact No: 0352 246 576
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <img
          alt="Line12095"
          src="/playground_assets/line12095-o1de.svg"
          className="item-page-line1"
        />
        <span className="item-page-text20">
          <span>FAQ</span>
        </span>
        <span className="item-page-text22">
          <span>Leave us a feedback</span>
        </span>
        <span className="item-page-text24">
          <span>Privacy Policy</span>
        </span>
        <span className="item-page-text26">
          <span>Copyright © 2023 Shantha Motors®. All rights reserved</span>
        </span>
        <span>
        <div className="product-container">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={`http://localhost:5000/${product?.image}`} alt={product.name} />
          <div className="product-info">
            <button onClick={() => handleviewProduct (product)}>
            <h2>{product.name}</h2>
           <span className="product-price">Rs.{product.price}</span>
          
           </button>
          </div>
        </div>
       
      ))}
    </div>
     
    </span>
       
        
        
        
      </div>
    </div>
  )
}

export default ItemPage
