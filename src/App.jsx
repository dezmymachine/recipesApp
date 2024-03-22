import Recipee from "./components/Pages/recipee/Recipe";
import Recipes from "./components/Pages/recipes/index";
import Navbar from "./components/navbar";
import "./index.css";
import AddRecipe from "./components/Pages/add-recipe";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Recipes /> },
  { path: "/recipes", element: <Recipee /> },
  { path: "/recipes/id", element: <Recipes /> },
  { path: "/add-recipe", element: <AddRecipe /> },
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
