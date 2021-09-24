import React from "react";
import { ListOfCategories } from "./components/ListOfCategory/index";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfPhotoCards } from "./components/ListOfPhotoCard/index";
import { Logo } from "./components/Logo/index";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  );
}

export default App;
