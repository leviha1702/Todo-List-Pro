import React, { Suspense } from "react";
import LoadingPage from "../pages/loading-page"; // Adjust the path as necessary

const lazyLoader = (importFunc, delay = 0) => {
  const LazyComponent = React.lazy(
    () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(importFunc()), delay);
      })
  );
  return (props) => (
    <Suspense fallback={<div>{<LoadingPage />}</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default lazyLoader;
