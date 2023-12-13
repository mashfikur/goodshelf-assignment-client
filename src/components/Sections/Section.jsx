import { useQuery } from "@tanstack/react-query";
import useCustomAxios from "../../hooks/useCustomAxios";
import ProductCard from "../ProductCard/ProductCard";
import PropTypes from "prop-types";
import { RotatingLines } from "react-loader-spinner";

const Section = ({ title }) => {
  const axiosCustom = useCustomAxios();

  const section = title.toLowerCase().split(" ").join("_");
  console.log();

  const { data, isPending } = useQuery({
    queryKey: [title],
    queryFn: async () => {
      const res = await axiosCustom.get(`/api/v1/products/section/${section}`);

      return res.data;
    },
  });

  return (
    <div className="pb-16 px-4 xl:px-0">
      <h3 className="font-semibold text-4xl">{title}</h3>

      <div className="mt-8">
        {isPending ? (
          <div>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="64"
              visible={true}
            />
          </div>
        ) : (
          <div className="lg:flex grid grid-cols-2 md:grid-cols-3 justify-center lg:justify-normal gap-8 xl:gap-16 ">
            {data &&
              data.map((product, idx) => (
                <ProductCard key={idx} product={product}></ProductCard>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
