import React from "react";
import { Button, Card } from "react-bootstrap";
import "./ProductCart.css";

const ProductCart = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Card className="cardWrap">
            <Card.Img
              className="img-fluid"
              variant="top"
              src="https://live.staticflickr.com/65535/52522584794_4a9898a992_o.jpg"
            />
            <Card.Body className="cardText">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="cardButton">
                <Button variant="primary">Add to Cart</Button>
                <i className="fa-solid fa-heart" />{" "}
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
