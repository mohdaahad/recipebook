import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import RecipeCard from "../design/RecipeCard";
import Loading from "../design/Loading";
import ApiError from "../design/ApiError";

function Random() {
  const [popular, setPopular] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const getPopular = async (url) => {
    setLoading(true);

    const cachedData = localStorage.getItem("popular");

    if (cachedData) {
      setPopular(JSON.parse(cachedData));
    } else {
      const res = await fetch(url);
      const data = await res.json();

      if (data.code === 402) {
        console.log(data.message);
        setApiError(true);
      }

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
    setLoading(false);
  };

  useEffect(() => {
    getPopular(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_API_KEY
      }&number=10`
    );
  }, []);

  return (
    <>
      {isLoading && <Loading message={`Loading recipes`} />}

      {!isLoading && apiError && <ApiError />}

      {!isLoading && !apiError && (
        <section className="py-8">
          <h1 className="font-bold text-2xl mb-6">Popular Recipes</h1>

          <Splide
            options={{
              arrows: false,
              perPage: 4,
              gap: "1rem",
              pagination: false,
              drag: "free",
            }}
          >
            {popular.map((data) => (
              <SplideSlide key={data.id}>
                <RecipeCard data={data} />
              </SplideSlide>
            ))}
          </Splide>
        </section>
      )}
    </>
  );
}

export default Random;

// UseFetch ->
// const { isLoading, apiError, reqData } = useFetch(
//   `https://api.spoonacular.com/recipes/random?apiKey=${
//     import.meta.env.VITE_API_KEY
//   }&number=10&tags=vegetarian`
// );
