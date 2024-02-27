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

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [keyword, setKeyword] = useState("");
  const getRecipes = () => {
    //prepare URL
    const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
    url.searchParams.append("apiKey", "7f9fdaadea9344299e1f4d0f4b731589");
    url.searchParams.append("query", keyword);
    //fECTH RECIPES from AI
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.results);
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
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
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Grid key={recipe.id} item xs={4} mt={2}>
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
                    <Typography
                      style={{ color: "#436957" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {recipe.title}
                    </Typography>
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
