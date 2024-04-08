import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import RecipeCard from "../components/design/RecipeCard";
import Loading from "../components/design/Loading";
import ApiError from "../components/design/ApiError";
import { useFetch } from "../components/hook/useFetch";

function Category() {
  const { id } = useParams();

  const { isLoading, apiError, reqData } = useFetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
      import.meta.env.VITE_API_KEY
    }&cuisine=${id}`,
    id
  );

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{id.toUpperCase()} - React recipe finder</title>
        <link
          rel="canonical"
          href={`https://react-recipe-finder-2022.netlify.app/category/${id}`}
        />
      </Helmet>

      {isLoading && <Loading message={`Loading ${id} foods`} />}

      {!isLoading && apiError && <ApiError />}

      {!isLoading && !apiError && (
        <section className="py-8">
          {reqData?.results.length > 0 ? (
            <div className="space-y-6">
              <h1 className="font-bold text-2xl first-letter:uppercase">
                {id} foods
              </h1>

              <div className="grid grid-cols-4 gap-4">
                {reqData.results.map((data) => (
                  <RecipeCard key={data.id} data={data} />
                ))}
              </div>
            </div>
          ) : (
            <h1 className="font-bold text-2xl">No Food found!</h1>
          )}
        </section>
      )}
    </>
  );
}

export default Category;

// data fetching ->

// const [cuisine, setCuisine] = useState([]);
// const [apiError, setApiError] = useState(false);
// const [isLoading, setLoading] = useState(false);

// const getRecipes = async (name) => {
//   setLoading(true);
//   const res = await fetch(
//     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
//       import.meta.env.VITE_API_KEY
//     }&cuisine=${name}`
//   );
//   const data = await res.json();
//   if (data.code === 402) {
//     console.log(data.message);
//     setApiError(true);
//   }
//   setCuisine(data.results);
//   setLoading(false);
// };

// useEffect(() => {
//   getRecipes(id);
// }, [id]);
