import { Button, Grid, TextField } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const SectorNavigator = () => {
  return (
    <Grid container spacing={1} justifyContent={"center"}>
      <Grid item xs={2}>
        <Button
          size="small"
          variant="outlined"
          sx={{ width: "100%", height: "100%" }}
        >
          <NavigateBeforeIcon />
        </Button>
      </Grid>
      <Grid container item spacing={1} xs={6}>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Galaxy"
            variant="outlined"
            value={"1"}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Sector"
            variant="outlined"
            value={"18"}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" sx={{ width: "100%", height: "100%" }}>
            Change Sector
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Button
          size="small"
          variant="outlined"
          sx={{ width: "100%", height: "100%" }}
        >
          <NavigateNextIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default SectorNavigator;
