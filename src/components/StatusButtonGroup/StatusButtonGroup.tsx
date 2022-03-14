import { Button, Grid } from "@mui/material";
import { useHistory } from "react-router-dom";

const StatusButtonGroup = () => {
  const history = useHistory();

  return (
    <Grid container item xs={12} justifyContent={"center"} spacing={1} p={1}>
      <Grid item xs={12} sm={6} md={3}>
        <Button
          variant="outlined"
          sx={{ width: "100%", height: "100%" }}
          onClick={() => {
            history.push("/status");
          }}
        >
          Kingdom Status
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Button
          variant="outlined"
          sx={{ width: "100%", height: "100%" }}
          onClick={() => {
            history.push("/constructionStatus");
          }}
        >
          Construction Status
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Button
          variant="outlined"
          sx={{ width: "100%", height: "100%" }}
          onClick={() => {
            history.push("/militaryStatus");
          }}
        >
          Military Status
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Button
          variant="outlined"
          sx={{ width: "100%", height: "100%" }}
          onClick={() => {
            history.push("/mobilizationStatus");
          }}
        >
          Mobilizing Status
        </Button>
      </Grid>
    </Grid>
  );
};

export default StatusButtonGroup;
