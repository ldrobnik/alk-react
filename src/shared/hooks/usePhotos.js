import { useQuery } from "@tanstack/react-query";
import apiCall from "../services/apiCall";

async function getPhotos() {
  const { data } = await apiCall({
    url: "/photos",
    method: "GET",
  });
  return data;
}

export default function usePhotos() {
  return useQuery(["photos"], () => getPhotos(), {
    select: (data) => data.slice(0, 900),
  });
}
