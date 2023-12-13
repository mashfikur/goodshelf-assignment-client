import PropTypes from "prop-types";
import { MdOutlineAdd } from "react-icons/md";

const ProductCard = ({ product }) => {
  return (
    <div className="">
      <div>
        <img
          className="w-60 rounded-xl"
          src={product.image}
          alt="product_image"
        />
      </div>

      <div className="mt-6  ">
        <div className="mb-8 h-20 lg:h-16">
          <h3 className="text-xl lg:w-[80%] "> {product.product_name} </h3>
          <p className="text-sm text-gray-500"> {product.one_liner} </p>
        </div>
        <div className="flex items-center  justify-between">
          <h3 className="lg:text-xl text-lg">
            {" "}
            ₹ {product.price} /{" "}
            <span className="text-gray-500">{product.quantity}</span>{" "}
          </h3>
          <div className="lg:text-xl text-sm text-[#F74E6D] border-[#F74E6D] border-2 px-1 py-1 rounded-lg">
            {" "}
            <MdOutlineAdd />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
