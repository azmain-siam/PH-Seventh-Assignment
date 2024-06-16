// import { useEffect, useState } from "react";
import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import OurRecipe from "./components/ourRecipe/OurRecipe";
import { useEffect } from "react";
import Recipe from "./components/Recipies/Recipe";
import WantToCook from "./components/WantToCook/WantToCook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [cook, setCook] = useState([]);
  const notify = () => toast.error("Already Exists!");
  const notifySuccess = () => toast.success("Selected to cook!");

  useEffect(() => {
    fetch("./Data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleAdd = (p) => {
    const isExist = cook.find((item) => item.recipe_id == p.recipe_id);
    if (!isExist) {
      setCook([...cook, p]);
      notifySuccess();
    } else {
      notify();
    }
  };

  return (
    <div className="w-[90%] lg:w-11/12 max-w-7xl mx-auto">
      <Header></Header>
      <ToastContainer />
      <Banner></Banner>
      <OurRecipe></OurRecipe>
      <div className="flex gap-6 lg:flex-row flex-col mb-14">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:w-[60%]">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe_id}
              recipe={recipe}
              handleAdd={handleAdd}
            ></Recipe>
          ))}
        </div>
        <WantToCook
          key={cook.recipe_id}
          setCook={setCook}
          items={cook}
        ></WantToCook>
      </div>
    </div>
  );
}

export default App;
