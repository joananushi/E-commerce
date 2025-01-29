import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeItem } from "../redux/slices/cartSlice";
import "../styles/global.scss";
import { useState } from "react";
import { Offcanvas, Button, ListGroup } from "react-bootstrap";

interface CartItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: string;
}

const CartProducts: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const groupedItems = cartItems.reduce<Record<string, { item: CartItem; count: number }>>(
    (acc, item) => {
      if (acc[item.id]) {
        acc[item.id].count += 1;
      } else {
        acc[item.id] = { item, count: 1 };
      }
      return acc;
    },
    {}
  );

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeItem(id));
  };

  const calculateTotal = () => {
    return Object.values(groupedItems).reduce((total, { item, count }) => {
      return total + parseFloat(item.price) * count;
    }, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <Button variant="primary" className="cart-button" onClick={() => setIsCartOpen(true)}>
        🛒 Cart ({Object.keys(groupedItems).length})
      </Button>

      <Offcanvas show={isCartOpen} onHide={() => setIsCartOpen(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {Object.keys(groupedItems).length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ListGroup>
                {Object.values(groupedItems).map(({ item, count }) => (
                  <ListGroup.Item key={item.id} className="d-flex align-items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-item-image me-3"
                      style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }}
                    />
                    <div className="flex-grow-1">
                      <h5 className="mb-1">{item.title}</h5>
                      <p className="mb-1 text-muted">{item.description}</p>
                      <span className="fw-bold">${item.price}</span>
                      <span className="ms-2 text-secondary">(x{count})</span>
                    </div>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <div className="mt-4 text-end">
                <h5>Total: ${calculateTotal()}</h5>
                <Button variant="success" className="w-100 mt-3">
                  Proceed to Payment
                </Button>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CartProducts;
