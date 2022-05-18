import React, { useContext, useEffect, useState } from "react";

import { imagePathPrefix } from "../../assets/js/utils";
import { CustomCard } from "../../components/moviesSlider/styles";
import { CollectionContext } from "../../Providers/CollectionProvider";

const Watched = () => {
  const [collection, setcCollection] = useState(null);
  const { getCollection, removeMovieFromCollection } = useContext(
    CollectionContext
  );

  const collectionUpdate = (movie) => {
    setcCollection((currentCollection) =>
      currentCollection.filter(({ movieId }) => movieId !== movie.movieId)
    );
  };

  useEffect(() => {
    getCollection()
      .then((movies) => setcCollection(movies))
      .catch((err) => err);
  }, []);

  return collection ? (
    collection.map((movie) => (
      <CustomCard key={movie.movieId}>
        <img
          src={imagePathPrefix + movie.poster_path}
          alt={movie.title}
          width="100%"
        />

        <button
          onClick={() => {
            removeMovieFromCollection(movie);
            collectionUpdate(movie);
          }}
        >
          remover
        </button>
      </CustomCard>
    ))
  ) : (
    <h1>Olá</h1>
  );
};

export default Watched;
