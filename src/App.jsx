import Recipee from "./components/Pages/recipee/Recipe";
import Recipes from "./components/Pages/recipes";
import Navbar from "./components/navbar";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Recipes /> },
  { path: "/recipes", element: <Recipes /> },
  { path: "/recipes/id", element: <Recipes /> },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Recipes />
      <Recipee />
    </>
  );
}

export default App;
