import { Card, Button } from "react-bootstrap";
import { CartState } from "../../context/Context";
import "./SingleProduct.css"

const SingleProduct = ({ prod }) => {
  /**
   * Single Product Component that holds all the UI elements of a Single Product Card.
   */
  const {
    state: { cart },
    dispatch,
  } = CartState(); // Destructuring the required store variables from Context

  return (
    <div className="products">
      <Card >
        <Card.Img variant="top" src={prod.imageURL} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price}</span>
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
            >
              Add to Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
