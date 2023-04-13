import axios from "axios";

const useAxios = () => {
  const instances = axios.create({
    baseURL: "https://api.spotify.com/v1",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  instances.interceptors.request.use(async (request) => {
    return request;
  });

  return instances;
};

export default useAxios;
