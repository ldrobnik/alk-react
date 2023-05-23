import usePhotos from "../../../../shared/hooks/usePhotos";
import CenteredSpinner from "../../../../shared/components/spinner/CenteredSpinner";
import Post from "../post/Post";

import { ListWrapper } from "./PostList.styles";
import { capitalizeFirstLetter } from "../../../../utils";

export default function PostList() {
  const { data, isLoading } = usePhotos();

  return (
    <>
      {isLoading ? (
        <CenteredSpinner />
      ) : (
        <ListWrapper>
          {data &&
            data.map((image) => (
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
