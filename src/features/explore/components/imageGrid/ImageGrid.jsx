import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import usePhotos from "../../../../shared/hooks/usePhotos";

import CenteredSpinner from "../../../../shared/components/spinner/CenteredSpinner";

export default function ImageGrid() {
  const { data, isLoading } = usePhotos(900);

  return (
    <>
      {isLoading ? (
        <CenteredSpinner />
      ) : (
        <ImageList
          gap={8}
          sx={{
            gridTemplateColumns:
              "repeat(auto-fill, minmax(200px, 1fr)) !important",
          }}
        >
          {data &&
            data.map((image) => (
              <ImageListItem key={image.url}>
                <img src={image.url} alt={image.title} loading="lazy" />
              </ImageListItem>
            ))}
        </ImageList>
      )}
    </>
  );
}
