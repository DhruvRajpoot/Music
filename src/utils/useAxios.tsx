import axios from "axios";

const useAxios = () => {
  const instances = axios.create({
    baseURL: "",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  instances.interceptors.request.use(async (request) => {
    return request;
  });
};

export default useAxios;
