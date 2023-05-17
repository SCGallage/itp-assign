import React from "react";
import styles from "./Header.module.scss";

import cart from '../assets/images/icons/cart.svg';
import { useLocation } from "react-router-dom";

const Header = () => {

  const location = useLocation();

  return (
    <div className={styles.contents}>


    <div className={styles.component4}>
      <img
        alt=""
        className={styles.pngLogoImage1}
        src="https://static.overlay-tech.com/assets/4031afd2-2ebd-45c9-b138-9defb3733289.png"
      />
      <form action="/">  
              <div className={styles.searchBox}>

                <input type="text" placeholder="Search here" name="search" className={styles.SearchFeild}/>
                  <button type="submit" className={styles.searchBtn}>
                  <img
                    alt=""
                    className={styles.icons8Search241}
                    src="https://static.overlay-tech.com/assets/ba6fb668-1946-4a20-956a-dab4292f68d5.png"/>   
                  </button>
              </div>    
            </form>
      <div className={styles.loginCont}>
        
      <div className={styles.contWrapper}>
            <button className={styles.rectangle14} >
            <p className={styles.logOut}>Log Out</p>
            </button>
            <div className={styles.mdiaccount}>
              <img
                alt=""
                className={styles.vector}
                src="https://static.overlay-tech.com/assets/46055384-7399-4d3e-9f2e-a258251c25dc.svg"
              />
            </div>
            { 
              location.pathname !== '/CheckOut' && 
              <div className={styles.mdiaccount}>
                <img
                  alt=""
                  className={styles.vector}
                  src={cart}
                />
              </div>
            } 
        </div>   
      </div>
    </div>
    </div>
  );
};

export default Header;