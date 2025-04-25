import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(data);
    }
    fetchData();
  }, [id]);

  return (
    <>
      <div className="container mt-5">
        <div className="row align-items-center shadow-lg p-4 rounded bg-light">
          <div className="col-md-6 text-center">
            <img
              src={product.image}
              alt={product.title}
              style={{ maxWidth: "100%", maxHeight: "400px", objectFit: "contain" }}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <p className="text-muted">{product.description}</p>
            <h4 className="text-success">${product.price}</h4>
            <p className="fw-semibold">Category: {product.category}</p>
            <button className="btn btn-danger">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};
