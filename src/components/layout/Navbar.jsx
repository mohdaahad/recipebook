import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const category = [
  // {
  //   name: "Home",
  //   url: "/",
  // },
  {
    name: "Indian",
    url: "/category/indian",
  },
  {
    name: "Italian",
    url: "/category/italian",
  },
  {
    name: "American",
    url: "/category/american",
  },
  {
    name: "Thai",
    url: "/category/thai",
  },

  {
    name: "Spanish",
    url: "/category/spanish",
  },
  {
    name: "Mexican",
    url: "/category/mexican",
  },
];

function Navbar() {
  return (
    <>
      <header className="bg-gray pt-6">
        <section className="container">
          <div className="flex items-center justify-between gap-4 py-4">
            <Link to="/">
              <h1 className="text-3xl font-bold cursor-pointer">Recipe Book</h1>
            </Link>

            <SearchBar />
          </div>
          <nav className="flex items-center gap-8">
            {category.map((data) => (
              <NavLink key={data.name} to={data.url}>
                <p className="py-4 border-b-2 border-b-transparent hover:border-b-black cursor-pointer duration-200">
                  {data.name}
                </p>
              </NavLink>
            ))}
          </nav>
        </section>
      </header>
    </>
  );
}

export default Navbar;
