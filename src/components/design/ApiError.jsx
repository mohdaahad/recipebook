import React from "react";

function ApiError() {
  return (
    <section className="py-8">
      <div className="translate-y-1/2 max-w-md space-y-4">
        <h1 className="text-3xl font-bold"> Please try again tomorrow. </h1>
        <p className="text-2xl">
          Daily points limit of 150 has been reached as you are using free
          version of Spoonacular API.
        </p>
      </div>
    </section>
  );
}

export default ApiError;
