import {
  CardMedia,
  Card,
  Container,
  Grid,
  TextField,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useEffect, useState } from "react";
import unvoid from "../../../assets/img/unvoid.svg";
import loadingicon from "../../../assets/img/loading.svg";
import { Link } from "react-router-dom";

const Recipes = () => {
  const baseUrl = import.meta.env.VITE_RECIPE_APP_URL;
  const [recipes, setRecipes] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const getRecipes = () => {
    setLoading(true);
    //prepare URL
    // const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
    // const url = new URL("http://localhost:4000/recipes");
    const url = `${baseUrl}/recipes`;

    // url.searchParams.append("apiKey", "7f9fdaadea9344299e1f4d0f4b731589");
    // url.searchParams.append("query", keyword);
    //fECTH RECIPES from AI
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        // setRecipes(data.results);
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
    //update recipes state
  };
  useEffect(getRecipes, [keyword]);
  return (
    <Container sx={{ my: "1rem" }} maxWidth="lg">
      <TextField
        id="outlined-basic"
        label="Enter a keyword to search recipes and hit enter"
        variant="outlined"
        fullWidth
        onKeyDown={(event) =>
          event.key === "Enter" && setKeyword(event.target.value)
        }
        // value={keyword}
      />

      <Grid container spacing={3}>
        {loading ? (
          <img src={loadingicon} className="loading-icon" />
        ) : recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Grid key={recipe._id} item xs={4} mt={2}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{ background: "#e6ddcc", height: "100%" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={recipe.image}
                    alt={recipe.title}
                  />
                  <CardContent>
                    <Link to={`/recipes/${recipe._id}`}>
                      <Typography
                        style={{ color: "#436957" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {recipe.title}
                      </Typography>
                    </Link>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : (
          <img src={unvoid} className="unvoid" />
        )}
      </Grid>
    </Container>
  );
};
export default Recipes;
