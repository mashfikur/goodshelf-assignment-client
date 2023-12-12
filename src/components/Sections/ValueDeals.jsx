import { useQuery } from "@tanstack/react-query";
import useCustomAxios from "../../hooks/useCustomAxios";
import ProductCard from "../ProductCard/ProductCard";

const ValueDeals = () => {
  const axiosCustom = useCustomAxios();

  const { data, isPending } = useQuery({
    queryKey: ["value_deals"],
    queryFn: async () => {
      const res = await axiosCustom.get("/api/v1/products/section/value_deals");

      return res.data;
    },
  });

  return (
    <div>
      <h3 className="font-semibold text-4xl">Vlaue Deals</h3>

      <div>
        {isPending ? (
          "loading"
        ) : (
          <div>
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

export default ValueDeals;
