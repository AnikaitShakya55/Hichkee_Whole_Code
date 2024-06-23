import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3>About Hichkee Restaurant</h3>
          <p>About Us</p>
          <p>Our Chef</p>
          <p>Our Story</p>
          <p>Careers</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Our Menu</h3>
          <h3>Starters</h3>    
          <h3>Main Courses</h3>   
          <h3>Desserts</h3>    
          <h3>Drinks</h3>
          
        </div>
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <p>Email: info@hichkeerestaurant.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Restaurant St, Cityville, Country</p>
        </div>
      </div>
      <div className={styles.footerSecondary}>
        <div className={styles.footerSection}>
          <p>Hichkee Restaurant &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
