import React from 'react';
import classes from './AdditionalSection.module.css';
import rajpic from '../../Assests/TeamPic/RAJ.jpeg';
import akshxarPic from '../../Assests/TeamPic/akshxar.jpeg'
import bhhumaPic from '../../Assests/TeamPic/Bhhuma.jpeg';

const AdditionalSection = () => {
  
  const teamImgStyle = {
    width: '328px',
    height: '355px'
  };

  

  return (
    <section className={classes.additionalSection}>
      <h2>Experience Our Specialties</h2>

      <div className={classes.specialtiesGrid}>
        
        <div className={classes.specialtyItem}>
          <img src='https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2832%2Ftrend20200515161910.jpg' alt="Specialty Dish 1" />
          <div>
            <h3>Delicious Pasta</h3>
            <p>Indulge in the rich flavors of our homemade pasta dishes. From creamy Alfredo to tangy marinara, our pasta is made with the finest ingredients and cooked to perfection every time. Whether you prefer traditional spaghetti or gourmet ravioli, our extensive menu offers something for every pasta lover.</p>
          </div>
        </div>

        <div className={classes.specialtyItem}>
          <img src='https://www.allrecipes.com/thmb/HDfp2feubnMuH_q_8mofh3xP_TA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/233446-lo-mein-noodles-dmfs-4x3-1356-1493-64be4dff0a84483b8e7716d6020fb1d5.jpg' alt="Specialty Dish 2" />
          <div>
            <h3>Sizzling Steaks</h3>
            <p>Prepare your taste buds for a culinary adventure with our sizzling steaks. Our premium cuts of beef are expertly seasoned and grilled to perfection, ensuring each bite is bursting with flavor. Whether you prefer a tender filet mignon or a hearty ribeye, our steaks will satisfy even the most discerning carnivore.</p>
          </div>
        </div>

        <div className={classes.specialtyItem}>
          <img src='https://www.corriecooks.com/wp-content/uploads/2023/05/Garden-Salad.jpg' alt="Specialty Dish 4" />
          <div>
            <h3>Fresh Garden Salad</h3>
            <p>Enjoy the crisp freshness of our garden salad. Packed with vibrant vegetables and tossed in your choice of dressing, our salad is a delightful combination of flavors and textures. Whether as a starter or a main course, our garden salad is the perfect choice for health-conscious diners.</p>
          </div>
        </div>

        <div className={classes.specialtyItem}>
          <img src='https://img.bestrecipes.com.au/i9G5gwYE/w643-h428-cfill-q90/br/2019/04/frozen-golden-gaytime-cheesecake-951597-1.jpg' alt="Specialty Dish 3" />
          <div>
            <h3>Decadent Desserts</h3>
            <p>Indulge your sweet tooth with our irresistible desserts. From decadent chocolate cakes to delicate pastries, our desserts are made with love and attention to detail. Each bite is a symphony of flavors, textures, and aromas that will transport you to dessert heaven. Treat yourself to a slice of paradise with our delectable dessert offerings.</p>
          </div>
        </div>  



        {/* Team Section */}
        <div className={classes.teamSection}>
          <h2>Meet Our Team</h2>
          <div className={classes.team}>
            <div className={classes.teamMember}>
              <img src={bhhumaPic} alt="Team Member 1" style={teamImgStyle} />
              <h3>Gritty</h3>
              <p>Gritty is an experienced entrepreneur with a passion for creating innovative culinary experiences. With over a decade of experience in the food industry, Bhhuma has successfully built and managed several restaurants, bringing his unique vision to life. She believes in the power of teamwork and is dedicated to fostering a creative and inclusive work environment where employees can thrive and customers can enjoy exceptional dining experiences.</p>
            </div>
            <div className={classes.teamMember}>
              <img src={akshxarPic} alt="Team Member 2" style={teamImgStyle} />
              <h3>Akshxar</h3>
              <p>Akshxar is a visionary leader with a keen eye for detail and a passion for culinary excellence. With a background in hospitality management and a strong commitment to customer satisfaction, Akshxar plays a key role in ensuring the success of our restaurant. He brings a wealth of experience to the table and is dedicated to delivering exceptional service and unforgettable dining experiences to our guests.</p>
            </div>
            <div className={classes.teamMember}>
              <img src={rajpic} alt="Team Member 3" style={teamImgStyle} />
              <h3>RAJ</h3>
              <p>RAJ is a creative genius with a flair for innovation and a passion for food. With a background in culinary arts and a deep understanding of flavor profiles and food trends, RAJ brings a unique perspective to our kitchen. She is constantly experimenting with new ingredients and techniques to create dishes that delight the senses and leave a lasting impression on our guests. RAJ is a true culinary artist and an invaluable asset to our team.</p>
            </div>
          </div>
        </div>



     
      </div>
    </section>
  );
};

export default AdditionalSection;
