import React from "react";
import Home from "./Home";
import Category from "./Category";
import Search from "./Search";
import Recipe from "./Recipe";
import PageNotFound from "./PageNotFound";
import { HashRouter } from 'react-router-dom';
import { Routes, Route, } from "react-router-dom";
import Layout from "../components/layout/Layout";

function Pages() {
  return (
   
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/search/:query" element={<Search />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Layout>


  );
}

export default Pages;
