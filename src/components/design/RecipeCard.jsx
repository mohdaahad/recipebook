import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ data, className = "w-full h-[330px]" }) {
  return (
    <Link
      to={`/recipe/${data.id}`}
      className={`bg-black-500 flex items-end justify-start 
               p-6 overflow-hidden rounded-2xl ${className} `}
    >
      <img
        className="absolute w-full h-full inset-0 object-cover 
        opacity-50 hover:opacity-70 duration-500 hover:scale-110"
        src={data.image}
        alt={data.title}
      />
      <p className="font-bold text-base text-white">{data.title}</p>
    </Link>
  );
}

export default RecipeCard;
