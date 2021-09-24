import React from "react";
import { PhotoCard } from "../PhotoCard";
import { useQuery, gql } from "@apollo/client";

const witPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(witPhotos, {
    variables: { categoryId },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!</p>;
  return (
    <ul>
      {data.photos.map((photo) => (
        <li key="{photo.id}">
          <PhotoCard id={photo.id} {...PhotoCard} />
        </li>
      ))}
    </ul>
  );
};

export { ListOfPhotoCards };
