import { CardMedia, Card, Container, Grid, TextField, CardContent, Typography } from "@mui/material";


const Recipes = () => {
    return (
        <Container sx={{my: '1rem'}} maxWidth="lg">
            <TextField id="outlined-basic"
             label="Enter a keyword to search recipes and hit enter"
              variant="outlined" fullWidth />

              <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Card>
                        <CardMedia 
                        sx={{height: 200}}
                        image="https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </Card>
                    <CardContent>
                        <Typography variant="h5">Recipe Name</Typography>
                    </CardContent>
                </Grid>
              </Grid>
        </Container>
    );
}
 
export default Recipes;