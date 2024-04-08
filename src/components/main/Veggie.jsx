import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import RecipeCard from "../design/RecipeCard";
import { useFetch } from "../hook/useFetch";
import Loading from "../design/Loading";

function Veggie() {
  const [reqData, setReqData] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const getVeggies = async (url) => {
    setLoading(true);

    const cachedData = localStorage.getItem("veggies");

    if (cachedData) {
      setReqData(JSON.parse(cachedData));
    } else {
      const res = await fetch(url);
      const data = await res.json();

      if (data.code === 402) {
        console.log(data.message);
        setApiError(true);
      }

      localStorage.setItem("veggies", JSON.stringify(data.recipes));
      setReqData(data.recipes);
    }

    setLoading(false);
  };

  useEffect(() => {
    getVeggies(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_API_KEY
      }&number=10&tags=vegetarian`
    );
  }, []);

  return (
    <>
      {isLoading && <Loading message={`Loading recipes`} />}

      {!isLoading && apiError && ""}

      {!isLoading && !apiError && (
        <section className="pt-8 pb-16">
          <h1 className="font-bold text-2xl mb-6">Vegetarian Itmes</h1>

          <Splide
            options={{
              arrows: false,
              perPage: 4,
              gap: "1rem",
              pagination: false,
              drag: "free",
            }}
          >
            {reqData.map((data) => (
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

export default Veggie;

// UseFetch ->
// const { isLoading, apiError, reqData } = useFetch(
//   `https://api.spoonacular.com/recipes/random?apiKey=${
//     import.meta.env.VITE_API_KEY
//   }&number=10&tags=vegetarian`
// );
