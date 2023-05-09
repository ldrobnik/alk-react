import { useEffect } from "react";
import Stack from "@mui/joy/Stack";

import usePhotos from "../../../../shared/hooks/usePhotos";

export default function PostList() {
  const { data, isLoading } = usePhotos();

  useEffect(() => {
    console.log(data, isLoading);
  }, [data, isLoading]);

  return (
    <Stack>
      <div>Post 1</div>
      <div>Post 2</div>
      <div>Post 3</div>
    </Stack>
  );
}
