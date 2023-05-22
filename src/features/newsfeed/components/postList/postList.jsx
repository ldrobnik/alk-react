import { useState, useEffect } from "react";

import usePhotos from "../../../../shared/hooks/usePhotos";
import CenteredSpinner from "../../../../shared/components/spinner/CenteredSpinner";
import Post from "../post/Post";

import { ListWrapper } from "./PostList.styles";
import { capitalizeFirstLetter } from "../../../../constants";

export default function PostList() {
  const { data, isLoading } = usePhotos();
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (data) {
      // Use a portion of the fetched data.
      setImages(data.slice(0, 1000));
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <CenteredSpinner />
      ) : (
        <ListWrapper>
          {images &&
            images.map((image) => (
              <Post
                key={image.url}
                url={image.url}
                title={capitalizeFirstLetter(image.title)}
              />
            ))}
        </ListWrapper>
      )}
    </>
  );
}
