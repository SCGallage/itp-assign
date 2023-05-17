import React, { useEffect, useState } from 'react'
//import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
//import 'react-quill/dist/quill.snow.css';
import { Helmet } from 'react-helmet'
//import CurrencyInput from 'react-currency-input-field';

import './item-discription.css'

import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { toast } from 'react-toastify';

function ItemDiscription(){
    

    const location = useLocation();
    const history = useHistory();
    const productToView = location.state.productToView;
    const [imagePreview] = useState(null);
    const [inStock, setInStock] = useState(parseInt(productToView.quantity));
    const [product, setProduct] = useState();
    console.log(productToView)

    useEffect(() => {
        // Fetch item details including the image from the backend
        axios.get(`http://localhost:5000/api/products/${productToView._id}`) // Replace with your API endpoint for fetching item details
          .then(response => {
            //setProductToView(response.data);
            console.log(response.data);
            setProduct(response.data);
            setInStock(parseInt(response.data.quantity) > 0);
          })
          .catch(error => {
            console.error('Error fetching item details:', error);
          });
      }, []);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
      
        reader.onloadend = () => {
          setImagePreview(reader.result);
        }
      
        if (file) {
          reader.readAsDataURL(file);
        }
      }

      const [quantity, setQuantity] = useState(1);

      function handleQuantityChange(event) {
        setQuantity(parseInt(event.target.value));
      }
    
      function increaseQuantity() {
        setQuantity(quantity + 1);
      }
    
      function decreaseQuantity() {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
      }

      const addItemToCart = async () => {
        await axios.post(`http://localhost:5000/cart`, {
          productId: productToView._id,
          qty: quantity
        }).then(data => {
          toast.success('Item Added To Cart!')
          history.push('/item-page')
        });
      }

  return (
    <div className="item-discription-container">
      <Helmet>
        <title>Spare Parts</title>
      </Helmet>
      <div className="item-discription-item-discription">
        <img
          alt="blurredBackground37416"
          src="/playground_assets/blurredbackground37416-ww3g-2000w.png"
          className="item-discription-blurred-background3"
        />
        <img
          alt="Rectangle22098"
          src="/playground_assets/rectangle22098-9w8r-200h.png"
          className="item-discription-rectangle2"
        />
        <img
          alt="PNGLogoimage12098"
          src="/playground_assets/pnglogoimage12098-mt6x-200h.png"
          className="item-discription-pn-logoimage1"
        />
        <img
          alt="Rectangle14button2098"
          src="/playground_assets/rectangle14button2098-9sl-200h.png"
          className="item-discription-rectangle14button"
        />
        <span className="item-discription-text">
          <span>Log Out</span>
        </span>
        <img
          alt="mdiaccount2098"
          src="/playground_assets/mdiaccount2098-7s8r.svg"
          className="item-discription-mdiaccount"
        />
        <img
          alt="Rectangle6input2098"
          src="/playground_assets/rectangle6input2098-tycr-200h.png"
          className="item-discription-rectangle6input"
        />
        <span className="item-discription-text02">
          <span>Search here</span>
        </span>
        <img
          alt="icons8search2412098"
          src="/playground_assets/icons8search2412098-yf8h-200h.png"
          className="item-discription-icons8search241"
        />
        <img
          alt="Rectangle152098"
          src="/playground_assets/rectangle152098-m8c5-200h.png"
          className="item-discription-rectangle15"
        />
        <span className="item-discription-text04">
          <span>Items</span>
        </span>
        <span className="item-discription-text06">
          <span>Home</span>
        </span>
        <span className="item-discription-text08">
          <span>About Us</span>
        </span>
        <span className="item-discription-text10">
          <span>Contact Us</span>
        </span>
        <span className="item-discription-text12">
          <span>Supply Items</span>
        </span>
        <span className="item-discription-text14">
          <span>Rent a vehicle</span>
        </span>
        <img
          alt="Rectangle162099"
          src="/playground_assets/rectangle162099-6d3e-1500w.png"
          className="item-discription-rectangle16"
        />
        <span className="item-discription-text16">
          <span>Terms and Conditions</span>
        </span>
        <img
          alt="PNGLogoimage22099"
          src="/playground_assets/pnglogoimage22099-hk7e-200h.png"
          className="item-discription-pn-logoimage2"
        />
        <div className="item-discription-carbonlogofacebook"></div>
        <img
          alt="Vector2010"
          src="/playground_assets/vector2010-qnr9.svg"
          className="item-discription-vector"
        />
        <img
          alt="uilinstagramalt2010"
          src="/playground_assets/uilinstagramalt2010-8c5.svg"
          className="item-discription-uilinstagramalt"
        />
        <img
          alt="bxlgmail2010"
          src="/playground_assets/bxlgmail2010-biar.svg"
          className="item-discription-bxlgmail"
        />
        <span className="item-discription-text18">
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
          alt="Line12010"
          src="/playground_assets/line12010-v4c9.svg"
          className="item-discription-line1"
        />
        <span className="item-discription-text20">
          <span>FAQ</span>
        </span>
        <span className="item-discription-text22">
          <span>Leave us a feedback</span>
        </span>
        <span className="item-discription-text24">
          <span>Privacy Policy</span>
        </span>
        <span className="item-discription-text26">
          <span>Copyright © 2023 Shantha Motors®. All rights reserved</span>
        </span>
        <img
          alt="Rectangle7button2010"
          src="/playground_assets/rectangle7button2010-exeb-200h.png"
          className="item-discription-rectangle7button"
        />
        <span className="item-discription-text28">
          <span>Buy Now</span>
        </span>
        <img
          alt="Rectangle28button2010"
          src="/playground_assets/rectangle28button2010-f98m-200h.png"
          className="item-discription-rectangle28button"
        />
        <span onClick={addItemToCart} className="item-discription-text30">
          <span>Add To Cart</span>
        </span>
        <span className="item-discription-text32">
          <span>Add new Item</span>
        </span>
        <img
          alt="materialsymbolsadd2010"
          src="/playground_assets/materialsymbolsadd2010-w73.svg"
          className="item-discription-materialsymbolsadd"
        />
        <img
          alt="Rectangle262010"
          src="/playground_assets/rectangle262010-6y7-1200w.png"
          className="item-discription-rectangle26"
        />
        <img
          alt="Line22010"
          src="/playground_assets/line22010-gz0e.svg"
          className="item-discription-line2"
        />
       
          <input type="file" onChange={handleImageChange} />
    
    <img src={`http://localhost:5000/${productToView?.image}`} alt={productToView.name}
     className ='item-discription-rectangle27' />
        <img
          alt="Rectangle522010"
          src="/playground_assets/rectangle522010-xdv-200h.png"
          className="item-discription-rectangle52"
        />
        <div className='item-discription-rectangle52'>
         {inStock ? <span className="in-stock">In stock</span> : <span className="out-of-stock">Out of stock</span>}
         </div>
        <img
          alt="Rectangle532010"
          src="/playground_assets/rectangle532010-p34t-200h.png"
          className="item-discription-rectangle53"
        />
        <span className="item-discription-text36">
          <span>
            <span>{productToView .description} </span>
           
          </span>
        </span>
        <span className="item-discription-text43">
          <span>
            Quantity
           
            <input type="number" value={quantity} min={0} max={parseInt(productToView.quantity)} onChange={handleQuantityChange} 
            style={{
              backgroundColor: "lightgray",
              border: "2px solid black",
              borderRadius: "4px",
              padding: "4px 8px",
              marginRight: "8px",
  
            }}/>
      <button onClick={increaseQuantity} 
       style={{
        backgroundColor: "gray",
        color: "white",
        border: "none",
        borderRadius: "4px",
        padding: "4px",
        marginLeft: "8px",
      }}>+</button>
      <button onClick={decreaseQuantity} 
     style={{
      backgroundColor: "gray",
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: "4px",
      marginLeft: "8px",}}>-</button>
      
          </span>
        </span>
     
       
     
       
      
        <img
          alt="Rectangle607417"
          src="/playground_assets/rectangle607417-eh5e-200h.png"
          className="item-discription-rectangle60"
        />
        <span className="item-discription-text45">
          <span>{productToView .name}</span>
        </span>
        <span className="item-discription-text47">
          <span>Rs.{productToView .price}</span>
        </span>
      </div>
    </div>
  )
}

export default ItemDiscription
