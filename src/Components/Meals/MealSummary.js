import React from 'react';
import classes from './MealsSummary.module.css';
import { PiBowlFoodFill } from "react-icons/pi";
import foodDelivery from '../../Assests/fooddelievery.png'
import foodapp from '../../Assests/foodDeliverypic.png'

const MealsSummary = () => {
  return (
    <div className={classes.container}>

      <section className={classes.leftContent}>
        <img alt='Delivery pic' src={foodapp} style={{ height: '300px', width: '350px' }} />
      </section>

      <section className={classes.summary}>
        <h2>
          <span>Discover a World of Flavors</span> with Us <PiBowlFoodFill style={{ color: '#944E63' }} />
        </h2>
        <p>
          Indulge in a culinary journey like no other. Our diverse menu offers a tantalizing selection of dishes crafted with passion and expertise, ready to tantalize your taste buds.
        </p>

        {/* Video Player */}
        <div className={classes.videoContainer}>
  <video width="100%" height="auto" autoPlay muted loop>
    <source src='https://videos.pexels.com/video-files/3768941/3768941-hd_1920_1080_25fps.mp4' type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

      </section>

      <section className={classes.rightContent}>
        <img alt='Delivery pic' src={foodDelivery} style={{ height: '300px', width: '350px' }} />
      </section>

    </div>
  );
};

export default MealsSummary;
