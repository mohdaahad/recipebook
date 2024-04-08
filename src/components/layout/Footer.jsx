import React from "react";

function Footer() {
  return (
    <footer className="bg-gray mt-auto w-full h-full py-8 ">
      <div className="container flex items-center justify-between gap-8">
        <p>©{new Date().getFullYear()} Recipe Book - All rights reserved.</p>
        <p>
          Made by{" "}
          <a
            target="_blank"
            className="font-bold"
            href="https://sujoykh.vercel.app"
          >
           Mohd Aahad
          </a>
          , build with <span className="font-bold">React.js,</span>{" "}
          <span className="font-bold">Tailwind CSS</span>,{" "}
          <a
            href="https://spoonacular.com/food-api/docs"
            target="_blank"
            className="font-bold"
          >
            Spoonacular API
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
