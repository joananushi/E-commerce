import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../redux/slices/counterSlice"; // Update based on your Redux slice
import { RootState } from "../redux/store";
import { Card, Button } from "react-bootstrap";
import "../styles/global.scss"; // Import custom styles for the card

interface ProductProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductProps> = ({ id, image, title, description, price, onAddToCart }) => {
  const dispatch = useDispatch();
  const likes = useSelector((state: RootState) => state.productCounter?.[id] || 0); // Safely access likes

  const handleLike = () => {
    dispatch(toggleLike(id)); // Toggle like for the product
  };

  return (
    <Card className="product-card mb-4 ">
      <Card.Img variant="top" src={image} alt={title} className="product-image" />
      <Card.Body>
        <div className="product-header d-flex justify-content-between align-items-center">
          <div>
            <Card.Title className="product-title mb-0 fw-bold text-dark">{title}</Card.Title>
            <Card.Text className="product-price text-success fw-bold mt-1">${price}</Card.Text>
          </div>
          <Button variant="outline-danger" className="like-button" onClick={handleLike}>
            ❤️ {likes}
          </Button>
        </div>
        <Card.Text className="product-description text-muted mt-3">{description}</Card.Text>
        <div className="d-flex justify-content-center mt-4">
          <Button variant="primary" onClick={onAddToCart} className="add-to-cart-button w-75">
            Add to Basket
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;