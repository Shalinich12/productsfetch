import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Products = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  //  const { dispatch } = useContext(CartContext);
  useEffect(() => {
    async function fetchdata() {
      let { data } = await axios.get("https://fakestoreapi.com/products");
      setData(data);
    }
    fetchdata();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = data.slice(startIndex, startIndex + itemsPerPage);

  const handleAddToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    const exists = cart.find((i) => i.id === item.id);
    if (!exists) {
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
      
    } else {
      alert("Item already in Cart");
    }
  };
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="container my-4">
        <div className="row g-2">
          {selectedItems.map((item) => (
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top"
                  style={{ height: "300px", objectFit: "contain" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    {item.title.length > 30
                      ? item.title.slice(0, 30) + "..."
                      : item.title}
                  </h5>
                  <p className="card-text fw-bold mb-2">${item.price}</p>
                  <div className="mt-auto">
                  <button
                    className="btn btn-danger me-2 mb-2"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                    <Link to={`/product/${item.id}`}>
                      <button className="btn btn-outline-primary mb-2">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="d-flex justify-content-center mt-4">
          <button
            className="btn btn-secondary me-2"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="align-self-center">Page {currentPage} of {totalPages}</span>
          <button
            className="btn btn-secondary ms-2"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
