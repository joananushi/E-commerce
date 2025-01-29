import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProductCard from "../components/Product";
import LandingPage from "../components/LandingPage";

const Home = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const products = [
    {
      id: "1",
      image: "https://static.vecteezy.com/system/resources/thumbnails/040/890/255/small_2x/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg",
      title: "Product 1",
      description: "Description of Product 1",
      price: "10.00",
    },
    {
      id: "2",
      image: "https://static.vecteezy.com/system/resources/thumbnails/040/890/255/small_2x/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg",
      title: "Product 2",
      description: "Description of Product 2",
      price: "20.00",
    },
    {
      id: "3",
      image: "https://static.vecteezy.com/system/resources/thumbnails/040/890/255/small_2x/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg",
      title: "Product 3",
      description: "Description of Product 3",
      price: "30.00",
    },
    {
      id: "4",
      image: "https://static.vecteezy.com/system/resources/thumbnails/040/890/255/small_2x/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg",
      title: "Product 3",
      description: "Description of Product 3",
      price: "30.00",
    },
    {
      id: "5",
      image: "https://static.vecteezy.com/system/resources/thumbnails/040/890/255/small_2x/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg",
      title: "Product 3",
      description: "Description of Product 3",
      price: "30.00",
    },
    {
      id: "6",
      image: "https://static.vecteezy.com/system/resources/thumbnails/040/890/255/small_2x/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg",
      title: "Product 3",
      description: "Description of Product 3",
      price: "30.00",
    },
  ];

  const handleAddToCart = (product: { id: string; image: string; title: string; description: string; price: string }) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <NavBar></NavBar>
      <LandingPage></LandingPage>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            id={product.id}

            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            onAddToCart={() => handleAddToCart(product)} />
        ))}
      </div>
    </div>
  );
};

export default Home;
