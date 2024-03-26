import Recipee from "./components/Pages/recipee/Recipe";
import Recipes from "./components/Pages/recipes/index";
import Navbar from "./components/navbar";
import "./index.css";
import AddRecipe from "./components/Pages/add-recipe";
import NewRecipe from "./components/Pages/new-recipe/NewRecipe";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Recipes /> },
  { path: "/recipes", element: <Recipee /> },
  { path: "/recipes/:id", element: <Recipes /> },
  { path: "/add-recipe", element: <AddRecipe /> },
  { path: "/new-recipe", element: <NewRecipe /> },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
