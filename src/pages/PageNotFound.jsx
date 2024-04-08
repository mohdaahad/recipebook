import React from "react";
import { Helmet } from "react-helmet";

function PageNotFound() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 - Page not found</title>
      </Helmet>

      <section className=" w-full h-[60vh] flex items-center justify-center">
        <div className="space-y-3 text-center">
          <h1 className="font-bold text-5xl">404</h1>
          <h2 className="text-3xl">Page not found!</h2>
        </div>
      </section>
    </>
  );
}

export default PageNotFound;
