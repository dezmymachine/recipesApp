import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import unvoid from "../../../assets/img/unvoid.svg";

const getRecipe = (...args) => {
  console.log(args);
  const url = new URL(args[0]);
  url.searchParams.append("apiKey", "7f9fdaadea9344299e1f4d0f4b731589");
  //fetch and return recipe
  return fetch(url).then((response) => response.json());
};

const Recipee = () => {
  const baseUrl = import.meta.env.VITE_RECIPE_APP_URL;
  const { id } = useParams();
  const { data, isLoading } = useSWR(
    // "https://api.spoonacular.com/recipes/{id}/information"
    `${baseUrl}/recipes/{id}`,
    getRecipe
  );
  console.log(data, isLoading);

  return (
    <>
      {isLoading ? (
        <img src={unvoid} />
      ) : (
        <Container>
          <h1>{data.title}</h1>
        </Container>
      )}
    </>
  );
};

export default Recipee;
