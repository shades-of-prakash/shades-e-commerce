import { Suspense } from "react";

const LazyLoad = (Component, Fallback) => (props) =>
  (
    <Suspense fallback={Fallback}>
      <Component {...props} />
    </Suspense>
  );

export default LazyLoad;
