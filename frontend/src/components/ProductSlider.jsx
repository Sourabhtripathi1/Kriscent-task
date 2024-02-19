// ProductSlider.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { add_to_cart } from "../store/cartSlice";
import { useEffect } from "react";

const ProductSlider = () => {
  const products = useSelector((state) => state.product.products);
  const user = useSelector((state) => state.userAuth.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992, // Medium devices (tablets, 768px and up)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576, // Small devices (landscape phones, 576px and up)
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const addToCart = (data) => {
    if (user.email) {
      dispatch(add_to_cart(data));
    } else {
      navigate("/login");
    }
  };

  return (
    <Slider {...settings}>
      {products.map((product) => (

        <div key={product._id} className="m-3">
          <div className="card" style={{ margin: "10px" }}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Price: ₹{product.price}</p>
              <button
                className="btn btn-primary"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
      
    </Slider>
  );
};

export default ProductSlider;
