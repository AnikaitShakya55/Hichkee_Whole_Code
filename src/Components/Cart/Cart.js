import Modal from '../../UI/Modal';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import CartContext from '../../Store/CartContext';
import classes from '../Cart/Cart.module.css';

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const itemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const handleOrder = () => {
    setOrderPlaced(true);
  };


  return (
    <>
      <Modal cartCloseHandler={props.cartCloseHandler}>

        { !orderPlaced && (
          <div className={classes.scrollContainer}>
            <ul className={classes.scrollable}>
              {ctx.items.map((meal) => (
                <li key={meal.id} className={classes.cartItem}>
                  <div className={classes.cardImageContainer}>
                    <img src={meal.image} alt="Card" className={classes.cardImg} />
                  </div>
                  <div className={classes.cardContent}>
                    <h2 className={classes.cardTitle}>{meal.name}</h2>
                    <p className={classes.cardParagraph}>${meal.price}</p>
                    <p className={classes.cardParagraph}>Quantity: {meal.quantity}</p>
                    <div className={classes.cardButtons}>
                      <Button variant="danger" onClick={() => itemRemoveHandler(meal.id)}>
                        Remove
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        { !orderPlaced && (
          <div className={classes.total}>
            <h2 className={classes.totalAmount}>Total amount</h2>
            <span className={classes.amount}>${ctx.totalPrice.toFixed(2)}</span>
          </div>
        )}

        { !orderPlaced && (
          <div className={classes.order}>
            <Button variant="danger" onClick={props.cartCloseHandler}>
              Close
            </Button>{' '}
            <Button variant="success" onClick={handleOrder}>
              Order
            </Button>{' '}
          </div>
        )}

        { orderPlaced && (
          <>
            <p>Order is placed!</p>
            <Button variant="success" onClick={() => {props.cartCloseHandler(); setOrderPlaced(false)}}>
              Close
            </Button>
          </>
        )}

      </Modal>
   
    </>
  );
};

export default Cart;
