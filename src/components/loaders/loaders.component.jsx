import React from "react";
import {LoaderBox, PageLoaderBox} from "./loaders.styles";


export const Loader = (props) => {
  return (
    <LoaderBox
      {...props}
    >
      <div className={"spinner"} />
    </LoaderBox>
  );
};

export const PageLoader = (props) => {

  return (
    <PageLoaderBox
      {...props}
    >
      <div className={"ripple"}>
        <div />
        <div />
      </div>
    </PageLoaderBox>
  )
};




