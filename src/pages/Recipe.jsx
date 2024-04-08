import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import ApiError from "../components/design/ApiError";
import { useFetch } from "../components/hook/useFetch";
import LoadingContent from "../components/design/LoadingContent";

const nav = [
  {
    name: "Instructions",
    tab: "instructions",
  },
  {
    name: "Ingredientes",
    tab: "ingredients",
  },
];
function Recipe() {
  const { id } = useParams();

  const [activeTab, setActiveTab] = useState("instructions");

  const { isLoading, apiError, reqData } = useFetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
      import.meta.env.VITE_API_KEY
    }`
  );

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        {isLoading ? (
          <title>Loading... </title>
        ) : (
          <title>
            {!apiError ? reqData?.title : "Api Error - try again later"}
          </title>
        )}
        <link
          rel="canonical"
          href={`https://react-recipe-finder-2022.netlify.app/recipe/${id}`}
        />
      </Helmet>

      {isLoading && <LoadingContent message="Loading" />}

      {!isLoading && apiError && <ApiError />}

      {!isLoading && !apiError && (
        <section className="py-16 h-full min-h-screen">
          <div className="space-y-4 mb-8">
            <h1 className="text-3xl font-bold">{reqData?.title}</h1>
            <p
              className="max-w-5xl"
              dangerouslySetInnerHTML={{ __html: reqData?.summary }}
            />
          </div>

          <div className="flex items-start gap-8 justify-between ">
            <div className="flex-1 space-y-4">
              <div className="flex gap-8">
                {nav.map((data) => (
                  <p
                    key={data.name}
                    onClick={() => setActiveTab(data.tab)}
                    className={`${
                      activeTab === data.tab
                        ? "border-b-2 border-b-black-500"
                        : ""
                    } cursor-pointer pb-4 font-bold`}
                  >
                    {data.name}
                  </p>
                ))}
              </div>

              <div className="max-w-lg flex gap-8">
                <p
                  className={`${
                    activeTab === "instructions"
                      ? "opacity-100 pointer-events-auto translate-x-0"
                      : "opacity-0 pointer-events-none absolute w-full h-fit inset-0 translate-x-4"
                  } duration-300 `}
                  dangerouslySetInnerHTML={{ __html: reqData?.instructions }}
                />

                {reqData?.extendedIngredients && (
                  <div
                    className={`${
                      activeTab === "ingredients"
                        ? "opacity-100 pointer-events-auto translate-x-0"
                        : "opacity-0 pointer-events-none absolute w-full h-fit inset-0 translate-x-4"
                    } duration-300  space-y-1`}
                  >
                    {reqData?.extendedIngredients.map((data) => (
                      <p key={data.id}>{data.original}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1">
              <img
                className="rounded-xl"
                src={reqData?.image}
                alt={reqData?.title}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Recipe;

// useEffect data fetching -

// const [details, setDetails] = useState({});
// const [apiError, setApiError] = useState(false);
// const [isLoading, setLoading] = useState(false);

// const getDetails = async (id) => {
//   setLoading(true);
//   const res = await fetch(
//     `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
//       import.meta.env.VITE_API_KEY
//     }`
//   );

//   const data = await res.json();
//   if (data.code === 402) {
//     setApiError(true);
//   }
//   setDetails(data);
//   setLoading(false);
// };

// useEffect(() => {
//   getDetails(id);
// }, [id]);
