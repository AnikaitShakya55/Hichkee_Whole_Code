import React, { Fragment } from "react";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
import Carousel from "react-bootstrap/Carousel";
import picture1 from '../Assests/Meal.jpg';
import picture2 from '../Assests/copy5.jpg';
import picture3 from "../Assests/copy6.jpg";
import Navbar from "./NavBar";
import { SiIfood } from "react-icons/si";

const Header = (props) => {
  return (
    <Fragment>
      {/* HEADER, NAVBAR, AND HEADER CART BUTTON */}
      <header className={classes.header}>
        <h2 className={classes.hickee}> <SiIfood /> Hichkee</h2>
        <Navbar />
        <HeaderCartButton cartShowHandler={props.cartShowHandler} />
      </header>

      {/* BOOTSTRAP SLIDER */}
      <div className={classes["main-image"]}>
        <Carousel interval={3000}>
          <Carousel.Item>
            <img src={picture3} alt="Slide 1" style={{ width: '100%', height: 'auto' }} />
           
          </Carousel.Item>
          <Carousel.Item>
            <img src={picture2} alt="Slide 2" style={{ width: '100%', height: 'auto' }} />
            <Carousel.Caption style={{ fontSize: '1.5rem' }}>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={picture1} alt="Slide 3" style={{ width: '100%', height: 'auto' }} />
            <Carousel.Caption style={{ fontSize: '1.5rem' }}>
             
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Fragment>
  );
};

export default Header;
