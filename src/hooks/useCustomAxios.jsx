import axios from "axios";


const useCustomAxios = () => {
  const axiosCustom = axios.create({
    baseURL: "http://localhost:5000",
  });

  return axiosCustom;
};

export default useCustomAxios;
