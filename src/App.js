import React, { Fragment } from "react";
import { ListOfCategories } from "./components/ListOfCategory/index";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfPhotoCards } from "./components/ListOfPhotoCard/index";
import { Logo } from "./components/Logo/index";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
import { useToggleLikeMutation } from "./hooks/useToggleLikeMutation";
export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");
  console.log(detailId);
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Fragment>
          <ListOfCategories />
          <ListOfPhotoCards />
        </Fragment>
      )}
    </div>
  );
};
export default App;
