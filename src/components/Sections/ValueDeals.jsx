import { useQuery } from "@tanstack/react-query";
import useCustomAxios from "../../hooks/useCustomAxios";

const ValueDeals = () => {
  const axiosCustom = useCustomAxios();

  const { data } = useQuery({
    queryKey: [""],
  });

  return (
    <div>
      <h3 className="font-semibold text-4xl">Vlaue Deals</h3>
    </div>
  );
};

export default ValueDeals;
