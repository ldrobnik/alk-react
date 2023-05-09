import { useEffect } from "react";
import Stack from "@mui/joy/Stack";

import usePhotos from "../../../../shared/hooks/usePhotos";

import Post from "../post/Post";

export default function PostList() {
  const { data, isLoading } = usePhotos();

  useEffect(() => {
    console.log(data, isLoading);
  }, [data, isLoading]);

  return (
    <Stack>
      <Post />
      <Post />
      <Post />
    </Stack>
  );
}
