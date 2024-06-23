import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './AvailableMeals.module.css'
import CartContext from '../../Store/CartContext';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
    image: "https://images.healthshots.com/healthshots/en/uploads/2023/02/27153505/Sushi-1600x900.jpg"
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxdneCVWGXo8Ac8ZRQqjin4hl-yCja-5EnZg&usqp=CAU"
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
    image: "https://recipes.net/wp-content/uploads/2021/10/the-best-grilled-bbq-burger-recipe.jpg"
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlCUOWCWZ-M17dYfL0X2x8_E1Hl4buzdZPh5KlXYxcw&s"
  },
  {
    id: 'm5',
    name: 'Bakingo',
    description: 'Bakery, Desserts',
    price: 14.6,
    image: "https://b.zmtcdn.com/data/pictures/chains/0/18416840/05994df0e49725bd230146c320b8f7aa.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
  },
  {
    id: 'm6',
    name: 'Roms Pizza',
    description: 'Pizza, Burger, Fast Food, Shake, Beverages',
    price: 19.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vra-cmmkL9bi8bKQDNLhJtkHyAn3kb-ncu8nv8OM1g&s"
  },
  {
    id: 'm7',
    name: 'Theobroma',
    description: 'Bakery, Desserts',
    price: 20.4,
    image: "https://b.zmtcdn.com/data/pictures/chains/6/18384116/f3b7df2138b3cbdb052e92aad112a139_o2_featured_v2.jpg"
  },
  {
    id: 'm8',
    name: 'The Balgian Waffle',
    description: 'Waffle, Pancake, Ice Cream, Desserts, Beverages',
    price: 12.7,
    image: "https://b.zmtcdn.com/data/pictures/chains/3/18618283/c917709553428929e7902af37d9b8a8b.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
  }
];



const AvailableMeal = () => {
  const ctx = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const addItemHandler = (meal) => {
    const item = { ...meal, quantity };
    ctx.addItem(item);
  }

  return (
    <div>
     
     <div className={classes.headingContainer}>
        <h2 className={classes.heading}>Available Meals</h2>
        <p className={classes.subHeading}>Explore our delicious selection of meals</p>
     </div>


      <Row xs={1} md={3} className={classes.mealRow}>
        {DUMMY_MEALS.map((meal) => (

          <Col key={meal.id} className={classes.mealCol}>
            <Card style={{ width: '20rem' }} className={classes.Card}>
              <Card.Img variant="top" src={meal.image} style={{height :"15rem", width: "21rem"}} />
              <Card.Body>
                <Card.Title>{meal.name}</Card.Title>
                <Card.Title>${meal.price}</Card.Title>
                <Card.Text>{meal.description}</Card.Text>
                <label>Quantity</label>
                <input
                  className={classes.input}
                  type='number'
                  min='0'
                  max='5'
                  defaultValue='0'
                  onChange={(e) => {
                    setQuantity(parseInt(e.target.value));
                  }}
                />
                <br />
                <br />
                <Button variant="outline-danger" onClick={() => { addItemHandler(meal) }}>Add To Cart</Button>{' '}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default AvailableMeal;
