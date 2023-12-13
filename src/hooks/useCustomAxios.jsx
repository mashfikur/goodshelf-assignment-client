import axios from "axios";

const useCustomAxios = () => {
  const axiosCustom = axios.create({
    baseURL: "https://goodshelf-server.vercel.app",
  });

  return axiosCustom;
};

export default useCustomAxios;
