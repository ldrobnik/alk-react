import { useState, useEffect } from "react";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import usePhotos from "../../../../shared/hooks/usePhotos";

export default function ImageGrid() {
  const { data, isLoading } = usePhotos();
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (data) {
      setImages(data.slice(0, 300));
    }
    console.log(images);
  }, [data, isLoading]);

  return (
    <ImageList cols={3}>
      {images &&
        images.map((image) => (
          <ImageListItem key={image.url}>
            <img src={image.url} alt={image.title} loading="lazy" />
          </ImageListItem>
        ))}
    </ImageList>
  );
}
