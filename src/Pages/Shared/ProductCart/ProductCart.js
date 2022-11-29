import React from "react";
import { Button, Card } from "react-bootstrap";
import "./ProductCart.css";

const ProductCart = ({ product }) => {
  const { image, model, keyFeature } = product;
  return (
    <div className="col-md-4">
      <Card className="cardWrap">
        <Card.Img className="img-fluid" variant="top" src={image} />
        <Card.Body className="cardText">
          <Card.Title>{model}</Card.Title>
          <Card.Text>{keyFeature}</Card.Text>
          <div className="cardButton">
            <Button variant="primary">Add to Cart</Button>
            <i className="fa-solid fa-heart" />{" "}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCart;
