import { CartState } from "../../context/Context";
import Filters from "../filters/Filters";
import SingleProduct from "../singleProduct/SingleProduct";
import './Home.css'

const Home = () => {
  /**
   * Home Component that holds all the UI elements of the Home page.
  */
  const {
    state: { products },
    productState: { byColor, byGender, byPrice, byType, searchQuery },
  } = CartState(); // Destructuring the required store variables from Context

  const transformProducts = () => {
    /**
     * Method that sorts and filters the products based on the inputs from Filter and Search bar
    */
    let sortedProducts = products;

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (byColor) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.color === byColor
      );
    }
    if (byGender) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.gender === byGender
      );
    }
    if (byPrice) {
      sortedProducts = sortedProducts.filter((prod) =>
        (byPrice === "0-₹250" && parseInt(prod.price) > 0 && parseInt(prod.price) <= 250) ||
        (byPrice === "₹251-₹450" && parseInt(prod.price) > 251 && parseInt(prod.price) < 450) ||
        (byPrice === "Above ₹450" && parseInt(prod.price) > 450)
      );
    }
    if (byType) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.type === byType
      );
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod) =>
          <SingleProduct prod={prod} key={prod.id} />
        )}
      </div>
    </div>
  );
};

export default Home;
