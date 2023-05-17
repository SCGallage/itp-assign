import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navCover}>
        <div className={styles.component5}>
        <p className={styles.home}>Home</p>
        <p className={styles.items}>Items</p>
        <p className={styles.rentAVehicle}>Rent a vehicle</p>
        <p className={styles.supplyItems}>Supply Items</p>
        <p className={styles.aboutUs}>About Us</p>
        <p className={styles.contactUs}>Contact Us</p>
        </div>
    </div>
  );
};

export default Navbar;